import React, {useState} from "react";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {registerUserHook} from "../../../store/middleware/api/auth";
import {Link} from "react-router-dom";
import {Select} from "antd";

const { Option } = Select;

function Copyright(props) {
    return null;
}

function RegisterPage() {
    // const [userName, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastname] = useState("");
    const [industry, setIndustry] = useState("");
    const {_registerUser, isPending} = registerUserHook();
    const theme = createTheme();

    const handleSetIndustry = (value) => {
        setIndustry(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        _registerUser(email, password, {firstName, lastName, industry}).then(() => {
            console.info("Registration Complete!");
        });
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>

                {/* BOX COMPONENT FOR FORM */}
                <Box sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField sx={{
                                    color: "currentColor",
                                    "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "rgb(25, 118, 210);"
                                    }
                                }}
                                           name="firstName"
                                           required
                                           onChange={(e) => setFirstName(e.target.value)}
                                           fullWidth
                                           id="firstName"
                                           label="First Name"/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    onChange={(e) => setLastname(e.target.value)}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"/>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"/>
                            </Grid>
                            <Grid item xs={12}>
                                <Select defaultValue="Select an Industry" style={{ width: 200 }}
                                        onChange={handleSetIndustry}>
                                    <Option value="barber">Barber</Option>
                                    <Option value="mechanic">Mechanic</Option>
                                    <Option value="physio">Physiotherapist</Option>
                                </Select>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"/>
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="Remember me"
                                />
                            </Grid>
                        </Grid>

                        <div>
                            {!isPending && <Button
                                onClick={handleSubmit}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2}}>
                                Signup
                            </Button>}

                            {isPending && <Button
                                onClick={handleSubmit}
                                type="submit"
                                fullWidth
                                disabled
                                variant="contained"
                                sx={{mt: 3, mb: 2}}>
                                loading
                            </Button>}
                        </div>


                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to="/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{mt: 5}}/>
            </Container>
        </ThemeProvider>
    );

}

export default RegisterPage;
