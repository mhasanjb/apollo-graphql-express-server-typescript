import { Movies } from '../interfaces/movie'
/**
 * Connect To Database
 * This is mock(test/fake) data
 */
const MOVIES: Movies[] = [
  { id: 612, title: 'Harry Potter 001', year: '2009' },
  { id: 696, title: 'Harry Potter 002', year: '2011' },
  { id: 716, title: 'Harry Potter 003', year: '2012' }
]

export default {
  Query: {
    // movie: (root:any, args:any, context:any, info:any) => findByID movie
    movies: (root: any, args: any, context: any, info: any) => MOVIES
  },
  // Mutation: {
  // },
}