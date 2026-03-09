// 35个元素的完整数据（前20号 + 15个其他常用和稀有气体）
const elements = [
    // 前20号元素
    {
        number: 1,
        name: "氢",
        enName: "Hydrogen",
        symbol: "H",
        origin: "源于希腊语---hydro（水）genes（生成），意思是\"生成水的物质\"，因为氢燃烧会生成水",
        mass: "1.008",
        position: "第一周期IA族（非金属）",
        appearance: "无色、无味气体",
        property: "密度：0.0899 g/L（0℃），最轻元素，可燃。常见价态：+1，-1。存在形式：水、有机物、酸。应用：燃料电池、合成氨",
        wrongOptions: ["He", "Hg", "Ho"]
    },
    {
        number: 2,
        name: "氦",
        enName: "Helium",
        symbol: "He",
        origin: "源于希腊语---helios（太阳），氦最早是在太阳光谱中被发现，因此以\"太阳\"命名",
        mass: "4.0026",
        position: "第一周期0族（稀有气体）",
        appearance: "无色惰性气体",
        property: "极低沸点，化学性质极稳定。常见价态：0。存在形式：天然气。应用：液氦冷却、气球",
        wrongOptions: ["H", "Ne", "Li"]
    },
    {
        number: 3,
        name: "锂",
        enName: "Lithium",
        symbol: "Li",
        origin: "源于希腊语---lithos（石头），因为锂最早从矿石中发现，而不是从植物或动物中分离",
        mass: "6.94",
        position: "第二周期IA族（碱金属）",
        appearance: "银白色软金属",
        property: "密度低，化学性质活泼。常见价态：+1。存在形式：锂辉石、盐湖。应用：锂电池",
        wrongOptions: ["L", "Be", "Na"]
    },
    {
        number: 4,
        name: "铍",
        enName: "Beryllium",
        symbol: "Be",
        origin: "名称来自矿物---beryl（绿柱石），铍是从绿柱石矿物中发现的",
        mass: "9.0122",
        position: "第二周期IIA族",
        appearance: "灰白色金属",
        property: "硬而脆，熔点高。常见价态：+2。存在形式：绿柱石。应用：航空材料",
        wrongOptions: ["B", "Ba", "Bi"]
    },
    {
        number: 5,
        name: "硼",
        enName: "Boron",
        symbol: "B",
        origin: "源于阿拉伯语buraq，波斯语burah，意为\"硼砂\"（一种天然矿物）",
        mass: "10.81",
        position: "第二周期IIIA族",
        appearance: "黑色固体",
        property: "硬度高，熔点高。常见价态：+3。存在形式：硼砂。应用：玻璃工业",
        wrongOptions: ["Bo", "Br", "Be"]
    },
    {
        number: 6,
        name: "碳",
        enName: "Carbon",
        symbol: "C",
        origin: "源于拉丁语---carbo（煤、炭），因为碳常以煤炭或木炭形式存在",
        mass: "12.011",
        position: "第二周期IVA族",
        appearance: "石墨（黑）、金刚石（透明）",
        property: "多种同素异形体。常见价态：+4，+2。存在形式：有机物、CO₂。应用：燃料、材料",
        wrongOptions: ["Ca", "Co", "Cu"]
    },
    {
        number: 7,
        name: "氮",
        enName: "Nitrogen",
        symbol: "N",
        origin: "源于希腊语---nitron（硝石）genes（生成），意思是\"生成硝石的物质\"",
        mass: "14.007",
        position: "第二周期VA族",
        appearance: "无色气体",
        property: "空气中占78%。常见价态：-3~+5。存在形式：空气。应用：化肥、液氮",
        wrongOptions: ["Na", "Ne", "Ni"]
    },
    {
        number: 8,
        name: "氧",
        enName: "Oxygen",
        symbol: "O",
        origin: "源于希腊语---oxys（酸）genes（生成），原意为\"生成酸的物质\"（早期误以为所有酸都含氧）",
        mass: "15.999",
        position: "第二周期VIA族",
        appearance: "无色气体",
        property: "支持燃烧。常见价态：-2。存在形式：水、氧化物。应用：医疗供氧",
        wrongOptions: ["Ox", "Os", "Au"]
    },
    {
        number: 9,
        name: "氟",
        enName: "Fluorine",
        symbol: "F",
        origin: "源于拉丁语---fluere（流动），因为含氟矿物萤石在冶炼中能促进矿石\"流动\"",
        mass: "18.998",
        position: "第二周期VIIA族（卤素）",
        appearance: "淡黄色气体",
        property: "最强氧化性非金属。常见价态：-1。存在形式：氟化物。应用：氟塑料、牙膏",
        wrongOptions: ["Fe", "Fr", "Cl"]
    },
    {
        number: 10,
        name: "氖",
        enName: "Neon",
        symbol: "Ne",
        origin: "源于希腊语---neos（新的），因为它是当时新发现的稀有气体",
        mass: "20.180",
        position: "第二周期0族",
        appearance: "无色气体",
        property: "通电发红光。常见价态：0。存在形式：空气中微量。应用：霓虹灯",
        wrongOptions: ["N", "Na", "Ni"]
    },
    {
        number: 11,
        name: "钠",
        enName: "Sodium",
        symbol: "Na",
        origin: "源于英语soda（苏打），因钠的化合物多存在于苏打类矿物中而得名",
        mass: "22.990",
        position: "第三周期IA族（碱金属）",
        appearance: "银白色有金属光泽软金属",
        property: "密度：0.97 g/cm³（20℃），熔点低，导电导热性好。常见价态：+1。存在形式：食盐、盐湖、岩盐。应用：化工原料、钠光灯、合金制备",
        wrongOptions: ["Ne", "N", "Ca"]
    },
    {
        number: 12,
        name: "镁",
        enName: "Magnesium",
        symbol: "Mg",
        origin: "源于希腊语---Magnesia（镁石产地），以发现该元素的矿物产地命名",
        mass: "24.305",
        position: "第三周期IIA族（碱土金属）",
        appearance: "银白色轻金属",
        property: "密度：1.74 g/cm³（20℃），质软，延展性好，能与热水反应。常见价态：+2。存在形式：菱镁矿、白云石、海水。应用：轻合金、航天材料、照明弹",
        wrongOptions: ["M", "Me", "Mn"]
    },
    {
        number: 13,
        name: "铝",
        enName: "Aluminium",
        symbol: "Al",
        origin: "源于拉丁语---alumen（明矾），因铝最早从明矾类化合物中提取而得名",
        mass: "26.982",
        position: "第三周期IIIA族",
        appearance: "银白色有金属光泽轻金属",
        property: "密度：2.70 g/cm³（20℃），质轻，导电导热性好，表面易形成氧化膜。常见价态：+3。存在形式：铝土矿、明矾石。应用：铝合金、包装材料、导电材料",
        wrongOptions: ["Au", "Ag", "Cl"]
    },
    {
        number: 14,
        name: "硅",
        enName: "Silicon",
        symbol: "Si",
        origin: "源于拉丁语---silex（燧石），因硅大量存在于燧石等硅酸盐矿物中而得名",
        mass: "28.085",
        position: "第三周期IVA族（类金属）",
        appearance: "灰黑色有金属光泽固体",
        property: "密度：2.33 g/cm³（20℃），硬度大，熔点高，半导体特性。常见价态：+4，-4。存在形式：二氧化硅、硅酸盐、岩石。应用：半导体、芯片、玻璃、陶瓷",
        wrongOptions: ["S", "Se", "Sn"]
    },
    {
        number: 15,
        name: "磷",
        enName: "Phosphorus",
        symbol: "P",
        origin: "源于希腊语---phos（光）phorus（携带），意为\"发光的物质\"，因白磷在空气中能自燃发光",
        mass: "30.974",
        position: "第三周期VA族",
        appearance: "白磷（白色蜡状）、红磷（红棕色粉末）",
        property: "白磷密度：1.82 g/cm³（20℃），燃点低；红磷性质稳定。常见价态：-3，+3，+5。存在形式：磷酸盐、磷矿。应用：化肥、火柴、农药、半导体",
        wrongOptions: ["Po", "Pb", "Pd"]
    },
    {
        number: 16,
        name: "硫",
        enName: "Sulfur",
        symbol: "S",
        origin: "源于拉丁语---sulfur（硫磺），是人类最早发现的元素之一，古名直接沿用",
        mass: "32.065",
        position: "第三周期VIA族",
        appearance: "淡黄色脆性结晶或粉末",
        property: "密度：2.07 g/cm³（20℃），不溶于水，易燃，有多种同素异形体。常见价态：-2，+4，+6。存在形式：硫磺矿、硫化物、硫酸盐。应用：化工原料、火药、橡胶硫化、农药",
        wrongOptions: ["Sc", "Si", "Se"]
    },
    {
        number: 17,
        name: "氯",
        enName: "Chlorine",
        symbol: "Cl",
        origin: "源于希腊语---chloros（黄绿色），以氯气的特征颜色命名",
        mass: "35.453",
        position: "第三周期VIIA族（卤素）",
        appearance: "黄绿色有刺激性气味气体",
        property: "密度：3.214 g/L（0℃），有毒，氧化性强，易溶于水形成氯水。常见价态：-1，+1，+3，+5，+7。存在形式：氯化物、海水、盐湖。应用：消毒剂、漂白剂、化工原料",
        wrongOptions: ["C", "Ca", "Cr"]
    },
    {
        number: 18,
        name: "氩",
        enName: "Argon",
        symbol: "Ar",
        origin: "源于希腊语---argos（懒惰的），因氩化学性质极稳定，几乎不与任何物质反应而得名",
        mass: "39.948",
        position: "第三周期0族（稀有气体）",
        appearance: "无色无味惰性气体",
        property: "密度：1.784 g/L（0℃），化学性质极稳定，不燃不助燃。常见价态：0。存在形式：空气中（约0.93%）。应用：焊接保护气、灯泡填充气、氩弧焊",
        wrongOptions: ["At", "Au", "Ag"]
    },
    {
        number: 19,
        name: "钾",
        enName: "Potassium",
        symbol: "K",
        origin: "源于拉丁语---kalium（草木灰），因钾最早从草木灰中提取，化学符号取自该拉丁语名",
        mass: "39.098",
        position: "第四周期IA族（碱金属）",
        appearance: "银白色软金属，比钠更活泼",
        property: "密度：0.86 g/cm³（20℃），熔点低，遇水剧烈反应并燃烧。常见价态：+1。存在形式：钾盐矿、海水、植物体内。应用：化肥、化工原料、电池电极",
        wrongOptions: ["P", "Ka", "Po"]
    },
    {
        number: 20,
        name: "钙",
        enName: "Calcium",
        symbol: "Ca",
        origin: "源于拉丁语---calx（石灰），因钙的氧化物为生石灰，以该矿物名称命名",
        mass: "40.078",
        position: "第四周期IIA族（碱土金属）",
        appearance: "银白色稍硬金属",
        property: "密度：1.55 g/cm³（20℃），质软，能与水反应，表面易氧化。常见价态：+2。存在形式：石灰石、大理石、石膏、骨骼。应用：建筑材料、补钙剂、合金制备、冶金熔剂",
        wrongOptions: ["C", "Cu", "Co"]
    },
    // 其他常用元素和稀有气体（15个）
    {
        number: 25,
        name: "锰",
        enName: "Manganese",
        symbol: "Mn",
        origin: "拉丁语manganum，源自希腊语\"镁矿石\"",
        mass: "54.938",
        position: "第四周期ⅦB族（过渡金属）",
        appearance: "银灰色金属，质硬而脆",
        property: "密度7.44 g/cm³，熔点1246℃，导热导电性中等。常见价态：+2、+4、+7。存在形式：软锰矿、菱锰矿。应用：合金钢（锰钢）、电池、催化剂",
        wrongOptions: ["Mg", "Zn", "Cu"]
    },
    {
        number: 26,
        name: "铁",
        enName: "Iron",
        symbol: "Fe",
        origin: "拉丁语ferrum",
        mass: "55.845",
        position: "第四周期Ⅷ族（过渡金属）",
        appearance: "银白色金属，有金属光泽，延展性好",
        property: "密度7.87 g/cm³，熔点1538℃，铁磁性显著。常见价态：+2、+3。存在形式：赤铁矿、磁铁矿。应用：钢铁工业核心、磁性材料、医疗器械",
        wrongOptions: ["Cu", "Ge", "Ne"]
    },
    {
        number: 29,
        name: "铜",
        enName: "Copper",
        symbol: "Cu",
        origin: "拉丁语cuprum，意为\"塞浦路斯的金属\"",
        mass: "63.546",
        position: "第四周期ⅠB族（过渡金属）",
        appearance: "纯铜为紫红色/玫瑰红色金属，有金属光泽",
        property: "密度8.96 g/cm³（20℃），导电性、导热性仅次于银，延展性极佳。常见价态：+1、+2。存在形式：自然界有天然铜，也以黄铜矿、孔雀石等矿石存在。应用：制作导线、器皿、艺术品等",
        wrongOptions: ["C", "Au", "Ca"]
    },
    {
        number: 30,
        name: "锌",
        enName: "Zinc",
        symbol: "Zn",
        origin: "德语Zink（起源不明）",
        mass: "65.38",
        position: "第四周期ⅡB族（过渡金属）",
        appearance: "银灰色金属，略带蓝光泽",
        property: "密度7.14 g/cm³，熔点419.5℃，易氧化。常见价态：+2。存在形式：闪锌矿、菱锌矿。应用：镀锌防腐、锌合金、干电池、压铸零件",
        wrongOptions: ["Mn", "Xn", "Mg"]
    },
    {
        number: 35,
        name: "溴",
        enName: "Bromine",
        symbol: "Br",
        origin: "希腊语bromos，意为\"恶臭\"",
        mass: "79.904",
        position: "第四周期ⅦA族（卤族）",
        appearance: "深红棕色液体，有强烈刺激性气味",
        property: "密度3.12 g/cm³（液），易挥发，强氧化性。常见价态：-1、+1、+5。存在形式：溴化盐矿、海水（微量）。应用：阻燃剂、医药中间体、感光材料、农药",
        wrongOptions: ["Xr", "Se", "Sb"]
    },
    {
        number: 53,
        name: "碘",
        enName: "Iodine",
        symbol: "I",
        origin: "希腊语iodes，意为\"紫色\"",
        mass: "126.90",
        position: "第五周期ⅦA族（卤族）",
        appearance: "紫黑色片状固体，易升华，蒸气为紫色",
        property: "密度4.93 g/cm³，熔点113.5℃，遇淀粉变蓝。常见价态：-1、+1、+5。存在形式：碘化物矿、海水、海藻。应用：碘盐（补碘）、消毒剂、医药、染料",
        wrongOptions: ["Di", "Ar", "Br"]
    },
    {
        number: 78,
        name: "铂",
        enName: "Platinum",
        symbol: "Pt",
        origin: "西班牙语platina，意为\"小银\"",
        mass: "195.08",
        position: "第六周期Ⅷ族（过渡金属）",
        appearance: "银白色金属，有金属光泽，延展性极佳",
        property: "密度21.45 g/cm³，熔点1772℃，耐腐蚀、催化性好。常见价态：+2、+4。存在形式：铂矿、与金/镍伴生。应用：催化剂、珠宝首饰、精密仪器、电极",
        wrongOptions: ["Pd", "Be", "B"]
    },
    {
        number: 79,
        name: "金",
        enName: "Gold",
        symbol: "Au",
        origin: "拉丁语aurum，意为\"闪耀的黎明\"",
        mass: "196.97",
        position: "第六周期ⅠB族（过渡金属）",
        appearance: "金黄色金属，有金属光泽，延展性极佳",
        property: "密度19.32 g/cm³，熔点1064℃，耐腐蚀、导电性好。常见价态：+1、+3。存在形式：自然金、砂金矿。应用：珠宝、货币储备、电子触点、镀金工艺",
        wrongOptions: ["Pt", "Cu", "Co"]
    },
    {
        number: 80,
        name: "汞",
        enName: "Mercury",
        symbol: "Hg",
        origin: "拉丁语hydrargyrum，意为\"液态银\"",
        mass: "200.59",
        position: "第六周期ⅡB族（过渡金属）",
        appearance: "银白色液态金属，有金属光泽，易挥发",
        property: "密度13.55 g/cm³，熔点-38.87℃（唯一常温液态金属）。常见价态：+1、+2。存在形式：辰砂（硫化汞）。应用：温度计、气压计、电池、化工催化剂",
        wrongOptions: ["Ag", "Cu", "He"]
    },
    {
        number: 82,
        name: "铅",
        enName: "Lead",
        symbol: "Pb",
        origin: "拉丁语plumbum",
        mass: "207.2",
        position: "第六周期ⅣA族（主族金属）",
        appearance: "银灰色金属，质软，密度大，有延展性",
        property: "密度11.34 g/cm³，熔点327.5℃，耐腐蚀、有毒。常见价态：+2、+4。存在形式：方铅矿、白铅矿。应用：蓄电池、防辐射材料、焊料、合金",
        wrongOptions: ["Pt", "As", "Fe"]
    },
    {
        number: 36,
        name: "氪",
        enName: "Krypton",
        symbol: "Kr",
        origin: "希腊语kryptos，意为\"隐藏的\"",
        mass: "83.80",
        position: "第四周期0族（稀有气体）",
        appearance: "无色、无味、无臭气体",
        property: "密度3.736 g/L（标况），沸点-153.4℃。常见价态：0（稳定）。存在形式：空气（微量，约1.14×10⁻⁴%）。应用：高端电光源、激光器、医疗成像、核物理研究",
        wrongOptions: ["Br", "Cr", "Ar"]
    },
    {
        number: 54,
        name: "氙",
        enName: "Xenon",
        symbol: "Xe",
        origin: "希腊语xenos，意为\"陌生的\"",
        mass: "131.29",
        position: "第五周期0族（稀有气体）",
        appearance: "无色、无味、无臭气体，高压下呈蓝绿色",
        property: "密度5.89 g/L（标况），沸点-108.1℃，可形成化合物。常见价态：0、+2、+4、+6。存在形式：空气（微量，约8.7×10-6%）。应用：氙灯（汽车大灯/探照灯）、麻醉剂、离子推进器",
        wrongOptions: ["He", "Ar", "Au"]
    }
];

