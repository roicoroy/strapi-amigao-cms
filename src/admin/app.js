import Logo from 'assets/logo.svg';

export default {
  config: {
    locales: ['en', 'pt-BR'],
    translations: {
      en: {
        'Auth.form.email.placeholder': 'roicoroy@mercado.com',
        'Auth.form.welcome.subtitle': 'Welcome to the jungle',
        'Auth.form.welcome.title':'Mercado Amigão!',
        'global.documentation':'Example documentation text',
        'app.components.BlockLink.documentation.content':'Discover our products',
        'app.components.HomePage.welcome.again': 'Welcome 👋'
      },
      'pt-BR': {
        'Auth.form.email.placeholder': 'roicoroy@mercado.com',
        'Auth.form.welcome.subtitle': 'Bem-vindo a selva de pedras',
        'Auth.form.welcome.title':'Mercado Amigão!',
        'global.documentation':'Exemplo documentação',
        'app.components.BlockLink.documentation.content':'Descubra nossos produtos',
        'app.components.HomePage.welcome.again': 'Bem-vindo 👋'
      },
    },
    auth: {
      logo: Logo,
    },
    theme: {
      colors: {
        primary100: '#f6ecfc',
        primary200: '#e0c1f4',
        primary500: '#ac73e6',
        primary600: '#9736e8',
        primary700: '#8312d1',
        danger700: '#b72b1a'
      },
    },
    head: {
      favicon:
        Logo,
      title: 'Strapi test',
    },
    menu: {
      logo: Logo,
    },
    tutorials: false,
    notifications: { release: false },
  },
  bootstrap() { },
};
