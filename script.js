let question = document.querySelectorAll(".question");
let title = document.querySelectorAll(".title");
let arrow = document.querySelectorAll(".arrow");
let p = document.querySelectorAll(".p");
let questionP2 = document.querySelector(".questionP2");
let titleP2 = document.querySelector(".titleP2");
let arrowP2 = document.querySelector(".arrowP2");
let p2 = document.querySelector(".p2");



// By this loop, function goes through every "question" in HTML and
// detects which one is clicked. After that, creates toggle effect
// for answer paragraphs and changes style of question.
for (let i = 0; i < question.length; i++) {
    question[i].addEventListener("click", function() {
        p[i].classList.toggle("pActive");
        p[i].classList.toggle("pDisabled");

        title[i].classList.toggle("titleDisabled");
        title[i].classList.toggle("titleEnabled");

        arrow[i].classList.toggle("arrowDown");
        arrow[i].classList.toggle("arrowUp");
    })
}


// Because of question 2's answer consists of 2 lines, different margin
// size is needed. For this reason, I decided to seperate "Question 2"
// from other questions and avoid for loop failure.
titleP2.addEventListener("click", function() {
    p2.classList.toggle("pMarginActive");
    p2.classList.toggle("pMargin");

    titleP2.classList.toggle("titleDisabled");
    titleP2.classList.toggle("titleEnabled");

    arrowP2.classList.toggle("arrowDown");
    arrowP2.classList.toggle("arrowUp");
})



