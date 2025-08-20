// 初始化ECharts实例
var chart = echarts.init(document.getElementById('container'));

// 定义节点分类
var categories = [
    { name: '官方数字钱包', itemStyle: { color: '#1f77b4' }},
    { name: '国际信用卡品牌', itemStyle: { color: '#ff7f0e' } },
    { name: 'E-wallet', itemStyle: { color: '#1f77b4' }},
    { name: '交通IC卡类', itemStyle: { color: '#1f77b4' }},
    { name: 'QR支付', itemStyle: { color: '#2ca02c' }},
    { name: '银行支付', itemStyle: { color: '#2ca02c' }},
    { name: '跨境支付', itemStyle: { color: '#2ca02c' }},
    { name: '地方支付', itemStyle: { color: '#2ca02c' }},
    { name: '后付支付', itemStyle: { color: '#2ca02c' }},
    { name: '转账支付', itemStyle: { color: '#2ca02c' }},
    { name: '国家/地区', itemStyle: { color: '#d62728' }}
];

// 定义节点数据（初始symbolSize将被动态计算覆盖）
var nodes = [
    // 官方数字钱包
    { id: '0', name: 'EXPO2025 DIGITAL WALLET', category: 0 },
    
    // 国际信用卡品牌
    { id: '1', name: 'Apple Pay', category: 1 },
    { id: '2', name: 'Google Pay', category: 1 },
    { id: '3', name: 'VISA', category: 1 },
    { id: '4', name: 'JCB', category: 1 },
    { id: '5', name: 'Mastercard', category: 1 },
    { id: '6', name: 'Diners Club International', category: 1 },
    { id: '7', name: 'American Express (AMEX)', category: 1 },
    { id: '8', name: 'Discover', category: 1 },
    { id: '9', name: 'UnionPay', category: 1 },
    
    // E-wallet
    { id: '10', name: 'iD', category: 2 },
    { id: '11', name: 'Rakuten Edy', category: 2 },
    { id: '12', name: 'nanaco', category: 2 },
    { id: '13', name: 'WAON', category: 2 },
    { id: '14', name: 'PiTaPa', category: 2 },
    { id: '15', name: 'QUICPay', category: 2 },
    
    // 交通IC卡类
    { id: '16', name: 'Kitaca', category: 3 },
    { id: '17', name: 'Suica', category: 3 },
    { id: '18', name: 'PASMO', category: 3 },
    { id: '19', name: 'TOICA', category: 3 },
    { id: '20', name: 'manaca', category: 3 },
    { id: '21', name: 'ICOCA', category: 3 },
    { id: '22', name: 'SUGOCA', category: 3 },
    { id: '23', name: 'nimoca', category: 3 },
    { id: '24', name: 'はやかけん（HAYAKAKEN）', category: 3 },
    
    // QR支付
    { id: '25', name: 'au PAY', category: 4 },
    { id: '26', name: 'd払い（d Barai）', category: 4 },
    { id: '27', name: 'R Pay（楽天ペイ）', category: 4 },
    { id: '28', name: 'PayPay', category: 4 },
    { id: '29', name: 'メルペイ（MerPay）', category: 4 },
    { id: '30', name: 'AEON Pay', category: 4 },
    { id: '31', name: 'atone', category: 4 },
    { id: '32', name: 'ANA Pay', category: 4 },
    { id: '33', name: 'EPOS PAY', category: 4 },
    { id: '34', name: 'giftee premo plus', category: 4 },
    { id: '35', name: 'JAL Pay', category: 4 },
    { id: '36', name: 'FamiPay', category: 4 },
    { id: '37', name: 'Payどん', category: 4 },
    { id: '38', name: 'My JCB Pay', category: 4 },
    
    // 银行支付
    { id: '39', name: 'ゆうちょPay', category: 5 },
    { id: '40', name: '銀行Pay', category: 5 },
    { id: '41', name: 'OKI Pay', category: 5 },
    { id: '42', name: 'こいPay（Koi Pay）', category: 5 },
    { id: '43', name: 'はまPay', category: 5 },
    { id: '44', name: 'YOKA!Pay（蓝色）', category: 5 },
    { id: '45', name: 'YOKA!Pay（橙色）', category: 5 },
    { id: '46', name: 'YOKA!Pay（粉色）', category: 5 },
    { id: '47', name: 'K+（関西みらい）', category: 5 },
    
    // 跨境支付
    { id: '48', name: 'GLN', category: 6 },
    { id: '49', name: 'WeChat Pay', category: 6 },
    { id: '50', name: 'UnionPay 银联', category: 6 },
    { id: '51', name: 'Alipay+', category: 6 },
    
    // 地方支付
    { id: '52', name: 'みきゃんアプリ', category: 7 },
    { id: '53', name: 'Lu Vit Pay', category: 7 },
    { id: '54', name: 'AlipayHK', category: 7 },
    
    // 后付支付
    { id: '55', name: 'BNPJ (Buy Now Pay Japan)', category: 8 },
    
    // 转账支付
    { id: '56', name: 'pring', category: 9 },
    
    // 国家/地区
    { id: '57', name: '日本', category: 10 },
    { id: '58', name: '美国', category: 10 },
    { id: '59', name: '中国', category: 10 },
    { id: '60', name: '香港', category: 10 },
    { id: '61', name: '韩国', category: 10 },
    { id: '62', name: '马来西亚', category: 10 },
    { id: '63', name: '菲律宾', category: 10 },
    { id: '64', name: '泰国', category: 10 },
    { id: '65', name: '新加坡', category: 10 },
    { id: '66', name: '澳门', category: 10 },
    { id: '67', name: '蒙古', category: 10 },
    { id: '68', name: '意大利', category: 10 },
    { id: '69', name: '哈萨克斯坦', category: 10 },
    
    // 其他国际钱包
    { id: '70', name: 'Kakao Pay (🟡pay)', category: 4 },
    { id: '71', name: 'Touch \'n Go', category: 4 },
    { id: '72', name: 'GCash', category: 4 },
    { id: '73', name: 'TrueMoney', category: 4 },
    { id: '74', name: 'Toss Pay', category: 4 },
    { id: '75', name: 'Naver Pay', category: 4 },
    { id: '76', name: 'SGQR（PayNow）', category: 4 },
    { id: '77', name: 'Changi Pay', category: 4 },
    { id: '78', name: 'MyPB', category: 4 },
    { id: '79', name: 'MPay', category: 4 },
    { id: '80', name: 'hiPay', category: 4 },
    { id: '81', name: 'tinaba', category: 4 },
    { id: '82', name: 'helloMoney', category: 4 },
    { id: '83', name: 'AUB Pay', category: 4 },
    { id: '84', name: 'EZ-Link Wallet', category: 4 },
    { id: '85', name: 'Kaspi.kz', category: 4 },
    { id: '86', name: 'K+（KBank）', category: 4 },
    { id: '87', name: 'bigPay', category: 4 }
];

