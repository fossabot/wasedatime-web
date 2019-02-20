import sortBy from 'lodash/sortBy';

// Unicode for Japanese: http://www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
export const jpRegex = '\u3040-\u309f\u30a0-\u30ff\u4e00-\u9faf';

export const tokenize = string => {
  // TODO benchmark contructor (new RegExp) vs factory (RegExp)
  const regex = new RegExp(`[^A-Za-z0-9${jpRegex}]+`);
  return string.trim().split(regex);
};

export const getSearchLang = searchTerm => {
  return new RegExp(`[${jpRegex}]`).test(searchTerm) ? 'jp' : 'en';
};

export const regexify = (token, searchLang) => {
  // Unnecessary trimming and replacing of \W characters
  // const terms = string.trim().replace(/\W+/g, '\\W+');
  return searchLang === 'en'
    ? new RegExp(`\\b${token}`, 'i')
    : new RegExp(`${token}`, 'i');
};

export const getCourseTitleAndInstructor = (course, searchLang) => {
  return searchLang === 'en'
    ? { title: course.title, instructor: course.instructor }
    : { title: course.title_jp, instructor: course.instructor_jp };
};

export const searchCourses = (searchTerm, courses, searchLang) => {
  const searchRegexes = tokenize(searchTerm).map(token =>
    regexify(token, searchLang)
  );

  return courses.filter(course => {
    const { title, instructor } = getCourseTitleAndInstructor(
      course,
      searchLang
    );
    return searchRegexes.every(regex => {
      return regex.test(title) || regex.test(instructor);
    });
  });
};

export const sortCourses = (searchTerm, courses, searchLang) => {
  const searchRegexes = tokenize(searchTerm).map(token =>
    regexify(token, searchLang)
  );

  return sortBy(courses, course => {
    const { title, instructor } = getCourseTitleAndInstructor(
      course,
      searchLang
    );
    let sum = 0;
    for (let i = 0; i < searchRegexes.length; i++) {
      if (searchRegexes[i].test(title)) {
        sum += 1;
      } else if (searchRegexes[i].test(instructor)) {
        sum += 2;
      } else {
        sum += 3;
      }
      return sum;
    }
  });
};
