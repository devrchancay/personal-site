module.exports = {
  corePlugins: {
    translate: true
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    fill: ['responsive', 'hover', 'focus']
  },
  theme: {
    fill: () => ({
      secondary: 'var(--color-secondary)'
    }),
    extend: {
      colors: {
        muted: 'var(--color-muted)',
        'muted-hover': 'var(--color-muted-hover)',
        primary: 'var(--color-primary)',
        'primary-hover': 'var(--color-primary-hover)',
        secondary: 'var(--color-secondary)',
        'secondary-hover': 'var(--color-secondary-hover)',
        background: 'var(--color-background)',
        'background-muted': 'var(--color-background-muted)',
        'background-secondary': 'var(--color-background-secondary)'
      }
    },
    container: {
      center: true
    },
    fontFamily: {
      display: 'Poppins',
      body: 'Sintony',
      poppins: 'Poppins',
      sintony: 'Sintony'
    }
  }
};
