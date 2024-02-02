import React, { ReactNode } from 'react'
import { Box, Typography, Unstable_Grid2 as Grid } from '@mui/material'

interface AuthLayoutProps {
    children: ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <Box
            component="main"
            sx={{
                display: 'flex',
                flex: '1 1 auto',
            }}
        >
            <Grid container sx={{ flex: '1 1 auto' }}>
                <Grid
                    xs={12}
                    lg={6}
                    sx={{
                        backgroundColor: 'background.paper',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                    }}
                >
                    <Box
                        component="header"
                        sx={{
                            left: 0,
                            p: 3,
                            position: 'fixed',
                            top: 0,
                            width: '100%',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                height: 32,
                                width: 32,
                            }}
                        >
                        </Box>
                    </Box>
                    {children}
                </Grid>
                <Grid
                    xs={12}
                    lg={6}
                    sx={{
                        alignItems: 'center',
                        background:
                            'radial-gradient(50% 50% at 50% 50%, #5d3800 0%, #000000 100%)',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        '& img': {
                            maxWidth: '100%',
                        },
                    }}
                >
                    <Box sx={{ p: 3 }}>
                        <Typography
                            align="center"
                            color="inherit"
                            sx={{
                                fontSize: '28px',
                                lineHeight: '36px',
                                mb: 1,
                            }}
                            variant="h1"
                        >
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
