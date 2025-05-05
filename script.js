// section ko next and Previous switch
document.addEventListener("DOMContentLoaded", function () {
    let currentStep = 0;
    const steps = document.querySelectorAll(".form-step");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    function showStep(step) {
        steps.forEach((s, index) => {
            s.classList.toggle("active", index === step);
        });
    }

    nextBtn?.addEventListener("click", function () {
        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        }
    });

    prevBtn?.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }
    });

    showStep(currentStep);
});

// Sidebar Toggle
document.addEventListener("DOMContentLoaded", function () {
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    const sidebar = document.querySelector(".sidebar");
    const closeIcon = document.querySelector("#close_icon");

    sidebarToggle?.addEventListener("click", function () {
        sidebar?.classList.toggle("open");
    });

    closeIcon?.addEventListener("click", function () {
        sidebar?.classList.remove("open");
    });
});

console.log("JavaScript Loaded!");

// exam timer
let hours = 1;
let minutes = 25;
let seconds = 35;

function updateTimer() {
    if (seconds === 0) {
        if (minutes === 0) {
            if (hours === 0) {
                clearInterval(timerInterval);
                return;
            }
            hours--;
            minutes = 59;
        } else {
            minutes--;
        }
        seconds = 59;
    } else {
        seconds--;
    }

    document.getElementById("countdown").innerText = 
        `${hours}h : ${minutes}m : ${seconds}s`;
}

let timerInterval = setInterval(updateTimer, 1000);

// Answer Selection
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".ques_box").forEach((box) => {
        box.addEventListener("click", function () {
            let category = [...this.classList].find(c => c !== "ques_box");

            document.querySelectorAll(".ques_count_box").forEach((countBox) => {
                countBox.style.display = category === "all_ques" || countBox.classList.contains(category) ? "block" : "none";
            });
        });
    });
});

let currentQuestion = 1;
const totalQuestions = 20;

const questionText = document.getElementById("questionText");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const quesBoxes = document.querySelectorAll(".ques_count_box");
const formSteps = document.querySelectorAll(".form-step");

// Function to update question text and active step
function updateQuestion() {
    questionText.innerHTML = `Question ${currentQuestion} out of ${totalQuestions}`;

    // Remove active class from all
    formSteps.forEach(step => step.classList.remove("active"));
    quesBoxes.forEach(box => box.classList.remove("active"));

    // Add active class to the current question
    if (formSteps[currentQuestion - 1]) {
        formSteps[currentQuestion - 1].classList.add("active");
    }
    if (quesBoxes[currentQuestion - 1]) {
        quesBoxes[currentQuestion - 1].classList.add("active");
    }
}

// Next Button Click
nextBtn.addEventListener("click", function () {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        updateQuestion();
    }
});

// Previous Button Click
prevBtn.addEventListener("click", function () {
    if (currentQuestion > 1) {
        currentQuestion--;
        updateQuestion();
    }
});

// Number box click event
quesBoxes.forEach((box, index) => {
    box.addEventListener("click", function () {
        currentQuestion = index + 1; // Update question number
        updateQuestion();
    });
});

// Initialize first question
updateQuestion();
