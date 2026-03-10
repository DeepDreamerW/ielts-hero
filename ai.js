// ============================================
//   🤖 雅思英雄 - AI对手系统
// ============================================

const AI_PROFILES = [
    {
        name: "小白学生",
        emoji: "👶",
        accuracy: 0.30,     // 答对概率
        speedMin: 5,        // 最快几秒答题
        speedMax: 9,        // 最慢几秒答题
        description: "刚开始学英语的小白",
        minScore: 0
    },
    {
        name: "英语课代表",
        emoji: "🧑‍🎓",
        accuracy: 0.45,
        speedMin: 4,
        speedMax: 8,
        description: "班级里的英语课代表",
        minScore: 200
    },
    {
        name: "四级选手",
        emoji: "📝",
        accuracy: 0.55,
        speedMin: 3,
        speedMax: 7,
        description: "刚过四级的大学生",
        minScore: 500
    },
    {
        name: "六级学霸",
        emoji: "🎓",
        accuracy: 0.65,
        speedMin: 3,
        speedMax: 6,
        description: "六级高分的学霸",
        minScore: 1000
    },
    {
        name: "雅思备考生",
        emoji: "✈️",
        accuracy: 0.72,
        speedMin: 2,
        speedMax: 5,
        description: "正在备考雅思的同学",
        minScore: 2000
    },
    {
        name: "雅思7分大佬",
        emoji: "🏅",
        accuracy: 0.80,
        speedMin: 2,
        speedMax: 4,
        description: "已经考过雅思7分",
        minScore: 4000
    },
    {
        name: "雅思8分学神",
        emoji: "👑",
        accuracy: 0.88,
        speedMin: 1,
        speedMax: 3,
        description: "雅思8分的学神级选手",
        minScore: 8000
    },
    {
        name: "英语母语者",
        emoji: "🌍",
        accuracy: 0.95,
        speedMin: 1,
        speedMax: 2,
        description: "以英语为母语的native speaker",
        minScore: 13000
    }
];

// 根据玩家分数匹配AI对手
function getAIOpponent(playerScore) {
    let matched = AI_PROFILES[0];
    for (let i = AI_PROFILES.length - 1; i >= 0; i--) {
        if (playerScore >= AI_PROFILES[i].minScore) {
            // 有30%概率匹配高一级的对手（增加挑战）
            if (i < AI_PROFILES.length - 1 && Math.random() < 0.3) {
                matched = AI_PROFILES[i + 1];
            } else {
                matched = AI_PROFILES[i];
            }
            break;
        }
    }
    return matched;
}

// AI答题（返回 {correct: bool, time: number}）
function aiAnswer(aiProfile) {
    const correct = Math.random() < aiProfile.accuracy;
    const time = aiProfile.speedMin + 
                 Math.random() * (aiProfile.speedMax - aiProfile.speedMin);
    return {
        correct: correct,
        time: Math.round(time * 10) / 10
    };
}