import React, {useEffect, useState} from "react";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {loginUserHook} from "../../../middleware/api/auth";
import {useDispatch} from "react-redux";
import {openSideBar} from "../../../middleware/actions/interactions";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {_loginUser, isPending, error} = loginUserHook();

    const theme = createTheme();

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const handleSubmit = (e) => {
        e.preventDefault();
        // todo use registerUserHook to register Users
        console.info(e);
        _loginUser(email, password).then(() => {
            console.info("success");
            if (windowDimensions.width >= 1280) {
                dispatch(openSideBar());
            }
        }).catch((error) => {
            console.info(error);
        })
    }

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    console.info(windowDimensions);

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
                    <Avatar sx={{marginTop: 1, width: `80${"%"}`, height: `80${"%"}`}} src={require("../../../utils/assets/images/logo.png")}/>
                        {/*<LockOutlinedIcon/>*/}
                    {/*<Typography component="h1" variant="h5">*/}
                    {/*    Sign up*/}
                    {/*</Typography>*/}
                    <Box component="form" noValidate onSubmit={handleSubmit} sx={{mt: 5}}>
                        <Grid container spacing={2}>
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
                        {!isPending && <Button
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}>
                            Login
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
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );

}

export default LoginPage;
