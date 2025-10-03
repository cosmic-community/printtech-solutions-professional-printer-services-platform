// Base Cosmic object interface
interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata: Record<string, any>
  type: string
  created_at: string
  modified_at: string
}

// Impressora (Printer) type
export interface Impressora extends CosmicObject {
  type: 'impressoras'
  metadata: {
    modelo: string
    descricao?: string
    imagens_produto?: Array<{
      url: string
      imgix_url: string
    }>
    categoria?: Categoria | string
    tipo_impressora: {
      key: 'laser' | 'termica' | 'multifuncional'
      value: string
    }
    disponivel_para: string[]
    preco_compra?: number
    valor_mensal?: number
    especificacoes?: Record<string, any>
    velocidade_impressao?: string
    conectividade?: string[]
    em_estoque?: boolean
  }
}

// Servico (Service) type
export interface Servico extends CosmicObject {
  type: 'servicos'
  metadata: {
    nome_servico: string
    descricao?: string
    imagem_servico?: {
      url: string
      imgix_url: string
    }
    categoria?: Categoria | string
    tipo_servico: {
      key: 'instalacao' | 'configuracao' | 'manutencao' | 'treinamento'
      value: string
    }
    preco_inicial?: number
    tempo_estimado?: string
    principais_beneficios?: string[]
  }
}

// Assistencia Tecnica (Technical Assistance) type
export interface AssistenciaTecnica extends CosmicObject {
  type: 'assistencia-tecnica'
  metadata: {
    nome_pacote: string
    descricao?: string
    nivel_suporte: {
      key: 'basico' | 'padrao' | 'premium' | 'empresarial'
      value: string
    }
    tempo_resposta?: string
    preco_mensal?: number
    visitas_incluidas?: number
    servicos_incluidos?: string[]
    horario_atendimento?: string
  }
}

// Categoria (Category) type
export interface Categoria extends CosmicObject {
  type: 'categorias'
  metadata: {
    nome: string
    descricao?: string
    tipo_categoria: {
      key: 'impressora' | 'servico' | 'ambos'
      value: string
    }
  }
}

// API Response type
export interface CosmicResponse<T> {
  objects: T[]
  total: number
}