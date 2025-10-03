import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">PT</span>
              </div>
              <span className="text-xl font-bold">PrintTech Solutions</span>
            </div>
            <p className="text-gray-400 mb-4">
              Soluções profissionais em impressão para o seu negócio. 
              Equipamentos de última geração, serviços especializados e 
              suporte técnico completo.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressoras" className="text-gray-400 hover:text-white transition-colors">
                  Impressoras
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/assistencia" className="text-gray-400 hover:text-white transition-colors">
                  Assistência Técnica
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>contato@printtech.com.br</li>
              <li>(11) 1234-5678</li>
              <li>Segunda a Sexta<br />8h às 18h</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} PrintTech Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}