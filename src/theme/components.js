import { palette } from './palette';

export const components = {
    MuiCssBaseline: {
        '@global': {
        }
    },
    MuiButton: {
        styleOverrides: {
            contained: {
                boxShadow: 'none',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                '&:hover': {
                    boxShadow: 'none',
                },
            }
        },
    },
    MuiCardActions: {
        styleOverrides: {
            root: {
                display: 'flex',
                alignItems: 'stretch',
                justifyContent: 'space-between'
            }
        }
    },
    MuiCardHeader: {
        styleOverrides: {
            title: {
                fontWeight: 600,
                fontSize: '1.2rem',
                lineHeight: 1.43,
            },
            subheader: {
                fontWeight: 400,
                fontSize: '0.875rem',
                lineHeight: 1.5,
                color: palette.text.secondary,
            },
        }
    },
}