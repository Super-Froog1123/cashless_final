/* ---------- 公共：防抖 ---------- */
function debounce(fn, delay = 150) {
    let t;
    return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(null, args), delay);
    };
}

/* ---------- 公共：给图表绑定容器自适应与响应式规则 ---------- */
function bindResponsive(chart, el, baseOption, responsiveTweaks) {
    // 先设一次
    chart.setOption(baseOption, true);

    // 响应式：基于容器宽度的 Tweaks
    function applyResponsive() {
        const w = el.clientWidth || 0;
        if (typeof responsiveTweaks === 'function') {
            const patch = responsiveTweaks(w) || {};
            chart.setOption(patch, false, true);
        }
        chart.resize();
    }

    // 容器尺寸监听
    const ro = new ResizeObserver(debounce(applyResponsive, 80));
    ro.observe(el);

    // 浏览器窗口变化兜底
    window.addEventListener('resize', debounce(() => chart.resize(), 120));

    // 页签切换/页面恢复可见时兜底
    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
            applyResponsive();
        }
    });

    // 首次应用
    applyResponsive();
}

/* ====================== 图1：无现金支付比例图 ====================== */
const cashlessEl = document.getElementById('cashless_chart');
const cashlessChart = echarts.init(cashlessEl);

const cashlessBase = {
    title: {
        text: '各国无现金支付比例（2020年）',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '8%',
        right: '5%',
        top: 60,
        bottom: 80
    },
    xAxis: {
        type: 'category',
        data: ['韩国', '中国', '澳大利亚', '英国', '新加坡', '加拿大', '美国', '法国', '瑞典', '日本', '德国'],
        axisLabel: {
            rotate: 45,
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        name: '无现金支付比例（%）',
        max: 100
    },
    series: [{
        type: 'bar',
        data: [93.6, 83.0, 67.7, 63.9, 60.4, 56.1, 55.8, 47.8, 46.3, 32.5, 21.3],
        itemStyle: {
            color: '#66ccff'
        },
        label: {
            show: true,
            position: 'top',
            formatter: '{c}%',
            fontWeight: 'bold'
        },
        barMaxWidth: 48
    }]
};

// 根据屏幕宽度微调：小屏减字号、减旋转、收紧 grid
function cashlessTweaks(w) {
    if (w <= 420) {
        return {
            grid: {
                left: '10%',
                right: '6%',
                top: 50,
                bottom: 70
            },
            xAxis: {
                axisLabel: {
                    rotate: 28,
                    fontSize: 10
                }
            },
            series: [{
                label: {
                    fontSize: 10
                },
                barMaxWidth: 32
            }]
        };
    } else if (w <= 700) {
        return {
            grid: {
                left: '9%',
                right: '6%',
                top: 55,
                bottom: 75
            },
            xAxis: {
                axisLabel: {
                    rotate: 36,
                    fontSize: 11
                }
            },
            series: [{
                barMaxWidth: 40
            }]
        };
    }
    return {
        grid: {
            left: '8%',
            right: '5%',
            top: 60,
            bottom: 80
        },
        xAxis: {
            axisLabel: {
                rotate: 45,
                fontSize: 12
            }
        },
        series: [{
            barMaxWidth: 48
        }]
    };
}

bindResponsive(cashlessChart, cashlessEl, cashlessBase, cashlessTweaks);


/* ====================== 图2：main2 ====================== */
const main2El = document.getElementById('main2');
const main2Chart = echarts.init(main2El);

const main2Base = {
    title: {
        text: '日本无现金支付金额与比例变化趋势（2024年）',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params) {
            return params.map(item => {
                // 根据系列类型决定单位
                return `${item.marker}${item.seriesName}：${item.value}${item.seriesType === 'line' ? '%' : ' 万亿日元'}`;
            }).join('<br>');
        }
    },
    legend: {
        top: 40,
        data: ['信用卡', '借记卡', '电子货币', '二维码支付', '无现金比例']
    },
    grid: {
        left: '8%',
        right: '8%',
        top: 90,
        bottom: 60
    },
    xAxis: {
        type: 'category',
        data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024']
    },
    yAxis: [{
            type: 'value',
            name: '金额（万亿日元）',
            min: 0,
            max: 160,
            position: 'left'
        },
        {
            type: 'value',
            name: '无现金比例（%）',
            min: 0,
            max: 50,
            position: 'right',
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    series: [{
            name: '信用卡',
            type: 'bar',
            stack: 'total',
            data: [36, 37.8, 40.7, 41.8, 46.3, 49.8, 53.9, 58.4, 66.7, 73.4, 74.5, 81, 93.8, 105.7, 116.9]
        },
        {
            name: '借记卡',
            type: 'bar',
            stack: 'total',
            data: [0.6, 0.7, 0.6, 0.5, 0.5, 0.4, 0.9, 1.1, 1.3, 1.7, 2.2, 2.7, 3.2, 3.7, 4.4]
        },
        {
            name: '电子货币',
            type: 'bar',
            stack: 'total',
            data: [1.6, 2, 2.5, 3.1, 4, 4.6, 5.1, 5.2, 5.5, 5.8, 6, 6, 6.1, 6.4, 6.2]
        },
        {
            name: '二维码支付',
            type: 'bar',
            stack: 'total',
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0.2, 1, 3.2, 5.3, 7.9, 10.9, 13.5]
        },
        {
            name: '无现金比例',
            type: 'line',
            yAxisIndex: 1,
            data: [13.2, 14.1, 15.1, 15.3, 16.9, 18.2, 20.0, 21.3, 24.1, 26.8, 29.7, 32.5, 36.0, 39.3, 42.8]
        }
    ]
};

function main2Tweaks(w) {
    if (w <= 420) {
        return {
            legend: {
                top: 46,
                itemGap: 8,
                textStyle: {
                    fontSize: 10
                }
            },
            grid: {
                left: '10%',
                right: '10%',
                top: 82,
                bottom: 56
            },
            xAxis: {
                axisLabel: {
                    fontSize: 10,
                    interval: 1,
                    rotate: 0
                }
            },
            yAxis: [{
                    axisLabel: {
                        fontSize: 10
                    }
                },
                {
                    axisLabel: {
                        fontSize: 10
                    }
                }
            ],
            series: [{
                    barMaxWidth: 14
                },
                {
                    barMaxWidth: 14
                },
                {
                    barMaxWidth: 14
                },
                {
                    barMaxWidth: 14
                },
                {
                    symbolSize: 4,
                    lineStyle: {
                        width: 2
                    }
                }
            ]
        };
    } else if (w <= 700) {
        return {
            legend: {
                top: 46,
                itemGap: 10,
                textStyle: {
                    fontSize: 11
                }
            },
            grid: {
                left: '9%',
                right: '9%',
                top: 86,
                bottom: 58
            },
            xAxis: {
                axisLabel: {
                    fontSize: 11,
                    interval: 0,
                    rotate: 0
                }
            },
            series: [{
                    barMaxWidth: 18
                },
                {
                    barMaxWidth: 18
                },
                {
                    barMaxWidth: 18
                },
                {
                    barMaxWidth: 18
                },
                {
                    symbolSize: 5,
                    lineStyle: {
                        width: 2
                    }
                }
            ]
        };
    }
    return {
        legend: {
            top: 40,
            textStyle: {
                fontSize: 12
            }
        },
        grid: {
            left: '8%',
            right: '8%',
            top: 90,
            bottom: 60
        },
        xAxis: {
            axisLabel: {
                fontSize: 12
            }
        },
        series: [{
                barMaxWidth: 22
            },
            {
                barMaxWidth: 22
            },
            {
                barMaxWidth: 22
            },
            {
                barMaxWidth: 22
            },
            {
                symbolSize: 6,
                lineStyle: {
                    width: 2.5
                }
            }
        ]
    };
}

bindResponsive(main2Chart, main2El, main2Base, main2Tweaks);



/* ====================== 图3：fraud_chart ====================== */
const fraudEl = document.getElementById('fraud_chart');
const fraudChart = echarts.init(fraudEl);

// 季度数据
const quarters = [
    '2022年1–3月', '2022年4–6月', '2022年7–9月', '2022年10–12月',
    '2023年1–3月', '2023年4–6月', '2023年7–9月', '2023年10–12月',
    '2024年1–3月', '2024年4–6月'
];
const data = [100.1, 106.2, 102.7, 127.7, 121.8, 141.0, 139.5, 138.6, 124.1, 144.1];
const colors = ['#66d9ef', '#66d9ef', '#66d9ef', '#66d9ef', '#a186f2', '#a186f2', '#a186f2', '#a186f2', '#0b1d38', '#0b1d38'];

const fraudBase = {
    title: {
        text: '2022-2024年日本信用卡诈骗损失',
        left: 'center'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            return params.map(item => {
                return `${item.marker}${item.seriesType === 'line' ? '趋势' : item.seriesName}：${item.value} 亿日元`;
            }).join('<br>');
        }
    },
    grid: {
        left: '8%',
        right: '5%',
        bottom: '15%',
        top: 60
    },
    xAxis: {
        type: 'category',
        data: quarters,
        axisLabel: {
            interval: 0,
            fontSize: 12
        }
    },
    yAxis: {
        type: 'value',
        name: '单位（亿日元）',
        max: 160
    },
    dataZoom: [{
        type: 'inside'
    }],
    series: [{
            name: '季度损失',
            type: 'bar',
            data: data.map((val, i) => ({
                value: val,
                itemStyle: {
                    color: colors[i]
                },
                label: {
                    show: true,
                    position: 'top',
                    formatter: val + ''
                }
            })),
            barWidth: 40
        },
        {
            name: '趋势',
            type: 'line',
            data,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                color: '#ff66cc',
                width: 2
            },
            itemStyle: {
                color: '#ff66cc'
            }
        }
    ]
};

