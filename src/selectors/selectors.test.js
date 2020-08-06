const { getMarkdown, getMarkdownPreview } = require('./selectors');

describe('selectors', () => {
  it('returns markdown from state', () => {
    const state = {
      markdown: 'abolish ICE hoe'
    };
    const savedMarkdowns = getMarkdown(state);
    expect(savedMarkdowns).toEqual('abolish ICE hoe');
  }); 

  it('returns markdown preview from state', () => {
    const state = {
      markdown: 'abolish ICE hoe'
    };

    const markdownPreview = getMarkdownPreview(state);
    expect(markdownPreview).toEqual(expect.stringContaining('abolish ICE hoe'));
  });
});
