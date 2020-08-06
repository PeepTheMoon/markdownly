//selectors grab things from state

import marked from 'marked';

export const getMarkdown = state => state.markdown;

export const getMarkdownPreview = state => marked(state.markdown);

export const getMarkdownTitles = state => {
  return state.savedMarkdowns
    .map(markdown => (
      markdown.title
    ))
    .filter(title => (title.includes(state.searchQuery)));
};