function fraudTweaks(w) {
    if (w <= 420) {
        return {
            grid: {
                left: '10%',
                right: '8%',
                bottom: 60,
                top: 50
            },
            xAxis: {
                axisLabel: {
                    fontSize: 10,
                    rotate: 20
                }
            },
            series: [{
                    barWidth: 22
                },
                {
                    symbolSize: 5,
                    lineStyle: {
                        width: 2
                    }
                }
            ]
        };
    } else if (w <= 700) {
        return {
            grid: {
                left: '9%',
                right: '7%',
                bottom: 62,
                top: 55
            },
            xAxis: {
                axisLabel: {
                    fontSize: 11,
                    rotate: 12
                }
            },
            series: [{
                    barWidth: 30
                },
                {
                    symbolSize: 6,
                    lineStyle: {
                        width: 2
                    }
                }
            ]
        };
    }
    return {
        grid: {
            left: '8%',
            right: '5%',
            bottom: '15%',
            top: 60
        },
        xAxis: {
            axisLabel: {
                fontSize: 12,
                rotate: 0
            }
        },
        series: [{
                barWidth: 40
            },
            {
                symbolSize: 8,
                lineStyle: {
                    width: 2
                }
            }
        ]
    };
}

bindResponsive(fraudChart, fraudEl, fraudBase, fraudTweaks);


