// 定义节点分类和颜色
var categories = [{
        //  Electronic money
        name: '官方数字钱包',
        color: '#ff7f0e'
    },
    {
        //  Credit card
        name: '国际信用卡品牌',
        color: '#0268b7'
    },
    {
        // Electronic money
        name: 'E-wallet',
        color: '#ff7f0e'
    },
    {
        // Electronic money
        name: '交通IC卡类',
        color: '#ff7f0e'
    },
    {
        // QR code payment
        name: 'QR支付',
        color: '#e60214'
    },
    {
        // QR code payment
        name: '银行支付',
        color: '#e60214'
    },
    {
        // QR code payment
        name: '跨境支付',
        color: '#e60214'
    },
    {
        // QR code payment
        name: '地方支付',
        color: '#e60214'
    },
    {
        // QR code payment
        name: '后付支付',
        color: '#e60214'
    },
    {
        // QR code payment
        name: '转账支付',
        color: '#e60214'
    },
    {
        name: '国家/地区',
        color: '#c5b0d5'
    }
];

// 定义节点数据
var nodes = [
    // 官方数字钱包
    {
        id: '0',
        name: 'EXPO2025 DIGITAL WALLET',
        category: 0
    },

    // 国际信用卡品牌
    {
        id: '1',
        name: 'Apple Pay',
        category: 1
    },
    {
        id: '2',
        name: 'Google Pay',
        category: 1
    },
    {
        id: '3',
        name: 'VISA',
        category: 1
    },
    {
        id: '4',
        name: 'JCB',
        category: 1
    },
    {
        id: '5',
        name: 'Mastercard',
        category: 1
    },
    {
        id: '6',
        name: 'Diners Club International',
        category: 1
    },
    {
        id: '7',
        name: 'American Express (AMEX)',
        category: 1
    },
    {
        id: '8',
        name: 'Discover',
        category: 1
    },
    {
        id: '9',
        name: 'UnionPay',
        category: 1
    },

    // E-wallet
    {
        id: '10',
        name: 'iD',
        category: 2
    },
    {
        id: '11',
        name: 'Rakuten Edy',
        category: 2
    },
    {
        id: '12',
        name: 'nanaco',
        category: 2
    },
    {
        id: '13',
        name: 'WAON',
        category: 2
    },
    {
        id: '14',
        name: 'PiTaPa',
        category: 2
    },
    {
        id: '15',
        name: 'QUICPay',
        category: 2
    },

    // 交通IC卡类
    {
        id: '16',
        name: 'Kitaca',
        category: 3
    },
    {
        id: '17',
        name: 'Suica',
        category: 3
    },
    {
        id: '18',
        name: 'PASMO',
        category: 3
    },
    {
        id: '19',
        name: 'TOICA',
        category: 3
    },
    {
        id: '20',
        name: 'manaca',
        category: 3
    },
    {
        id: '21',
        name: 'ICOCA',
        category: 3
    },
    {
        id: '22',
        name: 'SUGOCA',
        category: 3
    },
    {
        id: '23',
        name: 'nimoca',
        category: 3
    },
    {
        id: '24',
        name: 'はやかけん（HAYAKAKEN）',
        category: 3
    },

    // QR支付
    {
        id: '25',
        name: 'au PAY',
        category: 4
    },
    {
        id: '26',
        name: 'd払い（d Barai）',
        category: 4
    },
    {
        id: '27',
        name: 'R Pay（楽天ペイ）',
        category: 4
    },
    {
        id: '28',
        name: 'PayPay',
        category: 4
    },
    {
        id: '29',
        name: 'メルペイ（MerPay）',
        category: 4
    },
    {
        id: '30',
        name: 'AEON Pay',
        category: 4
    },
    {
        id: '31',
        name: 'atone',
        category: 4
    },
    {
        id: '32',
        name: 'ANA Pay',
        category: 4
    },
    {
        id: '33',
        name: 'EPOS PAY',
        category: 4
    },
    {
        id: '34',
        name: 'giftee premo plus',
        category: 4
    },
    {
        id: '35',
        name: 'JAL Pay',
        category: 4
    },
    {
        id: '36',
        name: 'FamiPay',
        category: 4
    },
    {
        id: '37',
        name: 'Payどん',
        category: 4
    },
    {
        id: '38',
        name: 'My JCB Pay',
        category: 4
    },

    // 银行支付
    {
        id: '39',
        name: 'ゆうちょPay',
        category: 5
    },
    {
        id: '40',
        name: '銀行Pay',
        category: 5
    },
    {
        id: '41',
        name: 'OKI Pay',
        category: 5
    },
    {
        id: '42',
        name: 'こいPay（Koi Pay）',
        category: 5
    },
    {
        id: '43',
        name: 'はまPay',
        category: 5
    },
    {
        id: '44',
        name: 'YOKA!Pay（蓝色）',
        category: 5
    },
    {
        id: '45',
        name: 'YOKA!Pay（橙色）',
        category: 5
    },
    {
        id: '46',
        name: 'YOKA!Pay（粉色）',
        category: 5
    },
    {
        id: '47',
        name: 'K+（関西みらい）',
        category: 5
    },

    // 跨境支付
    {
        id: '48',
        name: 'GLN',
        category: 6
    },
    {
        id: '49',
        name: 'WeChat Pay',
        category: 6
    },
    {
        id: '50',
        name: 'UnionPay 银联',
        category: 6
    },
    {
        id: '51',
        name: 'Alipay+',
        category: 6
    },

    // 地方支付
    {
        id: '52',
        name: 'みきゃんアプリ',
        category: 7
    },
    {
        id: '53',
        name: 'Lu Vit Pay',
        category: 7
    },
    {
        id: '54',
        name: 'AlipayHK',
        category: 7
    },

    // 后付支付
    {
        id: '55',
        name: 'BNPJ (Buy Now Pay Japan)',
        category: 8
    },

    // 转账支付
    {
        id: '56',
        name: 'pring',
        category: 9
    },

    // 国家/地区
    {
        id: '57',
        name: '日本',
        category: 10
    },
    {
        id: '58',
        name: '美国',
        category: 10
    },
    {
        id: '59',
        name: '中国',
        category: 10
    },
    {
        id: '60',
        name: '香港',
        category: 10
    },
    {
        id: '61',
        name: '韩国',
        category: 10
    },
    {
        id: '62',
        name: '马来西亚',
        category: 10
    },
    {
        id: '63',
        name: '菲律宾',
        category: 10
    },
    {
        id: '64',
        name: '泰国',
        category: 10
    },
    {
        id: '65',
        name: '新加坡',
        category: 10
    },
    {
        id: '66',
        name: '澳门',
        category: 10
    },
    {
        id: '67',
        name: '蒙古',
        category: 10
    },
    {
        id: '68',
        name: '意大利',
        category: 10
    },
    {
        id: '69',
        name: '哈萨克斯坦',
        category: 10
    },

    // 其他国际钱包
    {
        id: '70',
        name: 'Kakao Pay (🟡pay)',
        category: 4
    },
    {
        id: '71',
        name: 'Touch \'n Go',
        category: 4
    },
    {
        id: '72',
        name: 'GCash',
        category: 4
    },
    {
        id: '73',
        name: 'TrueMoney',
        category: 4
    },
    {
        id: '74',
        name: 'Toss Pay',
        category: 4
    },
    {
        id: '75',
        name: 'Naver Pay',
        category: 4
    },
    {
        id: '76',
        name: 'SGQR（PayNow）',
        category: 4
    },
    {
        id: '77',
        name: 'Changi Pay',
        category: 4
    },
    {
        id: '78',
        name: 'MyPB',
        category: 4
    },
    {
        id: '79',
        name: 'MPay',
        category: 4
    },
    {
        id: '80',
        name: 'hiPay',
        category: 4
    },
    {
        id: '81',
        name: 'tinaba',
        category: 4
    },
    {
        id: '82',
        name: 'helloMoney',
        category: 4
    },
    {
        id: '83',
        name: 'AUB Pay',
        category: 4
    },
    {
        id: '84',
        name: 'EZ-Link Wallet',
        category: 4
    },
    {
        id: '85',
        name: 'Kaspi.kz',
        category: 4
    },
    {
        id: '86',
        name: 'K+（KBank）',
        category: 4
    },
    {
        id: '87',
        name: 'bigPay',
        category: 4
    }
];

