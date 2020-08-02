import { Users } from '../interfaces/user'
/**
 * Connect To Database
 * This is mock(test/fake) data
 */
const USERS: Users[] = [
  { id: 'zxcawe123', email: 'gasdgdfa@gmail.com' },
  { id: '5asd4fasd', email: 'zyzxgnq3@gmail.com' },
  { id: 'atarf7dfg', email: 'kyhdkmnf@gmail.com' },
]

export default {
  Query: {
    // user: (root:any, args:any, context:any, info:any) => findByID user
    users: (root: any, args: any, context: any, info: any) => USERS
  },
  // Mutation: {
  // },
}