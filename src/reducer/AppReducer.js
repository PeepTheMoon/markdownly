import { EDIT_MARKDOWN, SAVE_MARKDOWN, DELETE_MARKDOWN } from '../actions/reducerActions';
export const initialState = {
  searchQuery: '',
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
    case SAVE_MARKDOWN: 
      return { ...state, savedMarkdowns: [...state.savedMarkdowns, action.payload]
      };
    case DELETE_MARKDOWN: 
      return { ...state, savedMarkdowns:  [...state. savedMarkdowns.filter(item => item.title !== action.payload)] };
    default:
      return state;
  }
}
