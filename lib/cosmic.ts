import { createBucketClient } from '@cosmicjs/sdk'
import { Impressora, Servico, AssistenciaTecnica, Categoria } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Fetch all printers
export async function getPrinters(): Promise<Impressora[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'impressoras'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Impressora[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch printers')
  }
}

// Fetch single printer by slug
export async function getPrinterBySlug(slug: string): Promise<Impressora | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'impressoras',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Impressora
  } catch (error: any) {
    if (error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch printer')
  }
}

// Fetch all services
export async function getServices(): Promise<Servico[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'servicos'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Servico[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch services')
  }
}

// Fetch single service by slug
export async function getServiceBySlug(slug: string): Promise<Servico | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'servicos',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as Servico
  } catch (error: any) {
    if (error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch service')
  }
}

// Fetch all support packages
export async function getSupportPackages(): Promise<AssistenciaTecnica[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'assistencia-tecnica'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as AssistenciaTecnica[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch support packages')
  }
}

// Fetch single support package by slug
export async function getSupportPackageBySlug(slug: string): Promise<AssistenciaTecnica | null> {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'assistencia-tecnica',
        slug
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.object as AssistenciaTecnica
  } catch (error: any) {
    if (error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch support package')
  }
}

// Fetch all categories
export async function getCategories(): Promise<Categoria[]> {
  try {
    const response = await cosmic.objects
      .find({
        type: 'categorias'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    return response.objects as Categoria[]
  } catch (error: any) {
    if (error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch categories')
  }
}