<template>
  <!--
    TODO: Exiba o status recebido pela prop dentro de um <span> com a
    classe 'badge' do Bootstrap.
    https://getbootstrap.com/docs/5.3/components/badge/#examples
    
  -->
  <span :class="`badge ${corDoBadge}`">{{ props.status }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// TODO: Declare a prop 'status' do tipo string usando defineProps.
const props = defineProps({
  status: {
    type: String,
    required: true
  }
})

const corDoBadge = computed(() => {
  switch (props.status.toLowerCase()) {
    case 'concluido':
    case 'concluído':
      return 'bg-success' // Verde
    case 'em andamento':
      return 'bg-primary' // Azul
    case 'aguardando':
      return 'bg-warning text-dark' // Amarelo (text-dark melhora o contraste)
    default:
      return 'bg-secondary' // Cinza padrão para outros status
  }
})

</script>