import Link from 'next/link'
import { Servico } from '@/types'

interface ServiceCardProps {
  service: Servico
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const serviceImage = service.metadata.imagem_servico
  
  return (
    <Link href={`/servicos/${service.slug}`} className="card group">
      {/* Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {serviceImage ? (
          <img
            src={`${serviceImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Type Badge */}
        <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-3">
          {service.metadata.tipo_servico.value}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        
        {/* Pricing and Time */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          {service.metadata.preco_inicial && (
            <div>
              <p className="text-sm text-gray-500">A partir de</p>
              <p className="text-lg font-bold text-gray-900">
                R$ {service.metadata.preco_inicial.toLocaleString('pt-BR')}
              </p>
            </div>
          )}
          
          {service.metadata.tempo_estimado && (
            <div className="text-right">
              <p className="text-sm text-gray-500">Tempo</p>
              <p className="text-lg font-bold text-gray-900">
                {service.metadata.tempo_estimado}
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}