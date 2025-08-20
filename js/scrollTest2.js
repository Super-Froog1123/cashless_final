function createStepObserver({
  stepSelector = ".text-box",
  onStepEnter,
  stickyStepIndex = null,
  stickyTargetSelector = null,
  throttleDelay = 100,
}) {
  let lastScrollTime = 0;
  let isTransitioning = false;
  let currentStep = 0;
  let lastProcessedStep = -1;
  let pendingStep = null;
  let pendingDirection = null;

  const steps = document.querySelectorAll(stepSelector);

  function getCurrentVisibleStep() {
    for (let i = 0; i < steps.length; i++) {
      const rect = steps[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= window.innerHeight * 0.5) {
        return +steps[i].getAttribute("data-index");
      }
    }
    return currentStep;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = +entry.target.getAttribute("data-index");
          if (index === lastProcessedStep) return;

          const direction = index > lastProcessedStep ? "forward" : "backward";

          if (isTransitioning) {
            pendingStep = index;
            pendingDirection = direction;
          } else {
            isTransitioning = true;
            currentStep = index;
            lastProcessedStep = index;

            onStepEnter(index, direction);

            setTimeout(() => {
              isTransitioning = false;
              if (pendingStep !== null) {
                const next = pendingStep;
                const dir = pendingDirection;
                pendingStep = null;
                pendingDirection = null;

                if (getCurrentVisibleStep() === next) {
                  lastProcessedStep = next;
                  onStepEnter(next, dir);
                }
              }
            }, 1000); // 动画时间后解锁
          }
        }
      });
    },
    {
      threshold: [0.2],
      rootMargin: "0px 0px -30% 0px",
    }
  );

  // 粘性定位专属监听器（可选）
  let finalObserver = null;
  if (stickyStepIndex !== null && stickyTargetSelector) {
    const stickyTarget = document.querySelector(stickyTargetSelector);
    finalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stickyTarget.style.position = "sticky";
            stickyTarget.style.top = "0";
            stickyTarget.style.height = "100vh";
          } else {
            stickyTarget.style.position = "";
            stickyTarget.style.top = "";
            stickyTarget.style.height = "";
          }
        });
      },
      {
        threshold: [0.2],
        rootMargin: "0px 0px -100% 0px",
      }
    );
  }

  // 绑定监听器
  steps.forEach((el) => {
    observer.observe(el);
    if (
      finalObserver &&
      +el.getAttribute("data-index") === stickyStepIndex
    ) {
      finalObserver.observe(el);
    }
  });

  // 滚动节流（可选）
  window.addEventListener("scroll", () => {
    const now = Date.now();
    if (now - lastScrollTime > throttleDelay && !isTransitioning) {
      lastScrollTime = now;
    }
  });

  // 响应式布局支持
  const debouncedResize = () => {
    clearTimeout(window._resizeTimeout);
    window._resizeTimeout = setTimeout(() => {
      const visible = getCurrentVisibleStep();
      onStepEnter(visible, "forward");
    }, 250);
  };
  window.addEventListener("resize", debouncedResize);
  window.addEventListener("orientationchange", debouncedResize);
}
