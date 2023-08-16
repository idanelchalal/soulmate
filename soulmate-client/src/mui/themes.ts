import { createTheme } from '@mui/material'
import { cyan, grey } from '@mui/material/colors'

export const defaultTheme = createTheme({
    palette: {
        primary: {
            ...cyan,
        },
        secondary: {
            ...grey,
        },
    },
})