// 定义连接数据
var links = [
    // 官方数字钱包关系
    {
        source: '0',
        target: '57'
    },

    // 国际信用卡品牌关系
    {
        source: '1',
        target: '3'
    },
    {
        source: '1',
        target: '5'
    },
    {
        source: '1',
        target: '7'
    },
    {
        source: '1',
        target: '58'
    },
    {
        source: '2',
        target: '3'
    },
    {
        source: '2',
        target: '5'
    },
    {
        source: '2',
        target: '58'
    },
    {
        source: '3',
        target: '58'
    },
    {
        source: '4',
        target: '57'
    },
    {
        source: '5',
        target: '58'
    },
    {
        source: '6',
        target: '8'
    },
    {
        source: '6',
        target: '58'
    },
    {
        source: '7',
        target: '58'
    },
    {
        source: '8',
        target: '58'
    },
    {
        source: '9',
        target: '59'
    },

    // E-wallet关系
    {
        source: '10',
        target: '57'
    },
    {
        source: '11',
        target: '57'
    },
    {
        source: '12',
        target: '57'
    },
    {
        source: '13',
        target: '57'
    },
    {
        source: '14',
        target: '57'
    },
    {
        source: '15',
        target: '4'
    },
    {
        source: '15',
        target: '57'
    },

    // 交通IC卡类关系
    {
        source: '16',
        target: '57'
    },
    {
        source: '17',
        target: '57'
    },
    {
        source: '17',
        target: '1'
    },
    {
        source: '18',
        target: '57'
    },
    {
        source: '19',
        target: '57'
    },
    {
        source: '20',
        target: '57'
    },
    {
        source: '21',
        target: '57'
    },
    {
        source: '22',
        target: '57'
    },
    {
        source: '23',
        target: '57'
    },
    {
        source: '24',
        target: '57'
    },

    // QR支付关系
    {
        source: '25',
        target: '57'
    },
    {
        source: '26',
        target: '57'
    },
    {
        source: '27',
        target: '57'
    },
    {
        source: '28',
        target: '57'
    },
    {
        source: '29',
        target: '57'
    },
    {
        source: '30',
        target: '57'
    },
    {
        source: '30',
        target: '13'
    },
    {
        source: '31',
        target: '57'
    },
    {
        source: '32',
        target: '57'
    },
    {
        source: '33',
        target: '57'
    },
    {
        source: '34',
        target: '57'
    },
    {
        source: '35',
        target: '57'
    },
    {
        source: '36',
        target: '57'
    },
    {
        source: '37',
        target: '57'
    },
    {
        source: '38',
        target: '4'
    },
    {
        source: '38',
        target: '57'
    },

    // 银行支付关系
    {
        source: '39',
        target: '57'
    },
    {
        source: '40',
        target: '57'
    },
    {
        source: '41',
        target: '57'
    },
    {
        source: '42',
        target: '57'
    },
    {
        source: '43',
        target: '57'
    },
    {
        source: '44',
        target: '57'
    },
    {
        source: '45',
        target: '57'
    },
    {
        source: '46',
        target: '57'
    },
    {
        source: '47',
        target: '57'
    },

    // 跨境支付关系
    {
        source: '48',
        target: '57'
    },
    {
        source: '49',
        target: '59'
    },
    {
        source: '50',
        target: '59'
    },
    {
        source: '51',
        target: '59'
    },

    // 地方支付关系
    {
        source: '52',
        target: '57'
    },
    {
        source: '53',
        target: '57'
    },
    {
        source: '54',
        target: '60'
    },

    // 后付支付关系
    {
        source: '55',
        target: '57'
    },

    // 转账支付关系
    {
        source: '56',
        target: '57'
    },

    // 其他国际钱包关系
    {
        source: '70',
        target: '61'
    },
    {
        source: '71',
        target: '62'
    },
    {
        source: '72',
        target: '63'
    },
    {
        source: '73',
        target: '64'
    },
    {
        source: '74',
        target: '61'
    },
    {
        source: '75',
        target: '61'
    },
    {
        source: '76',
        target: '65'
    },
    {
        source: '77',
        target: '65'
    },
    {
        source: '78',
        target: '62'
    },
    {
        source: '79',
        target: '66'
    },
    {
        source: '80',
        target: '67'
    },
    {
        source: '81',
        target: '68'
    },
    {
        source: '82',
        target: '63'
    },
    {
        source: '83',
        target: '63'
    },
    {
        source: '84',
        target: '65'
    },
    {
        source: '85',
        target: '69'
    },
    {
        source: '86',
        target: '64'
    },
    {
        source: '87',
        target: '62'
    },

    // Alipay+生态关系
    {
        source: '51',
        target: '72'
    },
    {
        source: '51',
        target: '73'
    },
    {
        source: '51',
        target: '71'
    },
    {
        source: '51',
        target: '70'
    },

    // 新增关系图补充
    {
        source: '1',
        target: '15'
    },
    {
        source: '2',
        target: '15'
    },
    {
        source: '1',
        target: '17'
    },
    {
        source: '2',
        target: '17'
    },
    {
        source: '17',
        target: '18'
    },
    {
        source: '2',
        target: '4'
    },
    {
        source: '2',
        target: '7'
    },
    {
        source: '1',
        target: '9'
    },
    {
        source: '3',
        target: '28'
    },
    {
        source: '3',
        target: '51'
    },
    {
        source: '3',
        target: '49'
    },
    {
        source: '3',
        target: '71'
    },
    {
        source: '3',
        target: '72'
    },
    {
        source: '3',
        target: '73'
    },
    {
        source: '3',
        target: '76'
    },
    {
        source: '3',
        target: '81'
    },
    {
        source: '3',
        target: '85'
    },
    {
        source: '3',
        target: '87'
    },
    {
        source: '4',
        target: '1'
    },
    {
        source: '4',
        target: '2'
    },
    {
        source: '4',
        target: '11'
    },
    {
        source: '4',
        target: '12'
    },
    {
        source: '4',
        target: '13'
    },
    {
        source: '4',
        target: '26'
    },
    {
        source: '4',
        target: '27'
    },
    {
        source: '4',
        target: '28'
    },
    {
        source: '4',
        target: '29'
    },
    {
        source: '4',
        target: '30'
    },
    {
        source: '4',
        target: '17'
    },
    {
        source: '4',
        target: '51'
    },
    {
        source: '4',
        target: '49'
    },
    {
        source: '5',
        target: '28'
    },
    {
        source: '5',
        target: '27'
    },
    {
        source: '5',
        target: '26'
    },
    {
        source: '5',
        target: '29'
    },
    {
        source: '5',
        target: '30'
    },
    {
        source: '5',
        target: '17'
    },
    {
        source: '5',
        target: '49'
    },
    {
        source: '5',
        target: '51'
    },
    {
        source: '5',
        target: '71'
    },
    {
        source: '5',
        target: '72'
    },
    {
        source: '5',
        target: '73'
    },
    {
        source: '5',
        target: '81'
    },
    {
        source: '5',
        target: '87'
    },
    {
        source: '6',
        target: '1'
    },
    {
        source: '6',
        target: '2'
    },
    {
        source: '7',
        target: '28'
    },
    {
        source: '7',
        target: '27'
    },
    {
        source: '7',
        target: '26'
    },
    {
        source: '7',
        target: '29'
    },
    {
        source: '7',
        target: '30'
    },
    {
        source: '7',
        target: '17'
    },
    {
        source: '7',
        target: '49'
    },
    {
        source: '7',
        target: '51'
    },
    {
        source: '8',
        target: '1'
    },
    {
        source: '8',
        target: '2'
    },
    {
        source: '8',
        target: '9'
    },
    {
        source: '8',
        target: '4'
    },
    {
        source: '8',
        target: '49'
    },
    {
        source: '8',
        target: '51'
    },
    {
        source: '9',
        target: '1'
    },
    {
        source: '9',
        target: '4'
    },
    {
        source: '9',
        target: '8'
    },
    {
        source: '9',
        target: '49'
    },
    {
        source: '9',
        target: '51'
    },
    {
        source: '9',
        target: '54'
    },
    {
        source: '9',
        target: '71'
    },
    {
        source: '9',
        target: '72'
    },
    {
        source: '9',
        target: '73'
    },
    {
        source: '9',
        target: '79'
    },
    {
        source: '9',
        target: '85'
    },
    {
        source: '9',
        target: '70'
    },
    {
        source: '9',
        target: '17'
    },
    {
        source: '9',
        target: '28'
    },
    {
        source: '9',
        target: '27'
    },
    {
        source: '9',
        target: '26'
    },
    {
        source: '9',
        target: '77'
    },
    {
        source: '9',
        target: '76'
    },
    {
        source: '51',
        target: '74'
    },
    {
        source: '51',
        target: '75'
    },
    {
        source: '51',
        target: '76'
    },
    {
        source: '51',
        target: '77'
    },
    {
        source: '51',
        target: '78'
    },
    {
        source: '51',
        target: '79'
    },
    {
        source: '51',
        target: '80'
    },
    {
        source: '51',
        target: '81'
    },
    {
        source: '51',
        target: '82'
    },
    {
        source: '51',
        target: '83'
    },
    {
        source: '51',
        target: '84'
    },
    {
        source: '51',
        target: '85'
    },
    {
        source: '51',
        target: '86'
    },
    {
        source: '51',
        target: '87'
    }
];



