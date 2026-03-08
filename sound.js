// ============================================
//   🔊 雅思英雄 - 音效系统
//   使用 Web Audio API 生成，无需音频文件
// ============================================

const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;

// 确保音频上下文已初始化
function ensureAudio() {
    if (!audioCtx) {
        audioCtx = new AudioCtx();
    }
    return audioCtx;
}

// ===== 基础音效生成 =====
function playTone(frequency, duration, type = 'sine', volume = 0.3) {
    const ctx = ensureAudio();
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime);

    gainNode.gain.setValueAtTime(volume, ctx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);

    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);

    oscillator.start(ctx.currentTime);
    oscillator.stop(ctx.currentTime + duration);
}

// ===== 游戏音效 =====

// ✅ 答对音效（上升音调）
function playCorrectSound() {
    playTone(523, 0.1, 'sine', 0.3);      // C
    setTimeout(() => playTone(659, 0.1, 'sine', 0.3), 100); // E
    setTimeout(() => playTone(784, 0.2, 'sine', 0.3), 200); // G
}

// ❌ 答错音效（低沉）
function playWrongSound() {
    playTone(200, 0.3, 'sawtooth', 0.2);
    setTimeout(() => playTone(150, 0.4, 'sawtooth', 0.15), 150);
}

// 🔥 连击音效（越来越高）
function playComboSound(comboCount) {
    const baseFreq = 600 + comboCount * 80;
    playTone(baseFreq, 0.1, 'square', 0.2);
    setTimeout(() => playTone(baseFreq + 200, 0.1, 'square', 0.2), 80);
    setTimeout(() => playTone(baseFreq + 400, 0.2, 'square', 0.25), 160);
}

// ⏱️ 倒计时滴答声
function playTickSound() {
    playTone(800, 0.05, 'sine', 0.15);
}

// ⏱️ 最后3秒紧急声
function playUrgentTickSound() {
    playTone(1000, 0.08, 'square', 0.2);
    setTimeout(() => playTone(1000, 0.08, 'square', 0.15), 100);
}

// 🏆 胜利音效
function playVictorySound() {
    const notes = [523, 587, 659, 784, 880, 1047];
    notes.forEach((freq, i) => {
        setTimeout(() => playTone(freq, 0.2, 'sine', 0.3), i * 120);
    });
}

// 💀 失败音效
function playDefeatSound() {
    playTone(400, 0.3, 'sawtooth', 0.2);
    setTimeout(() => playTone(300, 0.3, 'sawtooth', 0.2), 200);
    setTimeout(() => playTone(200, 0.5, 'sawtooth', 0.15), 400);
}

// 🌱 种植/浇水音效
function playPlantSound() {
    playTone(600, 0.1, 'sine', 0.2);
    setTimeout(() => playTone(800, 0.1, 'sine', 0.2), 100);
    setTimeout(() => playTone(1000, 0.15, 'sine', 0.25), 200);
}

// 🎊 段位升级音效
function playRankUpSound() {
    const melody = [523, 659, 784, 1047, 784, 1047, 1319];
    melody.forEach((freq, i) => {
        setTimeout(() => playTone(freq, 0.2, 'sine', 0.3), i * 150);
    });
}

// 🔘 按钮点击音效
function playClickSound() {
    playTone(700, 0.05, 'sine', 0.15);
}

// 📅 签到音效
function playSignInSound() {
    playTone(800, 0.1, 'sine', 0.2);
    setTimeout(() => playTone(1000, 0.1, 'sine', 0.2), 100);
    setTimeout(() => playTone(1200, 0.15, 'sine', 0.25), 200);
    setTimeout(() => playTone(1600, 0.2, 'sine', 0.2), 350);
}

// ===== 音效开关 =====
let soundEnabled = true;

function toggleSound() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('ieltsHeroSound', soundEnabled ? 'on' : 'off');
    return soundEnabled;
}

// 读取音效设置
function loadSoundSetting() {
    const setting = localStorage.getItem('ieltsHeroSound');
    soundEnabled = setting !== 'off';
    return soundEnabled;
}

loadSoundSetting();

// 包装器：检查音效开关
const Sound = {
    correct: () => soundEnabled && playCorrectSound(),
    wrong: () => soundEnabled && playWrongSound(),
    combo: (n) => soundEnabled && playComboSound(n),
    tick: () => soundEnabled && playTickSound(),
    urgentTick: () => soundEnabled && playUrgentTickSound(),
    victory: () => soundEnabled && playVictorySound(),
    defeat: () => soundEnabled && playDefeatSound(),
    plant: () => soundEnabled && playPlantSound(),
    rankUp: () => soundEnabled && playRankUpSound(),
    click: () => soundEnabled && playClickSound(),
    signIn: () => soundEnabled && playSignInSound(),
};