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
      <form action="" method="post" @submit.prevent="salvar">
        <div class="mb-3">
          <label for="veiculo" class="form-label">Veículo</label>
          <select class="form-control" id="veiculo" v-model="form.veiculoId">
            <option value="">Selecione um veículo</option>
            <option v-for="veiculo in veiculos" :key="veiculo.id" :value="veiculo.id">
              {{ veiculo.placa }} - {{ veiculo.modelo }}
            </option>
          </select>
        </div>

        <div class="mb-3">
          <label for="descricao" class="form-label">Descrição do serviço</label>
          <textarea class="form-control" id="descricao" v-model="form.descricao"></textarea>
        </div>

        <div class="mb-3">
          <label for="status" class="form-label">Status</label>
          <select class="form-control" id="status" v-model="form.status">
            <option value="Aguardando">Aguardando</option>
            <option value="Em andamento">Em andamento</option>
            <option value="Concluído">Concluído</option>
          </select>
        </div>

        <div class="mb-3">
          <label for="dataAbertura" class="form-label">Data de abertura</label>
          <input type="date" class="form-control" id="dataAbertura" v-model="form.dataAbertura">
        </div>

        <div class="d-flex justify-content-end gap-2 mb-3">
          <button type="submit" class="btn btn-primary" @click.prevent="salvar">Salvar</button>
          <RouterLink to="/ordens" class="btn btn-secondary">Cancelar</RouterLink>          
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import type Veiculo from '@/interfaces/Veiculo'
import type { Ordem } from '@/interfaces/Ordem'
import { getVeiculos, postOrdem } from '@/services/api'
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
    veiculos.value = await getVeiculos();
    return veiculos.value;
}

onMounted(buscarVeiculo)

// TODO: Implemente a função salvar:
// 1. Encontre o veículo selecionado no array veiculos.value
//    para obter o clienteId correspondente.
// 2. Monte o objeto da nova ordem com todos os campos necessários.
// 3. Envie via postOrdem.
// 4. Redirecione para /ordens com router.push após o sucesso.
async function salvar() {
    const veiculoSelecionado = veiculos.value.find(v => v.id === form.value.veiculoId);
    if (!veiculoSelecionado) {
        alert('Veículo selecionado não encontrado');
        return;
    }

    const novaOrdem: Ordem = {
        id: '', // O ID será gerado pela API
        veiculoId: form.value.veiculoId,
        descricao: form.value.descricao,
        status: form.value.status,
        dataAbertura: form.value.dataAbertura
    };

    try {
        await postOrdem(novaOrdem);
        router.push('/ordens');
    } catch (error) {
        console.error('Erro ao salvar a ordem:', error);
        alert('Ocorreu um erro ao salvar a ordem. Tente novamente.');
    }
  // IMPLEMENTE AQUI
}
</script>