const padZero = (value) => {
  return value <= 9 ? `0${value}` : String(value);
}

export const setJSDeepDive = ({ startChapter, endChapter }) => {
  const overview = {
    title: 'Overview',
    path: '/til/js-deep-dive/'
  }

  const pages = [];
  for (let chapter = startChapter; chapter <= endChapter; chapter += 1) {
    pages.push({
      title: `Chapter${padZero(chapter)}`,
      path: `/til/js-deep-dive/chapter${padZero(chapter)}`
    });
  }

  return [overview, ...pages];
}

export const setRefactoring = ({ startChapter, endChapter }) => {
  const overview = {
    title: 'Overview',
    path: '/til/refactoring/'
  }

  const pages = [];
  for (let chapter = startChapter; chapter <= endChapter; chapter += 1) {
    pages.push({
      title: `Chapter03-${padZero(chapter)}`,
      path: `/til/refactoring/chapter03-${padZero(chapter)}`
    });
  }

  return [overview, ...pages];
}