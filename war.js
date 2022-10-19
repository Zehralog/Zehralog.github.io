var articles = document.getElementById("articles");
JOKES.forEach(element => {
    var question = `
    <article class="question">
        <div class="question-title">
            <p>${element.question}</p>
            <button type="button" class="question-btn">
        <span class="plus-icon">
          <i class="far fa-plus-square"></i>
        </span>
        <span class="minus-icon">
          <i class="far fa-minus-square"></i>
        </span>
      </button>
        </div>
        <div class="question-text">
            <p>${element.answer}</p>
        </div>
    </article>
`;
    articles.insertAdjacentHTML('beforeend', question);
});
const questions = document.querySelectorAll(".question");

questions.forEach(function(question) {
    const btn = question.querySelector(".question-btn");
    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });
});