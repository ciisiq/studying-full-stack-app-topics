export default function sortTopics(arr) {
  return arr.sort((a, b) => {
    return b.score - a.score;
  });
}
