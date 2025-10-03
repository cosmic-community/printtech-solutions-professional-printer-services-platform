import Hero from '@/components/Hero'
import PrinterCard from '@/components/PrinterCard'
import ServiceCard from '@/components/ServiceCard'
import SupportCard from '@/components/SupportCard'
import { getPrinters, getServices, getSupportPackages } from '@/lib/cosmic'
import Link from 'next/link'

export const revalidate = 60

export default async function HomePage() {
  const [printers, services, supportPackages] = await Promise.all([
    getPrinters(),
    getServices(),
    getSupportPackages(),
  ])
  
  const featuredPrinters = printers.slice(0, 3)
  const featuredServices = services.slice(0, 3)
  
  return (
    <>
      <Hero />
      
      {/* Featured Printers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Impressoras em Destaque
              </h2>
              <p className="text-gray-600">
                Equipamentos de última geração disponíveis para compra ou aluguel
              </p>
            </div>
            <Link 
              href="/impressoras"
              className="btn-outline hidden md:inline-block"
            >
              Ver Todas
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPrinters.map((printer) => (
              <PrinterCard key={printer.id} printer={printer} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/impressoras" className="btn-outline">
              Ver Todas as Impressoras
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Serviços Técnicos
              </h2>
              <p className="text-gray-600">
                Instalação, configuração e manutenção profissional
              </p>
            </div>
            <Link 
              href="/servicos"
              className="btn-outline hidden md:inline-block"
            >
              Ver Todos
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link href="/servicos" className="btn-outline">
              Ver Todos os Serviços
            </Link>
          </div>
        </div>
      </section>
      
      {/* Support Packages Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Pacotes de Assistência Técnica
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Escolha o nível de suporte ideal para o seu negócio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supportPackages.map((pkg) => (
              <SupportCard key={pkg.id} supportPackage={pkg} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para modernizar suas impressões?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Entre em contato e descubra a solução perfeita para sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/impressoras" className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Ver Equipamentos
            </Link>
            <Link href="/assistencia" className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200">
              Conhecer Planos
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}