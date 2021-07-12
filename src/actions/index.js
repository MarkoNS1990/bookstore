const createBook = (book) => ({
  type: 'CREATE_BOOK',
  book,
});

const removeBook = (book) => ({
  type: 'REMOVE_BOOK',
  book,
});

const changeFilter = (category) => ({
  type: 'CHANGE_FILTER',
  category,
});

const editBook = (book) => ({
  type: 'EDIT_BOOK',
  book,
});

export {
  createBook, removeBook, changeFilter, editBook,
};
