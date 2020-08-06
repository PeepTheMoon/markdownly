const { editMarkdown, saveMarkdown, deleteMarkdown } = require('../actions/reducerActions');

const { default: reducer } = require('./AppReducer');


describe('AppReducer', () => {
  it('handles the edit markdown action', () => {
    const state = { 
      markdown: ''
    };
    const action = editMarkdown('empty string');

    const newState = reducer(state, action);
    expect(newState).toEqual({ markdown: 'empty string' });
  });

  it('changes the savedMarkdowns state', () => {
    const state = {
      markdown: 'test markdown',
      savedMarkdowns: [{
        title: 'markdown 1',
        markdown: 'abolish ICE hoe'
      }]
    }
    const newMarkdown = {
      title: 'new title',
      markdown: 'new markdown'
    }
    const action = saveMarkdown(newMarkdown)
    const newState = reducer(state, action);
    
    expect(newState).toEqual({
      markdown: 'test markdown',
      savedMarkdowns: [{
        title: 'markdown 1',
        markdown: 'abolish ICE hoe'
      }, {
        title: 'new title',
        markdown: 'new markdown'
      }]
    });
  });

  it('deletes a markdown from savedMarkdowns', () => {
    const state = {
      markdown: 'test markdown',
      savedMarkdowns: [{
        title: 'markdown 1',
        markdown: 'abolish ICE hoe'
      }, {
        title: 'new title',
        markdown: 'new markdown'
      }]
    }

    const action = deleteMarkdown('markdown 1');
    const newState = reducer(state, action);

    expect(newState).toEqual({
      markdown: 'test markdown',
      savedMarkdowns: [{
        title: 'new title',
        markdown: 'new markdown'
      }]
    })
});
});
