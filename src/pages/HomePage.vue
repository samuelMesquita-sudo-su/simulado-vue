<template>
  <div>
    <h2 class="mb-4">Painel da Oficina</h2>
    <div class="container text-center">
      <div class="row">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ contarPorStatus('Aguardando') }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Aguardando</h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ contarPorStatus('Em andamento') }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Em andamento</h6>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ contarPorStatus('Concluído') }}</h5>
              <h6 class="card-subtitle mb-2 text-body-secondary">Concluído</h6>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
      TODO: Exiba três cards lado a lado (use o grid do Bootstrap),
      um para cada status: 'Aguardando', 'Em andamento' e 'Concluído'.
      Cada card deve mostrar o nome do status e a quantidade de ordens
      naquele status, usando a função 'contarPorStatus'.
      https://getbootstrap.com/docs/5.3/layout/grid/#example
    -->
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Ordem } from '@/interfaces/Ordem'
import { getOrdens } from '@/services/api'
// TODO: Importe a função getOrdens do arquivo de serviços.

// Array reativo que armazenará as ordens recebidas da API.
const ordens = ref([] as Ordem[])

// TODO: Use onMounted para buscar as ordens da API assim que
// a página for carregada e armazená-las em ordens.value.
async function buscarOrdens() {
  const ordensResponse = await getOrdens()
  ordens.value = ordensResponse
}

onMounted(buscarOrdens)

// TODO: Implemente a função que recebe um status como parâmetro
// e retorna a quantidade de ordens com aquele status.
function contarPorStatus(status: string): number {
  const ordemStatus = ordens.value.filter(ord => status == ord.status)
  return ordemStatus.length
}
</script>