// ====== 0. 增删改查 ======
function filterNodesById(id, nodes, links) {
    const keepIds = new Set();
    keepIds.add(id);

    // 筛选相关 link
    const relatedLinks = links.filter(link => {
        if (link.source === id || link.target === id) {
            keepIds.add(link.source);
            keepIds.add(link.target);
            return true;
        }
        return false;
    });

    // 修改原 links 数组
    links.length = 0;
    links.push(...relatedLinks);

    // 修改原 nodes 数组
    const relatedNodes = nodes.filter(node => keepIds.has(node.id));
    nodes.length = 0;
    nodes.push(...relatedNodes);
}

function deleteNode(id, nodes, links) {
    // 删除节点
    const index = nodes.findIndex(node => node.id === id);
    if (index !== -1) nodes.splice(index, 1);

    // 删除相关链接
    for (let i = links.length - 1; i >= 0; i--) {
        if (links[i].source === id || links[i].target === id) {
            links.splice(i, 1);
        }
    }
}

function addNode(newNode, nodes) {
    if (!nodes.find(node => node.id === newNode.id)) {
        nodes.push(newNode);
    } else {
        console.warn("节点已存在：", newNode.id);
    }
}

function addLink(newLink, links) {
    links.push(newLink);
}

function updateNode(id, newProps, nodes) {
    const node = nodes.find(node => node.id === id);
    if (node) {
        Object.assign(node, newProps);
    } else {
        console.warn("找不到节点：", id);
    }
}

