<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Ordens de Serviço</h2>
      <!--
        TODO: Adicione um botão "Nova Ordem" que navegue para /ordens/nova.
        Use RouterLink ou useRouter para a navegação.
      -->
      <RouterLink to="/ordens/nova" class="btn btn-primary">Nova Ordem</RouterLink>
    </div>
    <!--
      TODO: Exiba um OrdemCard para cada item do array 'ordens'.
      Lembre-se de passar os dados necessários via prop e usar :key.
      Dica: antes de exibir, você precisará combinar os dados das
      ordens com os dados dos veículos para que o card consiga
      exibir placa e modelo.
    -->
      <div class="card mb-2" v-for="ordem in ordens" :key="ordem.id">
        <div class="card-body">
          <h5 class="card-title">{{ ordem.veiculo?.modelo }}</h5>
          <p class="card-text">{{ ordem.descricao }}</p>
          <RouterLink :to="`/ordens/${ordem.id}`" class="btn btn-primary">Ver detalhes</RouterLink>
        </div>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import OrdemCard from '../components/OrdemCard.vue'
import type { OrdemDetalhes } from '@/interfaces/Ordem'
import { getOrdens, getVeiculos } from '@/services/api'
// TODO: Importe getOrdens e getVeiculos do arquivo de serviços.

const ordens = ref<OrdemDetalhes[]>([])

// TODO: Use onMounted para buscar ordens e veículos da API.
// Após obter os dois arrays, combine-os para que cada ordem tenha
// os dados do seu veículo (placa, modelo) incluídos.
// Armazene o resultado em ordens.value.
async function buscarOrdemEVeiculos() {
    const [ordensData, veiculosData] = await Promise.all([getOrdens(), getVeiculos()]);
    const ordensComVeiculos = ordensData.map((ordem: OrdemDetalhes) => {
        const veiculo = veiculosData.find((v) => v.id === ordem.veiculoId);
        return {
            ...ordem,
            veiculo: veiculo ? { placa: veiculo.placa, modelo: veiculo.modelo } : { placa: 'N/A', modelo: 'N/A' }
        };
    });
    ordens.value = ordensComVeiculos;

}

onMounted(buscarOrdemEVeiculos)
</script>