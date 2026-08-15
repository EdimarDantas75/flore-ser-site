# 🌱 Flore-ser

> Site de divulgação do projeto de extensão **"Flore-ser: ocupar os espaços públicos comuns como forma de (r)existência"** — Universidade Federal de Goiás · Chamada Pública FAPEG nº 12/2025.

Uma página institucional (vitrine) que apresenta o projeto, sua fundamentação, ações,
agenda cultural, espaços de atuação, equipe e parceiros — convidando a comunidade de
Goiânia a ocupar e reflorestar os espaços públicos comuns.

## ✨ Identidade visual — "Herbário Comum"

Linguagem de **guia de campo botânico do Cerrado urbano**: crível e institucional (é UFG + FAPEG),
porém calorosa, humana e artística.

- **Paleta:** papel quente (`#F4EDDD`), verdes do Cerrado (`#38512F`), terracota do ipê (`#C0603A`), ocre pequi, casca escura.
- **Tipografia:** [Fraunces](https://fonts.google.com/specimen/Fraunces) (títulos e números editoriais), [Source Serif 4](https://fonts.google.com/specimen/Source+Serif+4) (corpo), [Space Mono](https://fonts.google.com/specimen/Space+Mono) (rótulos/etiquetas de herbário).
- **Motivos:** ilustrações botânicas em SVG line-art, etiquetas de herbário, números editoriais com _count-up_, divisores em onda, cards-cartaz/lambe para a agenda cultural, curvas de nível.

## 🗂️ Estrutura

```
Flore-Ser/
├── index.html      # página única (12 seções)
├── styles.css      # design system completo
├── script.js       # nav, reveal no scroll, count-up, desenho SVG
├── assets/
│   └── img/        # fotos do projeto (a incluir)
└── README.md
```

Todas as ilustrações são **SVG inline autoral** (leves, sem dependências) e as fontes vêm do
Google Fonts. Nenhum build é necessário — é HTML/CSS/JS puro.

## ▶️ Como visualizar

Basta abrir `index.html` no navegador. Para um servidor local (opcional):

```bash
python -m http.server 5000
# acesse http://localhost:5000
```

## ♿ Acessibilidade

- Semântica com landmarks (`header`/`nav`/`main`/`section`/`footer`) e uma única `<h1>`.
- Contraste AA/AAA nos textos; cores de baixo contraste (ocre, magenta) reservadas a elementos não-textuais.
- `prefers-reduced-motion` respeitado — animações degradam para o estado final estático.
- Foco visível, navegação por âncora e _skip link_.

## 🚀 Publicação (Firebase Hosting)

O site é estático e pode ser publicado em qualquer host. Para o Firebase Hosting:

```bash
firebase init hosting   # public: "."
firebase deploy --only hosting
```

## 📋 Pendências / a preencher

- [ ] Fotos reais das ações na galeria (`assets/img/`).
- [ ] Canais de contato reais (Instagram, e-mail) na seção **Participe**.
- [ ] Datas confirmadas dos 4 eventos culturais.
- [ ] Links do formulário de voluntariado / próximo mutirão.

---

**Flore-ser** · Projeto de Extensão · UFG · FAPEG 12/2025 · Ciências Humanas · Goiânia — GO
