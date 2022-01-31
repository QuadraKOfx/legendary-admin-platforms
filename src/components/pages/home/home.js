import React from "react";
import "../../../utils/styles/home.css";
import "./home.css";
import { Box, Container, Grid } from "@mui/material";
import {DayEarnings} from "../../widgets/dashboard/total-earnings";
import {TotalCustomers} from "../../widgets/dashboard/total-customers";
import {LatestCustomers} from "../../widgets/dashboard/latest-customers";
import {BestBrands} from "../../widgets/dashboard/best-brands";

function PageHome(props) {
    console.info(props);
    return (
        <>
            <Box component="main" sx={{flexGrow: 1, py: 8}}>

                <Container component="main">
                    <Grid container spacing={1}>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            {/*<Budget />*/}
                            <DayEarnings />
                        </Grid>
                        <Grid item xl={3} lg={3} sm={6} xs={12}>
                            <TotalCustomers />
                        </Grid>
                        <Grid item lg={8} md={12} xl={9} xs={12}>
                            <LatestCustomers />
                        </Grid>
                        <Grid item lg={4} md={6} xl={3} xs={12}>
                            <BestBrands sx={{height: "100%"}}/>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default PageHome;
