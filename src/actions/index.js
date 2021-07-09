const createBook = (book) => {
  return {
    type: 'CREATE_BOOK',
    book
  }
}

const removeBook = (book) => {
  return {
    type: 'REMOVE_BOOK',
    book
  }
}

export { createBook, removeBook }