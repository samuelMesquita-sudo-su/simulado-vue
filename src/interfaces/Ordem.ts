export interface Ordem {
  id: number
  veiculoId: number
  clienteId: number
  descricao: string
  status: 'Aguardando' | 'Em andamento' | 'Concluído'
  dataAbertura: string
}

export interface OrdemDetalhes extends Ordem {
  placa: string
  modelo: string
}