<template>
 <v-app dark>
  <v-navigation-drawer
   v-model="drawer"
   :mini-variant="miniVariant"
   :clipped="clipped"
   fixed
   app
  >
   <v-list>
    <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
     <v-list-item-action>
      <v-icon>{{ item.icon }}</v-icon>
     </v-list-item-action>

     <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
     </v-list-item-content>
    </v-list-item>
   </v-list>
  </v-navigation-drawer>

  <v-app-bar :clipped-left="clipped" fixed app>
   <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
   <v-btn icon @click.stop="miniVariant = !miniVariant">
    <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
   </v-btn>

   <v-toolbar-title class="d-flex align-center">
    <v-icon class="mr-2">mdi-file-sign</v-icon>
    <span>
     {{ title }}
    </span>
   </v-toolbar-title>

   <v-spacer />

   <div class="d-flex align-center" style="gap: 1rem; width: 30rem">
    <v-tooltip bottom color="grey darken-3">
     <template #activator="{ on, attrs }">
      <v-btn fab small color="grey darken-3" v-bind="attrs" v-on="on">
       <v-icon color="white">mdi-plus</v-icon>
      </v-btn>
     </template>
     <span>Novo Projeto</span>
    </v-tooltip>
    <v-text-field
     placeholder="Pesquisar..."
     filled
     rounded
     dense
     class="mt-6"
    />
   </div>

   <div class="ml-8">
    <h3>Olá, {{ $user }}</h3>
   </div>

   <v-spacer />

   <v-tooltip bottom>
    <template #activator="{ on, attrs }">
     <v-btn
      icon
      rounded
      v-bind="attrs"
      v-on="on"
      @click="setTheme(!$vuetify.theme.dark)"
     >
      <v-icon :color="$vuetify.theme.dark ? 'grey lighten 2' : 'grey darken-4'">
       {{ $vuetify.theme.dark ? ' mdi-brightness-6' : 'mdi-brightness-4' }}
      </v-icon>
     </v-btn>
    </template>
    <span>Alterar tema Light/Dark</span>
   </v-tooltip>

   <v-tooltip bottom>
    <template #activator="{ on, attrs }">
     <v-btn icon rounded class="mr-6" v-bind="attrs" v-on="on" @click="logout">
      <v-icon :color="$vuetify.theme.dark ? 'grey lighten 2' : 'grey darken-4'">
       mdi-logout
      </v-icon>
     </v-btn>
    </template>
    <span>Logout</span>
   </v-tooltip>
  </v-app-bar>

  <v-main style="margin: 0 auto">
   <v-container>
    <Nuxt />
   </v-container>
  </v-main>

  <v-footer :absolute="!fixed" app>
   <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
 </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { auth, theme, users } from '@/store'

export default Vue.extend({
 middleware: 'auth',

 data: () => ({
  clipped: false,
  drawer: false,
  fixed: false,
  items: [
   {
    icon: 'mdi-projector-screen-outline',
    title: 'Dashboard',
    to: '/dashboard',
   },
   {
    icon: 'mdi-',
    title: 'Usuários',
    to: '/users',
   },
  ],
  miniVariant: false,
  right: true,
  rightDrawer: false,
  title: 'Projetos',
 }),
 computed: {
  $user() {
   return users.$loggedUser.name
  },
 },
 methods: {
  setTheme(darkMode: boolean) {
   this.$vuetify.theme.dark = darkMode
   theme.setTheme(darkMode)
  },
  async logout() {
   await this.$router.push('/')
   auth.destroy()
  },
 },
})
</script>
