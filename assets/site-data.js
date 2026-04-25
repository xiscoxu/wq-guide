/**
 * WorldQuant BRAIN 培训系统 — 站点数据
 * 搜索索引 · 章节定义 · 测验题目
 */

/* ─── 1. 搜索索引 ─── */
var SEARCH_INDEX = [
  // 01-platform
  {page:"training/01-platform.html",label:"第一阶段",section:"what-is-brain",title:"BRAIN 平台是什么",text:"WorldQuant BRAIN 量化 Alpha 研究平台 信号 因子 研究员"},
  {page:"training/01-platform.html",label:"第一阶段",section:"alpha-essence",title:"Alpha 的本质",text:"Alpha 交易信号 超额收益 预测 价格 因子 表达式"},
  {page:"training/01-platform.html",label:"第一阶段",section:"engine",title:"模拟引擎工作原理",text:"模拟 回测 引擎 历史数据 PnL 收益 回测期"},
  {page:"training/01-platform.html",label:"第一阶段",section:"expression",title:"表达式语法基础",text:"表达式 语法 操作符 字段 向量 标量 运算"},
  {page:"training/01-platform.html",label:"第一阶段",section:"sim-settings",title:"模拟参数设置",text:"Region 地区 Universe 股票池 Delay 延迟 Neutralization 中和 Decay 衰减 Truncation"},
  {page:"training/01-platform.html",label:"第一阶段",section:"quickstart",title:"快速上手指南",text:"第一个 Alpha 快速开始 入门 WebSim 模拟器"},
  // 02-first-alpha
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"first-sim",title:"运行第一次模拟",text:"WebSim 模拟器 表达式 提交 运行 结果"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"operators",title:"常用运算符入门",text:"ts_mean rank scale signedpower log abs 操作符 运算符"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"results",title:"读懂模拟结果",text:"Sharpe 夏普 Fitness Turnover 换手 Returns 收益 PnL"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"good-alpha",title:"判断好的 Alpha",text:"好的 Alpha 标准 Sharpe Fitness Margin 换手率 评估"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"submit",title:"提交前检查清单",text:"提交标准 检查 Sharpe 1.25 1.58 Fitness Margin Delay 延迟"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"improve",title:"改进 Alpha 的方法",text:"改进 优化 调参 Decay 衰减 Neutralization 中和 字段替换"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"errors",title:"常见错误处理",text:"错误 报错 语法错误 字段不存在 NaN 空值 调试"},
  {page:"training/02-first-alpha.html",label:"第二阶段",section:"what-to-submit",title:"该交什么样的 Alpha",text:"提交 筛选 相关性 Corr 质量 好 Alpha 标准"},
  // 03-data
  {page:"training/03-data.html",label:"第三阶段",section:"fields",title:"数据字段体系",text:"字段 Field 基本面 技术 情绪 分析师 数据类型 向量 矩阵"},
  {page:"training/03-data.html",label:"第三阶段",section:"explore",title:"探索字段的方法",text:"字段探索 Data Explorer 相关性 可视化 分布 历史"},
  {page:"training/03-data.html",label:"第三阶段",section:"explorer",title:"Data Explorer 使用",text:"Data Explorer 工具 字段 可视化 分布 历史 统计"},
  {page:"training/03-data.html",label:"第三阶段",section:"group",title:"字段分类与选取策略",text:"字段分类 选取 基本面 技术 情绪 分析师 类别 策略"},
  {page:"training/03-data.html",label:"第三阶段",section:"datasets",title:"数据集详解",text:"数据集 Dataset 基本面 fundamental 技术 technical 情绪 news 分析师 analyst"},
  {page:"training/03-data.html",label:"第三阶段",section:"optimize",title:"字段组合优化",text:"字段组合 优化 搭配 Cross-sectional 截面 时序"},
  {page:"training/03-data.html",label:"第三阶段",section:"evaluate-dataset",title:"评估数据集质量",text:"数据集质量 评估 覆盖率 历史长度 频率 可靠性"},
  // 04-advanced
  {page:"training/04-advanced.html",label:"第四阶段",section:"neutralization",title:"中和策略详解",text:"Neutralization 中和 Market SUBINDUSTRY INDUSTRY Sector 行业 市场"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"risk-methods",title:"风险控制方法",text:"风险 Risk 控制 波动率 Volatility 回撤 Drawdown 对冲"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"double-neut",title:"双重中和技巧",text:"双重中和 Double neutralization 行业 市场 组合"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"d0",title:"Delay0 Alpha 策略",text:"Delay0 D0 延迟 0 日内 收盘价 开盘价 实时"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"risk-metrics",title:"风险指标解读",text:"风险指标 Max Drawdown 最大回撤 波动率 Sharpe Information Ratio"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"investability",title:"可投资性分析",text:"可投资性 Investability Turnover 换手率 Margin 保证金 流动性"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"topics",title:"专题策略研究",text:"专题 策略 动量 反转 价值 质量 基本面"},
  {page:"training/04-advanced.html",label:"第四阶段",section:"overfit",title:"过拟合识别与规避",text:"过拟合 Overfit 样本外 Out-of-sample 稳健性 泛化"},
  // 05-superalpha
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"what-is",title:"SuperAlpha 是什么",text:"SuperAlpha 超级 Alpha 高质量 额外奖励 收入"},
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"selection",title:"SuperAlpha 评选标准",text:"评选标准 条件 Sharpe Fitness Turnover 相关性 筛选"},
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"combo",title:"组合构建技巧",text:"组合 Combo 多因子 合并 相关性 多样性"},
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"settings",title:"最优参数设置",text:"参数 Decay 衰减 Neutralization 中和 Universe 股票池 Region"},
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"results",title:"结果分析与优化",text:"结果 分析 优化 迭代 改进 Sharpe 提升"},
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"workflow",title:"SuperAlpha 工作流",text:"工作流 流程 生成 测试 提交 监控"},
  {page:"training/05-superalpha.html",label:"SuperAlpha",section:"operators",title:"高级运算符应用",text:"高级 运算符 操作符 组合 复杂表达式"},
  // 06-consultant
  {page:"training/06-consultant.html",label:"顾问专项",section:"genius",title:"Genius 等级体系",text:"Genius Gold Expert Master Grandmaster 等级 晋升 槽位 季度"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"criteria",title:"晋升标准与六维排名",text:"晋升标准 Expert Master Grandmaster Signals Pyramids Combined 六维 排名"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"consultant-features",title:"顾问专属功能",text:"顾问 功能 专属 数据集 Single Dataset 算子 API"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"single-dataset",title:"Single Dataset 策略",text:"Single Dataset 单数据集 专属 顾问 数据"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"powerpool",title:"Power Pool 详解",text:"Power Pool 功率池 顾问 Combined Performance 绩效"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"api",title:"BRAIN API 使用",text:"API BRAIN REST 接口 自动化 批量 模拟"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"roadmap",title:"顾问成长路径",text:"成长 路径 规划 目标 Expert Master Grandmaster 晋升"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"become-consultant",title:"成为顾问的条件",text:"成为顾问 条件 申请 资格 要求"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"income-detail",title:"收入结构详解",text:"收入 Base Payment 季度奖 Quarterly Payment SuperAlpha 奖金 美元"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"wqdatascope",title:"WebDataScope 扩展",text:"WebDataScope 浏览器扩展 Chrome 字段 数据 可视化 安装"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"grandmaster-guide",title:"Grandmaster 核心方法论",text:"Grandmaster 方法 策略 游戏规则 好的 Alpha Margin 趋势"},
  {page:"training/06-consultant.html",label:"顾问专项",section:"ai-workflow",title:"AI 辅助 Alpha 生成",text:"AI 人工智能 MCP Gemini 自动化 Harness Engineering 生成 工具链"}
];

