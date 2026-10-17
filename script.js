/* ==========================================================================
   말랑말랑 역사 용어 사전 - 웹툰/만화 스타일 CSS
   ========================================================================== */

:root {
    --primary-color: #FF6B6B;
    --primary-hover: #FF5252;
    --secondary-color: #4ECDC4;
    --yellow-color: #FFE66D;
    --bg-color: #FFF9EC;
    --card-bg: #FFFFFF;
    --text-dark: #2C3E50;
    --border-color: #1A1A1A;
    --border-width: 3px;
    --shadow-distance: 5px;
    --font-heading: 'Jua', sans-serif;
    --font-hand: 'Gamja Flower', cursive;
    --font-body: 'Noto Sans KR', sans-serif;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bg-color);
    color: var(--text-dark);
    font-family: var(--font-body);
    line-height: 1.6;
    padding-bottom: 50px;
}

/* ==================== 만화풍 공통 요소 ==================== */
.comic-box {
    background: var(--card-bg);
    border: var(--border-width) solid var(--border-color);
    border-radius: 18px;
    box-shadow: var(--shadow-distance) var(--shadow-distance) 0px var(--border-color);
    padding: 20px;
    position: relative;
}

.comic-btn {
    font-family: var(--font-heading);
    font-size: 1.1rem;
    padding: 10px 20px;
    border: var(--border-width) solid var(--border-color);
    border-radius: 12px;
    cursor: pointer;
    background: white;
    box-shadow: 3px 3px 0px var(--border-color);
    transition: all 0.15s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.comic-btn:hover {
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px var(--border-color);
}

.comic-btn:active {
    transform: translate(1px, 1px);
    box-shadow: 2px 2px 0px var(--border-color);
}

.comic-btn.primary { background: var(--primary-color); color: white; }
.comic-btn.secondary { background: var(--secondary-color); color: white; }

.speech-bubble {
    position: relative;
    background: #FFF;
    border: 3px solid var(--border-color);
    border-radius: 16px;
    padding: 12px 18px;
    font-family: var(--font-heading);
    font-size: 1.1rem;
}

.speech-bubble::after {
    content: '';
    position: absolute;
    bottom: -12px;
    left: 25px;
    border-width: 12px 12px 0;
    border-style: solid;
    border-color: #FFF transparent;
    display: block;
    width: 0;
}

.speech-bubble::before {
    content: '';
    position: absolute;
    bottom: -16px;
    left: 23px;
    border-width: 14px 14px 0;
    border-style: solid;
    border-color: var(--border-color) transparent;
    display: block;
    width: 0;
}

/* ==================== 헤더 스타일 ==================== */
.header {
    background: #FFD166;
    border-bottom: var(--border-width) solid var(--border-color);
    padding: 20px 15px;
    max-width: 900px;
    margin: 0 auto 20px;
    border-radius: 0 0 24px 24px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
}

.logo {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    color: var(--text-dark);
    display: flex;
    align-items: center;
    gap: 10px;
}

.badge-tag {
    background: var(--primary-color);
    color: white;
    font-size: 0.9rem;
    padding: 3px 10px;
    border-radius: 20px;
    border: 2px solid var(--border-color);
}

.sub-logo {
    font-family: var(--font-hand);
    font-size: 1.2rem;
    color: #555;
}

/* 유저 상태 카드 */
.user-status-card {
    background: white;
    border: var(--border-width) solid var(--border-color);
    border-radius: 16px;
    padding: 12px 16px;
    min-width: 260px;
    box-shadow: 3px 3px 0px var(--border-color);
}

.status-top {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-heading);
    font-size: 1.1rem;
    margin-bottom: 6px;
}

