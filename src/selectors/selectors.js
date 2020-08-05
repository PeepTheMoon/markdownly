import marked from 'marked';

export const getMarkdownPreview = state => marked(state.markdown);