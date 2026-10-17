/* ==========================================================================
   말랑말랑 역사 용어 사전 - JavaScript (데이터 및 동적 로직)
   ========================================================================== */

// 1. 역사 용어 데이터베이스 (중학교 교육과정 반영)
const historyData = [
    {
        id: "word_1",
        word: "남하 정책",
        hanja: "南下政策",
        english: "Downward Expansion Policy",
        category: "일반 용어",
        chapter: "삼국의 발전과 항쟁",
        summary: "북쪽에 있던 국가가 남쪽으로 영토와 영향력을 넓히기 위해 추진한 정책이에요.",
        description: "주로 고구려 장수왕이 수도를 국내성에서 평양으로 옮기고 한강 유역을 차지하며 남쪽으로 영토를 넓힌 정책을 뜻해요. '남쪽(南)으로 내려간다(下)'라는 뜻의 동사적 표현으로 자주 쓰입니다.",
        example: "고구려 장수왕은 적극적인 남하 정책을 펼쳐 백제의 수도 위례성을 함락시켰다.",
        synonym: "남진 정책 (남쪽으로 진격하는 정책)",
        antonym: "북진 정책 (북쪽으로 넓히는 정책)",
        image: null
    },
    {
        id: "word_2",
        word: "천도",
        hanja: "遷都",
        english: "Relocation of the Capital",
        category: "일반 용어",
        chapter: "삼국의 발전 / 조선의 건국",
        summary: "국가의 수도(도읍지)를 다른 곳으로 옮기는 것을 의미해요.",
        description: "왕권 강화, 국방 강화, 경제적 이유 등으로 수도를 옮기는 동작(동사)을 말합니다. 장수왕의 평양 천도, 태조 이성계의 한양 천도 등이 대표적입니다.",
        example: "조선 태조 이성계는 국운을 새롭게 하기 위해 수도를 한양으로 천도하였다.",
        synonym: "도읍 이전 (수도를 옮김)",
        antonym: "환도 (본래 수도로 돌아옴)",
        image: null
    },
    {
        id: "word_3",
        word: "성조기",
        hanja: "星條旗",
        english: "Stars and Stripes",
        category: "일반 용어",
        chapter: "근대 세계의 변화 / 개항기",
        summary: "미국(아메리카 합중국)의 국기를 부르는 역사적 일반 명사입니다.",
        description: "붉은색과 흰색 줄무늬, 별이 그려진 미국의 국기입니다. 개항기 조미수호통상조약 체결이나 광복 이후 미군정기 등 근현대사 단원에서 등장합니다.",
        example: "조미수호통상조약 체결 당시 조약식장에 태극기와 성조기가 함께 걸렸다.",
        synonym: "미국 국기",
        antonym: null,
        image: null
    },
    {
        id: "word_4",
        word: "광개토대왕비",
        hanja: "廣開土大王碑",
        english: "Gwanggaeto Stele",
        category: "유물/유적",
        chapter: "삼국의 발전",
        summary: "고구려 광개토대왕의 업적을 기리기 위해 그의 아들 장수왕이 세운 거대한 석비입니다.",
        description: "현재 중국 찌안(집안)에 위치해 있으며, 고구려의 건국 신화와 광개토대왕의 영토 확장 업적, 영락이라는 연호 사용 등이 4면에 한자로 새겨져 있습니다.",
        example: "학생들은 광개토대왕비의 비문을 분석하며 고구려의 기상을 느꼈다.",
        synonym: "호태왕비 (광개토대왕의 다른 이름)",
        antonym: null,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Gwanggaeto_stele_1.jpg/400px-Gwanggaeto_stele_1.jpg"
    },
    {
        id: "word_5",
        word: "빗살무늬 토기",
        hanja: "Comb-pattern Pottery",
        english: "Comb-pattern Pottery",
        category: "유물/유적",
        chapter: "선사 시대의 전개",
        summary: "신석기 시대를 대표하는 빗살 모양 누름 자국이 새겨진 흙그릇입니다.",
        description: "뾰족한 밑바닥이 특징이며, 모래가 많은 바닷가나 강가에 파묻어 곡식을 저장하거나 음식을 조리할 때 사용했습니다.",
        example: "암사동 유적지에서 신석기인들이 사용하던 빗살무늬 토기가 대량 발굴되었다.",
        synonym: "즐문토기 (한자식 표현)",
        antonym: "민무늬 토기 (무늬가 없는 청동기 토기)",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Comb-pattern_Pottery-Amsadong.jpg/400px-Comb-pattern_Pottery-Amsadong.jpg"
    },
    {
        id: "word_6",
        word: "골품제",
        hanja: "骨品制",
        english: "Bone-rank System",
        category: "제도/사건",
        chapter: "신라의 성립과 발전",
        summary: "신라의 엄격한 신분 제도로, 혈통에 따라 관직 진출과 일상생활까지 제한했어요.",
        description: "성골, 진골의 '골(骨)'과 6두품~1두품의 '품(品)'으로 나뉘었습니다. 집의 크기, 옷 색깔, 마차의 크기까지 신분에 따라 엄격히 통제되었습니다.",
        example: "6두품 출신 학자 최치원은 골품제의 한계 때문에 최고 관직에 오르지 못했다.",
        synonym: "신라 신분제",
        antonym: null,
        image: null
    },
    {
        id: "word_7",
        word: "탕평책",
        hanja: "蕩平策",
        english: "Policy of Impartiality",
        category: "제도/사건",
        chapter: "조선 후기의 정치 변화",
        summary: "조선 영조와 정조가 신하들의 당파 싸움(붕당)을 막기 위해 탕평책을 펼쳤어요.",
        description: "어느 한쪽 붕당에 편중되지 않고 나랏일을 할 인재를 골고루 등용하여 왕권을 강화하고 정치를 안정시키려 한 정책입니다.",
        example: "영조는 탕평책을 널리 알리기 위해 성균관에 탕평비를 세웠다.",
        synonym: "고른 인재 등용책",
        antonym: "일당 전제화 (한 당파가 권력을 독점함)",
        image: null
    },
    {
        id: "word_8",
        word: "세종대왕",
        hanja: "世宗大王",
        english: "King Sejong the Great",
        category: "인물",
        chapter: "조선의 기틀 마련",
        summary: "조선의 제4대 왕으로 백성을 위해 훈민정음을 창제한 성군입니다.",
        description: "집현전을 설치하여 학문을 연구하게 했고, 측우기, 해시계 등 과학 기술을 발전시켰으며 파저강의 여진족을 소탕하고 4군 6진을 개척했습니다.",
        example: "세종대왕은 글을 몰라 슬퍼하는 백성들을 위해 훈민정음을 반포하셨다.",
        synonym: "이도 (세종대왕의 본명)",
        antonym: null,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/King_Sejong.jpg/400px-King_Sejong.jpg"
    }
];

