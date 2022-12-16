export interface TasksProps {
 id?: number
 projectId?: number
 userId?: number
 title?: string
 content?: string
 concluded?: boolean
 createdAt?: string 

 user?: {
  name: string
 }
}

export const tasks = [
 {
  id: 1,
  projectId: 1,
  userId: 1,
  title: 'Iniciando testes',
  content: 'Lorem ipsn',
  concluded: false,
  createdAt: '2022-12-02', 

  user: {
   name:'Tayan Peres'
  },
 },

  {
   id: 2,
   projectId: 2,
   userId: 1,
   title: 'Iniciando nuxtjs',
   content: 'Lorem ipsn',
   concluded: false,
   createdAt: '2022-12-02',

   user: {
    name: 'Tayan Peres'
   }
  },
  {
    id: 3,
    projectId: 3,
    userId: 1,
    title: 'Iniciando adonisjs',
    content: 'Lorem ipsn',
    concluded: true,
    createdAt: '2022-12-01',

    user: {
      name: 'Tayan Peres'
    }
  }
]