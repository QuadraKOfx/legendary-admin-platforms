import {Doughnut} from "react-chartjs-2";
import {Box, Card, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import React from "react";

export const BestBrands = (props) => {

    // todo move to mock data
    const data = {
        datasets: [
            {
                data: [63, 15, 22],
                backgroundColor: ["#3F51B5", "#e53935", "#FB8C00"],
                borderWidth: 8,
                borderColor: "#FFFFFF",
                hoverBorderColor: "#FFFFFF"
            }
        ],
        labels: ["KIA", "Honda", "Toyota"]
    };
    const devices = [
        {
            title: "KIA",
            value: 63,
            color: "#3F51B5"
        },
        {
            title: "Honda",
            value: 15,
            color: "#E53935"
        },
        {
            title: "Toyota",
            value: 23,
            color: "#FB8C00"
        }
    ];

    const config = {
        type: "doughnut",
        data: data
    }

    return (
        <div className="card-wrapper">
            <CardHeader title="Leading brands"/>
            <Divider/>
            <div className="card-content">
                <Box sx={{
                    height: 300,
                    position: "relative"
                }}>
                    <Doughnut {...config}/>
                </Box>
                <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: 3
                }}>

                    {devices.map(({color, title, value}) => (
                        <Box key={title}
                             sx={{
                                 p: 1,
                                 textAlign: "center"
                             }}>
                            <Typography
                                color="textPrimary"
                                variant="body1">
                                {title}
                            </Typography>
                            <Typography
                                style={{color}}
                                variant="h4">
                                {value}%
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </div>
        </div>
    );
};
