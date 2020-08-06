const { getMarkdown, getMarkdownPreview, getMarkdownTitles } = require('./selectors');

describe('selectors', () => {
  it('returns markdown from state', () => {
    const state = { 
      markdown: 'fuck facism, ABOLISH ICE, ABOLISH THE POLICE',
      savedMarkdowns: [
        {
          title: 'markdown 1',
          markdown: 'abolish ICE hoe'
        }
      ] 
    };
    const savedMarkdowns = getMarkdown(state);
    expect(savedMarkdowns).toEqual('fuck facism, ABOLISH ICE, ABOLISH THE POLICE');
  }); 

  it('returns markdown preview from state', () => {
    const state = { 
      markdown: 'fuck facism, ABOLISH ICE, ABOLISH THE POLICE',
      savedMarkdowns: [
        {
          title: 'markdown 1',
          markdown: 'abolish ICE hoe'
        }
      ] 
    };

    const markdownPreview = getMarkdownPreview(state);
    expect(markdownPreview).toEqual(expect.stringContaining('fuck facism, ABOLISH ICE, ABOLISH THE POLICE'));
  });

  it('returns markdown titles', () => {
    const state = { 
      markdown: 'fuck facism, ABOLISH ICE, ABOLISH THE POLICE',
      savedMarkdowns: [
        {
          title: 'markdown 1',
          markdown: 'abolish ICE hoe'
        }
      ] 
    };

    const markdownTitles = getMarkdownTitles(state);

    expect(markdownTitles).toEqual(['markdown 1']);
  });
});
