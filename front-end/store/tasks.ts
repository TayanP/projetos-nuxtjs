import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { TasksProps, tasks } from '@/data'

@Module({ name: 'tasks', stateFactory: true, namespaced: true })
export default class Tasks extends VuexModule {
 private tasks = [] as TasksProps[]
 private task = {} as TasksProps

 /* pegando uma lista */
 public get $all() {
  return this.tasks
 }
 /* retorna um unico arquivo */
 public get $single() {
  return this.task
 }
 /* recebe uma actions que vem do component que é um metodo.
 e atualiza a declaração private e já disponibiliza para o get */
 @Mutation
 private SET_ALL(data: TasksProps[]) {
  this.tasks = data
 }
 @Mutation
 private SET_SINGLE(data: TasksProps) {
  this.task = data
 }

 @Action
 public index(projectId: string) {
  const filtertasks = tasks.filter((task) => {
   if (task.projectId=== Number(projectId)) {
    return task
   }
  })
  this.context.commit('SET_ALL', filtertasks)
 }
 @Action
 public create(payload: TasksProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public update(payload: TasksProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public destroy(id: number) {
  this.context.commit('SET_SINGLE', null)
 }
}
