import './globals.css'
import './premium.css'

export const metadata = {
  title: 'Protocolo: Controle Absoluto',
  description: 'Protocolo digital de 30 dias para desenvolver percepção, repertório, segurança e controle.',
  openGraph: {
    title: 'Protocolo: Controle Absoluto',
    description: 'Um percurso prático de 30 dias para desenvolver percepção, repertório e controle.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#090806',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
