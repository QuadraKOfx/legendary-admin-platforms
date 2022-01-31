import {Grid, Typography} from "@mui/material";
import React from "react";

export const TotalCustomers = () => (
    <div className="card-wrapper">
        <div className="card-content">
            <Grid
                container
                spacing={3}
                sx={{justifyContent: "space-between"}}>
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline">
                        TOTAL CUSTOMERS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4">
                        1,6k
                    </Typography>
                </Grid>
            </Grid>
        </div>
    </div>
);
