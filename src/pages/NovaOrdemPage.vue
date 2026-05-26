<template>
  <div class="row justify-content-center">
    <div class="col-md-8">
      <h2 class="mb-4">Nova Ordem de Serviço</h2>

      <!--
        TODO: Crie um formulário com os campos abaixo, todos vinculados
        com v-model às propriedades do objeto 'form':
          - Veículo: <select> com os veículos da API (exibir placa + modelo)
          - Descrição do serviço: <textarea>
          - Status: <select> com as opções fixas:
              'Aguardando', 'Em andamento', 'Concluído'
          - Data de abertura: <input type="date">

        O formulário deve chamar a função 'salvar' ao ser submetido
        (@submit.prevent="salvar").
        Inclua também um botão "Cancelar" que volte para /ordens.
        https://getbootstrap.com/docs/5.3/forms/overview/#overview
        https://getbootstrap.com/docs/5.3/forms/form-control/
        https://getbootstrap.com/docs/5.3/forms/select/
      -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type Veiculo from '@/interfaces/Veiculo'
import type { Ordem } from '@/interfaces/Ordem'

// TODO: Importe getVeiculos e postOrdem do arquivo de serviços.

const router = useRouter()

const veiculos = ref([] as Veiculo[])

// Objeto reativo vinculado ao formulário via v-model.
// TODO: Adicione as propriedades necessárias ao objeto form:
// veiculoId, descricao, status e dataAbertura.
const form = ref({} as Ordem)

// TODO: Use onMounted para buscar os veículos da API
// e armazená-los em veiculos.value para popular o <select>.
async function buscarVeiculo() {
    
}

onMounted(buscarVeiculo)

// TODO: Implemente a função salvar:
// 1. Encontre o veículo selecionado no array veiculos.value
//    para obter o clienteId correspondente.
// 2. Monte o objeto da nova ordem com todos os campos necessários.
// 3. Envie via postOrdem.
// 4. Redirecione para /ordens com router.push após o sucesso.
async function salvar() {
  // IMPLEMENTE AQUI
}
</script>