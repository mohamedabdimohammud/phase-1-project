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
    newsUrl: "http://127.0.0.1:5500/news.html",
    squadUrl: "http://127.0.0.1:5500/squad.html",
    historyUrl: "http://127.0.0.1:5500/history.html",
    storeUrl: "http://127.0.0.1:5500/store.html"
  };