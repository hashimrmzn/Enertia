import React, { useState } from 'react'
import DownloadIcon from '@mui/icons-material/Download';
import ToggleButton from '@mui/material/ToggleButton';
import { Stack, Typography } from '@mui/material';
import product1 from '../../assets/images/product.webp';
import product2 from '../../assets/images/product2.webp';
import product3 from '../../assets/images/product3.webp';
import product4 from '../../assets/images/product4.webp';
import product5 from '../../assets/images/product5.webp';

const productColor = {
    black: {
        image: product1,
        color: "#000000"
    },
    grey: {
        image: product2,
        color: "#808080"
    },
    brown: {
        image: product3,
        color: "#8B4513"
    },
    lightbrown: {
        image: product4,
        color: "#A0522D"
    },
    darkbrown: {
        image: product5,
        color: "#5C4033"
    }
};


function DispanserProduct() {
    const [color, setcolor] = useState(Object.keys(productColor)[0]);
    const [price, setprice] = useState(339999);

    return (
        <>
            <Stack
                sx={{
                    py: {
                        xs: 6,
                        sm: 12
                    }
                }}
            >

                <Stack
                    direction={{ xs: 'column', sm: 'column', md: 'row' }}
                    alignItems="center"
                    justifyContent="space-between"
                >
                    <div className='product-img'>
                        <img
                            src={productColor[color].image}
                            alt={`${color} product`}
                            style={{ width: '50%', height: '100vh' }}
                        />

                    </div>
                    <div className='product-detail'>
                        <div className='product-detail-top-content'>
                            <Typography variant='h3' mb={3}
                                sx={
                                    {
                                        fontWeight: 400,
                                        textTransform: 'uppercase',
                                        lineHeight: '130%',
                                        fontSize: {
                                            xs: '1.5rem',
                                            sm: '2.5rem',
                                        },
                                        mt: {
                                            sm: "30px",
                                            xs: "20px"
                                        }
                                    }
                                }
                            >
                                ALL-IN-ONE WATER
                                DISPENSER
                            </Typography>
                            <Typography variant="body1"
                                sx={
                                    {
                                        fontWeight: 400,
                                        lineHeight: '150%',
                                        fontSize: {
                                            xs: '1rem',
                                            sm: '1.3rem',
                                        }
                                    }

                                }
                            >
                                Enertia’s All-in-One Water Dispenser offers hot, cold, ambient, and sparkling water instantly — all with a sleek design, advanced filtration, and energy efficiency
                            </Typography>
                        </div>
                        <Stack
                            sx={
                                {
                                    mt: {
                                        xs: 4,
                                        sm: 5.5
                                    }
                                }
                            }
                            direction="row"
                            alignItems="center"
                            gap={2}
                            className='all-color-btn'>
                            <Typography variant="subtitle1"
                                style={{ color: 'black', opacity: 0.6 }}
                                sx={{
                                    fontSize: {
                                        xs: "1.1rem",
                                        sm: "1.2rem",
                                    }
                                }}
                            >
                                Color:</Typography>
                            <Stack direction="row" spacing={2}

                            >
                                {Object.entries(productColor).map(([key, value]) => (
                                    <ToggleButton
                                        key={key}
                                        value={key}
                                        selected={color === key}
                                        onClick={() => setcolor(key)}
                                        disableRipple
                                        disableFocusRipple
                                        disableTouchRipple
                                        sx={{
                                            width: {
                                                xs: 30,
                                                sm: 50,
                                            },
                                            height: {
                                                xs: 30,
                                                sm: 50,
                                            },
                                            ml: {
                                                xs: '5px',
                                                sm: '10px',
                                            },
                                            backgroundColor: value.color,
                                            borderRadius: '50%',
                                            minWidth: 0,
                                            border:"none",
                                            padding: 0,
                                            '&:hover': {
                                                backgroundColor: value.color,
                                            },
                                            '&.Mui-selected': {
                                                outline: '4px auto -webkit-focus-ring-color', // ✅ correct
                                                border: 'none',
                                                backgroundColor: value.color,
                                            },
                                            '&.Mui-selected:hover': {
                                                backgroundColor: value.color,
                                            },
                                        }}
                                    />

                                ))}
                            </Stack>

                        </Stack>

                        <Stack
                            sx={{
                                mt: {
                                    xs: 3,
                                    sm: 4,
                                },
                                alignItems: {
                                    xs: 'flex-start',
                                    sm: 'center',
                                },
                            }}

                            direction={{
                                xs: 'column',
                                sm: 'row',
                            }}
                            alignItems="center"
                            gap={2}
                        >

                            <Typography variant="subtitle1"
                                style={{ color: 'black', opacity: 0.6 }}
                                sx={{
                                    fontSize: {
                                        xs: "1rem",
                                        sm: "1.2rem",
                                    }
                                }}
                            >
                                Variant:</Typography>

                            <div className='all-spec-with-price'>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    sx={{
                                        gap: {
                                            xs: 1,
                                            sm: 2,
                                            md: 3,
                                        },
                                    }}
                                >

                                    <ToggleButton
                                        disableRipple
                                        disableFocusRipple
                                        disableTouchRipple
                                        sx={{
                                            border: '1px solid #000',
                                            borderRadius: '20px',
                                            backgroundColor: 'transparent',
                                            '&.Mui-selected': {
                                                backgroundColor: 'blue',
                                                color: 'white',
                                            },
                                            '&:hover': {
                                                border: '1px solid #000',
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                        onClick={() => setprice(339999)}
                                    >
                                        Sparkling + Filtration
                                    </ToggleButton>



                                    <ToggleButton
                                        disableRipple
                                        disableFocusRipple
                                        disableTouchRipple
                                        variant="outlined"
                                        sx={{
                                            border: '1px solid #000',
                                            borderRadius: '20px',
                                            backgroundColor: 'transparent',
                                            '&.Mui-selected': {
                                                backgroundColor: 'blue',
                                                color: 'white',

                                            },
                                            '&:hover': {
                                                border: '1px solid #000',
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                        onClick={() => setprice(279000)}

                                    >
                                        Only Sparkling
                                    </ToggleButton>



                                    <ToggleButton
                                        disableRipple
                                        disableFocusRipple
                                        disableTouchRipple
                                        variant="outlined"
                                        sx={{
                                            border: '1px solid #000',
                                            borderRadius: '20px',
                                            backgroundColor: 'transparent',
                                            '&.Mui-selected': {
                                                backgroundColor: 'blue',
                                                color: 'white',

                                            },
                                            '&:hover': {
                                                border: '1px solid #000',
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                        onClick={() => setprice(267000)}

                                    >
                                        Only Filtration
                                    </ToggleButton>
                                </Stack>


                            </div>


                        </Stack>
                        <Stack
                            sx={{
                                mt: {
                                    xs: 3,
                                    sm: 4
                                }
                            }}
                            direction="row"
                            alignItems="center"
                            gap={2}
                        >
                            <Typography variant="h6"
                                style={{ color: 'black' }}
                                sx={{
                                    fontSize: {
                                        xs: "1.2rem",
                                        sm: "1.3rem",
                                    }
                                }}
                            >
                                PKR:{price.toLocaleString()}</Typography>
                        </Stack>


                        <Stack
                            sx={{
                                mt: {
                                    xs: 3,
                                    sm: 4
                                }
                            }}
                            direction="row"
                            alignItems="center"
                            gap={2}
                        >
                            <ToggleButton variant='contained'
                                value="large"
                                sx={{
                                    width: 140,
                                    border: '1px solid transparent',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    '&:hover': {
                                        border: '1px solid #000',
                                        backgroundColor: 'transparent',
                                        color: 'black'
                                    },
                                }}
                            >
                                Buy Now
                            </ToggleButton>


                            <ToggleButton
                                variant="contained"
                                value="large"
                                sx={{
                                    width: 180,
                                    border: '1px solid black',
                                    backgroundColor: 'transparent',
                                    color: 'black',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: 1,
                                    '&:hover': {
                                        border: '1px solid #000',
                                        backgroundColor: 'black',
                                        color: 'white',
                                    },
                                }}
                            >
                                <DownloadIcon sx={{ fontSize: 20 }} />
                                Specification
                            </ToggleButton>

                        </Stack>
                    </div>
                </Stack >
            </Stack >
        </>
    )
}

export default DispanserProduct

