import {
  FETCH_BOOKS_BEGIN,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILURE,
} from '../actions/index';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_BOOKS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.books,
      };

    case FETCH_BOOKS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        items: [],
      };
    case 'CREATE_BOOK':
      return {
        ...state,
        loading: false,
        items: [...state.items, action.book],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        loading: false,
        items: [...state.items.filter((book) => book !== action.book)],
      };
    case 'EDIT_BOOK': {
      const previousBook = state.items.filter((book) => book.id === action.book.id)[0];
      state.items.splice(state.items.indexOf(previousBook), 1, action.book);
      return {
        ...state,
        loading: false,
        items: [...state.items],
      };
    }
    case 'CREATE_COMMENT': {
      // const previousBook = state.filter((book) => book.id === action.editedBook.id)[0];
      console.log(action);
      return state;
    }

    default: {
      return state;
    }
  }
}
