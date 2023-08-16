import { Home } from '@mui/icons-material'
import {
    Box,
    Container,
    CssBaseline,
    IconButton,
    Typography,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Error404Page = () => {
    const navigate = useNavigate()
    return (
        <Container maxWidth="xs">
            <CssBaseline />
            <Box
                height={'100svh'}
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Typography variant="h3" color="initial">
                    Page not found
                </Typography>

                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    gap={1}
                >
                    <label htmlFor="home">
                        <Typography
                            variant="h6"
                            color="initial"
                            sx={{
                                '&:hover': {
                                    cursor: 'pointer',
                                },
                            }}
                        >
                            Go back home
                        </Typography>
                    </label>
                    <IconButton
                        id="home"
                        aria-label="back-home"
                        onClick={() => navigate('/')}
                    >
                        <Home />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}

export default Error404Page
