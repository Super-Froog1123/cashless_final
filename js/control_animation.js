// 初始化 Lottie 动画
const anim = lottie.loadAnimation({
  container: document.getElementById('container'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: 'your-animation.json' // 动画文件路径
});

let stepIndex = 0;
createStepObserver({
  stepSelector: ".text-box",
  stickyStepIndex: -1,
  stickyTargetSelector: "#container",
  onStepEnter: (index, direction) => {
    stepIndex = index;
    console.log("进入 step", index, direction);

    if (index === 1) {
      anim.play(); // 进入 step 1 播放动画
    } 
    else if (index === 2) {
      anim.pause(); // 进入 step 2 暂停
    } 
    else if (index === 3) {
      anim.goToAndPlay(50, true); // 跳到第 50 帧开始播放
    }
  },
});
