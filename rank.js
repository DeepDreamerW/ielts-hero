// ============================================
//   🏅 段位系统 —— 雅思英雄
// ============================================

const RANKS = [
    { name: "倔强青铜 III", minScore: 0,    icon: "🥉", color: "#cd7f32" },
    { name: "倔强青铜 II",  minScore: 100,  icon: "🥉", color: "#cd7f32" },
    { name: "倔强青铜 I",   minScore: 200,  icon: "🥉", color: "#cd7f32" },
    { name: "秩序白银 III", minScore: 350,  icon: "⚪", color: "#c0c0c0" },
    { name: "秩序白银 II",  minScore: 500,  icon: "⚪", color: "#c0c0c0" },
    { name: "秩序白银 I",   minScore: 700,  icon: "⚪", color: "#c0c0c0" },
    { name: "荣耀黄金 III", minScore: 1000, icon: "🥇", color: "#ffd700" },
    { name: "荣耀黄金 II",  minScore: 1300, icon: "🥇", color: "#ffd700" },
    { name: "荣耀黄金 I",   minScore: 1600, icon: "🥇", color: "#ffd700" },
    { name: "尊贵铂金 III", minScore: 2000, icon: "💎", color: "#00bcd4" },
    { name: "尊贵铂金 II",  minScore: 2500, icon: "💎", color: "#00bcd4" },
    { name: "尊贵铂金 I",   minScore: 3000, icon: "💎", color: "#00bcd4" },
    { name: "永恒钻石 III", minScore: 3800, icon: "💠", color: "#e040fb" },
    { name: "永恒钻石 II",  minScore: 4600, icon: "💠", color: "#e040fb" },
    { name: "永恒钻石 I",   minScore: 5500, icon: "💠", color: "#e040fb" },
    { name: "至尊星耀 III", minScore: 7000, icon: "🌟", color: "#ffd200" },
    { name: "至尊星耀 II",  minScore: 8500, icon: "🌟", color: "#ffd200" },
    { name: "至尊星耀 I",   minScore: 10000,icon: "🌟", color: "#ffd200" },
    { name: "最强王者",      minScore: 13000,icon: "👑", color: "#ff6d00" },
    { name: "荣耀王者",      minScore: 18000,icon: "👑", color: "#ff1744" },
];

// 根据分数计算段位
function getRank(score) {
    let rank = RANKS[0];
    for (let i = RANKS.length - 1; i >= 0; i--) {
        if (score >= RANKS[i].minScore) {
            rank = RANKS[i];
            break;
        }
    }
    return rank;
}

// 计算距离下一段位还差多少分
function getNextRankInfo(score) {
    for (let i = 0; i < RANKS.length; i++) {
        if (score < RANKS[i].minScore) {
            return {
                nextRank: RANKS[i],
                pointsNeeded: RANKS[i].minScore - score
            };
        }
    }
    return { nextRank: null, pointsNeeded: 0 }; // 已经最高段位
}

// 更新存档中的段位
function updateRank() {
    let data = JSON.parse(localStorage.getItem('ieltsHeroData') || '{}');
    const rank = getRank(data.score || 0);
    data.rank = rank.icon + " " + rank.name;
    localStorage.setItem('ieltsHeroData', JSON.stringify(data));
    return rank;
}