/* ─── 2. 各页章节 ID（用于进度统计） ─── */
var PAGE_SECTIONS = {
  "01-platform":    ["what-is-brain","alpha-essence","engine","expression","sim-settings","quickstart"],
  "02-first-alpha": ["first-sim","operators","results","good-alpha","submit","improve","errors","what-to-submit"],
  "03-data":        ["fields","explore","explorer","group","datasets","optimize","evaluate-dataset"],
  "04-advanced":    ["neutralization","risk-methods","double-neut","d0","risk-metrics","investability","topics","overfit"],
  "05-superalpha":  ["what-is","selection","combo","settings","results","workflow","operators"],
  "06-consultant":  ["genius","criteria","consultant-features","single-dataset","powerpool","api","roadmap","become-consultant","income-detail","wqdatascope","grandmaster-guide","ai-workflow"]
};

/* ─── 3. 测验题目 ─── */
var QUIZ_DATA = {
  "01-platform": [
    {q:"BRAIN 平台上，Alpha 本质上是什么？",opts:["股票价格预测","每只股票每日的持仓权重信号","K线图形态识别","宏观经济指标"],ans:1,explain:"Alpha 是每只股票每天的持仓权重向量，正值做多，负值做空。"},
    {q:"模拟引擎使用的是哪种数据来评估 Alpha？",opts:["实时市场数据","未来数据","历史市场数据","模拟生成的数据"],ans:2,explain:"模拟引擎使用历史数据（回测）来评估 Alpha 的表现。"},
    {q:"Delay 参数为 1 表示什么？",opts:["信号计算延迟1秒","用今日数据，明日收盘价执行交易","用昨日数据，今日开盘价执行交易","每隔1天运行一次"],ans:1,explain:"Delay=1 表示用 T 日数据生成信号，在 T+1 日收盘时执行，避免前视偏差。"},
    {q:"Neutralization 参数 SUBINDUSTRY 的作用是什么？",opts:["只投资同一行业的股票","去除子行业共同因子，只保留个股特有信号","按子行业等权重分配","过滤掉小市值股票"],ans:1,explain:"SUBINDUSTRY 中和会将同子行业的 Alpha 值去均值，消除行业整体涨跌的影响。"},
    {q:"Universe TOP3000 表示什么？",opts:["全球前3000大公司","按市值排名前3000的股票池","前3000个交易日","3000个数据字段"],ans:1,explain:"TOP3000 是按市值排名的前3000只股票构成的股票池。"},
    {q:"以下哪个不是 BRAIN 平台支持的 Region？",opts:["USA","EUR","ASI","NASDAQ"],ans:3,explain:"NASDAQ 是美国交易所，不是 BRAIN 的 Region。BRAIN 的 Region 包括 USA、EUR、ASI、GLB、IND 等。"}
  ],
  "02-first-alpha": [
    {q:"顾问期间 Delay1 (D1) 夏普比率的最低要求是多少？",opts:["> 1.0","> 1.25","> 1.58","> 2.0"],ans:2,explain:"用户期间要求 > 1.25，成为顾问后标准提高到 > 1.58。"},
    {q:"顾问期间 Delay0 (D0) 夏普比率的最低要求是多少？",opts:["> 1.58","> 2.0","> 2.69","> 3.0"],ans:2,explain:"D0 Alpha 由于日内交易成本更高，顾问期间要求提高到 > 2.69（用户期间 > 2.0）。"},
    {q:"Fitness 指标的特点是什么？",opts:["只衡量夏普比率","综合考虑 Sharpe、Turnover、Margin 等多维度","越高越好，没有上限","只有顾问才能看到"],ans:1,explain:"Fitness 是 BRAIN 平台综合评分，考虑 Sharpe、换手率、边际收益等多个维度。"},
    {q:"USA 地区 Alpha 提交时 Margin 的建议基准是？",opts:["> 0","> 3","> 5","> 10"],ans:2,explain:"USA 地区建议 Margin > 5，GLB/EUR/JPN > 10，其他地区 > 15。"},
    {q:"以下哪个运算符用于时序均值计算？",opts:["rank","scale","ts_mean","signedpower"],ans:2,explain:"ts_mean(x, d) 计算过去 d 天的时序均值，是最常用的时序运算符之一。"},
    {q:"Alpha 换手率（Turnover）过高会带来什么问题？",opts:["Sharpe 自动降低","交易成本侵蚀收益，实盘难以执行","模拟器会拒绝提交","Margin 变为负数"],ans:1,explain:"换手率过高意味着频繁交易，实际执行中手续费和滑点会大幅侵蚀 Alpha 收益。"},
    {q:"判断 Alpha 是否过拟合，最重要的看哪个指标的稳定性？",opts:["Sharpe 在不同时间段的一致性","Alpha 表达式的长度","使用字段的数量","Delay 参数设置"],ans:0,explain:"将回测期分为多段，如果各段 Sharpe 差异巨大，则很可能存在过拟合。"},
    {q:"提交 Alpha 前，必须通过的相关性检验阈值是？",opts:["Self Corr < 0.3","Self Corr ≤ 0.55","Product Corr ≤ 0.70","以上都需要通过"],ans:3,explain:"需要同时通过自相关 ≤ 0.55 和产品相关性 ≤ 0.70 两道关卡才可提交。"}
  ],
  "03-data": [
    {q:"BRAIN 平台上，向量型字段（Vector field）的特点是什么？",opts:["每天返回一个数值","每天返回每只股票一个数值的向量","只在美国市场可用","需要付费订阅"],ans:1,explain:"向量型字段每天为股票池中每只股票返回一个值，是最常用的字段类型。"},
    {q:"以下哪类数据集更适合捕捉短期价格动量？",opts:["基本面（Fundamental）","技术（Technical）","分析师预期（Analyst）","供应链（Supply Chain）"],ans:1,explain:"技术数据集包含价格、成交量等高频数据，适合捕捉短期动量和反转信号。"},
    {q:"Data Explorer 工具的主要用途是什么？",opts:["提交 Alpha","可视化字段历史分布和相关性","修改账户设置","管理提交记录"],ans:1,explain:"Data Explorer 允许你查看任意字段的历史走势、分布、与其他字段的相关性等。"},
    {q:"选择数据字段时，覆盖率（Coverage）低意味着什么？",opts:["字段质量差","很多股票没有该字段的数据，可能引入偏差","字段价格贵","不能用于 Delay0 Alpha"],ans:1,explain:"覆盖率低说明大量股票缺失该字段，在截面比较中可能产生选择偏差。"},
    {q:"评估数据集质量最关键的指标是？",opts:["字段名称是否好记","历史长度和覆盖率","是否支持 GLB 地区","字段更新频率是否每小时"],ans:1,explain:"数据集的历史长度决定回测样本量，覆盖率影响信号完整性，是质量评估的核心指标。"},
    {q:"使用情绪类数据（Sentiment/News）时，最需要注意什么？",opts:["只在美国可用","数据发布时间可能存在前视偏差（Look-ahead bias）","必须用 Delay0","不能与技术指标组合"],ans:1,explain:"新闻和情绪数据的时间戳处理不当会引入前视偏差，必须确认数据在信号时刻是否已公开。"},
    {q:"字段分类中，分析师预期数据（Analyst Estimates）的优势是？",opts:["完全免费","更新频率最高","包含机构投资者对未来的预期，有一定预测性","只有 Grandmaster 才能访问"],ans:2,explain:"分析师预期反映机构对公司未来业绩的判断，包含一定的前瞻性，是超额收益的重要来源。"}
  ],
  "04-advanced": [
    {q:"Double Neutralization（双重中和）的典型用法是什么？",opts:["同时中和两个地区","先做行业中和，再做市场中和","对同一 Alpha 运行两次模拟","先 D0 再 D1"],ans:1,explain:"先行业中和（去除行业因子），再市场中和（去除系统性因子），层层剥离，提取纯 Alpha 信号。"},
    {q:"Delay0 Alpha 与 Delay1 Alpha 的核心区别是？",opts:["D0 用历史数据，D1 用实时数据","D0 当日收盘执行，无隔夜持仓风险","D1 信号在次日执行，D0 信号当日收盘执行","D0 只支持 USA 地区"],ans:2,explain:"D0 在信号当天收盘执行，无法知道执行价格；D1 在次日执行，规避了前视偏差。"},
    {q:"以下哪个中和策略最细粒度，最能去除行业共同因子？",opts:["MARKET","SECTOR","INDUSTRY","SUBINDUSTRY"],ans:3,explain:"SUBINDUSTRY 是最细粒度的行业分类，能去除同子行业股票的共同涨跌，保留个股差异。"},
    {q:"Max Drawdown（最大回撤）过大意味着什么？",opts:["Alpha 一定不能提交","策略在某段时期遭受了严重亏损，风险较高","换手率过高","与其他 Alpha 相关性过强"],ans:1,explain:"大幅回撤说明策略在特定市场环境下表现很差，暗示模型可能对特定时期过拟合。"},
    {q:"Margin 指标反映的是什么？",opts:["账户保证金余额","每交易1单位产生的平均利润，反映交易成本后的盈利能力","最大允许仓位","Alpha 的历史最高点"],ans:1,explain:"Margin = 每次交易的平均收益，换手率越高越依赖 Margin，GLB 建议 > 10，其他地区 > 15。"},
    {q:"识别过拟合最实用的方法是？",opts:["增加更多字段","把回测期分为多段，检验各段 Sharpe 是否一致","使用更复杂的表达式","只在 USA 地区测试"],ans:1,explain:"样本外测试（Out-of-sample）和分段一致性检验是识别过拟合最直接有效的方法。"},
    {q:"Information Ratio（信息比率）与 Sharpe Ratio 的主要区别是？",opts:["IR 只用于顾问，Sharpe 用于普通用户","IR 衡量的是相对于基准的超额收益的稳定性，Sharpe 衡量绝对收益","IR 越高说明换手率越低","两者完全相同"],ans:1,explain:"IR = 超额收益 / 超额收益的波动率，是相对指标；Sharpe = 绝对收益 / 收益波动率。"}
  ],
  "05-superalpha": [
    {q:"SuperAlpha 相比普通 Alpha 的核心区别是？",opts:["只有 Grandmaster 才能提交","满足更高标准，纳入专属 Power Pool，Base Payment 上限翻倍","交易量更大","使用了特殊数据集"],ans:1,explain:"SuperAlpha 有独立的 Power Pool，顾问收入中的 SuperAlpha 部分（0-60 USD）来自于此。"},
    {q:"以下哪个条件是 SuperAlpha 评选的必要条件？",opts:["Alpha 表达式超过50个字符","Sharpe 高于 2.0 且相关性合格","使用了 Delay0","在 5 个以上地区都有提交"],ans:1,explain:"超级 Alpha 要求更高的 Sharpe，且必须通过更严格的相关性测试才能进入 Power Pool。"},
    {q:"构建 SuperAlpha 时，Combo 策略的核心思路是什么？",opts:["把多个 Alpha 加权平均，降低整体相关性","使用最复杂的表达式","只用一种数据集","先提交后优化"],ans:0,explain:"将多个低相关性 Alpha 组合，既保持整体信号强度，又降低单一 Alpha 的波动，提升稳定性。"},
    {q:"SuperAlpha 中，选择股票池（Universe）时应优先考虑什么？",opts:["越大越好，覆盖更多股票","与信号特征匹配，流动性充足","只选 TOP500","随机选择"],ans:1,explain:"Universe 要与 Alpha 策略逻辑匹配，流动性充足确保实际可交易性，避免在小市值股票上的假信号。"},
    {q:"调整 Decay 参数的主要目的是什么？",opts:["改变回测周期长度","平滑信号、降低换手率","增加 Sharpe","扩大覆盖的股票数量"],ans:1,explain:"Decay 对信号做指数衰减，让持仓变化更平滑，有效降低换手率，减少实际交易成本。"},
    {q:"在 SuperAlpha 工作流中，'结果分析'阶段最关键的检查项是？",opts:["Alpha 表达式长度","各时间段 Sharpe 的一致性和全球地区的可迁移性","使用的字段数量","Delay 是 0 还是 1"],ans:1,explain:"稳健的 SuperAlpha 应在不同时间段和多个地区都表现一致，单一地区的高 Sharpe 可能是过拟合。"}
  ],
  "06-consultant": [
    {q:"Expert 等级的三项晋升门槛是？",opts:["10个信号，5个塔，Combined>0.3","20个信号，10个塔，Combined>0.5","50个信号，20个塔，Combined>1.0","100个信号，30个塔，Combined>1.5"],ans:1,explain:"Expert：季度≥20个信号，点亮≥10个塔，4个Combined指标最大值>0.5，六维排名，上限675人。"},
    {q:"Grandmaster 的四个 Combined 指标中，取哪个值与门槛比较？",opts:["四个指标的平均值","四个指标中的最大值","最低值","中位数"],ans:1,explain:"取 Combined Alpha、Combined Selected Alpha、Combined Power Pool Alpha、Combined Osmosis 四个中的最大值，与门槛比较。"},
    {q:"Pyramid（塔）的定义是什么？",opts:["一个地区的所有 Alpha","同一地区×延迟×数据集类别组合，且有≥3个 Alpha","一次季度提交","一个 SuperAlpha"],ans:1,explain:"Pyramid = 一个 region × delay × dataset category 的组合，该组合下有 ≥ 3 个 Alpha 才算点亮一座塔。"},
    {q:"Streak（连击）指的是？",opts:["连续登录天数","连续提交 Alpha 天数","连续回测（模拟）天数","连续盈利天数"],ans:2,explain:"Streak 是连续有模拟运行的天数，不是登录天数。每天运行至少一次模拟即可保持。"},
    {q:"顾问 Base Payment 的上限是多少？",opts:["60 USD/天","100 USD/天","120 USD/天","200 USD/天"],ans:2,explain:"Base Payment = Regular Alpha（0-60 USD）+ SuperAlpha（0-60 USD），上限合计 120 USD/天。"},
    {q:"Grandmaster 的季度奖励（Quarterly Payment）范围是？",opts:["100-200 USD","200-2000 USD","2000-8000 USD","8000-25000 USD"],ans:3,explain:"Grandmaster 季度奖 8000-25000 USD；Master 2000-8000；Expert 200-2000；Gold 100-200。"},
    {q:"六维排名中，以下哪个指标是'越低越好'？",opts:["Total distinct operators（算子多样性）","Max simulation streak（连击）","Avg operators/alpha（每个 Alpha 平均算子数）","Community contribution（社区贡献）"],ans:2,explain:"平均算子数和平均字段数越低越好（更简洁），而总算子多样性、总字段多样性、连击、社区贡献越高越好。"},
    {q:"Harness Engineering 中，AI 的角色定位是？",opts:["完全自主生成并提交 Alpha","只负责生成原始信号，代码筛选，人类决策","替代人类的所有工作","只用于生成报告"],ans:1,explain:"AI 生成大量原始信号（广撒网），代码负责规模化筛选，人类做最终决策——三层分工，各司其职。"}
  ]
};
