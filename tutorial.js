// ============================================
//   📖 雅思英雄 - 新手引导系统
// ============================================

// 引导步骤定义
const TUTORIAL_STEPS = {
    // 首页引导
    home: [
        {
            title: "👋 欢迎来到雅思英雄！",
            content: "这是一款用对战方式学习雅思词汇的游戏。\n打败AI对手，培育植物，一路从青铜冲上王者！",
            emoji: "⚔️",
            position: "center"
        },
        {
            title: "⚔️ 词汇对拼",
            content: "核心玩法！在限定时间内答对雅思词汇题。\n答对扣对手血量，答错扣自己血量。\n速度越快，伤害越高！",
            emoji: "🗡️",
            position: "center"
        },
        {
            title: "🎧 听力模式",
            content: "听英语单词发音，选出正确的单词。\n锻炼你的听力辨别能力！",
            emoji: "👂",
            position: "center"
        },
        {
            title: "🌱 植物花园",
            content: "对战获得种子和肥料，种植各种植物。\n植物长大后能给你战斗加成！\n比如：增加答题时间、减少伤害、提高得分。",
            emoji: "🌻",
            position: "center"
        },
        {
            title: "📅 每日签到",
            content: "每天签到领取种子奖励。\n连续签到天数越多，奖励越丰厚！\n连续7天还有额外肥料奖励哦~",
            emoji: "🎁",
            position: "center"
        },
        {
            title: "🏅 段位系统",
            content: "从倔强青铜一路冲到荣耀王者！\n每次对战获得积分，积分越高段位越高。\n段位越高，题目也会更难哦~",
            emoji: "👑",
            position: "center"
        },
        {
            title: "🎯 准备好了吗？",
            content: "点击「词汇对拼」开始你的第一场对战吧！\n加油，未来的雅思王者！💪",
            emoji: "🚀",
            position: "center"
        }
    ],

    // 对战引导
    battle: [
        {
            title: "📋 这是一道填空题",
            content: "阅读英文句子，选出最合适的单词填入空格。",
            emoji: "📝",
            position: "center"
        },
        {
            title: "⏱️ 注意计时器！",
            content: "你只有10秒钟答题（植物加成可以延长）。\n越快答对，造成的伤害越高！",
            emoji: "⚡",
            position: "center"
        },
        {
            title: "❤️ 血条说明",
            content: "左边是你的血量，右边是AI对手的。\n答对扣对手血，答错扣自己血。\n谁先血量归零谁就输了！",
            emoji: "💔",
            position: "center"
        },
        {
            title: "🔥 连击系统",
            content: "连续答对可以触发连击 COMBO！\n连击越多，伤害越高。\n一旦答错，连击归零。",
            emoji: "💥",
            position: "center"
        }
    ],

    // 花园引导
    garden: [
        {
            title: "🌱 欢迎来到你的花园！",
            content: "在这里你可以种植各种植物。\n每种植物都有不同的战斗加成效果！",
            emoji: "🏡",
            position: "center"
        },
        {
            title: "🌰 种子与肥料",
            content: "种子用来种植新植物，肥料用来浇水施肥。\n通过对战胜利和每日签到获得！",
            emoji: "💧",
            position: "center"
        },
        {
            title: "📈 植物成长",
            content: "植物有4个成长阶段：种子→幼苗→成株→开花。\n阶段越高，战斗加成越强！",
            emoji: "🌻",
            position: "center"
        }
    ]
};

// ============================================
//   🎨 引导界面渲染
// ============================================

function showTutorial(pageName, onComplete) {
    // 检查是否已经看过这个引导
    const viewedKey = `ieltsHero_tutorial_${pageName}`;
    if (localStorage.getItem(viewedKey) === 'done') {
        if (onComplete) onComplete();
        return;
    }

    const steps = TUTORIAL_STEPS[pageName];
    if (!steps || steps.length === 0) {
        if (onComplete) onComplete();
        return;
    }

    let currentStep = 0;

    // 创建遮罩层
    const overlay = document.createElement('div');
    overlay.id = 'tutorialOverlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        animation: fadeIn 0.3s;
    `;

    // 创建内容卡片
    const card = document.createElement('div');
    card.style.cssText = `
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        border: 2px solid rgba(255, 210, 0, 0.3);
        border-radius: 20px;
        padding: 30px;
        max-width: 340px;
        width: 100%;
        text-align: center;
        animation: scaleIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    `;

    overlay.appendChild(card);
    document.body.appendChild(overlay);

    // 渲染当前步骤
    function renderStep() {
        const step = steps[currentStep];
        const isLast = currentStep === steps.length - 1;
        const progress = `${currentStep + 1} / ${steps.length}`;

        card.style.animation = 'none';
        setTimeout(() => { card.style.animation = 'scaleIn 0.3s ease-out'; }, 10);

        card.innerHTML = `
            <div style="font-size: 50px; margin-bottom: 15px;">
                ${step.emoji}
            </div>
            <h2 style="color: #ffd200; font-size: 20px; margin-bottom: 12px;">
                ${step.title}
            </h2>
            <p style="color: #ccc; font-size: 14px; line-height: 1.8; white-space: pre-line; margin-bottom: 20px;">
                ${step.content}
            </p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                ${currentStep > 0 ? `
                    <button id="tutPrev" style="
                        padding: 10px 20px; border-radius: 10px;
                        background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
                        color: white; cursor: pointer; font-size: 14px;
                    ">⬅️ 上一步</button>
                ` : ''}
                <button id="tutNext" style="
                    padding: 10px 25px; border-radius: 10px;
                    background: linear-gradient(to right, #f7971e, #ffd200);
                    border: none; color: #333; cursor: pointer;
                    font-size: 14px; font-weight: bold;
                ">
                    ${isLast ? '✅ 开始游戏！' : '下一步 ➡️'}
                </button>
            </div>
            <div style="margin-top: 15px;">
                <span style="color: #666; font-size: 12px;">${progress}</span>
                <div style="display: flex; gap: 4px; justify-content: center; margin-top: 8px;">
                    ${steps.map((_, i) => `
                        <div style="
                            width: ${i === currentStep ? '20px' : '8px'};
                            height: 8px;
                            border-radius: 4px;
                            background: ${i === currentStep ? '#ffd200' : 'rgba(255,255,255,0.2)'};
                            transition: all 0.3s;
                        "></div>
                    `).join('')}
                </div>
            </div>
            <button id="tutSkip" style="
                margin-top: 12px; background: none; border: none;
                color: #666; font-size: 12px; cursor: pointer;
            ">跳过引导</button>
        `;

        // 绑定按钮事件
        document.getElementById('tutNext').onclick = () => {
            if (isLast) {
                closeTutorial();
            } else {
                currentStep++;
                renderStep();
            }
        };

        if (document.getElementById('tutPrev')) {
            document.getElementById('tutPrev').onclick = () => {
                currentStep--;
                renderStep();
            };
        }

        document.getElementById('tutSkip').onclick = closeTutorial;
    }

    function closeTutorial() {
        overlay.style.transition = 'opacity 0.3s';
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.remove();
            localStorage.setItem(viewedKey, 'done');
            if (onComplete) onComplete();
        }, 300);
    }

    renderStep();
}

// 重置引导（用于测试）
function resetAllTutorials() {
    Object.keys(TUTORIAL_STEPS).forEach(key => {
        localStorage.removeItem(`ieltsHero_tutorial_${key}`);
    });
    console.log('✅ 所有引导已重置，刷新页面即可重新看到引导');
}