<template>
  <!--
    TODO: Exiba o status recebido pela prop dentro de um <span> com a
    classe 'badge' do Bootstrap.
    https://getbootstrap.com/docs/5.3/components/badge/#examples
    
  -->
  <span class="badge bg-secondary">{{ props.status }}</span>
</template>

<script setup lang="ts">

// TODO: Declare a prop 'status' do tipo string usando defineProps.
const props = defineProps({
  status: {
    type: String,
    required: true
  }
})


</script>