<template>
  <div>
    <!--
      TODO: Enquanto os dados ainda não foram carregados (ordem === null),
      exiba uma mensagem como "Carregando...".
      Após carregados, exiba as informações completas da ordem:
        - Dados da ordem: descrição, status (use StatusBadge), data de abertura
        - Dados do veículo: placa, modelo, ano
        - Dados do cliente: nome, telefone
      Inclua um botão "Voltar" que retorne para /ordens.
    -->
    <div v-if="!ordem.id">
      <p class="alert alert-danger" role="alert">
        Carregando...
      </p>
    </div>

    <div v-else>
      <!-- Exibe as informações da ordem -->
      <h2>Detalhes da Ordem</h2>
      <p><strong>Descrição:</strong> {{ ordem.descricao }}</p>
      <p><strong>Status:</strong> <StatusBadge :status="ordem.status" /></p>
      <p><strong>Data de Abertura:</strong> {{ formatarData(ordem.dataAbertura) }}</p>

      <h3>Veículo</h3>
      <p><strong>Placa:</strong> {{ veiculo.placa }}</p>
      <p><strong>Modelo:</strong> {{ veiculo.modelo }}</p>
      <p><strong>Ano:</strong> {{ veiculo.ano }}</p>

      <h3>Cliente</h3>
      <p><strong>Nome:</strong> {{ cliente.nome }}</p>
      <p><strong>Telefone:</strong> {{ cliente.telefone }}</p>

      <button @click="$router.push('/ordens')" class="btn btn-secondary">
        Voltar
      </button>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import StatusBadge from '../components/StatusBadge.vue'
import type { Ordem } from '@/interfaces/Ordem'
import type Veiculo from '@/interfaces/Veiculo'
import type Cliente from '@/interfaces/Cliente'
import { getOrdemById, getVeiculoById, getClienteById } from '@/services/api'

// TODO: Importe getOrdemById, getVeiculoById e getClienteById
// do arquivo de serviços.

const route = useRoute()

// Variáveis reativas inicializadas como null.
// O v-if do template usará esses valores para controlar
// o que é exibido enquanto os dados estão sendo carregados.
const ordem   = ref({} as Ordem)
const veiculo = ref({} as Veiculo)
const cliente = ref({} as Cliente)

// TODO: Use onMounted para buscar os dados da ordem usando o id da rota.
// O id está disponível em route.params.id.
// Em seguida, use os ids retornados na ordem para buscar
// o veículo e o cliente correspondentes.
async function buscarDadosOrdem() {
    const ordemResponse = await getOrdemById(route.params.id as string)
    ordem.value = ordemResponse
    const veiculoResponse = await getVeiculoById(ordem.value.veiculoId)
    veiculo.value = veiculoResponse
    const clienteResponse = await getClienteById(veiculo.value.clienteId)
    cliente.value = clienteResponse
}

onMounted(buscarDadosOrdem)

// TODO: Implemente a função que converte a data
// do formato AAAA-MM-DD para DD/MM/AAAA.
function formatarData(data: string): string {
  // IMPLEMENTE AQUI
  return ''
}
</script>