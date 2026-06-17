/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Gera um site 100% estático na pasta "out/" ao rodar "npm run build".
  // Assim você pode hospedar em qualquer lugar (Hostinger, Netlify, Vercel, etc.).
  // Se for publicar na Vercel com recursos de servidor, é só remover esta linha.
  output: 'export',
}

export default nextConfig
