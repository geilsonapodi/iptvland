# Premium IPTV - Site Completo

Um site profissional e responsivo para serviço de streaming IPTV, criado com HTML5, CSS3 e JavaScript puro.

## 📋 Estrutura do Projeto

```
iptv-site/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── script.js       # Interatividade e animações
├── images/
│   ├── iptv-hero.png
│   ├── iptv-channels.png
│   ├── iptv-device.png
│   ├── iptv-security.png
│   └── iptv-support.png
└── README.md           # Este arquivo
```

## 🚀 Como Usar

### Opção 1: Abrir Localmente
1. Extraia o arquivo ZIP
2. Abra `index.html` diretamente no navegador
3. Ou use um servidor local:
   ```bash
   python3 -m http.server 8000
   # Acesse: http://localhost:8000
   ```

### Opção 2: Fazer Upload para Hospedagem
1. Faça upload de todos os arquivos para seu servidor web
2. Acesse o domínio do seu site

## 🎨 Personalizações Comuns

### Alterar Cores
Abra `css/style.css` e modifique as variáveis no topo:

```css
:root {
    --primary-color: #0066ff;      /* Azul principal */
    --secondary-color: #ff0066;    /* Rosa/Magenta */
    --accent-color: #00d4ff;       /* Ciano */
    --dark-bg: #0a0e27;            /* Fundo escuro */
    /* ... outras cores ... */
}
```

### Alterar Preços dos Planos
Abra `index.html` e procure pela seção "Plans Section":

```html
<span class="amount">29</span>  <!-- Altere o valor aqui -->
<span class="period">/mês</span>
```

### Alterar Textos
Todos os textos estão no `index.html`. Basta procurar e editar:
- Títulos
- Descrições
- Nomes de planos
- Informações de contato

### Substituir Imagens
1. Coloque suas imagens na pasta `images/`
2. Altere os caminhos no `index.html`:
   ```html
   <img src="images/sua-imagem.png" alt="Descrição">
   ```

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:
- Desktops (1200px+)
- Tablets (768px - 1199px)
- Celulares (até 767px)

## ✨ Recursos Inclusos

- ✅ Menu de navegação responsivo
- ✅ Hero section com animações
- ✅ Catálogo de canais
- ✅ 3 planos de assinatura
- ✅ Seção de recursos
- ✅ Seção de suporte
- ✅ Formulário de contato
- ✅ Footer completo
- ✅ Animações suaves
- ✅ Efeitos hover interativos
- ✅ Mobile menu hamburger
- ✅ Scroll suave

## 🔧 Funcionalidades JavaScript

- Menu mobile responsivo
- Scroll suave para seções
- Animações ao entrar na tela
- Efeito ripple nos botões
- Notificações de ação
- Lazy loading de imagens

## 📧 Integração com Backend

Para conectar com um backend real, você pode:

1. **Formulário de Contato**: Adicione um endpoint POST em `js/script.js`
2. **Assinatura de Planos**: Integre com Stripe ou PayPal
3. **Autenticação**: Adicione login/registro

## 🌐 Hospedagem Recomendada

- Netlify (gratuito)
- Vercel (gratuito)
- GitHub Pages (gratuito)
- Hostinger (pago)
- Bluehost (pago)

## 📄 Licença

Código livre para uso pessoal e comercial.

## 🎯 Próximos Passos

1. Customize as cores e textos
2. Adicione seu logo
3. Substitua as imagens
4. Configure os preços
5. Integre com um backend
6. Faça upload para hospedagem

---

**Criado com ❤️ por Manus AI**