// 连线题分组（35个元素分成3组：12, 12, 11）
const matchGroups = [
    elements.slice(0, 12),   // 第1组：氢到镁（1-12号）
    elements.slice(12, 24),  // 第2组：铝到钾（13-19号 + 锰铁铜锌）
    elements.slice(24, 35)   // 第3组：溴到氙（剩余11个）
];

// 选择题状态管理
let currentIndex = 0;
let selectedOption = null;
let wrongAnswers = [];
let hasAnswered = false;

// 连线题状态管理
let currentMatchGroup = 0;
let selectedNameIndex = null;
let selectedSymbolEl = null;
let currentMatches = new Map(); // 存储正确的连线

// DOM 元素
const choiceMode = document.getElementById('choiceMode');
const matchMode = document.getElementById('matchMode');
const choiceModeBtn = document.getElementById('choiceModeBtn');
const matchModeBtn = document.getElementById('matchModeBtn');

// 初始化
function init() {
    // 模式切换
    choiceModeBtn.addEventListener('click', () => switchMode('choice'));
    matchModeBtn.addEventListener('click', () => switchMode('match'));
    
    // 选择题初始化
    document.getElementById('total').textContent = elements.length;
    document.getElementById('submitBtn').addEventListener('click', checkAnswer);
    document.getElementById('nextBtn').addEventListener('click', nextQuestion);
    
    // 连线题初始化
    document.getElementById('checkMatchBtn').addEventListener('click', checkMatches);
    document.getElementById('resetMatchBtn').addEventListener('click', resetCurrentMatch);
    document.getElementById('nextMatchBtn').addEventListener('click', nextMatchGroup);
    
    loadQuestion();
}

