import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import { Link } from 'react-router-dom';
import { Stack, Typography, IconButton, } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SiteLogo from '../../assets/images/logo.svg';
function Footer() {
    return (
        <>
            <footer className='site-footer'>
                <div className='container'>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        sx={{
                            borderBottom: '1px solid #cfcfcf',
                            padding: '0 0 30px 0',
                            margin: {
                                xs: "60px 0 20px 0",
                                md: "60px 0 30px 0",
                            },
                            justifyContent: "space-between",
                            gap: "20px",
                            flexWrap: {
                                xs: "wrap",
                                md: "nowrap"
                            },
                        }}
                    >

                        <Stack
                            sx={{
                                width: {
                                    xs: "100%",
                                    md: "30%",
                                },
                            }}
                        >
                            <div className='site-logo'>
                                <Link to="/">
                                    <img src={SiteLogo} alt="Site Logo" />
                                </Link>
                            </div>
                            <Typography
                            className='textanimation'
                                variant='body1'
                                mt={"20px"}
                                sx={{
                                    color: "#000",
                                    fontSize: "18px",
                                    lineHeight: "150%",
                                    fontWeight: "400"
                                }}
                            >
                                Bringing smart, energy-efficient home electronics designed for your comfort and convenience.
                            </Typography>
                        </Stack>

                        <Stack>
                            <h4 className='footer-links-heading'>Products</h4>
                            <ul className='footer-menu-links'>
                                <li><Link to="/water-heater">Water Heater</Link></li>
                                <li><Link to="/geyser">Geyser</Link></li>

                            </ul>
                        </Stack>

                        <Stack>
                            <h4 className='footer-links-heading'>Company</h4>
                            <ul className='footer-menu-links'>
                                <li><Link to="/store-locator">Store Locator</Link></li>
                                <li><Link to="/about">About Enertia</Link></li>
                                <li><Link to="/contact">Contact</Link></li>

                            </ul>
                        </Stack>

                        <Stack spacing={2} className='footer-social-menu-links'>
                            <h4 className='footer-links-heading'>Products</h4>
                            <Link
                                href="https://www.facebook.com/enertia.limited"
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#000',
                                    gap: 1,
                                }}
                            >
                                <FacebookIcon sx={{ color: '#000' }} />
                                Facebook
                            </Link>

                            <Link
                                href="https://www.instagram.com/enertia.ltd/"
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#000',
                                    gap: 1,
                                }}
                            >
                                <InstagramIcon sx={{ color: '#000' }} />
                                Instagram
                            </Link>

                            <Link
                                href="https://www.linkedin.com/company/enertialtd/"
                                target="_blank"
                                rel="noopener"
                                underline="none"
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    color: '#000',
                                    gap: 1,
                                }}
                            >
                                <LinkedInIcon sx={{ color: '#000' }} />
                                LinkedIn
                            </Link>
                        </Stack>

                    </Stack>

                    <Stack
                        sx={{
                            pb: "20px"
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: "400",
                                fontSize: "14px",
                                lineHeight: "150%"
                            }}
                        >
                            ©2025— All Rights Reserved Enertia Limited
                        </Typography>
                    </Stack>
                </div>
            </footer >
        </>

    )
}

export default Footer;