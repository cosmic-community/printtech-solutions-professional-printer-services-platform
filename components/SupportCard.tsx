import Link from 'next/link'
import { AssistenciaTecnica } from '@/types'

interface SupportCardProps {
  supportPackage: AssistenciaTecnica
}

export default function SupportCard({ supportPackage }: SupportCardProps) {
  const services = supportPackage.metadata.servicos_incluidos || []
  const displayServices = services.slice(0, 5)
  
  return (
    <div className="card">
      <div className="p-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-3">
            {supportPackage.metadata.nivel_suporte.value}
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {supportPackage.title}
          </h3>
          <div className="text-4xl font-bold text-primary">
            R$ {supportPackage.metadata.preco_mensal?.toLocaleString('pt-BR')}
            <span className="text-lg text-gray-500 font-normal">/mês</span>
          </div>
        </div>
        
        {/* Key Info */}
        <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
          {supportPackage.metadata.tempo_resposta && (
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>Resposta:</strong> {supportPackage.metadata.tempo_resposta}</span>
            </div>
          )}
          
          {supportPackage.metadata.visitas_incluidas && (
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span><strong>{supportPackage.metadata.visitas_incluidas}</strong> visitas técnicas/ano</span>
            </div>
          )}
          
          {supportPackage.metadata.horario_atendimento && (
            <div className="flex items-center text-gray-700">
              <svg className="w-5 h-5 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{supportPackage.metadata.horario_atendimento}</span>
            </div>
          )}
        </div>
        
        {/* Services List */}
        <div className="mb-6">
          <h4 className="font-bold text-gray-900 mb-3">Serviços Incluídos:</h4>
          <ul className="space-y-2">
            {displayServices.map((service, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <svg className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm">{service}</span>
              </li>
            ))}
          </ul>
          
          {services.length > 5 && (
            <p className="text-sm text-gray-500 mt-3">
              + {services.length - 5} outros serviços
            </p>
          )}
        </div>
        
        {/* CTA Button */}
        <Link
          href={`/assistencia/${supportPackage.slug}`}
          className="btn-primary w-full text-center block"
        >
          Ver Detalhes
        </Link>
      </div>
    </div>
  )
}