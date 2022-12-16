import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import {filesProps, files } from '@/data'

@Module({ name: 'files',stateFactory: true, namespaced: true })
export default class Files extends VuexModule {
 private files = []  as filesProps[]
 private file = {} as filesProps

 /* pegando uma lista */
 public get $all() {
  return this.files
 }
 /* retorna um unico arquivo */
 public get $single() {
  return this.file
 }
 /* recebe uma actions que vem do component que é um metodo.
 e atualiza a declaração private e já disponibiliza para o get */
 @Mutation 
 private SET_ALL(data: filesProps[]) {
  this.files = data 
 }
 @Mutation
 private SET_SINGLE(data: filesProps) {
  this.file = data 
 }

 @Action
 public index(projectId: string ) {
  const filterFiles = files.filter((file) => {
   if(file.ownerId === Number(projectId)) {
    return file
   }
  })
  this.context.commit('SET_ALL', filterFiles)
 }
 @Action
 public create(payload: filesProps){
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public update(payload: filesProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public destroy(id: number ) {
  this.context.commit('SET_SINGLE', null)
 }
}
