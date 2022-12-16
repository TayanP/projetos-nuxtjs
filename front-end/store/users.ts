import { $cookies } from '@/utils/nuxt-instance';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { UserProps, users } from '@/data'

@Module({ name: 'users', stateFactory: true, namespaced: true })
export default class Users extends VuexModule {
 private users = [] as UserProps[]
 private User = {} as UserProps
 private userLogged = {} as UserProps

 /* pegando uma lista */
 public get $all() {
  return this.users
 }
 public get $loggedUser() {
  return this.userLogged
 }
 /* retorna um unico arquivo */
 public get $single() {
  return this.User
 }
 /* recebe uma actions que vem do component que é um metodo.
 e atualiza a declaração private e já disponibiliza para o get */
 @Mutation
 private SET_ALL(data: UserProps[]) {
  this.users = data
 }
 @Mutation
 private SET_SINGLE(data: UserProps) {
  this.User = data
 }

 @Mutation
 private SET_LOGGED_USER(data: UserProps) {
  this.userLogged = data
 }

 @Action
 public index() {
  this.context.commit('SET_ALL', Users)
 }
 @Action
 public create(payload: UserProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public update(payload: UserProps) {
  this.context.commit('SET_SINGLE', payload)
 }
 @Action
 public destroy(id: number) {
  this.context.commit('SET_SINGLE', null)
 }
 @Action
 public verify() {
  if(!$cookies.get('token')) {
   this.context.commit('SET_LOGGED_USER', null)

   return 
  }
  const userData = $cookies.get('user')
   this.context.commit('SET_LOGGED_USER', userData)
 }
}
