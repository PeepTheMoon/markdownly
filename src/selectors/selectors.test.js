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
      searchQuery: '',
      searchCategory: 'title',
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

  it('filters by titles', () => {
    const state = {
      searchQuery: 'markdown',
      searchCategory: 'title',
      markdown: 'fuck facism, ABOLISH ICE, ABOLISH THE POLICE',
      savedMarkdowns: [
        {
          title: 'markdown 1',
          markdown: 'abolish ICE hoe'
        },
        {
          title: 'markdown 2',
          markdown: 'ACAB'
        }
      ] 
    };

    const filterTitles = getMarkdownTitles(state);

    expect(filterTitles).toEqual(['markdown 1', 'markdown 2']);
  });

  it('filters by body', () => {
    const state = {
      searchQuery: 'body',
      searchCategory: 'markdown',
      markdown: '',
      savedMarkdowns: [
        {
          title: 'markdown 1',
          markdown: 'body 1'
        },
        {
          title: 'markdown 2',
          markdown: 'hello'
        }
      ] 
    };

    const filterByBody = getMarkdownTitles(state);

    expect(filterByBody).toEqual(['markdown 1']);
  });
});