// deleteNode("57", nodes, links);



// ====== 1. 计算节点度数并设置大小 ======
function calculateNodeDegrees() {
    const degrees = {};
    // 初始化所有节点的度数为 0
    nodes.forEach(node => degrees[node.id] = 0);
    // 遍历每条边，source 和 target 的度数都加 1
    links.forEach(link => {
        degrees[link.source] = (degrees[link.source] || 0) + 1;
        degrees[link.target] = (degrees[link.target] || 0) + 1;
    });
    return degrees;
};


function setNodeSizes() {
    const degrees = calculateNodeDegrees();
    const maxDegree = Math.max(...Object.values(degrees));
    const minDegree = Math.min(...Object.values(degrees));
    const minSize = 12,
        maxSize = 50;

    nodes.forEach(node => {
        const degree = degrees[node.id];
        node.radius = (maxDegree === minDegree) ?
            (minSize + maxSize) / 2 :
            minSize + (maxSize - minSize) * (degree - minDegree) / (maxDegree - minDegree);
        node.degree = degree;
    });
    console.log('节点度数:', degrees);
};

// 计算并设置节点大小
setNodeSizes();

// ====== 2. SVG 与缩放组初始化 ======
const width = window.innerWidth;
const height = window.innerHeight;

const svg = d3.select('#container')
    .append('svg')
    .attr('width', width)
    .attr('height', height);

