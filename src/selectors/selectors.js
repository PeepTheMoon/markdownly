import marked from 'marked';

export const getMarkdown = state => state.markdown;

export const getMarkdownPreview = state => marked(state.markdown);

//check on why savedMarkdowns is undefined
export const getMarkdownTitles = state => {
  return state.savedMarkdowns
    .map(markdown => ({
      title: markdown.title
    }));
};
