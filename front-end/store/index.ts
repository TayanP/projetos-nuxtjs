import { Store, ActionTree } from 'vuex'
import { initializeStores } from '@/utils/store-accessor'

const initializer = (store: Store<any>) => initializeStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessor'

const state = () => ({})
type RootState = ReturnType<typeof state>

export const actions: ActionTree<RootState, RootState> = {
 nuxtServerInit({ dispatch }) {
  /* pega o tema do usuário */
  dispatch('theme/getTheme')
/* busca o token  */
  dispatch('auth/update')
 /* verifica se o usuario tem um token */
 dispatch('users/verify')
},
}