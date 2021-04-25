import axios from 'axios'

const Book = {
  getBook: search => axios.get(`/api/books/${search}`),
  getBooks: () => axios.get('api/books'),
  deleteBook: id => axios.delete(`/api/books/${id}`),
  addBook: book => axios.post('/api/books', book)
}

export default Book