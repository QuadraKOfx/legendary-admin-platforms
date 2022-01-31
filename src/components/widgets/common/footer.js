import React from "react";
import {Box, Container, Grid} from "@mui/material";
import {Link} from "react-router-dom";

function Footer() {

    return (
        <footer>
            <Box>
                <Container maxWidth="lg">
                    <Grid container spacing={5}>
                        <Grid item xs={12} sm={4}>
                            <Box sx={{
                                paddingTop: 2
                            }}>Legendary Platforms</Box>
                            <Box>
                                <Link to="/">Services & Pricing</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    );
}

export default Footer;