/* ====================== 图4：qr_chart ====================== */
const qrEl = document.getElementById('qr_chart');
const qrChart = echarts.init(qrEl);

const data2 = [{
        name: 'PayPay',
        value: 64.5
    },
    {
        name: '乐天支付（Rakuten Pay）',
        value: 34.4
    },
    {
        name: 'd支付',
        value: 29.3
    },
    {
        name: 'au PAY',
        value: 21.0
    },
    {
        name: 'Merpay',
        value: 10.5
    },
    {
        name: 'Famipay',
        value: 10.2
    },
    {
        name: 'LINE Pay',
        value: 9.2
    },
    {
        name: '永旺支付（AEON Pay）',
        value: 3.6
    },
    {
        name: '亚马逊支付（Amazon Pay）',
        value: 2.9
    },
    {
        name: '日本邮政支付（Japan Post Pay）',
        value: 1.8
    }
];

const qrBase = {
    title: [{
            text: '日本最受欢迎的二维码支付方式',
            left: 'center',
            top: 10
        },
        {
            text: '来源：日本MMD研究所（日本移动市场调查机构）',
            left: 'center',
            top: 40,
            textStyle: {
                fontSize: 12,
                color: '#888'
            }
        }
    ],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: '{b}：{c}%'
    },
    grid: {
        left: '20%',
        right: '5%',
        top: 70,
        bottom: 30
    },
    xAxis: {
        type: 'value',
        max: 70,
        name: '使用率（%）',
        axisLabel: {
            fontSize: 12
        }
    },
    yAxis: {
        type: 'category',
        data: data2.map(i => i.name),
        inverse: true,
        axisLabel: {
            fontSize: 12
        }
    },
    series: [{
        type: 'bar',
        data: data2.map(i => i.value),
        itemStyle: {
            color: '#8cd53d'
        },
        label: {
            show: true,
            position: 'right',
            formatter: '{c}%',
            fontWeight: 'bold'
        },
        barWidth: 20
    }]
};

