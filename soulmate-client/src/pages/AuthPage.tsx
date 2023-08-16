import {
    Container,
    CssBaseline,
    Stack,
    Box,
    Typography,
    ThemeProvider,
    Button,
} from '@mui/material'
import { Google, Facebook } from '@mui/icons-material'
import { defaultTheme } from '../mui/themes'

import Logo from '../components/Logo'

const AuthPage = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            <Container
                sx={{
                    height: '100svh',
                    paddingTop: '8rem',
                }}
                maxWidth="xs"
            >
                <Stack rowGap={2}>
                    <Box>
                        <Logo />
                        <Typography
                            variant="caption"
                            color={'ThreeDLightShadow'}
                        >
                            Want to start meeting your second half? <br />
                            Before starting, sign in, and reveal who is your
                            soulmate!
                        </Typography>
                    </Box>
                    <Stack marginTop={1} rowGap={'0.5rem'}>
                        <Button
                            href={
                                import.meta.env.VITE_SERVER_URI + '/auth/google'
                            }
                            sx={{ fontSize: '1rem' }}
                            variant="outlined"
                            startIcon={<Google />}
                            color={'primary'}
                            aria-label="sign in with your google account"
                        >
                            Sign in with Google
                        </Button>
                        <Button
                            sx={{ fontSize: '1rem' }}
                            variant="outlined"
                            startIcon={<Facebook />}
                            color={'primary'}
                            aria-label="sign in with your google account"
                        >
                            Sign in with Facebook
                        </Button>
                    </Stack>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Typography variant="caption" color="ThreeDLightShadow">
                            All rights reserved to Soulmate &copy; 2023
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </ThemeProvider>
    )
}

export default AuthPage
