const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

export async function fetchAsk(articleNum) {
  const response = await fetch(`${BASE_URL}/item/${articleNum}.json`).then(
    (response) => response.json()
  );
  return response;
}
