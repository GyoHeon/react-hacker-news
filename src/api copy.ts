const BASE_URL = `https://hacker-news.firebaseio.com/v0`;

// export function fetchAsk() {
//   return fetch(`${BASE_URL}/askstories.json?print=pretty`).then((response) =>
//     response.json()
//   );
// }

// export async function fetchArticle(articleNums: number[] | undefined) {
//   const articleArr: object[] = [];
//   articleNums?.map((articleNum) => {
//     let json = fetch(`${BASE_URL}/item/${articleNum}.json?print=pretty`).then(
//       (response) => response.json()
//     );
//     articleArr.push(json);
//   });
//   return articleArr;
// }

export function fetchAsk() {
  const articleArr: any[] = [];

  return fetch(`${BASE_URL}/askstories.json?print=pretty`)
    .then((response) => response.json())
    .then((articleNums) => {
      articleNums?.slice(0, 10).map((articleNum: number) => {
        let json = fetch(`${BASE_URL}/item/${articleNum}.json?print=pretty`)
          .then((response) => response.json())
          .then((obj) => obj.title);
        articleArr.push(json);
      });
      return articleArr;
    });
}
