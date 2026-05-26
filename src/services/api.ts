import axios from 'axios'
import type { Ordem } from '@/interfaces/Ordem'
import type Cliente from '@/interfaces/Cliente'
import type Veiculo from '@/interfaces/Veiculo'

// Instância do axios com a URL base da API já configurada.
// Use esta instância para fazer todas as requisições.
const api = axios.create({
  baseURL: 'http://localhost:3001'
})

// TODO: Implemente as funções abaixo.
// Cada função deve retornar a chamada axios correspondente.
// Use os tipos importados para tipar o retorno de cada requisição.

// Retorna todas as ordens de serviço
export async function getOrdens() {
  const response = await api.get('/ordens')
  return response.data
}

// Retorna uma ordem de serviço pelo id
export async function getOrdemById(id: string | number) {
  const response = await api.get(`/ordens/${id}`)
  return response.data;
}

// Retorna todos os veículos
export async function getVeiculos() {
  const response = await api.get('/veiculos')
  return response.data;
}

// Retorna um veículo pelo id
export async function getVeiculoById(id: number) {
  const response = await api.get(`/veiculos/${id}`)
  return response.data;
}

// Retorna um cliente pelo id
export async function getClienteById(id: number) {
  const response = await api.get(`/clientes/${id}`)
  return response.data;
}

// Cadastra uma nova ordem de serviço.
// 'ordem' é o objeto com os dados a serem enviados (sem o campo 'id').
// Dica: Omit<Ordem, 'id'> é um tipo TypeScript que representa
// a interface Ordem sem o campo 'id'.
export async function postOrdem(ordem: Omit<Ordem, 'id'>) {
  const response = await api.post('/ordens', ordem)
  return response.data;
}