// 模式切换
function switchMode(mode) {
    if (mode === 'choice') {
        choiceMode.classList.add('active');
        matchMode.classList.remove('active');
        choiceModeBtn.classList.add('active');
        matchModeBtn.classList.remove('active');
    } else {
        choiceMode.classList.remove('active');
        matchMode.classList.add('active');
        choiceModeBtn.classList.remove('active');
        matchModeBtn.classList.add('active');
        initMatchGroup();
    }
}

// ==================== 选择题部分（完全保持不变）====================

// 加载题目
function loadQuestion() {
    const element = elements[currentIndex];
    hasAnswered = false;
    selectedOption = null;
    
    // 更新进度条
    const progress = ((currentIndex + 1) / elements.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    document.getElementById('current').textContent = currentIndex + 1;
    document.getElementById('elementNum').textContent = element.number;
    
    // 更新元素信息
    document.getElementById('elementName').innerHTML = 
        `${element.name} <span id="elementEn">${element.enName}</span>`;
    document.getElementById('questionText').textContent = 
        `以下哪个是"${element.name}"的化学符号？`;
    
    // 生成选项（正确答案 + 3个错误选项，随机排序）
    const options = [element.symbol, ...element.wrongOptions];
    shuffleArray(options);
    
    // 渲染选项
    const optionsEl = document.getElementById('options');
    optionsEl.innerHTML = '';
    options.forEach(option => {
        const div = document.createElement('div');
        div.className = 'option';
        div.textContent = option;
        div.dataset.value = option;
        div.addEventListener('click', () => selectOption(div, option));
        optionsEl.appendChild(div);
    });
    
    // 重置解析区
    document.getElementById('analysisContent').innerHTML = `
        <p class="placeholder">请先在左侧完成选择题，<br>然后点击"公布答案"。<br><br>公布答案后，这里才会显示解析和图片。</p>
    `;
    
    // 重置按钮
    document.getElementById('submitBtn').style.display = 'block';
    document.getElementById('submitBtn').textContent = '公布答案';
    document.getElementById('submitBtn').disabled = false;
    document.getElementById('nextBtn').style.display = 'none';
}

// 选择选项
function selectOption(element, value) {
    if (hasAnswered) return;
    
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('selected');
    });
    element.classList.add('selected');
    selectedOption = value;
}

