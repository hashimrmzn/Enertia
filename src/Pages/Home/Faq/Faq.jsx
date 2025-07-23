import { Stack, Typography, Box } from '@mui/material';
import ShowFaq from './ShowFaq';
import ToggleButton from '@mui/material/ToggleButton';
import { faqs } from './Api'; // Make sure you're importing like this
import { useState } from 'react';

function Faq() {
    const data = faqs;
    const [cid, setcid] = useState(1);

   const handleToggle = (clickedId) => {
    setcid((currentId) =>
        currentId === clickedId ? null : clickedId
    );
};


    return (
        <section className="faq-sec">
           
                <Stack maxWidth={'800px'} margin={'0 auto'}>
                    <Typography
                        variant="h3"
                        sx={{
                            textAlign: 'center',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            lineHeight: '130%',
                            fontSize:'2rem'
                        }}
                    >
                        Your Questions, Answered.
                    </Typography>

                    <Box sx={{ mt: '40px' }}>
                        {data.map((item) => (
                            <ShowFaq
                                key={item.id}
                                isOpen={cid === item.id}
                                onToggle={() => handleToggle(item.id)}
                                {...item} />
                        ))}
                    </Box>

                    <ToggleButton variant='contained'
                                value="large"
                                sx={{
                                    m:"40px auto 0 auto",
                                    width: '200px',
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
                                View All Question
                            </ToggleButton>
                </Stack>
           
        </section>
    );
}

export default Faq;
