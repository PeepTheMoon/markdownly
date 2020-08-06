//reducers change state

export const EDIT_MARKDOWN = 'EDIT_MARKDOWN';
export const editMarkdown = (markdown) => ({
  type: EDIT_MARKDOWN,
  payload: markdown
});