function qrTweaks(w) {
    if (w <= 420) {
        return {
            title: [{
                    top: 8,
                    textStyle: {
                        fontSize: 14
                    }
                },
                {
                    top: 32,
                    textStyle: {
                        fontSize: 10
                    }
                }
            ],
            grid: {
                left: '18%',
                right: '6%',
                top: 60,
                bottom: 26
            },
            xAxis: {
                axisLabel: {
                    fontSize: 10
                }
            },
            yAxis: {
                axisLabel: {
                    fontSize: 10
                }
            },
            series: [{
                barWidth: 14,
                label: {
                    fontSize: 10
                }
            }]
        };
    } else if (w <= 700) {
        return {
            title: [{
                    top: 10,
                    textStyle: {
                        fontSize: 16
                    }
                },
                {
                    top: 38,
                    textStyle: {
                        fontSize: 11
                    }
                }
            ],
            grid: {
                left: '19%',
                right: '6%',
                top: 66,
                bottom: 28
            },
            xAxis: {
                axisLabel: {
                    fontSize: 11
                }
            },
            yAxis: {
                axisLabel: {
                    fontSize: 11
                }
            },
            series: [{
                barWidth: 18,
                label: {
                    fontSize: 11
                }
            }]
        };
    }
    return {
        title: [{
                top: 10,
                textStyle: {
                    fontSize: 18
                }
            },
            {
                top: 40,
                textStyle: {
                    fontSize: 12
                }
            }
        ],
        grid: {
            left: '20%',
            right: '5%',
            top: 70,
            bottom: 30
        },
        xAxis: {
            axisLabel: {
                fontSize: 12
            }
        },
        yAxis: {
            axisLabel: {
                fontSize: 12
            }
        },
        series: [{
            barWidth: 20,
            label: {
                fontSize: 12
            }
        }]
    };
}

bindResponsive(qrChart, qrEl, qrBase, qrTweaks);



