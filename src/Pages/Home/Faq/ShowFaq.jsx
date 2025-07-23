import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography } from '@mui/material';
import Collapse from '@mui/material/Collapse';
function ShowFaq({ question, answer, isOpen, onToggle }) {
    return (
        <>
            <Box
                sx={{
                    padding: '14px 20px',
                    background: "white",
                    border: "1px solid #E3E3E3",
                    mb: '10px'
                }}
            >
                <Typography
                    variant="h5"
                    onClick={onToggle}
                    className="faq-question"
                    
                >
                    <span className="faq-question-text">{question}</span>
                    <ExpandMoreIcon
                        className="faq-icon"
                        sx={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                </Typography>

                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                    <Typography variant='body1'
                    sx={{
                        lineHeight:"150%",
                        mt: '20px',
                    }}
                    >{answer}</Typography>
                </Collapse>
            </Box>
        </>
    )
}

export default ShowFaq