function calculateMBTI() {
    const responses = [];
    for (let i = 0; i < 4; i++) {
        const response = document.querySelector(`input[name="question_${i}"]:checked`);
        if (response) {
            responses.push(parseInt(response.value));
        } else {
            alert("모든 질문에 답변해 주세요.");
            return;
        }
    }

    let mbtiType = "";
    const E = responses[0] + responses[1]; // 외향/내향 점수
    const J = responses[2] + responses[3]; // 판단/인식 점수

    mbtiType += E > 1 ? "E" : "I"; // 외향/내향
    mbtiType += J > 1 ? "S" : "N"; // 판단/인식
    mbtiType += responses[2] === 1 ? "T" : "F"; // 사고/감정
    mbtiType += responses[3] === 1 ? "J" : "P"; // 판단/인식

    // 결과 페이지로 이동
    window.location.href = `result.html?mbti=${mbtiType}`;
}

// 결과 페이지에서 MBTI 유형 표시
window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const mbtiType = urlParams.get('mbti');
    if (mbtiType) {
        document.getElementById('result').innerText = `당신의 MBTI 유형은: ${mbtiType}입니다.`;
    }
};
