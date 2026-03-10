// ============================================
//   💪 雅思英雄 - 植物BUFF系统
// ============================================

const BUFF_DEFINITIONS = {
    "vocab_flower": {
        id: "vocab_flower",
        name: "词汇之花",
        // 每个成长阶段的BUFF数值
        buffs: [
            { extraTime: 0 },    // 种子：无BUFF
            { extraTime: 1 },    // 幼苗：+1秒
            { extraTime: 2 },    // 成株：+2秒
            { extraTime: 3 },    // 开花：+3秒
        ]
    },
    "grammar_tree": {
        id: "grammar_tree",
        name: "语法之树",
        buffs: [
            { reduceDamage: 0 },
            { reduceDamage: 2 },
            { reduceDamage: 4 },
            { reduceDamage: 6 },
        ]
    },
    "oral_grass": {
        id: "oral_grass",
        name: "口语幸运草",
        buffs: [
            { scoreBonus: 0 },
            { scoreBonus: 0.1 },   // +10%
            { scoreBonus: 0.15 },  // +15%
            { scoreBonus: 0.25 },  // +25%
        ]
    },
    "writing_rose": {
        id: "writing_rose",
        name: "写作玫瑰",
        buffs: [
            { signInBonus: 0 },
            { signInBonus: 1 },
            { signInBonus: 2 },
            { signInBonus: 3 },
        ]
    },
    "listening_mushroom": {
        id: "listening_mushroom",
        name: "听力蘑菇",
        buffs: [
            { extraTime: 0 },
            { extraTime: 1 },
            { extraTime: 2 },
            { extraTime: 4 },
        ]
    }
};

// 计算玩家当前所有BUFF的总和
function calculateTotalBuffs() {
    const data = JSON.parse(localStorage.getItem('ieltsHeroData') || '{}');
    const plants = data.plants || [];

    let totalBuffs = {
        extraTime: 0,        // 额外答题时间
        reduceDamage: 0,     // 减少受到的伤害
        scoreBonus: 0,       // 得分加成比例
        signInBonus: 0       // 签到额外种子
    };

    // 获取植物阶段的辅助函数
    const PLANT_TYPES = [
        { id: "vocab_flower", growthNeeded: [0, 3, 8, 15] },
        { id: "grammar_tree", growthNeeded: [0, 4, 10, 20] },
        { id: "oral_grass", growthNeeded: [0, 3, 7, 12] },
        { id: "writing_rose", growthNeeded: [0, 5, 12, 22] },
        { id: "listening_mushroom", growthNeeded: [0, 3, 9, 16] }
    ];

    plants.forEach(plant => {
        const buffDef = BUFF_DEFINITIONS[plant.typeId];
        const typeInfo = PLANT_TYPES.find(t => t.id === plant.typeId);
        if (!buffDef || !typeInfo) return;

        // 计算植物阶段
        let stage = 0;
        for (let i = typeInfo.growthNeeded.length - 1; i >= 0; i--) {
            if (plant.growth >= typeInfo.growthNeeded[i]) {
                stage = i;
                break;
            }
        }

        // 累加BUFF
        const buff = buffDef.buffs[stage];
        Object.keys(buff).forEach(key => {
            if (totalBuffs.hasOwnProperty(key)) {
                totalBuffs[key] += buff[key];
            }
        });
    });

    return totalBuffs;
}

// 获取BUFF描述文字（用于UI显示）
function getBuffDescription(buffs) {
    let descriptions = [];
    if (buffs.extraTime > 0) descriptions.push(`⏱️ 答题时间 +${buffs.extraTime}秒`);
    if (buffs.reduceDamage > 0) descriptions.push(`🛡️ 减伤 -${buffs.reduceDamage}`);
    if (buffs.scoreBonus > 0) descriptions.push(`⭐ 得分 +${Math.round(buffs.scoreBonus * 100)}%`);
    if (buffs.signInBonus > 0) descriptions.push(`🌰 签到种子 +${buffs.signInBonus}`);
    return descriptions;
}