/* ========== 图5：chart_（100% 堆叠横向条形）========== */
(() => {
    const categories = ['≤ 1,000', '1,000–3,000', '3,000–5,000', '5,000–7,000', '7,000–10,000', '10,000–30,000', '30,000–50,000', '50,000–100,000', '100,000–500,000', '500,000–1,000,000', '≥ 1,000,000'];
    const seriesNames = ['信用卡', '借记卡', '二维码', 'IC 卡', '银行转账', '银行存款', '现金', '其他'];
    const raw = {
        '信用卡': [0.14, 0.27, 0.36, 0.44, 0.48, 0.52, 0.54, 0.53, 0.48, 0.43, 0.35],
        '借记卡': [0.03, 0.07, 0.19, 0.18, 0.13, 0.12, 0.12, 0.11, 0.09, 0.07, 0.05],
        '二维码': [0.10, 0.15, 0.12, 0.12, 0.10, 0.09, 0.08, 0.07, 0.05, 0.04, 0.03],
        'IC 卡': [0.01, 0.01, 0.05, 0.05, 0.04, 0.04, 0.04, 0.04, 0.03, 0.02, 0.01],
        '银行转账': [0.00, 0.01, 0.01, 0.01, 0.02, 0.04, 0.05, 0.08, 0.14, 0.17, 0.20],
        '银行存款': [0.01, 0.01, 0.01, 0.01, 0.01, 0.01, 0.02, 0.03, 0.05, 0.07, 0.09],
        '现金': [0.49, 0.35, 0.15, 0.10, 0.10, 0.08, 0.07, 0.06, 0.05, 0.04, 0.03],
        '其他': [0.05, 0.04, 0.05, 0.06, 0.06, 0.08, 0.08, 0.08, 0.16, 0.16, 0.24]
    };

    function onDomReady(cb) {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cb, {
            once: true
        });
        else cb();
    }

    function whenEchartsReady(cb) {
        if (window.echarts) return cb();
        const timer = setInterval(() => {
            if (window.echarts) {
                clearInterval(timer);
                cb();
            }
        }, 16);
        setTimeout(() => clearInterval(timer), 10000);
    }

    function waitVisible(el, cb) {
        const hasSize = () => el && el.offsetWidth > 0 && el.offsetHeight > 0 && getComputedStyle(el).display !== 'none';
        if (hasSize()) return cb();
        const io = new IntersectionObserver((ents) => {
            if (ents.some(e => e.isIntersecting) && hasSize()) {
                io.disconnect();
                cb();
            }
        });
        io.observe(el);
        setTimeout(() => io.disconnect(), 10000);
    }

    onDomReady(() => {
        const el = document.getElementById('chart_');
        if (!el) return; // 不存在就退出，不影响其它图
        if (!el.style.height) el.style.height = '520px';

        whenEchartsReady(() => {
            waitVisible(el, () => {
                const matrix = categories.map((_, r) => seriesNames.map(n => raw[n][r]));
                const percentMatrix = matrix.map(row => {
                    const sum = row.reduce((a, b) => a + b, 0) || 1;
                    return row.map(v => (v * 100) / sum);
                });
                const series = seriesNames.map((name, c) => ({
                    name,
                    type: 'bar',
                    stack: 'total',
                    barMaxWidth: 36,
                    label: {
                        show: true,
                        position: 'inside',
                        formatter: p => (p.value >= 3 ? Math.round(p.value) + '%' : '')
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: percentMatrix.map(row => +row[c].toFixed(2))
                }));

                const chart = echarts.getInstanceByDom(el) || echarts.init(el);
                chart.setOption({
                    backgroundColor: '#fff',
                    title: {
                        text: '不同支付金额区间的最常用支付方式',
                        left: 24,
                        top: 8
                    },
                    legend: {
                        top: 48,
                        left: 24
                    },
                    grid: {
                        left: 160,
                        right: 32,
                        top: 96,
                        bottom: 48
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: params => {
                            const header = params[0].axisValue + ' 日元';
                            const lines = params.map(it => `${it.marker} ${it.seriesName}：${(+it.value).toFixed(1)}%`).join('<br/>');
                            return `<strong>${header}</strong><br/>${lines}<br/><em>合计：100%</em>`;
                        }
                    },
                    xAxis: {
                        type: 'value',
                        max: 100,
                        name: '受访者占比（%）',
                        nameLocation: 'middle',
                        nameGap: 30,
                        axisLabel: {
                            formatter: '{value}%'
                        },
                        splitLine: {
                            show: true
                        }
                    },
                    yAxis: {
                        type: 'category',
                        data: categories,
                        name: '支付金额（日元）',
                        nameGap: 16
                    },
                    series
                }, true);

                const ro = new ResizeObserver(() => {
                    chart.resize();
                });
                ro.observe(el);
                window.addEventListener('resize', () => {
                    chart.resize();
                });
            });
        });
    });
})();




