import React from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import images from '../../../utils/images';
import { Typography } from '@mui/material';
function Endure() {
    return (
        <>
            <section className='bg-sec-home about-endure-sec'
                style={{
                    backgroundImage: `url(${images['endurebg.png']})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                <Stack
                    sx={{
                        backgroundColor: "#000",
                        padding: "40px",
                        width: {
                            xs: "80%",
                            sm: "400px",
                            md: "450px"
                        },
                        position: "absolute",
                        margin: {
                            xs: "-50px 0 0 0",
                            sm: "-50px 0 0 0",
                            md: "-50px 0 0 0"
                        }
                    }}
                >
                    <Typography
                   
                        variant='h2'
                        textTransform="uppercase"
                        lineHeight="130%"
                        textAlign={"start !important"}
                        fontWeight="600"
                        fontSize={{
                            xs: '18px',
                            sm: '26px',
                            md: '38px',
                        }}
                    >
                        Crafted to Endure
                    </Typography>

                    <Typography
                        mt={3}
                        variant='body1'
                        lineHeight="150%"
                        fontWeight="400"
                        fontSize="16px"
                        color='#fff'
                    >
                        No flimsy plastics. No short-term fixes.

                        We work with materials used in aerospace and defense — because your home deserves more.
                        Every product is tested, refined, and then tested again.
                    </Typography>
                </Stack>
            </section>
        </>
    )
}

export default Endure