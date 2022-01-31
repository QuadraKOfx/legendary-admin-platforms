import { Avatar, Box, Card, CardContent, Grid, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import PeopleIcon from "@mui/icons-material/PeopleOutlined";
import React from "react";

export const TotalCustomers = (props) => (
    <Card {...props}>
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
                        TOTAL CUSTOMERS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                    >
                        1,6k
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
    </Card>
);
