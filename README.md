# Protocolo: Controle Absoluto — Landing Page

Landing page de vendas (**Next.js / App Router**) para o e-book **Protocolo: Controle
Absoluto**. Tema preto + dourado, 100% responsiva (celular e computador), focada em
conversão e quebra de objeções.

---

## 🚀 Como rodar no seu computador

Você precisa do [Node.js](https://nodejs.org) instalado (versão 18.18 ou superior).

Abra o terminal **dentro desta pasta** e rode:

```bash
npm install      # só na primeira vez (instala as dependências)
npm run dev      # abre a página em modo de desenvolvimento
```

Vai aparecer um endereço tipo `http://localhost:3000`. Abra no navegador.

Para gerar a versão final (que você sobe na hospedagem):

```bash
npm run build    # gera o site estático na pasta "out"
```

A pasta **`out/`** é o site pronto (HTML/CSS/JS estáticos). É só subir o conteúdo dela
em qualquer hospedagem (Hostinger, Netlify, Vercel, etc.).

> Para conferir a versão final localmente antes de publicar:
> `npx serve out` (ou qualquer servidor de arquivos estáticos).

> **Publicando na Vercel?** Pode subir o projeto direto — ela detecta o Next sozinha.
> Se quiser usar recursos de servidor do Next no futuro, remova a linha
> `output: 'export'` do arquivo [`next.config.mjs`](next.config.mjs).

---

## ✏️ O que você edita no dia a dia

**Quase tudo que importa está em UM único arquivo:**
[`data/content.js`](data/content.js)

Lá você troca, sem mexer no código:

| O que | Onde, no arquivo |
|---|---|
| **Link de checkout** (Kiwify/Hotmart) | `CHECKOUT_URL` (no topo) |
| **Preço e parcelamento** | `PRICE` |
| **E-mail de suporte e CNPJ** | `BRAND` |
| **Todos os textos** (headline, dor, oferta, FAQ...) | seções `HERO`, `PAIN`, `OFFER`, `FAQ`... |
| **Depoimentos** | `TESTIMONIALS` |
| **Stack de valor** (R$188 → R$47) | `OFFER.stack` / `OFFER.totalValue` |
| **Bloco de pagamento** (Pix/Cartão/Boleto) | `PAYMENT` |

> A **barra de CTA fixa no celular** (botão "Garantir agora · R$47" no rodapé)
> aparece sozinha quando o usuário rola a página e some quando a seção de oferta
> está na tela. O valor exibido vem de `PRICE.current`.

### 👉 Ligar os botões ao seu checkout
1. Abra [`data/content.js`](data/content.js)
2. Na linha `export const CHECKOUT_URL = '#comprar'`
3. Troque `'#comprar'` pelo seu link real, ex.:
   `export const CHECKOUT_URL = 'https://pay.kiwify.com.br/SEU-LINK'`
4. Pronto — **todos** os botões da página passam a apontar para o checkout.

> Enquanto estiver `#comprar`, os botões apenas rolam a página até a seção de preço.

---

## 🎨 Trocar as cores

As cores ficam em [`app/globals.css`](app/globals.css), bem no topo, no bloco `:root`
(variáveis `--gold`, `--bg`, etc.). Mude ali e o site inteiro acompanha.

---

## ⚠️ Avisos importantes (honestidade = confiança)

- **Depoimentos são ILUSTRATIVOS.** A página exibe um selo "Depoimentos ilustrativos
  (exemplos)" para deixar isso claro. Assim que tiver relatos/prints **reais** de
  clientes, substitua os textos em `TESTIMONIALS` e mude `illustrative: true` para
  `false` para remover o selo. Vender depoimento fictício como se fosse real é
  propaganda enganosa.
- **Estatísticas:** o e-book cita pesquisas (USP, etc.) que não foram verificadas
  de forma independente. Por isso elas **não** foram afirmadas como fato na página.
- **Rodapé** já traz um aviso de que o conteúdo é educativo e não substitui um médico.
  Mantenha isso — protege você e passa seriedade.
- Troque o **CNPJ**, o **e-mail de suporte** e os links de **Política de
  Privacidade/Termos** (hoje são placeholders) antes de publicar.
- **Bônus:** a página promete 3 bônus (Cartão de Emergência, Checklist dos 30 Dias
  e Guia da Escala de Excitação). Eles saem do próprio conteúdo do e-book — monte
  cada um como um PDF curto **uma vez** e entregue junto com o e-book no acesso da
  plataforma. Edite-os em `BONUS`, no `content.js`.

---

## 🗂 Estrutura do projeto (Next.js — App Router)

```
app/
  layout.jsx          ← <html>, metadados/SEO e importação do CSS global
  page.jsx            ← ordem das seções da página
  globals.css         ← cores e estilo (tema preto + dourado)
data/
  content.js          ← TEXTOS, PREÇO e LINK (edite aqui)
components/            ← cada seção é um arquivo
  Header, Hero, Pain, Enemy, Transform, Modules, ForWhom, Authority,
  Testimonials, Bonus, Offer, PaymentTrust, Faq, FinalCta, Footer,
  StickyCTA, CTAButton, BookMock, Reveal, icons
next.config.mjs       ← configuração do Next (saída estática em "out/")
```

> Os componentes interativos (`Reveal`, `Faq`, `StickyCTA`) têm `'use client'` no topo
> porque usam recursos do navegador (rolagem, cliques). Os demais são Server Components.