// 检查答案
function checkAnswer() {
    if (!selectedOption) {
        alert('请先选择一个答案！');
        return;
    }
    
    hasAnswered = true;
    const element = elements[currentIndex];
    const isCorrect = selectedOption === element.symbol;
    
    // 显示正确/错误样式
    document.querySelectorAll('.option').forEach(opt => {
        if (opt.dataset.value === element.symbol) {
            opt.classList.add('correct');
        } else if (opt.dataset.value === selectedOption && !isCorrect) {
            opt.classList.add('wrong');
        }
    });
    
    // 如果答错，加入错题本
    if (!isCorrect) {
        if (!wrongAnswers.find(w => w.number === element.number)) {
            wrongAnswers.push({
                element: element,
                wrongAnswer: selectedOption
            });
            updateWrongList();
        }
    }
    
    // 显示解析
    showAnalysis(element, isCorrect);
    
    // 更新按钮
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'block';
    
    if (currentIndex === elements.length - 1) {
        document.getElementById('nextBtn').textContent = '查看结果';
    }
}

// 显示解析
function showAnalysis(element, isCorrect) {
    const resultIcon = isCorrect ? '✅' : '❌';
    const resultText = isCorrect ? '回答正确！' : '回答错误！';
    
    document.getElementById('analysisContent').innerHTML = `
        <div style="text-align: center; margin-bottom: 20px; font-size: 1.2em;">
            <span style="font-size: 2em;">${resultIcon}</span><br>
            <strong style="color: ${isCorrect ? '#4caf50' : '#f44336'}">${resultText}</strong>
        </div>
        
        <div class="analysis-item">
            <strong>元素符号：</strong>${element.symbol}
        </div>
        <div class="analysis-item">
            <strong>来源：</strong>${element.origin}
        </div>
        <div class="analysis-item">
            <strong>原子序数：</strong>${element.number}
        </div>
        <div class="analysis-item">
            <strong>相对原子质量：</strong>${element.mass}
        </div>
        <div class="analysis-item">
            <strong>周期表位置：</strong>${element.position}
        </div>
        <div class="analysis-item">
            <strong>外观：</strong>${element.appearance}
        </div>
        <div class="analysis-item">
            <strong>物理性质 / 应用：</strong>${element.property}
        </div>
    `;
}

