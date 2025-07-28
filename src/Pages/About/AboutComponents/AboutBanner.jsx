import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import images from '../../../utils/images';
import { Typography } from '@mui/material';
function AboutBanner() {
    return (
        <>
            <Box component="section"
                sx={{
                    position: "relative",
                    minHeight: {
                        xs: '100vh',
                        sm: '60vh',
                        md: '100vh',
                    },
                    '@media (min-width:768px) and (max-width:1024px)': {
                        minHeight: '60vh !important',
                    },
                }}
            >
                <Stack
                >
                    <Stack direction="row"
                        sx={{
                            display: {
                                xs: 'none',
                                sm: 'flex',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={images['about1.png']}
                            alt="About Banner Image"
                            sx={{
                                width: '50%',
                                height: {
                                    xs: '100vh',
                                    sm: '60vh',
                                    md: '100vh',
                                },
                                '@media (min-width:768px) and (max-width:1024px)': {
                                    height: '60vh !important',
                                }
                            }}
                        />
                        <Box
                            component="img"
                            src={images['about2.png']}
                            alt="About Banner Image"
                            sx={{
                                width: '50%',
                                height: {
                                    xs: '100vh',
                                    sm: '60vh',
                                    md: '100vh',
                                },
                                '@media (min-width:768px) and (max-width:1024px)': {
                                    height: '60vh',
                                }
                            }}
                        />
                    </Stack>

                    <Stack className='container'
                        sx={{
                            position: "absolute",
                            padding: "20px 60px",
                            top: {
                                xs: '40%',
                                sm: '30%',
                                md: '60%',
                            },
                            '@media (min-width:768px) and (max-width:1024px)': {
                                top: '60%'
                            }
                        }}
                    >
                        <Typography variant='h5'
                            color='#fff'
                            fontSize="22px"
                            lineHeight="150%"
                            fontWeight="400"
                        >
                            About us
                        </Typography>
                        <Typography
                        className='textanimation'
                            mt={2}
                            variant='h1'
                            color='#fff'
                            sx={{
                                fontSize: {
                                    xs: '24px',
                                    sm: '36px',
                                    md: '48px',
                                },
                                lineHeight: '130%',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                width: {
                                    xs: '100%',
                                    sm: '60%',

                                },
                                textAlign: "start",
                            }}
                        >
                            Redefining What Home Electronics Should Bes
                        </Typography>

                    </Stack>
                    <Stack
                        sx={{
                            display: {
                                xs: 'flex',
                                sm: 'none',
                            },
                        }}
                    >
                        <Box
                            component="img"
                            src={images['s-about-banner.png']}
                            alt="About Banner Image"
                            sx={{
                                width: '100%',
                                height: "100vh"
                            }}
                        />
                    </Stack>
                </Stack>

            </Box >
        </>
    )
}

export default AboutBanner