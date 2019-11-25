const currentYear = new Date().getFullYear();

module.exports = {
  build: {
    srcPath: './src',
    outputPath: './public'
  },
  site: {
    title: 'Felipe Assis',
    headerTitle: 'Felipe Assis - Full Stack Developer',
    subtitle: 'Desenvolvedor de websites aplicativos',
    year: currentYear,
    mainMenu: [
      { link: '/', label: 'Início' },
      { link: '/meus-trabalhos', label: 'Meus Trabalhos' },
      { link: '/sobre', label: 'Sobre' },
    ],
    socialMenu: [
      { link: 'https://www.facebook.com/devfelipeassis', icon: 'fa-facebook' },
      { link: 'https://www.linkedin.com/in/felipesntsassis/', icon: 'fa-linkedin' },
      { link: 'https://github.com/felipesntsassis', icon: 'fa-github' },
    ]
  }
};
