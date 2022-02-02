import React from "react";
import "../../material/assets/styles/home.css";
import { Box, Container, Grid } from "@mui/material";
import {DayEarnings} from "../widgets/dashboard/total-earnings";
import {TotalCustomers} from "../widgets/dashboard/total-customers";
import {useDispatch} from "react-redux";
import {setShowWelcome} from "../../store/middleware/actions/appActions";

function PageHome(props) {
    console.info(props);
    const dispatch = useDispatch();

    return (
        <>
            <Box component="main" sx={{flexGrow: 1}}>
                <Container component="main" className="c-wrapper">
                    <Grid container spacing={1}>
                        <Grid item lg={3} sm={6} xl={3} xs={12}>
                            <DayEarnings />
                        </Grid>
                        <Grid item xl={3} lg={3} sm={6} xs={12}>
                            <TotalCustomers />
                        </Grid>
                        {/*<Grid item lg={8} md={12} xl={9} xs={12}>*/}
                        {/*    <LatestCustomers />*/}
                        {/*</Grid>*/}
                        {/*<Grid item lg={4} md={6} xl={3} xs={12}>*/}
                        {/*    <BestBrands sx={{height: "100%"}}/>*/}
                        {/*</Grid>*/}
                    </Grid>
                </Container>
            </Box>

            <div className="flex mt-2">
                <div className="col-md-6">
                    <div className="card-wrapper mt-2">
                        <div className="card-content">
                            <div className="responsive-table">
                                <table className="s-table">
                                    <thead>
                                    <tr>
                                        <th className="t-header left">UPDATES (refresh)</th>
                                        <th className="left">Cars</th>
                                        <th className="left">Profits</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    <tr className="bg-light-secondary">
                                        <td>Today</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr>
                                        <td>Last Month</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    <tr className="bg-light-secondary">
                                        <td>Last Year</td>
                                        <td>0</td>
                                        <td>0</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PageHome;
