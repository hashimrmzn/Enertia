import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import images from '../../../utils/images';
import { Typography } from '@mui/material';

function DesignSection() {
    return (
        <Box
        className='noscroll'
            component="section"
            sx={{
                padding: {
                    xs: "40px 0",  
                    sm: "60px 0",
                    md: "80px 0"
                },
            }}
        >
            <Stack
                direction={{
                    xs: 'column',
                    sm: 'column',
                    md: 'row',
                }}
                alignItems="center"
                justifyContent="space-between"
                spacing={4}
            >
              
                <Stack
                data-aos="fade-right"
                    width={{
                        xs: '100%',
                        md: '35%',
                    }}
                >
                    <Typography
                        variant='h2'
                        textTransform="uppercase"
                        lineHeight="130%"
                        fontWeight="600"
                        fontSize={{
                            xs: '18px',
                            sm: '26px',
                            md: '38px',
                        }}
                    >
                        Design Isn’t a Department. It’s a Discipline.
                    </Typography>

                    <Typography
                        mt={3}
                        variant='body1'
                        lineHeight="150%"
                        fontWeight="400"
                        fontSize="16px"
                    >
                        Everything starts with design. From the angle of a curve to the click of a button — if it doesn’t feel right, it isn’t right. We build machines that blend into your life and stand out in every other way.
                    </Typography>
                </Stack>

               
                <Box
                data-aos="fade-left"
                    component="img"
                    src={images['dimage.png']}
                    alt="Design"
                    sx={{
                        width: {
                            xs: '100%',
                            md: '55%',
                        },
                        height: 'auto'
                    }}
                />
            </Stack>
        </Box>
    );
}

export default DesignSection;
