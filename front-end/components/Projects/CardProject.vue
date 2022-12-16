<template>
 <v-card rounded="xl" width="380" heigth="230">
  <v-card-title class="d-flex align-center justify-space-between">
   <div>
    <strong style="font-size: 0.9rem">
     {{ project.projectName }}
    </strong>

    <p
     class="text-truncate"
     style="
      color: #bdbdbd;
      font-size: 0.7rem;
      margin-top: -0.8rem;
      width: 19rem;
     "
    >
     {{ project.projectSubTitle }}
    </p>
   </div>
  </v-card-title>

  <v-card-text>
   <div class="d-flex align-center justify-space-between">
    <div class="d-flex align-center" style="gap: 1rem">
     <v-icon>mdi-format-list-bulleted</v-icon>
     <p style="color: #bdbdbd; font-size: 0.8rem; margin-top: 1rem">
      Progresso
     </p>
    </div>
    <strong>{{ `${project.tasks?.concluded}/${project.tasks?.total}` }}</strong>
   </div>
  </v-card-text>
 </v-card>
</template>

<script lang="ts">
import Vue, { PropOptions } from 'vue'
import { ProjectProps } from '@/data'

export default Vue.extend({
 props: {
  project: { type: Object, required: true } as PropOptions<ProjectProps>,
 },
 data: () => ({}),
})
</script>
