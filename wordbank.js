// ============================================
//   📚 雅思英雄 - 雅思词汇题库
//   难度：1=青铜  2=白银  3=黄金  4=铂金  5=钻石+
// ============================================

const WORD_BANK = [

    // ============================
    //   ⭐ 难度1：青铜（基础词汇）
    // ============================
    {
        difficulty: 1,
        sentence: "I need to _____ English for my future career.",
        options: ["learn", "teach", "forget", "ignore"],
        answer: 0,
        translation: "我需要学习英语来为未来的职业做准备。",
        tip: "learn = 学习"
    },
    {
        difficulty: 1,
        sentence: "She _____ to school by bus every day.",
        options: ["goes", "plays", "eats", "sleeps"],
        answer: 0,
        translation: "她每天坐公交车去上学。",
        tip: "goes to school = 去上学"
    },
    {
        difficulty: 1,
        sentence: "The weather today is very _____.",
        options: ["beautiful", "difficult", "dangerous", "expensive"],
        answer: 0,
        translation: "今天天气非常好。",
        tip: "beautiful = 美好的"
    },
    {
        difficulty: 1,
        sentence: "He is _____ in learning new languages.",
        options: ["interested", "boring", "tired", "angry"],
        answer: 0,
        translation: "他对学习新语言感兴趣。",
        tip: "interested in = 对...感兴趣"
    },
    {
        difficulty: 1,
        sentence: "We should _____ more water every day.",
        options: ["drink", "eat", "cook", "wash"],
        answer: 0,
        translation: "我们每天应该多喝水。",
        tip: "drink water = 喝水"
    },
    {
        difficulty: 1,
        sentence: "The book on the table _____ to me.",
        options: ["belongs", "goes", "comes", "runs"],
        answer: 0,
        translation: "桌子上的书是我的。",
        tip: "belong to = 属于"
    },
    {
        difficulty: 1,
        sentence: "Please _____ me your phone number.",
        options: ["give", "take", "bring", "carry"],
        answer: 0,
        translation: "请给我你的电话号码。",
        tip: "give = 给"
    },
    {
        difficulty: 1,
        sentence: "I _____ a lot of friends at school.",
        options: ["have", "has", "had", "having"],
        answer: 0,
        translation: "我在学校有很多朋友。",
        tip: "have = 拥有"
    },
    {
        difficulty: 1,
        sentence: "They decided to _____ a new house.",
        options: ["buy", "sell", "rent", "build"],
        answer: 0,
        translation: "他们决定买一栋新房子。",
        tip: "buy = 购买"
    },
    {
        difficulty: 1,
        sentence: "It is _____ to exercise regularly.",
        options: ["important", "impossible", "impolite", "immature"],
        answer: 0,
        translation: "经常锻炼是很重要的。",
        tip: "important = 重要的"
    },
    {
        difficulty: 1,
        sentence: "She can _____ three languages fluently.",
        options: ["speak", "write", "read", "listen"],
        answer: 0,
        translation: "她能流利地说三种语言。",
        tip: "speak = 说（语言）"
    },
    {
        difficulty: 1,
        sentence: "The movie was very _____ and everyone enjoyed it.",
        options: ["exciting", "boring", "confusing", "tiring"],
        answer: 0,
        translation: "这部电影非常精彩，大家都很喜欢。",
        tip: "exciting = 令人兴奋的"
    },

    // ============================
    //   ⭐⭐ 难度2：白银（四级词汇）
    // ============================
    {
        difficulty: 2,
        sentence: "The company plans to _____ its business overseas.",
        options: ["expand", "export", "expose", "expect"],
        answer: 0,
        translation: "公司计划将业务扩展到海外。",
        tip: "expand = 扩展，扩大"
    },
    {
        difficulty: 2,
        sentence: "We need to _____ a solution to this problem.",
        options: ["find", "found", "fund", "form"],
        answer: 0,
        translation: "我们需要找到这个问题的解决方案。",
        tip: "find a solution = 找到解决方案"
    },
    {
        difficulty: 2,
        sentence: "The teacher asked the students to _____ the main idea.",
        options: ["summarize", "memorize", "realize", "organize"],
        answer: 0,
        translation: "老师要求学生总结主要观点。",
        tip: "summarize = 总结，概括"
    },
    {
        difficulty: 2,
        sentence: "The population of this city has _____ rapidly.",
        options: ["increased", "decreased", "maintained", "controlled"],
        answer: 0,
        translation: "这个城市的人口迅速增长了。",
        tip: "increase = 增加，增长"
    },
    {
        difficulty: 2,
        sentence: "Many people _____ that technology brings more benefits.",
        options: ["believe", "doubt", "deny", "forget"],
        answer: 0,
        translation: "很多人相信科技带来更多好处。",
        tip: "believe = 相信"
    },
    {
        difficulty: 2,
        sentence: "The government decided to _____ new regulations.",
        options: ["introduce", "produce", "reduce", "reproduce"],
        answer: 0,
        translation: "政府决定引入新的法规。",
        tip: "introduce = 引入，推出"
    },
    {
        difficulty: 2,
        sentence: "It is necessary to _____ the environment for future generations.",
        options: ["protect", "produce", "prevent", "promote"],
        answer: 0,
        translation: "为子孙后代保护环境是必要的。",
        tip: "protect = 保护"
    },
    {
        difficulty: 2,
        sentence: "The experiment was _____ to test the new theory.",
        options: ["designed", "desired", "described", "destroyed"],
        answer: 0,
        translation: "该实验旨在测试新理论。",
        tip: "designed to = 旨在，目的是"
    },
    {
        difficulty: 2,
        sentence: "Students should _____ actively in class discussions.",
        options: ["participate", "anticipate", "hesitate", "dominate"],
        answer: 0,
        translation: "学生应该积极参与课堂讨论。",
        tip: "participate in = 参与"
    },
    {
        difficulty: 2,
        sentence: "The new policy will _____ millions of people.",
        options: ["affect", "effect", "infect", "reflect"],
        answer: 0,
        translation: "新政策将影响数百万人。",
        tip: "affect = 影响（动词）"
    },
    {
        difficulty: 2,
        sentence: "We must _____ the advantages and disadvantages carefully.",
        options: ["consider", "consume", "consist", "confirm"],
        answer: 0,
        translation: "我们必须仔细考虑利弊。",
        tip: "consider = 考虑"
    },
    {
        difficulty: 2,
        sentence: "The research _____ that sleep is essential for health.",
        options: ["suggests", "suspects", "supports", "supplies"],
        answer: 0,
        translation: "研究表明睡眠对健康至关重要。",
        tip: "suggest = 表明，暗示"
    },

    // ============================
    //   ⭐⭐⭐ 难度3：黄金（六级词汇）
    // ============================
    {
        difficulty: 3,
        sentence: "The government decided to _____ new policies to address climate change.",
        options: ["implement", "imply", "import", "improve"],
        answer: 0,
        translation: "政府决定实施新政策来应对气候变化。",
        tip: "implement = 实施，执行"
    },
    {
        difficulty: 3,
        sentence: "The study aims to _____ the relationship between diet and health.",
        options: ["investigate", "invest", "invent", "invite"],
        answer: 0,
        translation: "该研究旨在调查饮食与健康之间的关系。",
        tip: "investigate = 调查，研究"
    },
    {
        difficulty: 3,
        sentence: "Many students find it difficult to _____ to a new learning environment.",
        options: ["admit", "adopt", "adapt", "adore"],
        answer: 2,
        translation: "许多学生发现很难适应新的学习环境。",
        tip: "adapt to = 适应"
    },
    {
        difficulty: 3,
        sentence: "The results of the experiment were _____ with previous findings.",
        options: ["considerate", "consistent", "conscious", "considerable"],
        answer: 1,
        translation: "实验结果与之前的发现一致。",
        tip: "consistent with = 与...一致"
    },
    {
        difficulty: 3,
        sentence: "Education plays a _____ role in economic development.",
        options: ["crucial", "crude", "cruel", "crisp"],
        answer: 0,
        translation: "教育在经济发展中起着至关重要的作用。",
        tip: "crucial = 至关重要的"
    },
    {
        difficulty: 3,
        sentence: "The report _____ that pollution levels have increased significantly.",
        options: ["involves", "indicates", "includes", "inspires"],
        answer: 1,
        translation: "报告表明污染水平已显著上升。",
        tip: "indicate = 表明，指出"
    },
    {
        difficulty: 3,
        sentence: "It is important to _____ cultural diversity in modern society.",
        options: ["embrace", "embarrass", "emerge", "embed"],
        answer: 0,
        translation: "在现代社会中拥抱文化多样性是很重要的。",
        tip: "embrace = 拥抱，欣然接受"
    },
    {
        difficulty: 3,
        sentence: "The government should _____ more resources to public education.",
        options: ["locate", "allocate", "dislocate", "collocate"],
        answer: 1,
        translation: "政府应该为公共教育分配更多资源。",
        tip: "allocate = 分配"
    },
    {
        difficulty: 3,
        sentence: "There is a growing _____ that technology is changing our lives.",
        options: ["consensus", "census", "concept", "concern"],
        answer: 0,
        translation: "越来越多的人达成共识：技术正在改变我们的生活。",
        tip: "consensus = 共识"
    },
    {
        difficulty: 3,
        sentence: "The researcher _____ data from over 1,000 participants.",
        options: ["collected", "connected", "corrected", "conducted"],
        answer: 0,
        translation: "研究人员从1000多名参与者中收集了数据。",
        tip: "collect = 收集"
    },
    {
        difficulty: 3,
        sentence: "Urbanization has _____ significant changes in lifestyles.",
        options: ["brought about", "brought up", "brought in", "brought out"],
        answer: 0,
        translation: "城市化给生活方式带来了重大变化。",
        tip: "bring about = 导致，引起"
    },
    {
        difficulty: 3,
        sentence: "It is widely _____ that exercise benefits mental health.",
        options: ["accomplished", "acknowledged", "accumulated", "accompanied"],
        answer: 1,
        translation: "人们普遍认为运动对心理健康有益。",
        tip: "acknowledge = 承认，公认"
    },
    {
        difficulty: 3,
        sentence: "Students should develop the ability to think _____.",
        options: ["critically", "criminally", "chronically", "credibly"],
        answer: 0,
        translation: "学生应该培养批判性思维能力。",
        tip: "critically = 批判性地"
    },
    {
        difficulty: 3,
        sentence: "The gap between rich and poor continues to _____.",
        options: ["narrow", "widen", "deepen", "shorten"],
        answer: 1,
        translation: "贫富差距持续扩大。",
        tip: "widen = 扩大"
    },

    // ============================
    //   ⭐⭐⭐⭐ 难度4：铂金（雅思核心词汇）
    // ============================
    {
        difficulty: 4,
        sentence: "The findings _____ the hypothesis that diet affects cognition.",
        options: ["corroborate", "contradict", "correlate", "correspond"],
        answer: 0,
        translation: "研究结果证实了饮食影响认知的假说。",
        tip: "corroborate = 证实，确证"
    },
    {
        difficulty: 4,
        sentence: "The new law was designed to _____ discrimination in the workplace.",
        options: ["eliminate", "elaborate", "elevate", "emigrate"],
        answer: 0,
        translation: "新法律旨在消除工作场所的歧视。",
        tip: "eliminate = 消除，根除"
    },
    {
        difficulty: 4,
        sentence: "The economic crisis had _____ effects on global trade.",
        options: ["detrimental", "beneficial", "marginal", "superficial"],
        answer: 0,
        translation: "经济危机对全球贸易产生了有害的影响。",
        tip: "detrimental = 有害的，不利的"
    },
    {
        difficulty: 4,
        sentence: "Scientists are trying to _____ the underlying causes of the disease.",
        options: ["ascertain", "assemble", "assimilate", "associate"],
        answer: 0,
        translation: "科学家们正试图确定疾病的根本原因。",
        tip: "ascertain = 查明，确定"
    },
    {
        difficulty: 4,
        sentence: "The professor's argument was both _____ and well-supported.",
        options: ["compelling", "competing", "complaining", "composing"],
        answer: 0,
        translation: "教授的论点既有说服力又有充分的论据支持。",
        tip: "compelling = 令人信服的"
    },
    {
        difficulty: 4,
        sentence: "The two theories are not mutually _____; they can coexist.",
        options: ["exclusive", "excessive", "extensive", "expensive"],
        answer: 0,
        translation: "这两个理论不是相互排斥的；它们可以共存。",
        tip: "mutually exclusive = 相互排斥的"
    },
    {
        difficulty: 4,
        sentence: "The study provides _____ evidence of the link between stress and illness.",
        options: ["empirical", "emotional", "essential", "ethical"],
        answer: 0,
        translation: "该研究提供了压力与疾病之间联系的实证证据。",
        tip: "empirical = 实证的，经验主义的"
    },
    {
        difficulty: 4,
        sentence: "Urban sprawl has led to the _____ of natural habitats.",
        options: ["degradation", "decoration", "dedication", "delegation"],
        answer: 0,
        translation: "城市扩张导致了自然栖息地的退化。",
        tip: "degradation = 退化，恶化"
    },
    {
        difficulty: 4,
        sentence: "The government needs to _____ economic growth with environmental protection.",
        options: ["reconcile", "recognize", "recommend", "reconsider"],
        answer: 0,
        translation: "政府需要协调经济增长与环境保护之间的关系。",
        tip: "reconcile = 调和，协调"
    },
    {
        difficulty: 4,
        sentence: "The policy change was met with _____ from various stakeholders.",
        options: ["scrutiny", "security", "scenery", "surgery"],
        answer: 0,
        translation: "政策变化受到了各方利益相关者的审视。",
        tip: "scrutiny = 仔细审查"
    },
    {
        difficulty: 4,
        sentence: "The author _____ that social media has eroded privacy.",
        options: ["contends", "contains", "consents", "contacts"],
        answer: 0,
        translation: "作者主张社交媒体已经侵蚀了隐私。",
        tip: "contend = 主张，声称"
    },
    {
        difficulty: 4,
        sentence: "Access to education should not be _____ by socioeconomic status.",
        options: ["constrained", "constructed", "consumed", "convinced"],
        answer: 0,
        translation: "获得教育的机会不应该受到社会经济地位的限制。",
        tip: "constrain = 限制，约束"
    },

    // ============================
    //   ⭐⭐⭐⭐⭐ 难度5：钻石+（雅思7+高阶词汇）
    // ============================
    {
        difficulty: 5,
        sentence: "The _____ of wealth in society has become increasingly unequal.",
        options: ["distribution", "contribution", "constitution", "institution"],
        answer: 0,
        translation: "社会财富的分配变得越来越不平等。",
        tip: "distribution = 分配，分布"
    },
    {
        difficulty: 5,
        sentence: "The phenomenon can be _____ to a combination of social and economic factors.",
        options: ["attributed", "contributed", "distributed", "substituted"],
        answer: 0,
        translation: "这一现象可归因于社会和经济因素的结合。",
        tip: "attribute to = 归因于"
    },
    {
        difficulty: 5,
        sentence: "The perpetual _____ between development and conservation remains unresolved.",
        options: ["dichotomy", "diplomacy", "democracy", "demography"],
        answer: 0,
        translation: "发展与保护之间的持久二分法仍未解决。",
        tip: "dichotomy = 二分法，对立"
    },
    {
        difficulty: 5,
        sentence: "The researcher adopted a _____ approach to analyze the complex data.",
        options: ["multifaceted", "manufactured", "manipulated", "manifested"],
        answer: 0,
        translation: "研究人员采用了多方面的方法来分析复杂数据。",
        tip: "multifaceted = 多方面的"
    },
    {
        difficulty: 5,
        sentence: "The artist's work _____ the cultural tensions of the era.",
        options: ["epitomizes", "emphasizes", "energizes", "equalizes"],
        answer: 0,
        translation: "这位艺术家的作品是那个时代文化张力的缩影。",
        tip: "epitomize = 成为...的典型/缩影"
    },
    {
        difficulty: 5,
        sentence: "Critics argue that the policy is _____ and fails to address root causes.",
        options: ["superficial", "substantial", "sustainable", "susceptible"],
        answer: 0,
        translation: "批评者认为该政策是肤浅的，未能解决根本原因。",
        tip: "superficial = 表面的，肤浅的"
    },
    {
        difficulty: 5,
        sentence: "The treaty aims to _____ the proliferation of nuclear weapons.",
        options: ["curtail", "cultivate", "culminate", "circulate"],
        answer: 0,
        translation: "该条约旨在遏制核武器的扩散。",
        tip: "curtail = 削减，遏制"
    },
    {
        difficulty: 5,
        sentence: "The notion that technology is inherently _____ has been widely debated.",
        options: ["benevolent", "belligerent", "bewildering", "blasphemous"],
        answer: 0,
        translation: "技术本质上是善意的这一观念一直备受争议。",
        tip: "benevolent = 善意的，仁慈的"
    },
    {
        difficulty: 5,
        sentence: "The study reveals a _____ between public perception and scientific evidence.",
        options: ["discrepancy", "discovery", "discretion", "discipline"],
        answer: 0,
        translation: "研究揭示了公众认知与科学证据之间的差异。",
        tip: "discrepancy = 差异，不一致"
    },
    {
        difficulty: 5,
        sentence: "The government's response was widely criticized as _____ and inadequate.",
        options: ["perfunctory", "permanent", "permissive", "persistent"],
        answer: 0,
        translation: "政府的回应被广泛批评为敷衍了事且不够充分。",
        tip: "perfunctory = 敷衍的，马虎的"
    },
    {
        difficulty: 5,
        sentence: "The _____ nature of the issue requires a collaborative approach.",
        options: ["multifarious", "malicious", "meticulous", "monotonous"],
        answer: 0,
        translation: "问题的多样性本质要求采取协作方法。",
        tip: "multifarious = 多种多样的"
    },
    {
        difficulty: 5,
        sentence: "Her speech was deliberately _____, avoiding any concrete commitments.",
        options: ["ambiguous", "ambitious", "amicable", "anonymous"],
        answer: 0,
        translation: "她的演讲故意含糊不清，避免做出任何具体承诺。",
        tip: "ambiguous = 模棱两可的"
    }
];

// ============================================
//   🔧 题库工具函数
// ============================================

// 根据难度获取题目
function getQuestionsByDifficulty(minDiff, maxDiff) {
    return WORD_BANK.filter(q => q.difficulty >= minDiff && q.difficulty <= maxDiff);
}

// 根据段位分数获取适合的难度范围
function getDifficultyForScore(score) {
    if (score < 200) return { min: 1, max: 1 };       // 青铜
    if (score < 500) return { min: 1, max: 2 };       // 白银
    if (score < 1000) return { min: 2, max: 3 };      // 黄金
    if (score < 2000) return { min: 2, max: 4 };      // 铂金
    if (score < 4000) return { min: 3, max: 4 };      // 钻石
    if (score < 8000) return { min: 3, max: 5 };      // 星耀
    return { min: 4, max: 5 };                          // 王者
}

// 获取匹配段位的随机题目
function getMatchedQuestions(score, count = 10) {
    const diff = getDifficultyForScore(score);
    let pool = getQuestionsByDifficulty(diff.min, diff.max);

    // 随机打乱
    for (let i = pool.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    return pool.slice(0, count);
}

// 获取难度的星星显示
function getDifficultyStars(level) {
    return '⭐'.repeat(level);
}