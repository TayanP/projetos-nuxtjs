<template>
 <v-dialog
  :value="show"
  retain-focus
  persistent
  overlay-color="#121212"
  max-width="600px"
  @input="$emit('close')"
 >
  <v-card class="pa-6" roundend="xl">
   <v-card-title>Novo usuário</v-card-title>
   <v-card-text>
    <v-form>
     <v-text-field v-model="name" label="Nome" placeholder="Digite seu nome" />
     <v-text-field
      v-model="email"
      label="Email"
      placeholder="Digite seu email"
     />

     <v-text-field
      v-model="password"
      type="password"
      label="Senha"
      placeholder="Digite sua senha"
     />
    </v-form>
   </v-card-text>

   <v-card-actions>
    <v-btn text color="primary">Salvar</v-btn>
    <v-btn text color="error" @click="cancel">Cancelar</v-btn>
   </v-card-actions>
  </v-card>
 </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
 props: {
  show: { type: Boolean, default: false },
 },
 data: () => ({
  name: '',
  email: '',
  password: '',
 }),
 methods: {
  cancel() {
   this.$emit('close')
   this.name = ''
   this.email = ''
   this.password = ''
  },
 },
})
</script>
