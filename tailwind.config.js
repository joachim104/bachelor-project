module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: [
        '**/*.html',
        '**/*.ts',
      ]
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        maxHeight: {
          'planetcard': '40vh',
        },
        maxWidth: {
          'planetcard': '40vh',
        },
        width: {
          'tutorial': '400vw',
        },
      },
      backgroundColor: theme => ({
        'base': '#c33a5e',
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
});

