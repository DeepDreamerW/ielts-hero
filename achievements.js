// ============================================
//   🏆 雅思英雄 - 成就系统
// ============================================

const ACHIEVEMENTS = [
    // 🎮 对战成就
    {
        id: "first_blood",
        name: "初次见血",
        desc: "完成第一场对战",
        icon: "⚔️",
        check: (data) => (data.totalGames || 0) >= 1
    },
    {
        id: "ten_battles",
        name: "身经百战",
        desc: "完成10场对战",
        icon: "🗡️",
        check: (data) => (data.totalGames || 0) >= 10
    },
    {
        id: "fifty_battles",
        name: "战场老兵",
        desc: "完成50场对战",
        icon: "🛡️",
        check: (data) => (data.totalGames || 0) >= 50
    },
    {
        id: "first_win",
        name: "首胜达成",
        desc: "赢得第一场对战",
        icon: "🏆",
        check: (data) => (data.totalWins || 0) >= 1
    },
    {
        id: "ten_wins",
        name: "常胜将军",
        desc: "赢得10场对战",
        icon: "👑",
        check: (data) => (data.totalWins || 0) >= 10
    },

    // 📈 段位成就
    {
        id: "rank_silver",
        name: "白银之路",
        desc: "达到白银段位（200分）",
        icon: "⚪",
        check: (data) => (data.score || 0) >= 200
    },
    {
        id: "rank_gold",
        name: "黄金传说",
        desc: "达到黄金段位（1000分）",
        icon: "🥇",
        check: (data) => (data.score || 0) >= 1000
    },
    {
        id: "rank_platinum",
        name: "铂金荣耀",
        desc: "达到铂金段位（2000分）",
        icon: "💎",
        check: (data) => (data.score || 0) >= 2000
    },
    {
        id: "rank_diamond",
        name: "钻石之心",
        desc: "达到钻石段位（3800分）",
        icon: "💠",
        check: (data) => (data.score || 0) >= 3800
    },
    {
        id: "rank_king",
        name: "最强王者",
        desc: "达到王者段位（13000分）",
        icon: "👑",
        check: (data) => (data.score || 0) >= 13000
    },

    // 🌱 植物成就
    {
        id: "first_plant",
        name: "园丁入门",
        desc: "种下第一棵植物",
        icon: "🌱",
        check: (data) => (data.plants || []).length >= 1
    },
    {
        id: "full_garden",
        name: "花园满员",
        desc: "拥有9棵植物",
        icon: "🌸",
        check: (data) => (data.plants || []).length >= 9
    },
    {
        id: "first_bloom",
        name: "初次绽放",
        desc: "有一棵植物完全长大",
        icon: "🌻",
        check: (data) => {
            const maxGrowth = { vocab_flower: 15, grammar_tree: 20, oral_grass: 12, writing_rose: 22, listening_mushroom: 16 };
            return (data.plants || []).some(p => p.growth >= (maxGrowth[p.typeId] || 99));
        }
    },

    // 📅 签到成就
    {
        id: "sign_7",
        name: "坚持一周",
        desc: "连续签到7天",
        icon: "📅",
        check: (data) => (data.signInDays || 0) >= 7
    },
    {
        id: "sign_30",
        name: "月度之星",
        desc: "连续签到30天",
        icon: "🌟",
        check: (data) => (data.signInDays || 0) >= 30
    },

    // 🎯 特殊成就
    {
        id: "score_1000",
        name: "千分大关",
        desc: "累计积分达到1000",
        icon: "🎯",
        check: (data) => (data.score || 0) >= 1000
    },
    {
        id: "score_10000",
        name: "万分传说",
        desc: "累计积分达到10000",
        icon: "🔥",
        check: (data) => (data.score || 0) >= 10000
    },
];

// 检查所有成就
function checkAchievements() {
    const data = JSON.parse(localStorage.getItem('ieltsHeroData') || '{}');
    let unlocked = JSON.parse(localStorage.getItem('ieltsHeroAchievements') || '[]');
    let newlyUnlocked = [];

    ACHIEVEMENTS.forEach(achievement => {
        if (!unlocked.includes(achievement.id) && achievement.check(data)) {
            unlocked.push(achievement.id);
            newlyUnlocked.push(achievement);
        }
    });

    localStorage.setItem('ieltsHeroAchievements', JSON.stringify(unlocked));
    return newlyUnlocked;
}

// 获取已解锁的成就
function getUnlockedAchievements() {
    return JSON.parse(localStorage.getItem('ieltsHeroAchievements') || '[]');
}

// 显示成就解锁弹窗
function showAchievementPopup(achievement) {
    const popup = document.createElement('div');
    popup.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border: 2px solid #ffd200; border-radius: 15px;
        padding: 15px 25px; z-index: 9999;
        display: flex; align-items: center; gap: 12px;
        animation: fadeInUp 0.5s ease-out;
        box-shadow: 0 5px 25px rgba(255,210,0,0.3);
    `;
    popup.innerHTML = `
        <span style="font-size:36px;">${achievement.icon}</span>
        <div>
            <div style="color:#ffd200; font-size:12px;">🏆 成就解锁！</div>
            <div style="color:white; font-size:16px; font-weight:bold;">${achievement.name}</div>
            <div style="color:#aaa; font-size:12px;">${achievement.desc}</div>
        </div>
    `;
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.style.transition = 'opacity 0.5s, transform 0.5s';
        popup.style.opacity = '0';
        popup.style.transform = 'translateX(-50%) translateY(-20px)';
        setTimeout(() => popup.remove(), 500);
    }, 3000);
}

// 检查并显示新成就
function checkAndShowAchievements() {
    const newOnes = checkAchievements();
    newOnes.forEach((achievement, index) => {
        setTimeout(() => showAchievementPopup(achievement), index * 3500);
    });
    return newOnes;
}