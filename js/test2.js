/*!
 * 世博会支付方式：圆堆图（Packed Circles）
 * 单文件可嵌入版（无 iframe，JS/CSS/HTML 全部内置）
 * 用法：
 *   createExpoPaymentPackedCircles(container, { data, height, title, subtitle })
 * 依赖：
 *   自动加载 D3 v7（若页面未加载）
 */
(function () {
  // ===== 工具：确保 D3 可用 =====
  function ensureD3(cb) {
    if (window.d3 && d3.hierarchy) return cb();
    if (document.getElementById("__expo_d3_loader__")) {
      // 已在加载，轮询等待
      const timer = setInterval(() => {
        if (window.d3 && d3.hierarchy) {
          clearInterval(timer);
          cb();
        }
      }, 30);
      return;
    }
    const s = document.createElement("script");
    s.id = "__expo_d3_loader__";
    s.src = "https://unpkg.com/d3@7";
    s.onload = cb;
    document.head.appendChild(s);
  }

  // ===== 工具：注入样式（作用域选择器，避免污染宿主站）=====
  function injectStyle() {
    if (document.getElementById("__expo_card_css__")) return;
    const css = `
.expo-card {
  --expo-bg-1: radial-gradient(1200px 800px at 15% 20%, rgba(2,104,183,0.08), transparent 60%);
  --expo-bg-2: radial-gradient(1200px 800px at 85% 80%, rgba(230,2,20,0.08), transparent 60%);
  --expo-bg-3: linear-gradient(180deg, #f8fafc 0%, #f3f6fb 40%, #eef4ff 100%);
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Noto Sans SC", sans-serif;
  position: relative;
  width: 100%;
}

/* 顶部区域透明背景 */
.expo-card .hero {
  background: transparent;
}

/* 主标题 */
.expo-card .header {
  color: #0f172a;
  margin: 0 0 6px;
  font-size: clamp(18px, 2.2vw, 22px);
  font-weight: 800;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255, 255, 255, .6);
}

/* 副标题 */
.expo-card .sub {
  margin: 0 0 10px;
  color: #475569;
  font-size: 13px;
  text-align: center;
}

/* 图例 */
.expo-card .legend {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 8px auto 0;
  text-align: center;
  max-width: 100%;
}

.expo-card .legend span {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  border-radius: 999px;
  padding: 4px 10px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(4px);
  color: #0f172a;
}

.expo-card .legend i {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  display: inline-block;
}

/* 主图表区域卡片 */
.expo-card .card {
  position: relative;
  width: 100%;
  background: transparent;
  border-radius: 12px;
  margin-top: 10px;
  padding: clamp(8px, 1.5vw, 14px);
  backdrop-filter: blur(6px);
  overflow: visible;
}

/* 脚注 */
.expo-card .footer {
  font-size: 12px;
  margin-top: 10px;
}

/* SVG 图表尺寸 */
.expo-card svg {
  width: 100%;
  height: min(68vh, 700px);
  display: block;
}

/* 图中标签 */
.expo-card .label {
  pointer-events: none;
  fill: #0f172a;
  text-anchor: middle;
  dominant-baseline: middle;
  font-size: 12px;
}

.expo-card .label.cat {
  font-weight: 600;
  font-size: 13px;
}

/* 悬浮提示框 */
.expo-card .tip {
  position: fixed;
  z-index: 9999;
  pointer-events: none;
  opacity: 0;
  background: rgba(15, 23, 42, .92);
  color: #fff;
  padding: 6px 8px;
  border-radius: 8px;
  font-size: 12px;
  transform: translate(-50%, calc(-100% - 10px));
  white-space: nowrap;
  transition: opacity .12s ease;
}

/* 响应式 */
@media (max-width: 480px) {
  .expo-card .header {
    font-size: 18px;
  }
  .expo-card .sub {
    font-size: 12px;
  }
  .expo-card .label {
    font-size: 11px;
  }
  .expo-card .legend span {
    font-size: 11px;
    padding: 3px 8px;
  }
}


    `.trim();
    const style = document.createElement("style");
    style.id = "__expo_card_css__";
    style.textContent = css;
    document.head.appendChild(style);
  }

  // ===== 工具：创建壳结构 =====
  function createShell(mountEl, { title, subtitle }) {
    const wrapper = document.createElement("div");
    wrapper.className = "expo-card";
    wrapper.innerHTML = `
      <div class="hero">
        <div class="head">
          <h2 class="header">${title || "世博会支付方式"}</h2>
          <p class="sub">${subtitle || "点击类别圆放大；再点返回；悬停看完整路径。已在「二维码支付 / 国际信用卡 / 电子货币」加入「其他」。"}</p>
          <div class="legend" role="list"></div>
        </div>
        <div class="card"><div class="chart" aria-label="世博会支付方式"></div></div>
      </div>
    `;
    // 独立的 tip：放到 body，避免被宿主容器遮挡
    const tip = document.createElement("div");
    tip.className = "tip";
    tip.setAttribute("aria-hidden", "true");
    document.body.appendChild(tip);

    mountEl.appendChild(wrapper);
    return {
      wrapper,
      legend: wrapper.querySelector(".legend"),
      chart: wrapper.querySelector(".chart"),
      tip,
    };
  }

  // ===== 默认数据 =====
  function getDefaultData() {
    return {
      name: "世博会支付方式",
      children: [
        { name: "官方数字钱包", children: [{ name: "官方数字支付钱包（示例）" }] },
        {
          name: "国际信用卡",
          children: [{ name: "VISA" }, { name: "JCB" }, { name: "银联（卡组织）" }, { name: "其他" }],
        },
        {
          name: "电子货币",
          children: [
            { name: "交通卡：西瓜卡（Suica）" },
            { name: "WAON" },
            { name: "ÆON（集团系电子货）" },
            { name: "其他" },
          ],
        },
        {
          name: "二维码支付",
          children: [
            { name: "LINE Pay" },
            { name: "PayPay" },
            { name: "银联（二维码）" },
            { name: "微信支付" },
            { name: "支付宝" },
            { name: "其他" },
          ],
        },
      ],
    };
  }

  // ===== 主渲染 =====
  function renderPackedCard(rootEl, tipEl, legendEl, data, heightPx) {
    const mount = rootEl;
    mount.innerHTML = "";

    const W = mount.clientWidth || 800;
    const H = Math.max(420, heightPx || Math.round(window.innerHeight * 0.68));
    const M = 16; // 舞台边距
    const stageW = W - 2 * M;
    const stageH = H - 2 * M;

    const padding = 4;
    const labelMinR = 12;

    // 颜色映射
    const categories = (data.children || []).map((d) => d.name);
    const color = d3.scaleOrdinal().domain(categories).range(d3.schemeSet2);

    // 图例
    legendEl.innerHTML = "";
    categories.forEach((c) => {
      const chip = document.createElement("span");
      chip.innerHTML = `<i style="background:${color(c)}"></i>${c}`;
      chip.setAttribute("role", "listitem");
      legendEl.appendChild(chip);
    });

    // 层级 + 打包
    const root = d3
      .hierarchy(data)
      .sum((d) => (d.children ? 0 : 1)) // 如需按权重：d.value || 1
      .sort((a, b) => (b.value || 0) - (a.value || 0));

    const pack = d3.pack().size([stageW, stageH]).padding(padding);
    pack(root);

    // 容器
    const svg = d3
      .select(mount)
      .append("svg")
      .attr("viewBox", [0, 0, W, H])
      .attr("aria-label", "世博会支付方式");

    const g = svg.append("g");

    // 焦点缩放
    let focus = root;
    let view;

    const nodes = g
      .selectAll("g.node")
      .data(root.descendants())
      .join("g")
      .attr("class", "node")
      .attr("transform", (d) => `translate(${d.x},${d.y})`)
      .style("cursor", (d) => (d.children ? "pointer" : "default"));

    const circles = nodes
      .append("circle")
      .attr("r", (d) => d.r)
      .attr("fill", (d) => {
        const cat =
          d.depth === 1
            ? d.data.name
            : d.ancestors().find((a) => a.depth === 1)?.data.name;
        const base = cat ? color(cat) : "#cbd5e1";
        return d.children ? base : d3.color(base).brighter(0.9);
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 1)
      .on("pointerenter", (event, d) => {
        const path = d.ancestors().map((a) => a.data.name).reverse().join(" / ");
        tipEl.textContent = path || d.data.name;
        tipEl.style.opacity = 1;
      })
      .on("pointermove", (event) => {
        tipEl.style.left = event.clientX + "px";
        tipEl.style.top = event.clientY + "px";
      })
      .on("pointerleave", () => {
        tipEl.style.opacity = 0;
      })
      .on("click", (event, d) => {
        event.stopPropagation();
        if (focus === d) d = d.parent || root; // 再点一次返回上一层
        zoom(d);
      });

    const labels = nodes
      .append("text")
      .attr("class", (d) => (d.depth === 1 ? "label cat" : "label"))
      .style("opacity", (d) => labelVisible(d))
      .text((d) => (d.depth === 0 ? "" : d.data.name))
      .each(function (d) {
        const fs = d.depth === 1 ? 13 : d.r < 18 ? 10 : 12;
        d3.select(this).attr("font-size", fs);
      })
      .attr("dy", "0.35em");

    svg.on("click", () => zoom(root));
    zoomTo([root.x, root.y, root.r * 2]);

    function zoom(d) {
      focus = d;
      svg
        .transition()
        .duration(600)
        .tween("zoom", () => {
          const i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2]);
          return (t) => zoomTo(i(t));
        });
    }

    // 以“舞台中心”为基准缩放，保证圆圈完全显示
    function zoomTo(v) {
      const [x, y, diameter] = v;
      view = v;

      const k = Math.min(stageW, stageH) / diameter;
      const cx = stageW / 2 + M;
      const cy = stageH / 2 + M;

      nodes.attr(
        "transform",
        (d) => `translate(${(d.x - x) * k + cx}, ${(d.y - y) * k + cy})`
      );
      circles.attr("r", (d) => d.r * k);
      labels
        .style("opacity", (d) => labelVisible(d))
        .attr("font-size", function (d) {
          const base = d.depth === 1 ? 13 : (d.r * k) < 18 ? 10 : 12;
          return base;
        });
    }

    function labelVisible(d) {
      if (d.depth === 0) return false;
      if (d.depth === 1) return true;
      if (!view) return d.r >= labelMinR;
      const k = Math.min(stageW, stageH) / view[2];
      return d.r * k >= labelMinR;
    }
  }

  // ===== 对外导出（多实例安全）=====
  window.createExpoPaymentPackedCircles = function (container, opts = {}) {
    const mount =
      typeof container === "string" ? document.querySelector(container) : container;
    if (!mount) throw new Error("Mount element not found for createExpoPaymentPackedCircles()");
    const { data, height, title, subtitle } = opts;

    injectStyle();
    ensureD3(() => {
      const { wrapper, legend, chart, tip } = createShell(mount, { title, subtitle });

      // 初次渲染
      renderPackedCard(chart, tip, legend, data || getDefaultData(), height);

      // 自适应重绘：观察 .card 尺寸变化
      const ro = new ResizeObserver(() => {
        renderPackedCard(chart, tip, legend, data || getDefaultData(), height);
      });
      ro.observe(wrapper.querySelector(".card"));

      // 清理：当宿主节点被移除时，自动移除 tip（可选加强）
      const obs = new MutationObserver(() => {
        if (!document.body.contains(wrapper)) {
          tip.remove();
          ro.disconnect();
          obs.disconnect();
        }
      });
      obs.observe(document.body, { childList: true, subtree: true });
    });
  };
})();

(function initExpoCard() {
  function start() {
    const el = document.querySelector('#expo-card');
    if (!el) return console.warn('[expo-card] #expo-card 未找到');
    // 可自定义高度/标题；不传 data 会用默认数据
    createExpoPaymentPackedCircles(el, {
      height: 520,
      title: '世博会支付方式',
      subtitle: '点击类别圆放大；再点返回；悬停看路径。'
    });
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }
})();
