import ServiceCard from '@/components/ServiceCard'
import { getServices } from '@/lib/cosmic'

export const metadata = {
  title: 'Serviços Técnicos - PrintTech Solutions',
  description: 'Serviços profissionais de instalação, configuração, manutenção e treinamento',
}

export const revalidate = 60

export default async function ServicesPage() {
  const services = await getServices()
  
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Serviços Técnicos
          </h1>
          <p className="text-xl text-gray-600">
            Instalação, configuração, manutenção e treinamento profissional
          </p>
        </div>
        
        {services.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum serviço disponível no momento.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}