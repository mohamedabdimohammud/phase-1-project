const newsBtn = document.querySelector('#newsBtn');
const squadBtn = document.querySelector('#squadBtn');
const historyBtn = document.querySelector('#historyBtn');
const storeBtn = document.querySelector('#storeBtn');

newsBtn.addEventListener('click', function() {
  window.location.href = data.newsUrl;
});

squadBtn.addEventListener('click', function() {
  window.location.href = data.squadUrl;
});

historyBtn.addEventListener('click', function() {
  window.location.href = data.historyUrl;
});
storeBtn.addEventListener('click', function() {
window.location.href = data.storeUrl;
});

const data = {
newsUrl: "https://mohamedabdimohammud.github.io/phase-1-project-news/",
squadUrl: "https://mohamedabdimohammud.github.io/phase-1-project-squad/",
historyUrl: "https://mohamedabdimohammud.github.io/phase-1-project-history/",
storeUrl: "https://mohamedabdimohammud.github.io/phase-1-project-store/"
};