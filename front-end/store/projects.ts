import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { ProjectProps, projects } from '@/data'

@Module({ name: 'projects', stateFactory: true, namespaced: true })
export default class Projects extends VuexModule {
 private projects = [] as ProjectProps[]
 private project = {} as ProjectProps

 /* pegando uma lista */
 public get $all() {
  return this.projects
 }
 /* retorna um unico arquivo */
 public get $single() {
  return this.project
 }
 /* recebe uma actions que vem do component que é um metodo.
 e atualiza a declaração private e já disponibiliza para o get */
 @Mutation
 private SET_ALL(data: ProjectProps[]) {
  this.projects = data
 }
 @Mutation
 private SET_SINGLE(data: ProjectProps) {
  this.project = data
 }

 @Action
 public index(query: string) {
  let filterprojects = projects
  
  filterprojects = projects.filter((project) => {
  return project.projectName.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  
  })
  this.context.commit('SET_ALL', filterprojects)
 }
 @Action
 public create(payload: ProjectProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public update(payload: ProjectProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public destroy(id: number) {
  this.context.commit('SET_SINGLE', null)
 }
}
