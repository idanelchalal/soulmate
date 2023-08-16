import { RoomPreferences, Settings, Swipe } from '@mui/icons-material'
import { Box, Button, Container, CssBaseline, Stack } from '@mui/material'

import Logo from '../components/Logo'

import { ThemeProvider } from '@emotion/react'
import { defaultTheme } from '../mui/themes'

const HomePage = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Container maxWidth="sm">
                <CssBaseline />
                <Stack
                    gap={4}
                    display="flex"
                    alignItems={'center'}
                    justifyContent={'center'}
                    height={'100vh'}
                >
                    <Logo />
                    <Box>
                        <Button
                            fullWidth={true}
                            sx={{ fontSize: '1rem' }}
                            startIcon={<Swipe />}
                        >
                            Start swiping
                        </Button>
                        <Button
                            fullWidth={true}
                            sx={{ fontSize: '1rem' }}
                            startIcon={<Settings />}
                        >
                            Settings
                        </Button>
                        <Button
                            fullWidth={true}
                            sx={{ fontSize: '1rem' }}
                            startIcon={<RoomPreferences />}
                        >
                            Preferences
                        </Button>
                    </Box>
                </Stack>
            </Container>
        </ThemeProvider>
    )
}

export default HomePage