// 下一题
function nextQuestion() {
    if (currentIndex < elements.length - 1) {
        currentIndex++;
        loadQuestion();
    } else {
        showFinalResult();
    }
}

// 显示最终结果
function showFinalResult() {
    const accuracy = Math.round(((elements.length - wrongAnswers.length) / elements.length) * 100);
    
    document.getElementById('analysisContent').innerHTML = `
        <div style="text-align: center; padding: 30px;">
            <h2 style="color: #333; margin-bottom: 20px;">🎉 学习完成！</h2>
            <div style="font-size: 3em; margin: 20px 0;">${accuracy >= 80 ? '🌟' : accuracy >= 60 ? '👍' : '💪'}</div>
            <p style="font-size: 1.3em; color: #666; margin-bottom: 15px;">
                正确率：<strong style="color: ${accuracy >= 80 ? '#4caf50' : accuracy >= 60 ? '#ff9800' : '#f44336'}">${accuracy}%</strong>
            </p>
            <p style="color: #888; margin-bottom: 25px;">
                答对 ${elements.length - wrongAnswers.length} 题，答错 ${wrongAnswers.length} 题
            </p>
            <button onclick="location.reload()" class="btn-primary" style="max-width: 200px;">
                重新开始
            </button>
        </div>
    `;
    
    // 隐藏答题区
    document.querySelector('.quiz-section').innerHTML = `
        <div style="text-align: center; padding: 50px; color: #999;">
            <h3>测试已完成</h3>
            <p>请查看右侧的总结</p>
        </div>
    `;
    document.getElementById('submitBtn').style.display = 'none';
    document.getElementById('nextBtn').style.display = 'none';
}

