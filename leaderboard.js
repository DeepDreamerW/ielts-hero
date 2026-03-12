// ============================================
//   🏆 雅思英雄 - 在线排行榜
//   使用 JSONBin.io 免费API
// ============================================

// ⚠️ 替换成你自己的 API Key 和 Bin ID
const JSONBIN_API_KEY = '$2a$10$L6Pi1bL4HGrR72lH5CnKC.MWlGSptBczpLAMhbxIq8i0wiQVMAS0O'; // 替换！
let JSONBIN_BIN_ID = ''; // 第一次运行后会自动生成

const JSONBIN_BASE_URL = 'https://api.jsonbin.io/v3';

// ===== 创建排行榜Bin（第一次使用） =====
async function createLeaderboardBin() {
    try {
        const response = await fetch(`${JSONBIN_BASE_URL}/b`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY,
                'X-Bin-Name': 'ielts-hero-leaderboard'
            },
            body: JSON.stringify({ leaderboard: [] })
        });
        const data = await response.json();
        JSONBIN_BIN_ID = data.metadata.id;
        localStorage.setItem('ieltsHero_binId', JSONBIN_BIN_ID);
        console.log('✅ 排行榜创建成功，Bin ID:', JSONBIN_BIN_ID);
        return JSONBIN_BIN_ID;
    } catch (err) {
        console.error('创建排行榜失败:', err);
        return null;
    }
}

// ===== 获取排行榜数据 =====
async function getLeaderboard() {
    JSONBIN_BIN_ID = localStorage.getItem('ieltsHero_binId') || JSONBIN_BIN_ID;
    if (!JSONBIN_BIN_ID) {
        await createLeaderboardBin();
    }
    if (!JSONBIN_BIN_ID) return [];

    try {
        const response = await fetch(`${JSONBIN_BASE_URL}/b/${JSONBIN_BIN_ID}/latest`, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY }
        });
        const data = await response.json();
        return data.record.leaderboard || [];
    } catch (err) {
        console.error('获取排行榜失败:', err);
        return [];
    }
}

// ===== 提交分数到排行榜 =====
async function submitScore(playerName, avatar, score, rank) {
    JSONBIN_BIN_ID = localStorage.getItem('ieltsHero_binId') || JSONBIN_BIN_ID;
    if (!JSONBIN_BIN_ID) {
        await createLeaderboardBin();
    }
    if (!JSONBIN_BIN_ID) return false;

    try {
        // 先获取当前排行榜
        let leaderboard = await getLeaderboard();

        // 查找是否已存在该玩家
        const existingIndex = leaderboard.findIndex(p => p.name === playerName);
        const entry = {
            name: playerName,
            avatar: avatar || '🧑‍🎓',
            score: score,
            rank: rank,
            updatedAt: new Date().toISOString()
        };

        if (existingIndex >= 0) {
            // 更新已有记录（只在分数更高时更新）
            if (score > leaderboard[existingIndex].score) {
                leaderboard[existingIndex] = entry;
            }
        } else {
            leaderboard.push(entry);
        }

        // 按分数排序，只保留前100名
        leaderboard.sort((a, b) => b.score - a.score);
        leaderboard = leaderboard.slice(0, 100);

        // 写回
        await fetch(`${JSONBIN_BASE_URL}/b/${JSONBIN_BIN_ID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify({ leaderboard: leaderboard })
        });

        console.log('✅ 分数提交成功');
        return true;
    } catch (err) {
        console.error('提交分数失败:', err);
        return false;
    }
}

// ===== 自动提交当前玩家分数 =====
async function syncMyScore() {
    const data = JSON.parse(localStorage.getItem('ieltsHeroData') || '{}');
    if ((data.score || 0) > 0) {
        const rank = getRank(data.score);
        await submitScore(
            data.name || '匿名学者',
            data.avatar || '🧑‍🎓',
            data.score,
            rank.name
        );
    }
}