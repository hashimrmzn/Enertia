import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import { Stack, Typography } from '@mui/material';
import images from '../../utils/images';
function HyderationBg() {
    return (
        <>
            <section className='hyderation-class flex-row align-cent'
                style={{
                    backgroundImage: `url(${images['hydrbg.webp']})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                }}>

                <Stack
                    sx={
                        {
                            padding: {
                                xs: "0 20px",
                                md: "0 60px",
                            },
                        }
                    }
                >
                    <Typography
                        variant='h2'
                        sx={{
                            color: "#fff",
                            fontSize: {
                                xs: "1.5rem",
                                md: "2.5rem",
                            },
                            fontWeight: "600",
                            textTransform: "uppercase",
                            lineHeight: "130%",
                            width: {
                                xs: "100%",
                                md: "60%",
                            }
                        }}
                    >
                        Elevate Your Hydration. Upgrade to ENERTIA Today.
                    </Typography>

                    <Typography
                        variant='body1'
                        sx={{
                            mt: "30px",
                            color: "#fff",
                            fontSize: "18px",
                            fontWeight: "400",
                            lineHeight: "100%",
                            width: {
                                xs: "100%",
                                md: "60%",
                            }
                        }}
                    >
                        Hydration has never been this advanced. Experience the future of water dispensing now.
                    </Typography>

                    <Stack
                        direction={{
                            xs: "column",
                            md: "row",
                        }}
                        gap={"30px"}
                        mt={"40px"}
                    >
                        <ToggleButton
                            sx={{
                                padding: "15px 30px",
                                backgroundColor: "#fff",
                                color: "#000",
                                fontSize: "16px",
                                lineHeight: "140%",
                                fontWeight: "400",
                                border: "1px solid transparent",
                                '&:hover': {
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    borderColor: "#fff"
                                }
                            }}
                        >
                            Buy Now
                        </ToggleButton>

                        <ToggleButton
                            sx={{
                                padding: "15px 30px",
                                backgroundColor: "transparent",
                                color: "#fff",
                                fontSize: "16px",
                                lineHeight: "140%",
                                fontWeight: "400",
                                border: "1px solid #fff",
                                '&:hover': {
                                    backgroundColor: "#fff",
                                    color: "#000",
                                    borderColor: "#fff"
                                }
                            }}
                        >
                            Locate Our Stores
                        </ToggleButton>
                    </Stack>
                </Stack>
            </section>
        </>
    )
}

export default HyderationBg