// 更新错题本
function updateWrongList() {
    const wrongListEl = document.getElementById('wrongList');
    wrongListEl.innerHTML = '';
    wrongAnswers.forEach(item => {
        const div = document.createElement('div');
        div.className = 'wrong-item';
        div.innerHTML = `
            ${item.element.name} 
            <span class="wrong-symbol">${item.wrongAnswer}</span>
            <span class="arrow">→</span>
            <span class="correct-symbol">${item.element.symbol}</span>
        `;
        wrongListEl.appendChild(div);
    });
}

// ==================== 连线题部分（优化连线精度）====================

// 初始化当前连线组
function initMatchGroup() {
    currentMatches.clear();
    selectedNameIndex = null;
    selectedSymbolEl = null;
    
    const group = matchGroups[currentMatchGroup];
    document.getElementById('matchGroup').textContent = currentMatchGroup + 1;
    document.getElementById('matchProgress').textContent = '0';
    document.getElementById('matchTotal').textContent = group.length;
    document.getElementById('nextMatchBtn').style.display = 'none';
    document.getElementById('checkMatchBtn').style.display = 'inline-block';
    document.getElementById('matchResult').innerHTML = '';
    document.getElementById('matchResult').className = 'match-result';
    
    // 准备数据 - 名称保持顺序，符号打乱
    const names = group.map((e, i) => ({ 
        name: e.name, 
        index: i, 
        symbol: e.symbol
    }));
    
    const symbols = group.map((e, i) => ({ 
        symbol: e.symbol, 
        index: i
    }));
    shuffleArray(symbols);
    
    // 渲染名称列（左）
    const namesEl = document.getElementById('matchNames');
    namesEl.innerHTML = '';
    names.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = item.name;
        div.dataset.index = item.index;
        div.addEventListener('click', () => selectName(div));
        namesEl.appendChild(div);
    });
    
    // 渲染符号列（右）
    const symbolsEl = document.getElementById('matchSymbols');
    symbolsEl.innerHTML = '';
    symbols.forEach((item) => {
        const div = document.createElement('div');
        div.className = 'match-item';
        div.textContent = item.symbol;
        div.dataset.index = item.index; // 正确答案对应的名称索引
        div.addEventListener('click', () => selectSymbol(div));
        symbolsEl.appendChild(div);
    });
    
    // 清空连线
    document.getElementById('matchSvg').innerHTML = '';
    
    // 确保SVG高度正确
    updateSvgHeight();
}

