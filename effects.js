// ============================================
//   ✨ 雅思英雄 - 特效系统
// ============================================

// ===== 伤害飘字 =====
function showDamageNumber(x, y, text, type = 'hit') {
    const el = document.createElement('div');
    el.className = `damage-number ${type}`;
    el.textContent = text;
    el.style.left = x + 'px';
    el.style.top = y + 'px';
    document.body.appendChild(el);

    setTimeout(() => el.remove(), 1000);
}

// ===== 屏幕闪烁 =====
function flashScreen(isCorrect) {
    document.body.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
    setTimeout(() => {
        document.body.classList.remove('flash-correct', 'flash-wrong');
    }, 500);
}

// ===== 元素抖动 =====
function shakeElement(element) {
    element.style.animation = 'shake 0.5s';
    setTimeout(() => {
        element.style.animation = '';
    }, 500);
}

// ===== 胜利撒花 =====
function showVictoryParticles() {
    const container = document.createElement('div');
    container.className = 'particles-container';
    document.body.appendChild(container);

    const emojis = ['🌟', '⭐', '✨', '🎉', '🏆', '💫', '🌸', '🎊'];

    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.cssText = `
                position: absolute;
                left: ${Math.random() * 100}%;
                top: -20px;
                font-size: ${16 + Math.random() * 24}px;
                animation: particleFall ${2 + Math.random() * 3}s linear forwards;
            `;
            container.appendChild(particle);
        }, i * 80);
    }

    setTimeout(() => container.remove(), 6000);
}

// ===== 失败碎屏效果 =====
function showDefeatEffect() {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0; left: 0;
        width: 100%; height: 100%;
        background: radial-gradient(circle, transparent 30%, rgba(255,0,0,0.2) 100%);
        z-index: 997;
        pointer-events: none;
        animation: fadeIn 0.5s;
    `;
    document.body.appendChild(overlay);
    setTimeout(() => overlay.remove(), 2000);
}

// ===== 段位升级特效 =====
function showRankUpEffect(oldRank, newRank) {
    const overlay = document.createElement('div');
    overlay.className = 'rank-up-overlay';
    overlay.innerHTML = `
        <div class="rank-up-content">
            <h1>🎊 段位提升！</h1>
            <p style="color:#aaa; font-size:16px;">${oldRank}</p>
            <p style="color:#ffd200; font-size:24px; margin:10px 0;">⬇️</p>
            <span class="rank-icon">${newRank.icon}</span>
            <h2 style="color:${newRank.color}; font-size:28px;">${newRank.name}</h2>
            <button onclick="this.parentElement.parentElement.remove()" style="
                margin-top:25px;
                background: linear-gradient(to right, #f7971e, #ffd200);
                border: none;
                padding: 12px 40px;
                border-radius: 25px;
                font-size: 16px;
                cursor: pointer;
                font-weight: bold;
                color: #333;
            ">太棒了！</button>
        </div>
    `;
    document.body.appendChild(overlay);
}

// ===== 连击特效（连击≥3时触发） =====
function showComboEffect(comboCount) {
    const el = document.createElement('div');
    el.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: ${40 + comboCount * 5}px;
        font-weight: bold;
        color: #ffd200;
        text-shadow: 0 0 30px rgba(255, 210, 0, 0.8);
        z-index: 999;
        pointer-events: none;
        animation: scaleIn 0.3s ease-out, fadeIn 0.3s;
    `;
    el.textContent = `🔥 ${comboCount} COMBO!`;
    document.body.appendChild(el);

    setTimeout(() => {
        el.style.transition = 'opacity 0.5s';
        el.style.opacity = '0';
        setTimeout(() => el.remove(), 500);
    }, 800);
}

// ===== 植物成长动画 =====
function showGrowthEffect(element) {
    element.style.animation = 'scaleIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    
    // 加点星星
    for (let i = 0; i < 6; i++) {
        const star = document.createElement('span');
        star.textContent = '✨';
        star.style.cssText = `
            position: absolute;
            font-size: 16px;
            pointer-events: none;
            animation: particleFall 1.5s linear forwards;
            left: ${30 + Math.random() * 40}%;
        `;
        element.appendChild(star);
        setTimeout(() => star.remove(), 1500);
    }
}