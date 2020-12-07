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

