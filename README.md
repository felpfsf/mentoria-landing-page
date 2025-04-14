# Mentoria de Carreira para Devs 🚀

Landing page profissional para divulgar e captar leads para uma mentoria de carreira e posicionamento de impacto voltada a programadores.

---

## ✨ Sobre o projeto

Essa landing page foi desenvolvida com foco em impacto visual, clareza de proposta e conversão estratégica. O usuário é convidado a se inscrever logo no Hero, ou após conhecer melhor a mentoria e a orientadora.

### 🧩 Principais seções

- **Hero** com CTA e formulário direto
- **Tópicos da mentoria** com destaques visuais
- **VSL (Vídeo de Apresentação)** com player embutido
- **Carrossel de depoimentos** (8 mentorados)
- **Bio da Mentora** com botão para inscrição via modal
- **Formulário de captação** com foco em clareza e consistência visual

---

## 🛠️ Tecnologias

- [Astro](https://astro.build) – estrutura rápida e otimizada para conteúdo estático
- [Tailwind CSS](https://tailwindcss.com) – utilitários para estilização moderna
- [shadcn/ui](https://ui.shadcn.com) – componentes acessíveis e personalizáveis com Radix UI
- [Framer Motion](https://www.framer.com/motion/) – animações suaves de entrada (MotionSection)
- [Radix Dialog](https://www.radix-ui.com/primitives/docs/components/dialog) – para modal de inscrição
- [Lucide Icons](https://lucide.dev) (opcional) – ícones elegantes e acessíveis

---

## 💅 Estilo visual

- Fundo com **degradê escuro + roxo** personalizado via classe `.bg-soft-dark`
- Tipografia com destaque para títulos impactantes
- Cores de destaque: `#9333EA` (Roxo) + `#18181b` (Zinc escuro)
- Inputs com estilo coerente e foco com `ring-purple`

---

## ⚙️ Rodando localmente

```bash
# Instalar dependências
npm install

# Iniciar servidor local
npm run dev
```

---

## 📦 Estrutura de pastas

```bash

├── components
│   ├── content_highlights.astro
│   ├── cta_button.tsx
│   ├── floating_cta.tsx
│   ├── hero.astro
│   ├── mentora_bio.astro
│   ├── testimonials_carousel.tsx
│   ├── ui
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── carousel.tsx
│   │   ├── dialog.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   ├── lead_form.tsx
│   │   ├── motion_group.tsx
│   │   ├── motion_item.tsx
│   │   ├── motion_section.tsx
│   │   └── video_player.tsx
│   └── vls_section.astro
├── data
│   └── testimonials.json
├── layouts
│   └── main.astro
├── lib
│   └── utils.ts
├── pages
│   ├── index.astro
│   └── markdown-page.md
└── styles
    └── global.css

```

---

## 📫 Contato

Projeto criado por [Felipe Ferreira](http://linkedin.com/in/felipefsf) como parte de estudo, posicionamento de portfólio e divulgação de mentoria para desenvolvedores.
