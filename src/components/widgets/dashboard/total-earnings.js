import {Avatar, Box, Card, CardContent, Grid, Typography} from "@mui/material";
import MoneyIcon from "@mui/icons-material/Money";
import React from "react";

export const DayEarnings = (props) => (
    <Card
        sx={{ height: "100%" }}
        {...props}
    >
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: "space-between" }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                    >
                        DAY EARNINGS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        $24k
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);
