<template>
  <!--
    TODO: Monte um card Bootstrap que exiba as seguintes informações
    da ordem recebida pela prop:
      - Placa e modelo do veículo
      - Descrição do serviço
      - Status (utilize o componente StatusBadge)
      - Data de abertura (utilize a função formatarData)
      - Botão "Ver detalhes" que navegue para /ordens/:id via RouterLink
    https://getbootstrap.com/docs/5.3/components/card/#about
  -->
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ props.ordem.veiculo.placa }} - {{ props.ordem.veiculo.modelo }}</h5>
      <p class="card-text">{{ props.ordem.descricao }}</p>
      <StatusBadge :status="props.ordem.status" />
      <p class="card-text">Data de abertura: {{ formatarData(props.ordem.dataAbertura) }}</p>
      <router-link :to="`/ordens/${props.ordem.id}`" class="btn btn-primary">Ver detalhes</router-link>
    </div>
  </div>

</template>

<script setup lang="ts">
import StatusBadge from './StatusBadge.vue'
import type { OrdemDetalhes } from '@/interfaces/Ordem'

// TODO: Declare a prop 'ordem' do tipo OrdemDetalhes usando defineProps.
// https://vuejs.org/api/sfc-script-setup.html#type-only-props-emit-declarations
const props = defineProps(
  {
    ordem: {
      type: Object as () => OrdemDetalhes,
      required: true
    }
  }
);
// TODO: Implemente a função que converte a data
// do formato AAAA-MM-DD para DD/MM/AAAA.
function formatarData(data: string): string {
  // IMPLEMENTE AQUI
  const [year, month, day] = data.split('-')
  return `${day}/${month}/${year}`;
}
</script>