.text-yellow { color: #F7B801; }

.mission-info {
    display: flex;
    justify-content: space-between;
    font-size: 0.85rem;
    font-weight: bold;
    margin-bottom: 4px;
}

.progress-bar-bg {
    background: #E9ECEF;
    height: 12px;
    border-radius: 10px;
    border: 2px solid var(--border-color);
    overflow: hidden;
}

.progress-bar-fill {
    background: var(--secondary-color);
    height: 100%;
    width: 0%;
    transition: width 0.3s ease;
}

/* ==================== 레이아웃 ==================== */
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 15px;
}

/* 탭 버튼 */
.nav-tabs {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
}

.tab-btn {
    flex: 1;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    padding: 12px;
    background: white;
    border: var(--border-width) solid var(--border-color);
    border-radius: 14px;
    cursor: pointer;
    box-shadow: 3px 3px 0px var(--border-color);
    position: relative;
    transition: all 0.2s;
}

.tab-btn.active {
    background: var(--yellow-color);
    transform: translate(-2px, -2px);
    box-shadow: 5px 5px 0px var(--border-color);
}

.tab-content { display: none; }
.tab-content.active { display: block; }

.badge-lock {
    background: #E63946;
    color: white;
    font-size: 0.75rem;
    padding: 2px 6px;
    border-radius: 10px;
    margin-left: 5px;
}

/* ==================== 검색 영역 ==================== */
.search-box-container {
    margin-bottom: 25px;
}

.search-input-group {
    position: relative;
    margin-bottom: 12px;
}

.search-icon {
    position: absolute;
    left: 18px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.3rem;
    color: #888;
}

#searchInput {
    width: 100%;
    padding: 14px 45px 14px 50px;
    font-size: 1.1rem;
    font-family: var(--font-body);
    border: var(--border-width) solid var(--border-color);
    border-radius: 16px;
    box-shadow: 3px 3px 0px var(--border-color);
    outline: none;
}

#searchInput:focus {
    border-color: var(--primary-color);
}

.clear-btn {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    color: #999;
}

.filter-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.tag-btn {
    font-family: var(--font-heading);
    font-size: 0.95rem;
    padding: 6px 14px;
    border: 2px solid var(--border-color);
    border-radius: 20px;
    background: white;
    cursor: pointer;
    box-shadow: 2px 2px 0px var(--border-color);
}

.tag-btn.active {
    background: var(--secondary-color);
    color: white;
}

/* ==================== 단어 카드 그리드 ==================== */
.word-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 20px;
}

