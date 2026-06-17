import './globals.css'

export const metadata = {
  title: 'Protocolo: Controle Absoluto — Acabe com a ejaculação precoce em 30 dias',
  description:
    'Protocolo: Controle Absoluto — o método de 30 dias para acabar com a ejaculação precoce e a ansiedade de performance. Mente + corpo. Sem sprays, sem remédios.',
  openGraph: {
    title: 'Protocolo: Controle Absoluto',
    description:
      'Decida quando o sexo termina. O protocolo de 30 dias que treina sua mente e seu corpo para você durar o quanto quiser.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#0a0a0a',
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