/* ====================== 图6：myNumberChart ====================== */

(() => {
    const years6 = ['2020', '2021', '2022', '2023', '2024'];
    const values6 = [25, 55.7, 67, 71, 75.7];

    const el6 = document.getElementById('myNumberChart');
    const chart6 = echarts.init(el6);

    chart6.setOption({
        title: {
            text: '日本“个人编号卡”（身份证）持有人比例',
            left: 'center', // 水平居中
            top: 10, // 垂直位置，越小越靠上
            textStyle: {
                fontSize: 22,
                fontWeight: 700
            }
        },
        grid: {
            left: '6%',
            right: '10%',
            top: 80,
            bottom: 70
        },
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: years6,
            axisLine: {
                lineStyle: {
                    color: '#ddd'
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            name: '比例（%）',
            nameGap: 30
        },
        series: [{
            name: '“我的号码卡”持有人比例',
            type: 'line',
            smooth: true,
            data: values6,
            symbol: 'circle',
            symbolSize: 8,
            lineStyle: {
                width: 4,
                color: '#1f78ff'
            },
            itemStyle: {
                color: '#1f78ff'
            },
            label: {
                show: true,
                position: 'top',
                fontWeight: 'bold',
                color: '#1f78ff',
                formatter: ({
                    value
                }) => value
            },
            markPoint: {
                symbol: 'circle',
                symbolSize: 6,
                itemStyle: {
                    color: '#1f78ff'
                },
                label: {
                    show: true,
                    formatter: '2024年比例最高',
                    position: 'right',
                    offset: [10, -8],
                    color: '#1f78ff',
                    fontSize: 14,
                    lineHeight: 18
                },
                data: [{
                    coord: ['2024', 75.7]
                }]
            }
        }],
        graphic: [{
            type: 'text',
            left: 20,
            bottom: 14,
            left: 'center', // 水平居中
            style: {
                text: '来源：日本地方公共团体信息系统机构（J-LIS）',
                fontSize: 14,
                fill: '#666'
            }
        }]
    });

    const ro6 = new ResizeObserver(() => chart6.resize());
    ro6.observe(el6);
    window.addEventListener('resize', () => chart6.resize());
})();


/* ====================== 图7：访日游客数量 ====================== */
(() => {
    const years = ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];
    const values = [1412875, 1043246, 1425100, 1314437, 2409158, 4993689, 6373564, 7355818, 8380034, 9594394, 1069256, 42239, 189125, 2425157, 6981342];
    const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    function onDomReady(cb) {
        if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', cb, {
            once: true
        });
        else cb();
    }

    function whenEchartsReady(cb) {
        if (window.echarts) return cb();
        const timer = setInterval(() => {
            if (window.echarts) {
                clearInterval(timer);
                cb();
            }
        }, 16);
        setTimeout(() => clearInterval(timer), 10000);
    }

    function waitVisible(el, cb) {
        const hasSize = () => el && el.offsetWidth > 0 && el.offsetHeight > 0 && getComputedStyle(el).display !== 'none';
        if (hasSize()) return cb();
        const io = new IntersectionObserver((ents) => {
            if (ents.some(e => e.isIntersecting) && hasSize()) {
                io.disconnect();
                cb();
            }
        });
        io.observe(el);
        setTimeout(() => io.disconnect(), 10000);
    }

    onDomReady(() => {
        const el = document.getElementById('visitors_chart');
        if (!el) return; // 不存在就安静退出，不影响其它图
        if (!el.style.height) el.style.height = '420px';

        whenEchartsReady(() => {
            waitVisible(el, () => {
                const chart = echarts.getInstanceByDom(el) || echarts.init(el);
                chart.setOption({
                    title: {
                        text: '中国游客赴日人数（2010—2024）',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            type: 'shadow'
                        },
                        formatter: p => `${p[0].axisValue} 年<br/>访问人次：<b>${fmt(p[0].value)}</b>`
                    },
                    grid: {
                        left: '8%',
                        right: '5%',
                        top: 60,
                        bottom: 80
                    },
                    xAxis: {
                        type: 'category',
                        data: years,
                        axisLabel: {
                            rotate: 45,
                            fontSize: 12
                        }
                    },
                    yAxis: {
                        type: 'value',
                        name: '访问人次',
                        axisLabel: {
                            formatter: v => fmt(v)
                        }
                    },
                    series: [{
                        type: 'bar',
                        data: values,
                        itemStyle: {
                            color: '#66ccff'
                        },
                        label: {
                            show: true,
                            position: 'top',
                            formatter: p => fmt(p.value),
                            fontWeight: 'bold'
                        },
                        barMaxWidth: 48
                    }]
                }, true);

                function applyResponsive() {
                    const w = el.clientWidth || el.getBoundingClientRect().width || 0;
                    if (w <= 420) chart.setOption({
                        grid: {
                            left: '10%',
                            right: '6%',
                            top: 50,
                            bottom: 70
                        },
                        xAxis: {
                            axisLabel: {
                                rotate: 28,
                                fontSize: 10
                            }
                        },
                        series: [{
                            label: {
                                fontSize: 10
                            },
                            barMaxWidth: 32
                        }]
                    }, false);
                    else if (w <= 700) chart.setOption({
                        grid: {
                            left: '9%',
                            right: '6%',
                            top: 55,
                            bottom: 75
                        },
                        xAxis: {
                            axisLabel: {
                                rotate: 36,
                                fontSize: 11
                            }
                        },
                        series: [{
                            barMaxWidth: 40
                        }]
                    }, false);
                    else chart.setOption({
                        grid: {
                            left: '8%',
                            right: '5%',
                            top: 60,
                            bottom: 80
                        },
                        xAxis: {
                            axisLabel: {
                                rotate: 45,
                                fontSize: 12
                            }
                        },
                        series: [{
                            barMaxWidth: 48
                        }]
                    }, false);
                }

                applyResponsive();
                const ro = new ResizeObserver(() => {
                    chart.resize();
                    applyResponsive();
                });
                ro.observe(el);
                window.addEventListener('resize', () => {
                    chart.resize();
                    applyResponsive();
                });
            });
        });
    });
})();

