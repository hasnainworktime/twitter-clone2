let tweets = JSON.parse(localStorage.getItem("tweets")) || [];

function addTweet() {
 const tweet = {
  id: Date.now(),          // unique ID
  text: tweetText,
  author: "Muhammad Hasnain",
  time: new Date().toLocaleString(),
  likes: 0                // start likes from 0
};

  const tweet = {
    user: "Muhammad Hasnain",
    content: text,
    time: new Date().toLocaleString()
  };

  tweets.unshift(tweet);
  localStorage.setItem("tweets", JSON.stringify(tweets));

  input.value = "";
  showTweets();
}

function showTweets() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";

  tweets.forEach(t => {
    const div = document.createElement("div");
    div.className = "tweet";
    div.innerHTML = `
      <div class="username">${t.user}</div>
      <div>${t.content}</div>
      <div class="time">${t.time}</div>
    `;
    feed.appendChild(div);
  });
}

showTweets();