const zoomGroup = svg.append('g').attr('class', 'zoom-group');

// ====== 3. 更新 center_height 并重启仿真 ======
var center_height = 3 * height / 4; // 初始设置中心高度

// ====== 4. 力导向仿真 ======
const simulation = d3.forceSimulation(nodes)
    .force('link', d3.forceLink(links).id(d => d.id).distance(100))
    .force('charge', d3.forceManyBody().strength(-300))
    .force('center', d3.forceCenter(width / 2, center_height))
    .force('collision', d3.forceCollide().radius(d => d.radius + 2));

// ====== 5. 渲染连线 ======
const link = zoomGroup.append('g')
    .attr('class', 'links')
    .selectAll('line')
    .data(links)
    .enter().append('line')
    .attr('class', 'link')
    .style('stroke', d => {
        const sourceNode = nodes.find(n => n.id === d.source.id || n.id === d.source);
        return categories[sourceNode.category].color;
    })
    .style('stroke-opacity', 0.6)
    .style('stroke-width', 2);

// ====== 6. 渲染节点与标签 ======
const node = zoomGroup.append('g')
    .attr('class', 'nodes')
    .selectAll('g')
    .data(nodes)
    .enter().append('g')
    .attr('class', 'node')
    .call(controller());

node.append('circle')
    .attr('r', d => d.radius)
    .attr('fill', d => categories[d.category].color);




