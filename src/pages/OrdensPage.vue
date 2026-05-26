<template>
  <div>
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Ordens de Serviço</h2>
      <!--
        TODO: Adicione um botão "Nova Ordem" que navegue para /ordens/nova.
        Use RouterLink ou useRouter para a navegação.
      -->
    </div>

    <!--
      TODO: Exiba um OrdemCard para cada item do array 'ordens'.
      Lembre-se de passar os dados necessários via prop e usar :key.
      Dica: antes de exibir, você precisará combinar os dados das
      ordens com os dados dos veículos para que o card consiga
      exibir placa e modelo.
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import OrdemCard from '../components/OrdemCard.vue'
import type { OrdemDetalhes } from '@/interfaces/Ordem'

// TODO: Importe getOrdens e getVeiculos do arquivo de serviços.

const ordens = ref<OrdemDetalhes[]>([])

// TODO: Use onMounted para buscar ordens e veículos da API.
// Após obter os dois arrays, combine-os para que cada ordem tenha
// os dados do seu veículo (placa, modelo) incluídos.
// Armazene o resultado em ordens.value.
async function buscarOrdemEVeiculos() {
    
}

onMounted(buscarOrdemEVeiculos)
</script>