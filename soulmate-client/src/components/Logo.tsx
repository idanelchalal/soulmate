import { Box } from '@mui/material'
const Logo = ({ color = '#00bcd4' }: { color?: string }) => {
    return (
        <Box
            display={'flex'}
            flexDirection={'row'}
            gap={2}
            justifyContent={'center'}
            alignItems={'center'}
            textAlign={'center'}
            style={{
                userSelect: 'none',
                MozUserSelect: 'none',
                WebkitUserSelect: 'none',
            }}
        >
            <Box width={36} height={36}>
                <img
                    src="/cupid.svg"
                    style={{ width: '100%', height: '100%' }}
                    alt="logo"
                />
            </Box>
            <h1
                style={{
                    margin: 0,
                    fontSize: '2rem',
                    letterSpacing: '0.3rem',
                    fontFamily: 'dancing script',
                    color: color,
                }}
            >
                Soulmate
            </h1>
        </Box>
    )
}

export default Logo