// 更新SVG高度以匹配内容
function updateSvgHeight() {
    const container = document.querySelector('.match-container');
    const svg = document.getElementById('matchSvg');
    if (container && svg) {
        svg.style.height = container.scrollHeight + 'px';
    }
}

// 选择名称
function selectName(element) {
    if (element.classList.contains('matched')) return;
    
    // 清除其他选中
    document.querySelectorAll('#matchNames .match-item').forEach(el => {
        if (!el.classList.contains('matched')) {
            el.classList.remove('selected');
        }
    });
    
    element.classList.add('selected');
    selectedNameIndex = parseInt(element.dataset.index);
    
    // 如果已选符号，尝试匹配
    if (selectedSymbolEl) {
        tryMatch();
    }
}

// 选择符号
function selectSymbol(element) {
    if (element.classList.contains('matched')) return;
    
    // 清除其他选中
    document.querySelectorAll('#matchSymbols .match-item').forEach(el => {
        if (!el.classList.contains('matched')) {
            el.classList.remove('selected');
        }
    });
    
    element.classList.add('selected');
    selectedSymbolEl = element;
    
    // 如果已选名称，尝试匹配
    if (selectedNameIndex !== null) {
        tryMatch();
    }
}

// 尝试匹配
function tryMatch() {
    const nameEl = document.querySelector(`#matchNames .match-item[data-index="${selectedNameIndex}"]`);
    const symbolIndex = parseInt(selectedSymbolEl.dataset.index);
    
    // 检查是否正确（名称索引 == 符号索引）
    const isCorrect = selectedNameIndex === symbolIndex;
    
    if (isCorrect) {
        // 正确：标记为已匹配，绘制连线
        nameEl.classList.add('matched');
        nameEl.classList.remove('selected');
        selectedSymbolEl.classList.add('matched');
        selectedSymbolEl.classList.remove('selected');
        
        currentMatches.set(selectedNameIndex, selectedSymbolEl);
        
        // 绘制连线（关键优化）
        drawConnection(nameEl, selectedSymbolEl);
        
        // 更新进度
        document.getElementById('matchProgress').textContent = currentMatches.size;
        
        // 检查是否完成
        if (currentMatches.size === matchGroups[currentMatchGroup].length) {
            document.getElementById('matchResult').innerHTML = 
                '<span class="success">🎉 本组全部正确！点击"检查连线"确认</span>';
        }
    } else {
        // 错误：抖动提示
        nameEl.classList.add('error');
        selectedSymbolEl.classList.add('error');
        
        document.getElementById('matchResult').innerHTML = 
            '<span class="error">❌ 不匹配，请重试</span>';
        
        setTimeout(() => {
            nameEl.classList.remove('error');
            selectedSymbolEl.classList.remove('error');
        }, 600);
    }
    
    // 重置选择
    selectedNameIndex = null;
    selectedSymbolEl = null;
}

