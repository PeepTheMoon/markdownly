import marked from 'marked';

export const getMarkdown = state => state.markdown;

export const getMarkdownPreview = markdown => marked(markdown);