/* ====================== 图8：访日游客占比 ====================== */

document.addEventListener('DOMContentLoaded', function () {
    const el = document.getElementById('donut_202506');
    if (!el) {
        console.error('[ECharts] 容器没找到：#donut_202506_dual');
        return;
    }

    function whenSized(node, cb, tries = 120) {
        if (node.clientWidth > 0 && node.clientHeight > 0) {
            cb();
        } else if (tries > 0) {
            requestAnimationFrame(() => whenSized(node, cb, tries - 1));
        } else {
            if (node.style.height === '' || node.clientHeight === 0) node.style.height = '580px';
            cb();
        }
    }

    whenSized(el, () => {
        const chart = echarts.init(el);

        const TOTAL = 3377800;
        const outerRaw = [{
                name: '中国',
                value: 797900,
                region: '东亚'
            },
            {
                name: '韩国',
                value: 729800,
                region: '东亚'
            },
            {
                name: '台湾',
                value: 585000,
                region: '东亚'
            },
            {
                name: '香港',
                value: 166800,
                region: '东亚'
            },
            {
                name: '新加坡',
                value: 68600,
                region: '东南亚及印度'
            },
            {
                name: '菲律宾',
                value: 63200,
                region: '东南亚及印度'
            },
            {
                name: '美国',
                value: 345100,
                region: '北美'
            },
            {
                name: '澳大利亚',
                value: 59400,
                region: '大洋洲'
            },
            {
                name: '北欧国家',
                value: 18300,
                region: '欧洲'
            }
        ];
        const SEA_TARGET = Math.round(TOTAL * 0.102);
        const seaKnown = outerRaw.filter(d => d.region === '东南亚及印度').reduce((s, d) => s + d.value, 0);
        const seaOthers = Math.max(0, SEA_TARGET - seaKnown);
        if (seaOthers > 0) outerRaw.push({
            name: '东南亚及印度（其他）',
            value: seaOthers,
            region: '东南亚及印度'
        });
        const knownSum = outerRaw.reduce((s, d) => s + d.value, 0);
        const remainder = Math.max(0, TOTAL - knownSum);
        if (remainder > 0) outerRaw.push({
            name: '其他',
            value: remainder,
            region: '其他'
        });

        const order = ['东亚', '东南亚及印度', '北美', '欧洲', '大洋洲', '其他'];
        const regionSum = outerRaw.reduce((acc, d) => {
            acc[d.region] = (acc[d.region] || 0) + d.value;
            return acc;
        }, {});
        const innerData = order.filter(r => regionSum[r]).map(r => ({
            name: r,
            value: regionSum[r]
        }));

        const regionColor = {
            '东亚': '#223B94',
            '东南亚及印度': '#1D8CA0',
            '北美': '#3E7C48',
            '欧洲': '#7A6DAF',
            '大洋洲': '#E29A4B',
            '其他': '#9AA9C2'
        };
        const colorForRegion = r => regionColor[r] || '#9AA9C2';
        const outerData = outerRaw.map(d => ({
            ...d,
            itemStyle: {
                color: colorForRegion(d.region)
            }
        }));
        const fmt = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        const pct = v => (v / TOTAL * 100).toFixed(1) + '%';

        const option = {
            title: [{
                text: '2025年6月赴日各国旅客占比',
                left: 'center',
                top: 8,
                textStyle: {
                    fontSize: 22,
                    fontWeight: 700
                }
            }, ],
            tooltip: {
                trigger: 'item',
                formatter: (p) => `${p.seriesName} · ${p.name}<br>${fmt(p.value)} (${p.percent}%)`
            },
            legend: {
                show: false
            },
            series: [{
                    name: '地区',
                    type: 'pie',
                    radius: ['35%', '55%'], // 内圈稍微缩小
                    center: ['50%', '60%'],
                    data: innerData.map(d => ({
                        ...d,
                        itemStyle: {
                            color: colorForRegion(d.name)
                        },
                        label: {
                            show: true,
                            formatter: `{b}\n${pct(d.value)}`,
                            color: '#fff',
                            fontWeight: 700,
                            lineHeight: 18
                        },
                        labelLine: {
                            show: false
                        }
                    })),
                    z: 2
                },
                {
                    name: '国家/地区',
                    type: 'pie',
                    radius: ['62%', '82%'],
                    center: ['50%', '60%'],
                    data: outerData,
                    label: {
                        show: true,
                        formatter: (p) => `${p.name}\n${fmt(p.value)}`,
                        backgroundColor: 'rgba(255,255,255,0.95)',
                        borderColor: 'rgba(0,0,0,0.12)',
                        borderWidth: 1,
                        borderRadius: 6,
                        padding: [6, 8],
                        color: '#111',
                        fontWeight: 600,
                        lineHeight: 18
                    },
                    labelLine: {
                        show: true,
                        length: 28,
                        length2: 12
                    }, // 加长引导线
                    itemStyle: {
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    z: 3
                }
            ]
        };

        chart.setOption(option);
        const ro = new ResizeObserver(() => chart.resize());
        ro.observe(el);
    });
});