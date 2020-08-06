//reducers change state

export const EDIT_MARKDOWN = 'EDIT_MARKDOWN';
export const editMarkdown = (markdown) => ({
  type: EDIT_MARKDOWN,
  payload: markdown
});

export const SAVE_MARKDOWN = 'SAVE_MARKDOWN';
export const saveMarkdown = (newMarkdown) => ({
  type: SAVE_MARKDOWN,
  payload: newMarkdown
})

export const DELETE_MARKDOWN = 'DELETE_MARKDOWN';
export const deleteMarkdown = (title) => ({
  type: DELETE_MARKDOWN,
  payload: title
})
