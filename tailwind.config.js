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
      maxHeight: {
        'planetcard': '40vh',
      },
      maxWidth: {
        'planetcard': '40vh',
      },
      extend: {},
      backgroundColor: theme => ({
        'base': '#c33a5e',
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
});

