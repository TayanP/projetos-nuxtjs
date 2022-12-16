
export interface ProjectProps {
 id?: number,
 projectName: string
 projectSubTitle?: string
 createdAt?: string

 tasks?: {
  total: number,
  concluded: number
 }
 attachments?: number
}

export const projects = [
 {
  id: 1,
  projectName: 'Força de vendas',
  projectSubTitle: 'Aplicativos online',
  createdAt: '2022-10-10',

  tasks: {
   total: 10,
   concluded: 7,
  },
  attachments: 3,
 },
 
 {
  id: 2,
  projectName: 'Dashbord Financeiro',
  projectSubTitle: 'Aplicativos online para exibição de dados financeiros',
  createdAt: '2022-08-10',

  tasks: {
   total: 15,
   concluded: 2,
  },
  attachments: 13,
 },

 {
  id: 3,
  projectName: 'E-commerce',
  projectSubTitle: 'Aplicativos online de comidas',
  createdAt: '2022-11-10',

  tasks: {
   total: 15,
   concluded: 5,
  },
  attachments: 3,
 }
]