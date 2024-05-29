import { createTheme, ThemeProvider, colors } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MuiButton } from './components/MuiButton';
import { MuiTypography } from './components/MuiTypography';
import { MuiTextField } from './components/MuiTextField';
import { MuiSelect } from './components/MuiSelect';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiCheckbox } from './components/MuiCheckbox';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiRating } from './components/MuiRating';
import { MuiAutocomplete } from './components/MuiAutocomplete';
import { MuiCard } from './components/MuiCard';
import { MuiAccordion } from './components/MuiAccordion';
import { MuiImageList } from './components/MuiImageList';
import { MuiLink } from './components/MuiLink';
import { MuiBreadcrumbs } from './components/MuiBreadcrumbs';
import { MuiDrawer } from './components/MuiDrawer';
import { MuiTabs } from './components/MuiTabs';
import { MuiSpeedDial } from './components/MuiSpeedDial';
import { MuiBottomNavigation } from './components/MuiBottomNavigation';
import { MuiAvatar } from './components/MuiAvatar';
import { MuiBadge } from './components/MuiBadge';
import { MuiList } from './components/MuiList';
import { MuiChip } from './components/MuiChip';
import { MuiTooltip } from './components/MuiTooltip';
import { MuiAlert } from './components/MuiAlert';
import { MuiSnackbar } from './components/MuiSnackbar';
import { MuiDialog } from './components/MuiDialog';
import { MuiSkeleton } from './components/MuiSkeleton';
import { MuiProgress } from './components/MuiProgress';
import { MuiLoadingButton } from './components/MuiLoadingButton';
import { MuiTimeline } from './components/MuiTimeline';
import { MuiMasonry } from './components/MuiMasonry';
import { MuiCustomTheme } from './components/MuiCustomTheme';

// Define your custom theme
const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#556cd6', // Custom primary color
    },
    secondary: {
      main: colors.orange[100], // Using colors from @mui/material/colors
    },
    neutral: {
      main: colors.grey[50],
      darker: colors.grey[700],
    },
    error: {
      main: colors.red[300],
    },
    warning: {
      main: colors.amber[500],
    },
    info: {
      main: colors.blue[500],
    },
    success: {
      main: colors.green[700],
    },
    background: {
      default: colors.grey[100],
      paper: colors.grey[200],
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif', // Set the font family here
    fontSize: 20, // Set the default font size
    h1: {
      fontSize: '3rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
    },
  },
  spacing: 8, // Default spacing factor
  breakpoints: {
    values: {
      xs: 0,
      sm: 700,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '1rem',
          margin: '60px',
          borderRadius: '12px', // Set the border radius for buttons
        },
        containedPrimary: {
          backgroundColor: '#3f51b5',
          '&:hover': {
            backgroundColor: '#4051b5',
          },
        },
        containedSecondary: {
          backgroundColor: '#19857b',
          '&:hover': {
            backgroundColor: '#146d63',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          border: '1px solid #ccc', // Example border style
          borderRadius: '10px', // Example border radius
          padding: '8px', // Example padding
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          margin: '20px 10px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '30px 0',
        },
      },
    },
    MuiRadio: { // Correct key for radio buttons
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiRating: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          margin: '10px',
          borderRadius: '10px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiImageList: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiSpeedDial: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          margin: '10px',
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiSnackbar: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          margin: '10px',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider >
        <div className='App'>
          {/* Render components with custom theme */}
          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiButton</h3>
          <MuiButton />
          
          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiTypography</h3>
          <MuiTypography />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiSelect</h3>
          <MuiSelect />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiRadioButton</h3>
          <MuiRadioButton />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiCheckbox</h3>
          <MuiCheckbox />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiSwitch</h3>
          <MuiSwitch />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiRating</h3>
          <MuiRating />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiAutocomplete</h3>
          <MuiAutocomplete />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiCard</h3>
          <MuiCard />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiAccordion</h3>
          <MuiAccordion />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiImageList</h3>
          <MuiImageList />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiLink</h3>
          <MuiLink />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiBreadcrumbs</h3>
          <MuiBreadcrumbs />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiDrawer</h3>
          <MuiDrawer />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiTabs</h3>
          <MuiTabs />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiSpeedDial</h3>
          <MuiSpeedDial />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiBottomNavigation</h3>
          <MuiBottomNavigation />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiAvatar</h3>
          <MuiAvatar />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiBadge</h3>
          <MuiBadge />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiList</h3>
          <MuiList />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiChip</h3>
          <MuiChip />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiTooltip</h3>
          <MuiTooltip />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiAlert</h3>
          <MuiAlert />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiSnackbar</h3>
          <MuiSnackbar />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiDialog</h3>
          <MuiDialog />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiSkeleton</h3>
          <MuiSkeleton />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiProgress</h3>
          <MuiProgress />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiLoadingButton</h3>
          <MuiLoadingButton />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiTimeline</h3>
          <MuiTimeline />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiMasonry</h3>
          <MuiMasonry />

          <h3 style={{ margin: 0, textAlign: 'center' }}>MuiCustomTheme</h3>
          <MuiCustomTheme />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}


export default App;
