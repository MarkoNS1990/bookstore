export const initialState = [{ id: Math.ceil(Math.random() * 1000), title: 'title1', category: 'Learning' },
  { id: Math.ceil(Math.random() * 1000), title: 'title412421', category: 'Action' },
  { id: Math.ceil(Math.random() * 1000), title: 'title43214', category: 'Sci-Fi' }];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.book];
    case 'REMOVE_BOOK':
      return [...state.filter((book) => book !== action.book)];
    default:
      return state;
  }
};

export default books;
