import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary to-primary-dark text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Soluções Profissionais em Impressão
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8">
            Equipamentos de última geração, serviços especializados e suporte técnico 
            completo para o seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/impressoras" 
              className="bg-white text-primary hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Ver Equipamentos
            </Link>
            <Link 
              href="/contato" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary font-medium py-3 px-8 rounded-lg transition-colors duration-200 text-center"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-light opacity-10 transform rotate-12 translate-x-1/4"></div>
    </section>
  )
}