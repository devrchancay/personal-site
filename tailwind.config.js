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
        info: 'var(--color-info)',
        'info-hover': 'var(--color-info-hover)',
        success: 'var(--color-success)',
        'success-hover': 'var(--color-success-hover)',
        'success-background': 'var(--color-success-background)',
        warning: 'var(--color-warning)',
        'warning-hover': 'var(--color-warning-hover)',
        'warning-background': 'var(--color-warning-background)',
        danger: 'var(--color-danger)',
        'danger-hover': 'var(--color-danger-hover)',
        'danger-background': 'var(--color-danger-background)',
        background: 'var(--color-background)',
        'background-muted': 'var(--color-background-muted)',
        heading: 'var(--color-heading)',
        'heading-muted': 'var(--color-heading-muted)',
        body: 'var(--color-body)',
        'body-muted': 'var(--color-body-muted)'
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
