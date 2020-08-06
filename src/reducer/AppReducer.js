import { EDIT_MARKDOWN, GET_TITLES } from '../actions/reducerActions';
export const initialState = {
  markdown: 'fuck facism, ABOLISH ICE, ABOLISH THE POLICE',
  savedMarkdowns: [
    {
      title: 'markdown 1',
      markdown: 'abolish ICE hoe'
    }
  ]
};

export default function reducer(state, action) {
  switch(action.type) {
    case EDIT_MARKDOWN: 
      return { ...state, markdown: action.payload };
    case GET_TITLES:
      return { ...state, savedMarkdowns: action.payload };
    default:
      return state;
  }
}
