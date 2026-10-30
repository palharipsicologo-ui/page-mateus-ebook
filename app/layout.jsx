import './globals.css'
import './premium.css'
import './refinements.css'

export const metadata = {
  title: 'Protocolo Controle Absoluto — assuma o comando do seu desempenho',
  description:
    'Um protocolo prático de 30 dias para desenvolver domínio da excitação, confiança, ereção, presença e condução sexual.',
  openGraph: {
    title: 'Protocolo Controle Absoluto',
    description: 'Pare de deixar ansiedade, pressa e improviso comandarem a experiência. Assuma a regência.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#080705',
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