// 2. 앱 전역 상태 변수
let searchedWords = new Set();
let userPoints = 0;
let currentFilter = 'all';
let currentQuizIndex = 0;
let quizScore = 0;

// 업적 배지 데이터
const badges = [
    { id: 'b1', name: '첫걸음 탐험가', desc: '용어 1개 이상 검색하기', icon: '🐣', unlocked: false },
    { id: 'b2', name: '열정 사학자', desc: '용어 5개 탐색 미션 완료', icon: '📚', unlocked: false },
    { id: 'b3', name: '퀴즈 마스터', desc: '퀴즈 3문항 완벽 풀이', icon: '🎯', unlocked: false },
    { id: 'b4', name: '문장가 역사학자', desc: '나만의 역사 예문 작성하기', icon: '✍️', unlocked: false }
];

// 3. 페이지 초기화
document.addEventListener("DOMContentLoaded", () => {
    renderWordCards(historyData);
    renderBadges();
    updateUI();
});

// 4. 단어 카드 렌더링
function renderWordCards(data) {
    const grid = document.getElementById("wordGrid");
    const noResults = document.getElementById("noResults");
    
    grid.innerHTML = "";

    if (data.length === 0) {
        noResults.classList.remove("hidden");
        return;
    } else {
        noResults.classList.add("hidden");
    }

    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "word-card";
        card.onclick = () => openModal(item.id);

        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="card-category">${item.category}</span>
                    <span class="card-chapter">${item.chapter}</span>
                </div>
                <h3 class="card-title">${item.word}</h3>
                <p class="card-subtext">${item.hanja ? `(${item.hanja})` : ''} ${item.english ? `[${item.english}]` : ''}</p>
                <p class="card-summary">${item.summary}</p>
            </div>
            <div class="card-footer">
                <span class="btn-detail">자세히 보기 <i class="fa-solid fa-arrow-right"></i></span>
            </div>
        `;
        grid.appendChild(card);
    });
}

// 5. 검색 및 카테고리 필터
function handleSearch() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    filterData(query, currentFilter);
}

function filterCategory(category) {
    currentFilter = category;
    
    // 버튼 active 클래스 제어
    const buttons = document.querySelectorAll(".filter-tags .tag-btn");
    buttons.forEach(btn => {
        if (btn.innerText.includes(category) || (category === 'all' && btn.innerText === '전체보기')) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    filterData(query, currentFilter);
}

function filterData(query, category) {
    let filtered = historyData.filter(item => {
        const matchQuery = item.word.toLowerCase().includes(query) || 
                           (item.hanja && item.hanja.includes(query)) ||
                           item.summary.toLowerCase().includes(query);
        const matchCategory = (category === 'all') || (item.category === category);
        return matchQuery && matchCategory;
    });

    renderWordCards(filtered);
}

function clearSearch() {
    document.getElementById("searchInput").value = "";
    handleSearch();
}

// 6. 상세 보기 모달 오픈 & 학습 기록 카운트
function openModal(id) {
    const item = historyData.find(w => w.id === id);
    if (!item) return;

    // 단어 탐색 미션 카운트 추가
    if (!searchedWords.has(id)) {
        searchedWords.add(id);
        addPoints(10); // 탐색 보상 10점
        checkBadges();
        updateUI();
    }

    const modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = `
        <div class="modal-header-box">
            <h2 class="modal-title">${item.word}</h2>
            <p class="modal-sub">
                ${item.hanja ? `한자: <b>${item.hanja}</b>` : ''} 
                ${item.english ? ` | 영어: <b>${item.english}</b>` : ''}
            </p>
        </div>

        ${item.image ? `
            <div class="modal-img-container">
                <img src="${item.image}" alt="${item.word}" class="modal-img">
            </div>
        ` : ''}

        <div class="info-block">
            <div class="info-label">📍 관련 단원</div>
            <div>${item.chapter} (${item.category})</div>
        </div>

        <div class="info-block">
            <div class="info-label">💡 쉬운 뜻풀이</div>
            <div>${item.description}</div>
        </div>

        <div class="info-block">
            <div class="info-label">📝 교과서 예문</div>
            <div><i>"${item.example}"</i></div>
        </div>

        <div class="syn-ant-box">
            <div class="syn-box">
                <b>🔗 유의어 (비슷한 말)</b><br>
                ${item.synonym ? item.synonym : '특별한 유의어가 없어요.'}
            </div>
            <div class="ant-box">
                <b>⚡ 반의어 (반댓말)</b><br>
                ${item.antonym ? item.antonym : '특별한 반댓말이 없어요.'}
            </div>
        </div>
    `;

    document.getElementById("wordModal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("wordModal").classList.add("hidden");
}

function closeModalOnOuter(e) {
    if (e.target.id === 'wordModal') closeModal();
}

// 7. 포인트 및 레벨/칭호 업데이트
function addPoints(pts) {
    userPoints += pts;
}

function updateUI() {
    // 포인트 반영
    document.getElementById("userPoints").innerHTML = `<i class="fa-solid fa-star text-yellow"></i> ${userPoints} pt`;

    // 탐색 카운트 반영
    const count = searchedWords.size;
    document.getElementById("searchCountText").innerHTML = `<b>${count}</b> / 5개 탐색 완료`;
    
    // 프로그레스 바 계산 (최대 5개 기준 100%)
    const progressPercent = Math.min((count / 5) * 100, 100);
    document.getElementById("searchProgress").style.width = `${progressPercent}%`;

    // 칭호 계산
    let rank = "초보 사학자 🐣";
    if (userPoints >= 100) rank = "중학 역사 대마왕 👑";
    else if (userPoints >= 50) rank = "유망한 사학자 📜";
    else if (userPoints >= 20) rank = "수습 사학자 🔍";
    document.getElementById("userRank").innerHTML = `<i class="fa-solid fa-crown text-yellow"></i> ${rank}`;

    // 퀴즈 잠금 해제 여부
    const quizLockBadge = document.getElementById("quizLockBadge");
    const quizLockedState = document.getElementById("quizLockedState");
    const quizPlayState = document.getElementById("quizPlayState");

    if (count >= 5) {
        quizLockBadge.style.display = "none";
        quizLockedState.classList.add("hidden");
        quizPlayState.classList.remove("hidden");
        if (currentQuizIndex === 0 && quizScore === 0) loadQuizQuestion();
    } else {
        quizLockBadge.style.display = "inline-block";
        quizLockedState.classList.remove("hidden");
        quizPlayState.classList.add("hidden");
        document.getElementById("lockedCount").innerText = count;
    }
}

// 8. 탭 전환
function switchTab(tabName) {
    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll(".tab-content").forEach(sec => sec.classList.remove("active"));

    if (tabName === 'dict') {
        document.getElementById("tabDict").classList.add("active");
        document.getElementById("sectionDict").classList.add("active");
    } else if (tabName === 'quiz') {
        document.getElementById("tabQuiz").classList.add("active");
        document.getElementById("sectionQuiz").classList.add("active");
    } else if (tabName === 'badge') {
        document.getElementById("tabBadge").classList.add("active");
        document.getElementById("sectionBadge").classList.add("active");
    }
}

// 9. 퀴즈 데이터 및 로직
const quizQuestions = [
    {
        question: "다음 중 고구려 장수왕이 수도를 평양으로 옮기고 남쪽으로 영토를 넓힌 정책을 뜻하는 어휘는 무엇일까요?",
        options: ["남하 정책", "북진 정책", "탕평책", "골품제"],
        answer: 0
    },
    {
        question: "'수도(도읍지)를 다른 곳으로 옮긴다'는 뜻의 한자어 어휘는 무엇일까요?",
        options: ["개항", "천도", "북벌", "집현전"],
        answer: 1
    },
    {
        type: "sentence",
        targetWord: "성조기",
        question: "'성조기'라는 단어를 넣어 역사 문장을 완성해 보세요!"
    }
];

function loadQuizQuestion() {
    const qData = quizQuestions[currentQuizIndex];
    const feedback = document.getElementById("quizFeedback");
    feedback.className = "quiz-feedback hidden";

    document.getElementById("quizStepText").innerText = `문제 ${currentQuizIndex + 1} / ${quizQuestions.length}`;

    if (qData.type === "sentence") {
        document.getElementById("multipleChoiceContainer").classList.add("hidden");
        document.getElementById("sentenceContainer").classList.remove("hidden");
        document.getElementById("targetWordTitle").innerText = qData.targetWord;
    } else {
        document.getElementById("multipleChoiceContainer").classList.remove("hidden");
        document.getElementById("sentenceContainer").classList.add("hidden");
        
        document.getElementById("quizQuestion").innerText = qData.question;
        const optionsGrid = document.getElementById("quizOptions");
        optionsGrid.innerHTML = "";

        qData.options.forEach((opt, idx) => {
            const btn = document.createElement("button");
            btn.className = "option-btn";
            btn.innerText = `${idx + 1}. ${opt}`;
            btn.onclick = () => checkQuizAnswer(idx);
            optionsGrid.appendChild(btn);
        });
    }
}

function checkQuizAnswer(selectedIndex) {
    const qData = quizQuestions[currentQuizIndex];
    const feedback = document.getElementById("quizFeedback");

    if (selectedIndex === qData.answer) {
        feedback.innerText = "🎉 정답입니다! 칭찬합니다! (+20pt)";
        feedback.className = "quiz-feedback correct";
        addPoints(20);
        quizScore++;
    } else {
        feedback.innerText = `❌ 아쉬워요! 정답은 '${qData.options[qData.answer]}' 입니다.`;
        feedback.className = "quiz-feedback wrong";
    }

    updateUI();
    setTimeout(nextQuizStep, 1500);
}

function submitSentence() {
    const text = document.getElementById("userSentenceInput").value.trim();
    const feedback = document.getElementById("quizFeedback");

    if (text.length < 5) {
        alert("예문을 5자 이상 정성스럽게 작성해보세요!");
        return;
    }

    if (text.includes("성조기")) {
        feedback.innerText = "👏 훌륭한 역사 예문이 완성되었어요! (+30pt)";
        feedback.className = "quiz-feedback correct";
        addPoints(30);
        
        // 배지 4 획득
        badges[3].unlocked = true;
        renderBadges();
        updateUI();

        setTimeout(nextQuizStep, 1500);
    } else {
        alert("제시된 단어 '성조기'를 문장에 꼭 포함시켜 주세요!");
    }
}

function nextQuizStep() {
    currentQuizIndex++;
    if (currentQuizIndex < quizQuestions.length) {
        loadQuizQuestion();
    } else {
        // 퀴즈 종료
        const container = document.getElementById("quizPlayState");
        container.innerHTML = `
            <div class="comic-box" style="text-align: center; padding: 30px;">
                <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 10px;">🏆 퀴즈 탐험 완료!</h2>
                <p style="font-size: 1.2rem; margin-bottom: 20px;">모든 문제를 멋지게 마쳤습니다.</p>
                <button class="comic-btn primary" onclick="resetQuiz()"><i class="fa-solid fa-rotate-right"></i> 다시 도전하기</button>
            </div>
        `;
        badges[2].unlocked = true; // 퀴즈 마스터 배지 해제
        renderBadges();
    }
}

function resetQuiz() {
    currentQuizIndex = 0;
    quizScore = 0;
    location.reload(); // 간편 리셋
}

// 10. 배지 및 업적 관리
function checkBadges() {
    if (searchedWords.size >= 1) badges[0].unlocked = true;
    if (searchedWords.size >= 5) badges[1].unlocked = true;
    renderBadges();
}

function renderBadges() {
    const grid = document.getElementById("badgesGrid");
    grid.innerHTML = "";

    badges.forEach(b => {
        const card = document.createElement("div");
        card.className = `badge-card ${b.unlocked ? 'unlocked' : ''}`;
        card.innerHTML = `
            <div class="badge-icon">${b.icon}</div>
            <div class="badge-title">${b.name}</div>
            <div class="badge-desc">${b.desc}</div>
            <div style="margin-top: 5px; font-weight: bold; font-size: 0.8rem; color: ${b.unlocked ? '#2B8A3E' : '#C1C2C5'};">
                ${b.unlocked ? '✨ 획득 완료!' : '🔒 잠김'}
            </div>
        `;
        grid.appendChild(card);
    });
}
