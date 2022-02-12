export default async function fetchData(type: string, delay = 0) {
  const [res] = await Promise.all([
    fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`),
    new Promise(resolve => setTimeout(resolve, delay)),
  ]);

  if (res.status !== 200) {
    throw new Error(`Status code: ${res.status}`);
  }

  return res.json();
}
