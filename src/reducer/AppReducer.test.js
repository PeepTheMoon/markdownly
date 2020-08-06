const { editMarkdown } = require('../actions/reducerActions');

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
});

