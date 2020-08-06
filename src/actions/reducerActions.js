//reducers change state
export const EDIT_MARKDOWN = 'EDIT_MARKDOWN';
export const editMarkdown = (markdown) => ({
  type: EDIT_MARKDOWN,
  payload: markdown
});

// export const GET_TITLES = 'GET_TITLES';
// export const getTitles = (savedMarkdowns) => ({
//   type: GET_TITLES,
//   payload: savedMarkdowns
// });
