export const containsAllWords = (text: string, filter: string) => {
  const wordsInFilter = filter.trim().toLowerCase().split(/\s+/);
  const wordsInText = text.toLowerCase().split(/\s+/);

  return wordsInFilter.every((wordInFilter) =>
    wordsInText.some((wordInText) => wordInFilter.includes(wordInText)),
  );
};
