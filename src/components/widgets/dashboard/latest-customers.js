import {Line} from "react-chartjs-2";
import {Box, Button, Card, CardContent, CardHeader, Divider, useTheme} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const LatestCustomers = (props) => {
    const theme = useTheme();

    const labels =["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"];
    const data = {
        labels: labels,
        datasets: [{
            label: "My First Dataset",
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1
        }]
    };

    const config = {
        type: "line",
        data: data
    }

    return (
        <Card {...props}>
            <CardHeader
                action={("")}
                title="Latest Customers"
            />
            <Divider/>
            <CardContent>
                <Box
                    sx={{
                        height: 400,
                        position: "relative"
                    }}
                >
                    <Line data={data}/>
                </Box>
            </CardContent>
            <Divider/>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    p: 2
                }}
            >
                <Button
                    color="primary"
                    endIcon={<ArrowRightIcon fontSize="small"/>}
                    size="small"
                >
                    Overview
                </Button>
            </Box>
        </Card>
    );
};
