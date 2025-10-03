import PrinterCard from '@/components/PrinterCard'
import { getPrinters } from '@/lib/cosmic'

export const metadata = {
  title: 'Impressoras - PrintTech Solutions',
  description: 'Catálogo completo de impressoras disponíveis para compra e aluguel',
}

export const revalidate = 60

export default async function PrintersPage() {
  const printers = await getPrinters()
  
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container-custom">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Catálogo de Impressoras
          </h1>
          <p className="text-xl text-gray-600">
            Equipamentos de última geração disponíveis para compra ou aluguel
          </p>
        </div>
        
        {printers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {printers.map((printer) => (
              <PrinterCard key={printer.id} printer={printer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              Nenhuma impressora disponível no momento.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}