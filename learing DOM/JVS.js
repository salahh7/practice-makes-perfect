const answers = document.querySelectorAll(".faq-answer");
const arrows = document.querySelectorAll(".arrow");
const questions = document.querySelectorAll(".faq-question");


questions.forEach(question => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const arrow = question.querySelector(".arrow");
        const isOpen = answer.classList.contains("show");
        answers.forEach(ans => {
            ans.classList.remove("show");
            ans.style.maxHeight = null;
        });
        arrows.forEach(arr => arr.classList.remove("rotate"));
        questions.forEach(q => q.setAttribute("aria-expanded", "false"));
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            question.setAttribute("aria-expanded", "true");
            answer.classList.add("show");
            arrow.classList.add("rotate");
        }
    });
});