// 关键优化：精确计算连线位置，紧贴元素边缘
function drawConnection(leftEl, rightEl) {
    const svg = document.getElementById('matchSvg');
    const container = document.querySelector('.match-lines');
    
    // 获取相对于视口的位置
    const containerRect = container.getBoundingClientRect();
    const leftRect = leftEl.getBoundingClientRect();
    const rightRect = rightEl.getBoundingClientRect();
    
    // 计算连接点（紧贴边框，无空隙）
    // 左侧元素右边框中心
    const x1 = leftRect.right - containerRect.left;
    const y1 = leftRect.top + leftRect.height / 2 - containerRect.top;
    
    // 右侧元素左边框中心
    const x2 = rightRect.left - containerRect.left;
    const y2 = rightRect.top + rightRect.height / 2 - containerRect.top;
    
    // 创建连线
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x1);
    line.setAttribute('y1', y1);
    line.setAttribute('x2', x2);
    line.setAttribute('y2', y2);
    line.setAttribute('stroke', '#4caf50');
    line.setAttribute('stroke-width', '3');
    line.setAttribute('stroke-linecap', 'round');
    line.setAttribute('class', 'match-line');
    
    svg.appendChild(line);
}

// 检查连线结果
function checkMatches() {
    const group = matchGroups[currentMatchGroup];
    const correctCount = currentMatches.size;
    const total = group.length;
    
    if (correctCount === 0) {
        alert('请先完成连线！');
        return;
    }
    
    const accuracy = Math.round((correctCount / total) * 100);
    
    document.getElementById('matchResult').innerHTML = `
        <div style="margin-top: 10px;">
            <strong>本组结果：</strong> 
            正确 ${correctCount}/${total} （${accuracy}%）
            ${accuracy === 100 ? '🌟 完美！' : accuracy >= 80 ? '👍 不错！' : '💪 继续加油！'}
        </div>
    `;
    
    if (currentMatchGroup < matchGroups.length - 1) {
        document.getElementById('nextMatchBtn').style.display = 'inline-block';
        document.getElementById('checkMatchBtn').style.display = 'none';
    } else {
        document.getElementById('matchResult').innerHTML += `
            <div style="margin-top: 15px; color: #4caf50;">
                🎉 所有连线题已完成！
            </div>
        `;
    }
}

// 重置当前组（保留随机功能）
function resetCurrentMatch() {
    initMatchGroup();
}

// 下一组连线题
function nextMatchGroup() {
    currentMatchGroup++;
    if (currentMatchGroup < matchGroups.length) {
        initMatchGroup();
    }
}

// 工具函数：数组随机排序
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// 启动
init();