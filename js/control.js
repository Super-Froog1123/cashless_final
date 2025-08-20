createStepObserver({
    stepSelector: ".text-box",
    stickyStepIndex: -1,
    stickyTargetSelector: "#container",
    onStepEnter: (index, direction) => {
        stepIndex = index;
        console.log("进入 step", index, direction);

        if (index === 2 || index === -1) {
            d3.select(".zoom-group")
                .transition()
                .duration(1000)
                .attr("transform", "translate(0, -500)");

            // 👇 高亮 id=52 节点与其连接
            highlightNodeAndLinksById("51");
        } else {
            d3.select(".zoom-group")
                .transition()
                .duration(1000)
                .attr("transform", "translate(0, 0)");

            // 👇 恢复默认样式
            resetHighlight();
        };
    },
});



// 长png

(function(){
  document.querySelectorAll('.hx-pan').forEach(viewer=>{
    const img = viewer.querySelector('img');

    // 初始缩放（真实布局尺寸，不用 transform）
    const initZoom = parseFloat(viewer.dataset.zoom || '1');
    viewer.style.setProperty('--zoom', Math.max(1, Math.min(2, initZoom)));

    // —— 滚轮：把纵向滚动转成横向；到边缘时放行给页面 —— //
    function normalizeDeltaY(e){
      let dy = e.deltaY;
      if (e.deltaMode === 1) dy *= 16;                 // 行 -> 像素（近似）
      else if (e.deltaMode === 2) dy *= viewer.clientHeight; // 页 -> 像素
      return dy;
    }
    viewer.addEventListener('wheel', (e)=>{
      // 选择“更明显”的轴：触控板横向时用 deltaX
      const dy = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : normalizeDeltaY(e);
      const speed = 1.2;
      const maxLeft = viewer.scrollWidth - viewer.clientWidth;
      const atLeft  = viewer.scrollLeft <= 0;
      const atRight = viewer.scrollLeft >= maxLeft - 1;

      // 如果还能继续横向滚，就拦截默认纵向滚动；否则放行给页面
      if ((dy < 0 && !atLeft) || (dy > 0 && !atRight)) {
        viewer.scrollLeft += dy * speed;
        e.preventDefault();
      } // else: 不拦截，页面继续纵向滚动
    }, {passive:false});

    // —— 鼠标拖拽横向浏览（可选） —— //
    let dragging=false, startX=0, startLeft=0;
    viewer.addEventListener('pointerdown', e=>{
      dragging=true; viewer.classList.add('dragging');
      startX=e.clientX; startLeft=viewer.scrollLeft;
      viewer.setPointerCapture(e.pointerId);
    });
    viewer.addEventListener('pointermove', e=>{
      if(!dragging) return;
      viewer.scrollLeft = startLeft - (e.clientX - startX);
    });
    ['pointerup','pointercancel','lostpointercapture'].forEach(t=>{
      viewer.addEventListener(t, ()=>{ dragging=false; viewer.classList.remove('dragging'); });
    });

    // —— 键盘左右键（容器聚焦时） —— //
    viewer.addEventListener('keydown', e=>{
      const step = Math.round(viewer.clientWidth * 0.9);
      if (e.key === 'ArrowLeft'){ viewer.scrollBy({left:-step,behavior:'smooth'}); e.preventDefault(); }
      if (e.key === 'ArrowRight'){ viewer.scrollBy({left: step,behavior:'smooth'}); e.preventDefault(); }
    });

    // 初始对齐到最左
    if (!img.complete) img.addEventListener('load', ()=>{ viewer.scrollLeft = 0; }, {once:true});
    else viewer.scrollLeft = 0;
  });
})();