// 定义边数据（关系）
var links = [
    // 官方数字钱包关系
    { source: '0', target: '57', value: 10, lineStyle: { color: '#1f77b4' } },
    
    // 国际信用卡品牌关系
    { source: '1', target: '3', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '1', target: '5', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '1', target: '7', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '1', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '2', target: '3', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '2', target: '5', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '2', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '3', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '4', target: '57', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '5', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '6', target: '8', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '6', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '7', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '8', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '9', target: '59', value: 10, lineStyle: { color: '#ff7f0e' } },
    
    // E-wallet关系
    { source: '10', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '11', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '12', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '13', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '14', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '15', target: '4', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '15', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    
    // 交通IC卡类关系
    { source: '16', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '17', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '17', target: '1', value: 10, lineStyle: { color: '#d62728' } },
    { source: '18', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '19', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '20', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '21', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '22', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '23', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '24', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    
    // QR支付关系
    { source: '25', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '26', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '27', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '28', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '29', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '30', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '30', target: '13', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '31', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '32', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '33', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '34', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '35', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '36', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '37', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '38', target: '4', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '38', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    
    // 银行支付关系
    { source: '39', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '40', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '41', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '42', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '43', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '44', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '45', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '46', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '47', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    
    // 跨境支付关系
    { source: '48', target: '57', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '49', target: '59', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '50', target: '59', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '51', target: '59', value: 10, lineStyle: { color: '#e377c2' } },
    
    // 地方支付关系
    { source: '52', target: '57', value: 10, lineStyle: { color: '#7f7f7f' } },
    { source: '53', target: '57', value: 10, lineStyle: { color: '#7f7f7f' } },
    { source: '54', target: '60', value: 10, lineStyle: { color: '#7f7f7f' } },
    
    // 后付支付关系
    { source: '55', target: '57', value: 10, lineStyle: { color: '#bcbd22' } },
    
    // 转账支付关系
    { source: '56', target: '57', value: 10, lineStyle: { color: '#17becf' } },
    
    // 其他国际钱包关系
    { id: '70', name: 'Kakao Pay (🟡pay)', category: 4 },
    { id: '71', name: 'Touch \'n Go', category: 4 },
    { id: '72', name: 'GCash', category: 4 },
    { id: '73', name: 'TrueMoney', category: 4 },
    { id: '74', name: 'Toss Pay', category: 4 },
    { id: '75', name: 'Naver Pay', category: 4 },
    { id: '76', name: 'SGQR（PayNow）', category: 4 },
    { id: '77', name: 'Changi Pay', category: 4 },
    { id: '78', name: 'MyPB', category: 4 },
    { id: '79', name: 'MPay', category: 4 },
    { id: '80', name: 'hiPay', category: 4 },
    { id: '81', name: 'tinaba', category: 4 },
    { id: '82', name: 'helloMoney', category: 4 },
    { id: '83', name: 'AUB Pay', category: 4 },
    { id: '84', name: 'EZ-Link Wallet', category: 4 },
    { id: '85', name: 'Kaspi.kz', category: 4 },
    { id: '86', name: 'K+（KBank）', category: 4 },
    { id: '87', name: 'bigPay', category: 4 }
];

// 定义边数据（关系）
var links = [
    // 官方数字钱包关系
    { source: '0', target: '57', value: 10, lineStyle: { color: '#1f77b4' } },
    
    // 国际信用卡品牌关系
    { source: '1', target: '3', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '1', target: '5', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '1', target: '7', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '1', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '2', target: '3', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '2', target: '5', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '2', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '3', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '4', target: '57', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '5', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '6', target: '8', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '6', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '7', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '8', target: '58', value: 10, lineStyle: { color: '#ff7f0e' } },
    { source: '9', target: '59', value: 10, lineStyle: { color: '#ff7f0e' } },
    
    // E-wallet关系
    { source: '10', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '11', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '12', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '13', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '14', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '15', target: '4', value: 10, lineStyle: { color: '#2ca02c' } },
    { source: '15', target: '57', value: 10, lineStyle: { color: '#2ca02c' } },
    
    // 交通IC卡类关系
    { source: '16', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '17', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '17', target: '1', value: 10, lineStyle: { color: '#d62728' } },
    { source: '18', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '19', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '20', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '21', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '22', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '23', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    { source: '24', target: '57', value: 10, lineStyle: { color: '#d62728' } },
    
    // QR支付关系
    { source: '25', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '26', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '27', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '28', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '29', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '30', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '30', target: '13', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '31', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '32', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '33', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '34', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '35', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '36', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '37', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '38', target: '4', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '38', target: '57', value: 10, lineStyle: { color: '#9467bd' } },
    
    // 银行支付关系
    { source: '39', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '40', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '41', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '42', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '43', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '44', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '45', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '46', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    { source: '47', target: '57', value: 10, lineStyle: { color: '#8c564b' } },
    
    // 跨境支付关系
    { source: '48', target: '57', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '49', target: '59', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '50', target: '59', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '51', target: '59', value: 10, lineStyle: { color: '#e377c2' } },
    
    // 地方支付关系
    { source: '52', target: '57', value: 10, lineStyle: { color: '#7f7f7f' } },
    { source: '53', target: '57', value: 10, lineStyle: { color: '#7f7f7f' } },
    { source: '54', target: '60', value: 10, lineStyle: { color: '#7f7f7f' } },
    
    // 后付支付关系
    { source: '55', target: '57', value: 10, lineStyle: { color: '#bcbd22' } },
    
    // 转账支付关系
    { source: '56', target: '57', value: 10, lineStyle: { color: '#17becf' } },
    
    // 其他国际钱包关系
    { source: '70', target: '61', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '71', target: '62', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '72', target: '63', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '73', target: '64', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '74', target: '61', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '75', target: '61', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '76', target: '65', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '77', target: '65', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '78', target: '62', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '79', target: '66', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '80', target: '67', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '81', target: '68', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '82', target: '63', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '83', target: '63', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '84', target: '65', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '85', target: '69', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '86', target: '64', value: 10, lineStyle: { color: '#9467bd' } },
    { source: '87', target: '62', value: 10, lineStyle: { color: '#9467bd' } },
    
    // Alipay+生态关系
    { source: '51', target: '72', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '51', target: '73', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '51', target: '71', value: 10, lineStyle: { color: '#e377c2' } },
    { source: '51', target: '70', value: 10, lineStyle: { color: '#e377c2' } },

    //新增关系图补充

    // Apple Pay & Google Pay 扩展连线
    { source: '1', target: '15', value: 10, lineStyle: { color: '#ff7f0e' } }, // Apple Pay → QUICPay
    { source: '2', target: '15', value: 10, lineStyle: { color: '#ff7f0e' } }, // Google Pay → QUICPay
    { source: '1', target: '17', value: 10, lineStyle: { color: '#ff7f0e' } }, // Apple Pay → Suica
    { source: '2', target: '17', value: 10, lineStyle: { color: '#ff7f0e' } }, // Google Pay → Suica

    // Suica 与 PASMO 的系统兼容
    { source: '17', target: '18', value: 5, lineStyle: { type: 'dashed', color: '#999' } },

    // Google Pay 与主要信用卡及国家
    { source: '2', target: '3', value: 10, lineStyle: { color: '#ff7f0e' } }, // Google Pay → VISA
    { source: '2', target: '5', value: 10, lineStyle: { color: '#ff7f0e' } }, // Google Pay → Mastercard
    { source: '2', target: '4', value: 10, lineStyle: { color: '#ff7f0e' } }, // Google Pay → JCB
    { source: '2', target: '7', value: 10, lineStyle: { color: '#ff7f0e' } }, // Google Pay → AMEX

    // apple pay to Japan
    { source: '1', target: '9', value: 10, lineStyle: { color: '#ff7f0e' } }, // Apple Pay → UnionPay

    // visa
    { source: '3', target: '28', value: 8, lineStyle: { color: '#ff7f0e' } }, // VISA → PayPay
    { source: '3', target: '51', value: 8, lineStyle: { color: '#e377c2' } }, // VISA → Alipay+
    { source: '3', target: '49', value: 8, lineStyle: { color: '#e377c2' } },  // VISA → WeChat Pay

    { source: '3', target: '71', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → Touch 'n Go
    { source: '3', target: '72', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → GCash
    { source: '3', target: '73', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → TrueMoney
    { source: '3', target: '76', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → SGQR（PayNow）
    { source: '3', target: '81', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → tinaba
    { source: '3', target: '85', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → Kaspi.kz
    { source: '3', target: '87', value: 10, lineStyle: { color: '#e377c2' } }, // VISA → bigPay

    // JCB
    { source: '4', target: '1', value: 10, lineStyle: { color: '#ff7f0e' } }, // JCB → Apple Pay
    { source: '4', target: '2', value: 10, lineStyle: { color: '#ff7f0e' } }, // JCB → Google Pay
    { source: '4', target: '11', value: 8, lineStyle: { color: '#2ca02c' } }, // JCB → Rakuten Edy
    { source: '4', target: '12', value: 8, lineStyle: { color: '#2ca02c' } }, // JCB → nanaco
    { source: '4', target: '13', value: 8, lineStyle: { color: '#2ca02c' } }, // JCB → WAON
    { source: '4', target: '26', value: 8, lineStyle: { color: '#9467bd' } }, // JCB → d払い（d Barai）
    { source: '4', target: '27', value: 8, lineStyle: { color: '#9467bd' } }, // JCB → R Pay
    { source: '4', target: '28', value: 8, lineStyle: { color: '#9467bd' } }, // JCB → PayPay
    { source: '4', target: '29', value: 8, lineStyle: { color: '#9467bd' } }, // JCB → メルペイ
    { source: '4', target: '30', value: 8, lineStyle: { color: '#9467bd' } }, // JCB → AEON Pay
    { source: '4', target: '17', value: 8, lineStyle: { color: '#d62728' } }, // JCB → Suica
    { source: '4', target: '51', value: 8, lineStyle: { color: '#e377c2' } }, // JCB → Alipay+
    { source: '4', target: '49', value: 8, lineStyle: { color: '#e377c2' } }, // JCB → WeChat Pay


    //Mastercard
    { source: '5', target: '28', value: 10, lineStyle: { color: '#ff7f0e' } }, // Mastercard → PayPay
    { source: '5', target: '27', value: 10, lineStyle: { color: '#ff7f0e' } }, // Mastercard → R Pay
    { source: '5', target: '26', value: 10, lineStyle: { color: '#ff7f0e' } }, // Mastercard → d払い
    { source: '5', target: '29', value: 10, lineStyle: { color: '#ff7f0e' } }, // Mastercard → メルペイ
    { source: '5', target: '30', value: 10, lineStyle: { color: '#ff7f0e' } }, // Mastercard → AEON Pay
    { source: '5', target: '17', value: 10, lineStyle: { color: '#d62728' } }, // Mastercard → Suica
    { source: '5', target: '49', value: 10, lineStyle: { color: '#e377c2' } }, // Mastercard → WeChat Pay
    { source: '5', target: '51', value: 10, lineStyle: { color: '#e377c2' } }, // Mastercard → Alipay+
    { source: '5', target: '71', value: 10, lineStyle: { color: '#e377c2' } }, // Mastercard → Touch 'n Go
    { source: '5', target: '72', value: 10, lineStyle: { color: '#e377c2' } }, // Mastercard → GCash
    { source: '5', target: '73', value: 10, lineStyle: { color: '#e377c2' } }, // Mastercard → TrueMoney
    { source: '5', target: '81', value: 10, lineStyle: { color: '#e377c2' } }, // Mastercard → tinaba
    { source: '5', target: '87', value: 10, lineStyle: { color: '#e377c2' } },  // Mastercard → bigPay

    //Diners Club International
    { source: '6', target: '1', value: 10, lineStyle: { color: '#ff7f0e' } }, // Diners Club → Apple Pay
    { source: '6', target: '2', value: 10, lineStyle: { color: '#ff7f0e' } }, // Diners Club → Google Pay

    //Express
    { source: '7', target: '28', value: 10, lineStyle: { color: '#ff7f0e' } }, // AMEX → PayPay
    { source: '7', target: '27', value: 10, lineStyle: { color: '#ff7f0e' } }, // AMEX → R Pay
    { source: '7', target: '26', value: 10, lineStyle: { color: '#ff7f0e' } }, // AMEX → d払い
    { source: '7', target: '29', value: 10, lineStyle: { color: '#ff7f0e' } }, // AMEX → メルペイ
    { source: '7', target: '30', value: 10, lineStyle: { color: '#ff7f0e' } }, // AMEX → AEON Pay
    { source: '7', target: '17', value: 10, lineStyle: { color: '#d62728' } }, // AMEX → Suica
    { source: '7', target: '49', value: 10, lineStyle: { color: '#e377c2' } }, // AMEX → WeChat Pay
    { source: '7', target: '51', value: 10, lineStyle: { color: '#e377c2' } }, // AMEX → Alipay+

    // Discover
    { source: '8', target: '1', value: 10, lineStyle: { color: '#ff7f0e' } }, // Discover → Apple Pay
    { source: '8', target: '2', value: 10, lineStyle: { color: '#ff7f0e' } }, // Discover → Google Pay
    { source: '8', target: '9', value: 8, lineStyle: { color: '#e377c2' } },  // Discover → UnionPay
    { source: '8', target: '4', value: 8, lineStyle: { color: '#e377c2' } },  // Discover → JCB
    { source: '8', target: '49', value: 8, lineStyle: { color: '#e377c2' } }, // Discover → WeChat Pay
    { source: '8', target: '51', value: 8, lineStyle: { color: '#e377c2' } },  // Discover → Alipay+

    //union pay
    { source: '9', target: '1', value: 10, lineStyle: { color: '#ff7f0e' } },  // UnionPay → Apple Pay
    { source: '9', target: '4', value: 8, lineStyle: { type: 'dashed', color: '#ccc' } }, // UnionPay ↔ JCB
    { source: '9', target: '8', value: 8, lineStyle: { color: '#e377c2' } },  // UnionPay → Discover
    { source: '9', target: '49', value: 10, lineStyle: { color: '#e377c2' } }, // UnionPay → WeChat Pay
    { source: '9', target: '51', value: 10, lineStyle: { color: '#e377c2' } }, // UnionPay → Alipay+
    { source: '9', target: '54', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → AlipayHK
    { source: '9', target: '71', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → Touch 'n Go
    { source: '9', target: '72', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → GCash
    { source: '9', target: '73', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → TrueMoney
    { source: '9', target: '79', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → MPay
    { source: '9', target: '85', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → Kaspi.kz
    { source: '9', target: '70', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → Kakao Pay
    { source: '9', target: '17', value: 8, lineStyle: { color: '#d62728' } }, // UnionPay → Suica
    { source: '9', target: '28', value: 10, lineStyle: { color: '#9467bd' } }, // UnionPay → PayPay
    { source: '9', target: '27', value: 10, lineStyle: { color: '#9467bd' } }, // UnionPay → R Pay
    { source: '9', target: '26', value: 10, lineStyle: { color: '#9467bd' } }, // UnionPay → d払い
    { source: '9', target: '77', value: 8, lineStyle: { color: '#e377c2' } }, // UnionPay → Changi Pay
    { source: '9', target: '76', value: 8, lineStyle: { color: '#e377c2' } },  // UnionPay → SGQR（PayNow）

    // alipay+
    // 合作钱包（ID 已匹配图中）
    { source: '51', target: '71', value: 10, lineStyle: { color: '#e377c2' } }, // → Touch 'n Go
    { source: '51', target: '72', value: 10, lineStyle: { color: '#e377c2' } }, // → GCash
    { source: '51', target: '73', value: 10, lineStyle: { color: '#e377c2' } }, // → TrueMoney
    { source: '51', target: '70', value: 10, lineStyle: { color: '#e377c2' } }, // → Kakao Pay
    { source: '51', target: '54', value: 10, lineStyle: { color: '#e377c2' } }, // → AlipayHK
    { source: '51', target: '74', value: 10, lineStyle: { color: '#e377c2' } }, // → Toss Pay
    { source: '51', target: '75', value: 10, lineStyle: { color: '#e377c2' } }, // → Naver Pay
    { source: '51', target: '76', value: 10, lineStyle: { color: '#e377c2' } }, // → SGQR（PayNow）
    { source: '51', target: '77', value: 10, lineStyle: { color: '#e377c2' } }, // → Changi Pay
    { source: '51', target: '78', value: 10, lineStyle: { color: '#e377c2' } }, // → MyPB
    { source: '51', target: '79', value: 10, lineStyle: { color: '#e377c2' } }, // → MPay
    { source: '51', target: '80', value: 10, lineStyle: { color: '#e377c2' } }, // → hiPay
    { source: '51', target: '81', value: 10, lineStyle: { color: '#e377c2' } }, // → tinaba
    { source: '51', target: '82', value: 10, lineStyle: { color: '#e377c2' } }, // → helloMoney
    { source: '51', target: '83', value: 10, lineStyle: { color: '#e377c2' } }, // → AUB Pay
    { source: '51', target: '84', value: 10, lineStyle: { color: '#e377c2' } }, // → EZ-Link Wallet
    { source: '51', target: '85', value: 10, lineStyle: { color: '#e377c2' } }, // → Kaspi.kz
    { source: '51', target: '86', value: 10, lineStyle: { color: '#e377c2' } }, // → K+（KBank）
    { source: '51', target: '87', value: 10, lineStyle: { color: '#e377c2' } }  // → bigPay
];

// 计算每个节点的度数（连接数）
function calculateNodeDegrees() {
    var degrees = {};
    
    // 初始化所有节点的度数为0
    nodes.forEach(function(node) {
        degrees[node.id] = 0;
    });
    
    // 计算每个节点的度数
    links.forEach(function(link) {
        degrees[link.source] = (degrees[link.source] || 0) + 1;
        degrees[link.target] = (degrees[link.target] || 0) + 1;
    });
    
    return degrees;
}

// 根据度数设置节点大小
function setNodeSizes() {
    var degrees = calculateNodeDegrees();
    var maxDegree = Math.max(...Object.values(degrees));
    var minDegree = Math.min(...Object.values(degrees));
    
    // 设置节点大小范围
    var minSize = 10;
    var maxSize = 80;
    
    nodes.forEach(function(node) {
        var degree = degrees[node.id];
        // 线性映射：度数越大，节点越大
        if (maxDegree === minDegree) {
            node.symbolSize = (minSize + maxSize) / 2;
        } else {
            node.symbolSize = minSize + (maxSize - minSize) * (degree - minDegree) / (maxDegree - minDegree);
        }
        // 设置value属性用于显示
        node.value = degree;
        // 添加度数信息到节点名称（可选）
        node.label = {
            show: true,
            formatter: function(params) {
                return params.data.name + '\\n(' + degree + ')';
            },
            fontSize: Math.max(8, Math.min(14, node.symbolSize / 4))
        };
    });
    
    console.log('节点度数统计:', degrees);
    console.log('最大度数:', maxDegree, '最小度数:', minDegree);
}

// 设置节点大小
setNodeSizes();

// 配置选项
var option = {
    backgroundColor: '#ffffff', // ✅ 设置背景颜色
    title: {
        text: '',
        top: 'top',
        left: 'left'
    },
    tooltip: {
        formatter: function(params) {
            if (params.dataType === 'node') {
                return params.data.name + '<br/>连接数: ' + params.data.value;
            } else if (params.dataType === 'edge') {
                return params.data.source + ' → ' + params.data.target;
            }
        }
    },
    legend: [{
        data: categories.map(function(a) {
            return a.name;
        }),
        orient: 'vertical',
        left: 'right',
        top: 'middle'
    }],
    series: [{
        name: '支付系统关系图',
        type: 'graph',
        layout: 'force',
        data: nodes,
        links: links,
        categories: categories,
        roam: true,
        label: {
            show: true,
            position: 'inside',
            fontSize: 10,
            fontWeight: 'bold'
        },
        labelLayout: {
            hideOverlap: true
        },
        emphasis: {
            focus: 'adjacency',
            lineStyle: {
                width: 3
            }
        },
        force: {
            repulsion: 1000,
            gravity: 0.1,
            edgeLength: [50, 200],
            layoutAnimation: true
        },
        lineStyle: {
            color: 'source',
            curveness: 0.1,
            width: 2
        }
    }]
};

// 使用配置项显示图表
chart.setOption(option);

// 窗口大小改变时重新调整图表
window.addEventListener('resize', function() {
    chart.resize();
});

