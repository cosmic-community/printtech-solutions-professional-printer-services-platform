import Link from 'next/link'
import { Impressora } from '@/types'

interface PrinterCardProps {
  printer: Impressora
}

export default function PrinterCard({ printer }: PrinterCardProps) {
  const mainImage = printer.metadata.imagens_produto?.[0]
  const availability = printer.metadata.disponivel_para || []
  
  return (
    <Link href={`/impressoras/${printer.slug}`} className="card group">
      {/* Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        {mainImage ? (
          <img
            src={`${mainImage.imgix_url}?w=800&h=600&fit=crop&auto=format,compress`}
            alt={printer.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
          </div>
        )}
        
        {/* Stock Badge */}
        {printer.metadata.em_estoque && (
          <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Em Estoque
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        {/* Type Badge */}
        <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
          {printer.metadata.tipo_impressora.value}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
          {printer.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {printer.metadata.modelo}
        </p>
        
        {/* Pricing */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          {availability.includes('Compra') && printer.metadata.preco_compra && (
            <div>
              <p className="text-sm text-gray-500">Compra</p>
              <p className="text-lg font-bold text-gray-900">
                R$ {printer.metadata.preco_compra.toLocaleString('pt-BR')}
              </p>
            </div>
          )}
          
          {availability.includes('Aluguel') && printer.metadata.valor_mensal && (
            <div>
              <p className="text-sm text-gray-500">Aluguel</p>
              <p className="text-lg font-bold text-gray-900">
                R$ {printer.metadata.valor_mensal}/mês
              </p>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}