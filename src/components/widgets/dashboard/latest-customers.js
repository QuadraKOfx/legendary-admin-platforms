import {Line} from "react-chartjs-2";
import {Box, Button, Card, CardContent, CardHeader, Divider, useTheme} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React from "react";

import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

export const LatestCustomers = (props) => {
    const theme = useTheme();

    const labels =["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const data = {
        labels: labels,
        datasets: [{
            label: "Daily Earnings",
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
        <div className="card-wrapper">
            <CardHeader
                action={("")}
                title="Latest Customers"/>
            <Divider/>
            <CardContent>
                <Box sx={{
                        height: 400,
                        position: "relative"
                    }}>
                    <Line {...config}/>
                </Box>
            </CardContent>
        </div>
    );
};
