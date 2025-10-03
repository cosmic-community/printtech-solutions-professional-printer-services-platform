import SupportCard from '@/components/SupportCard'
import { getSupportPackages } from '@/lib/cosmic'

export const metadata = {
  title: 'Assistência Técnica - PrintTech Solutions',
  description: 'Pacotes de suporte técnico para manter suas impressoras sempre funcionando',
}

export const revalidate = 60

export default async function AssistancePage() {
  const supportPackages = await getSupportPackages()
  
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pacotes de Assistência Técnica
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha o nível de suporte ideal para garantir o funcionamento 
            contínuo e eficiente das suas impressoras
          </p>
        </div>
        
        {supportPackages.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {supportPackages.map((pkg) => (
              <SupportCard key={pkg.id} supportPackage={pkg} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhum pacote de assistência disponível no momento.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}