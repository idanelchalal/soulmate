import { useContext } from 'react'

import { Logout } from '@mui/icons-material'
import { Button } from '@mui/material'
import { ProtectedContext } from '../layouts/ProtectedRoute'

const DashboardPage = () => {
    const { logOut } = useContext(ProtectedContext)

    return (
        <div>
            <Button
                sx={{ fontSize: '1rem' }}
                variant="outlined"
                startIcon={<Logout />}
                color={'primary'}
                aria-label="Logout"
                onClick={logOut}
            >
                Logout
            </Button>
        </div>
    )
}

export default DashboardPage
