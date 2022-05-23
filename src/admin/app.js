import theme from './extensions/theme';
import head from './extensions/head';
import menu from './extensions/menu';
import Logo from 'assets/logo.svg';

export default {
  config: {
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
