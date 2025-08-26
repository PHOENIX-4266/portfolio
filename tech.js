// Hide all sections
function hideAllSection() {
  document.getElementById('home-Section').style.display = "none";
  document.getElementById('about-Section').style.display = "none";
  document.getElementById('project-Section').style.display = "none";
  document.getElementById('skills-Section').style.display = "none";
  document.getElementById('contuct-Secton').style.display = "none";
  document.getElementById('faqs-Section').style.display = "none";
}

// Show the selected section
function showSection(sectionId) {
  hideAllSection();
  document.getElementById(sectionId).style.display = "block";
}

// Set up click handlers for each link
document.querySelector('[rel="home-link"]').onclick = function() {
  showSection('home-Section');
  return false;
};
document.querySelector('[rel="about-link"]').onclick = function() {
  showSection('about-Section');
  return false;
};
document.querySelector('[rel="project-link"]').onclick = function() {
  showSection('project-Section');
  return false;
};
document.querySelector('[rel="skills-link"]').onclick = function() {
  showSection('skills-Section');
  return false;
};
document.querySelector('[rel="contuct-link"]').onclick = function() {
  showSection('contuct-Secton');
  return false;
};
document.querySelector('[rel="faqs-link"]').onclick = function() {
  showSection('faqs-Section');
  return false;
};

// Show home section by default on page load
showSection('home-Section');

// Add new question to the page
document.getElementById('questionForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const question = this.question.value.trim();
  if (!name || !question) return;

  // Create avatar with first letter of name
  const avatarLetter = name.charAt(0).toUpperCase();

  // Create question card
  const questionDiv = document.createElement('div');
  questionDiv.className = 'faq user-question';
  questionDiv.innerHTML = `
    <div class="avatar-name">
      <div class="avatar">${avatarLetter}</div>
      <h4>${name} asks:</h4>
    </div>
    <p>${question}</p>
    <div class="answers"></div>
    <form class="answer-form">
      <input type="text" name="answer" placeholder="Your answer..." required>
      <button type="submit">Answer</button>
    </form>
    <div class="reactions">
      <button class="like-btn">👍 <span>0</span></button>
      <button class="dislike-btn">👎 <span>0</span></button>
    </div>
  `;

  // Add answer functionality
  const answerForm = questionDiv.querySelector('.answer-form');
  const answersDiv = questionDiv.querySelector('.answers');
  answerForm.addEventListener('submit', function(ev) {
    ev.preventDefault();
    const answerText = this.answer.value.trim();
    if (!answerText) return;
    const answerP = document.createElement('p');
    answerP.textContent = answerText;
    answersDiv.appendChild(answerP);
    this.reset();
  });

  // Add reaction functionality
  const likeBtn = questionDiv.querySelector('.like-btn');
  const dislikeBtn = questionDiv.querySelector('.dislike-btn');
  likeBtn.addEventListener('click', function() {
    const span = this.querySelector('span');
    span.textContent = parseInt(span.textContent) + 1;
  });
  dislikeBtn.addEventListener('click', function() {
    const span = this.querySelector('span');
    span.textContent = parseInt(span.textContent) + 1;
  });

  // Add to questions list
  document.getElementById('questions-list').prepend(questionDiv);
  this.reset();
});