.word-card {
    background: white;
    border: var(--border-width) solid var(--border-color);
    border-radius: 18px;
    padding: 18px;
    box-shadow: 4px 4px 0px var(--border-color);
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.word-card:hover {
    transform: translateY(-5px);
    box-shadow: 6px 8px 0px var(--border-color);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 10px;
}

.card-category {
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 8px;
    border-radius: 8px;
    border: 1.5px solid var(--border-color);
    background: #F1F3F5;
}

.card-chapter {
    font-size: 0.8rem;
    color: #666;
    font-weight: bold;
}

.card-title {
    font-family: var(--font-heading);
    font-size: 1.6rem;
    color: var(--text-dark);
    margin-bottom: 2px;
}

.card-subtext {
    font-size: 0.85rem;
    color: #777;
    margin-bottom: 10px;
}

.card-summary {
    font-size: 0.95rem;
    color: #444;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-bottom: 15px;
}

.card-footer {
    display: flex;
    justify-content: flex-end;
}

.btn-detail {
    font-family: var(--font-heading);
    font-size: 0.9rem;
    color: var(--primary-color);
}

/* ==================== 상세보기 모달 ==================== */
.modal-overlay {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 15px;
}

.modal-content {
    max-width: 600px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    background: white;
}

.modal-close-btn {
    position: absolute;
    top: 15px;
    right: 15px;
    background: var(--primary-color);
    color: white;
    border: 2px solid var(--border-color);
    width: 35px;
    height: 35px;
    border-radius: 50%;
    font-size: 1.2rem;
    cursor: pointer;
}

.modal-header-box {
    border-bottom: 2px dashed #DDD;
    padding-bottom: 12px;
    margin-bottom: 15px;
}

.modal-title {
    font-family: var(--font-heading);
    font-size: 2.2rem;
    color: var(--text-dark);
}

.modal-sub {
    font-size: 1rem;
    color: #666;
}

.modal-img-container {
    text-align: center;
    margin-bottom: 15px;
}

.modal-img {
    max-width: 100%;
    max-height: 220px;
    border-radius: 12px;
    border: var(--border-width) solid var(--border-color);
}

.info-block {
    background: #F8F9FA;
    border-left: 4px solid var(--secondary-color);
    padding: 10px 14px;
    margin-bottom: 12px;
    border-radius: 0 10px 10px 0;
}

.info-label {
    font-weight: bold;
    font-size: 0.9rem;
    color: #555;
    margin-bottom: 3px;
}

.syn-ant-box {
    display: flex;
    gap: 10px;
    margin-bottom: 12px;
}

.syn-box, .ant-box {
    flex: 1;
    background: #FFF3BF;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1.5px solid var(--border-color);
    font-size: 0.9rem;
}

.ant-box { background: #FFD8A8; }

/* ==================== 퀴즈 세션 ==================== */
.quiz-locked-card {
    text-align: center;
    padding: 40px 20px;
}

.quiz-card {
    background: white;
    padding: 25px;
}

.quiz-header {
    display: flex;
    justify-content: space-between;
    font-family: var(--font-heading);
    margin-bottom: 20px;
    color: #666;
}

.question-box {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-bottom: 20px;
}

.q-badge {
    background: var(--primary-color);
    color: white;
    font-family: var(--font-heading);
    font-size: 1.4rem;
    padding: 2px 10px;
    border-radius: 8px;
    border: 2px solid var(--border-color);
}

.question-text {
    font-family: var(--font-heading);
    font-size: 1.4rem;
    line-height: 1.4;
}

.options-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 12px;
}

.option-btn {
    font-family: var(--font-body);
    font-size: 1.05rem;
    padding: 14px;
    text-align: left;
    background: #F8F9FA;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.2s;
}

.option-btn:hover {
    background: #E9ECEF;
    transform: translateX(4px);
}

.target-word-display {
    font-family: var(--font-heading);
    font-size: 1.3rem;
    background: var(--yellow-color);
    padding: 10px;
    border-radius: 10px;
    border: 2px solid var(--border-color);
    margin-bottom: 15px;
    text-align: center;
}

#userSentenceInput {
    width: 100%;
    padding: 12px;
    font-family: var(--font-body);
    font-size: 1rem;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    margin-bottom: 12px;
    resize: none;
}

.quiz-feedback {
    margin-top: 15px;
    padding: 15px;
    border-radius: 12px;
    font-family: var(--font-heading);
    font-size: 1.2rem;
    text-align: center;
    border: 2px solid var(--border-color);
}

.quiz-feedback.correct { background: #D4EDDA; color: #155724; }
.quiz-feedback.wrong { background: #F8D7DA; color: #721C24; }

/* ==================== 배지 그리드 ==================== */
.badges-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    margin-top: 20px;
}

.badge-card {
    background: white;
    border: 2px solid var(--border-color);
    border-radius: 16px;
    padding: 15px;
    text-align: center;
    opacity: 0.5;
    filter: grayscale(100%);
    transition: all 0.3s;
}

.badge-card.unlocked {
    opacity: 1;
    filter: grayscale(0%);
    box-shadow: 3px 3px 0px var(--border-color);
}

.badge-icon {
    font-size: 2.5rem;
    margin-bottom: 8px;
}

.badge-title {
    font-family: var(--font-heading);
    font-size: 1.1rem;
}

.badge-desc {
    font-size: 0.8rem;
    color: #666;
}

.hidden { display: none !important; }
