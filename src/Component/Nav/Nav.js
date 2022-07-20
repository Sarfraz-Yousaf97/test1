import { AppBar, IconButton, Input, InputAdornment, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import logo from '../Static/logo_dmvi.gif'
import './Nav.css'
import { Link, useNavigate } from 'react-router-dom'
import Image from '../Static/dmvi.png'
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Visibility from "@material-ui/icons/Visibility";
import HttpsIcon from '@mui/icons-material/Https';
import PersonIcon from '@mui/icons-material/Person';

const useStyle = makeStyles({
    container: {
        position: 'relative',
        height: '100vh',
        textAlign: 'center',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: "cover",
        margin: "-10px -10px 0px -10px;"
    },
    appbar: {
        backgroundColor: 'white',
        color: "#005297",
        marginTop: 750,
        position: 'fixed'
    },
    nav: {
        display: 'flex',
    },
    listItem: {
        listStyle: 'none',
    },
    Item: {
        marginLeft: 10,
        marginTop: 5,
        fontWeight: "bolder",
        color: "#005297",
    },
    Item1: {
        marginLeft: 100,
        marginTop: 5,
        fontWeight: "bolder",
        color: "#005297",
    },
    Item2: {
        marginLeft: 250,
        marginTop: 5,
        fontWeight: "bolder",
        color: "#005297",
    },
    listItemRight: {
        listStyle: 'none',
        marginLeft: 900,
        fontWeight: 'bold'
    },
    form: {
        position: 'absolute',
        marginTop: 140,
        backgroundColor: '#fff',
        backgroundImage: 'linear-gradient(to top, rgba(240,240,240), rgba(255,255,255))',
        marginLeft: 70,
        width: 380,
        height: 500,
        borderRadius: 10,
        paddingBottom: 30,
        boxShadow: '0 4px 8px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);'
    },
    logo: {
        width: 180,
        height: 75,
        marginTop: 20,
        marginBottom: 10,
    },
    tracker: {
        backgroundColor: '#005297',
        color: ' rgb(250, 250, 250)',
        marginBottom: 40,
        padding: 8,
        fontSize: 18
    },
    textfield: {
        padding: 10,
        borderRadius: 50,
        marginTop: 10,
        width: '70%',
    },
    inputField: {
        border: '2px solid black',
        marginBottom: 20,
        borderRadius: "25px",
        width: "320px",
        padding: "5px",
        color: "#005297",
        backgroundColor: 'white',
        "&&&:before": {
            borderBottom: "none",
        },
        "&&:after": {
            borderBottom: "none",
        }
    },
    activeInputField: {
        border: '2px solid #005297',
        marginBottom: 20,
        borderRadius: "25px",
        width: "320px",
        padding: "5px",
        color: "#005297",
        backgroundColor: 'white',
        "&&&:before": {
            borderBottom: "none",
        },
        "&&:after": {
            borderBottom: "none",
        },
    },
    logo1: {
        color: 'grey',
        backgroundColor: 'white',
        border: '1px solid grey',
        borderRadius: '50%',
        padding: '2px'
    }
})
export default function Nav() {
    // States
    const navigate = useNavigate();
    const [active, setActive] = useState(false)
    const classes = useStyle();

    //Functions    
    const [values, setValues] = React.useState({
        password: "",
        showPassword: false,
    });
    const showSidebar = () => setActive(!active)

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handlePasswordChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    return (
        <>
            <div className={classes.container}>
                <div className={classes.main}>
                    <form className={classes.form} >
                        <img src={logo} alt="" className={classes.logo} /> <br />
                        <Typography variant='h6' className={classes.tracker}> Vending Tracker</Typography>
                        <div className="input-icons">
                            <Typography> <label className="label">User</label> </Typography>
                            <Input className={active ? classes.activeInputField : classes.inputField}
                                placeholder="Enter Your Email / Phone"
                                type='text'
                                onChange={showSidebar}
                                InputProps={{ disableUnderline: true }}
                                startAdornment={
                                    <InputAdornment position='start'
                                    > <PersonIcon className={classes.logo1} /></InputAdornment>
                                }
                            />
                            <Typography> <label className="label">Passwrod</label> </Typography>
                            <Input className={active ? classes.activeInputField : classes.inputField}
                                placeholder="Enter Your Password"
                                type={values.showPassword ? "text" : "password"}
                                onChange={handlePasswordChange("password")}
                                value={values.password}
                                InputProps={{ disableUnderline: true }}
                                startAdornment={
                                    <InputAdornment position='start'
                                    > <HttpsIcon className={classes.logo1} /></InputAdornment>
                                }
                                endAdornment={
                                    <InputAdornment position="end"  >
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <a href="">Forgot Password?</a>
                        </div>
                        <button variant="contained" className='btn'
                            onClick={() => (navigate('/dashboard'))}>
                            Sign In
                        </button>
                    </form>
                </div>
                <AppBar className={classes.appbar}>
                    <div className='' >
                        <ul className={classes.nav}>
                            <li className={classes.listItem}><Link className={classes.Item} to="/about">About</Link></li>
                            <li className={classes.listItem}> <Link className={classes.Item1} to="/terms">Terms of Serviece</Link></li>
                            <li className={classes.listItem}><Link className={classes.Item2} to="/privacy">Privacy Policy</Link></li>
                            <li className={classes.listItemRight}> @ 2022 Digital media Vending
                                <br /> International LLC</li>
                        </ul>
                    </div>
                </AppBar>
            </div>
        </>
    )
}