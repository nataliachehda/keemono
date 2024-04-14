import "./Footer.css";
import { Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <footer className="footerIndex py-3">
            <Container className="p-4" component="div">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" component="h5" className="text-uppercase">Contact</Typography>
                        <Typography variant="body1">
                            You can contact us by phone at +1 234 567 8901 or by email at <Link href="mailto:info@keemono.com" color="inherit" underline="none">info@keemono.com</Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" component="h5" className="text-uppercase">Links</Typography>
                        <ul className="list-unstyled mb-0">
                            <li>
                                <Link href="/" color="inherit" underline="none">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" color="inherit" underline="none">About Us</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Typography variant="h5" component="h5" className="text-uppercase mb-0">Social Media</Typography>
                        <ul className="social-icons list-unstyled">
                            <li>
                                <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
                                    <FacebookIcon />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton href="https://www.twitter.com" target="_blank" color="inherit">
                                    <TwitterIcon />
                                </IconButton>
                            </li>
                            <li>
                                <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
                                    <InstagramIcon />
                                </IconButton>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
            <Typography variant="body2" align="center" className="mt-3" color="textSecondary">
                © 2024 Keemono - Natalia Chehda
            </Typography>
        </footer>
    );
};

export default Footer;