// 辅助函数：构建邻接映射
const linkedById = {};
links.forEach(d => {
    linkedById[`${d.source.id},${d.target.id}`] = true;
    linkedById[`${d.target.id},${d.source.id}`] = true;
});

function isConnected(a, b) {
    return a.id === b.id || linkedById[`${a.id},${b.id}`];
}

// 添加事件
node
    .on("mouseover", function (event, d) {
        node.select("circle")
            .style("opacity", o => isConnected(d, o) ? 1 : 0.1);

        node.select("text")
            .style("opacity", o => isConnected(d, o) ? 1 : 0.1);

        link
            .style("opacity", l => l.source.id === d.id || l.target.id === d.id ? 1 : 0.1)
        link
            .style("opacity", l => (l.source.id === d.id || l.target.id === d.id) ? 1 : 0.1);

    })
    .on("mouseout", function () {
        node.select("circle").style("opacity", 1);
        node.select("text").style("opacity", 1);
        link.style("opacity", 1)
    });



node.append('text')
    .text(d => d.name.length > 10 ? d.name.substring(0, 10) + '...' : d.name)
    .style('font-size', d => Math.max(8, Math.min(12, d.radius / 3)) + 'px');


function controller() {
    return d3.drag()
        .on('start', dragstarted)
        .on('drag', dragged)
        .on('end', dragended)
};



// ====== 7. 拖拽行为 ======
function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

// ====== 8. 更新节点位置 ======
simulation.on('tick', () => {
    link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y);

    node
        .attr('transform', d => `translate(${d.x},${d.y})`);
});

// ====== 9. 高亮节点和链接 ======

function highlightNodeAndLinksById(targetId) {
    const targetNode = nodes.find(n => n.id === targetId);
    if (!targetNode) return;

    node.select("circle")
        .style("opacity", o => isConnected(targetNode, o) ? 1 : 0.1);

    node.select("text")
        .style("opacity", o => isConnected(targetNode, o) ? 1 : 0.1);

    link.style("opacity", l => (
        l.source.id === targetId || l.target.id === targetId
    ) ? 1 : 0.1);
}

function resetHighlight() {
    node.select("circle").style("opacity", 1);
    node.select("text").style("opacity", 1);
    link.style("opacity", 1);
}




// ====== 10. 窗口尺寸变化处理 ======
window.addEventListener('resize', function () {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    svg.attr('width', newWidth).attr('height', newHeight);
    simulation.force('center', d3.forceCenter(newWidth / 2, newHeight / 2));
    simulation.alpha(0.3).restart(); // 重新启动仿真
});