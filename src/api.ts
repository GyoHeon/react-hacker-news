const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

export async function fetchAsk() {
  return fetch(`${BASE_URL}/askstories.json?print=pretty`).then((response) =>
    response.json()
  );
}

export async function fetchArticle(articleNum: number) {
  return fetch(`${BASE_URL}/item/${articleNum}.json?print=pretty`).then(
    (response) => response.json()
  );
}
