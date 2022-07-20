import { Typography } from '@material-ui/core'
import React from 'react'
import MainNav from '../MainNav/Main'
import { Button, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import UserTable from './UserTable'

const useStyle = makeStyles({
    userSection: {
        marginLeft: 240,
        paddingLeft: 20,
        marginTop: 80,
    },
    main: {
        backgroundColor: 'white',
        transition: '2s',
    },
    changeMain: {
        backgroundColor: '#7F7F7F',
        // backgroundColor:'black',
        transition: '2s',
        opacity:0.5,
        position: 'fixed',
        overflow: 'no-scroll'
    },
    text: {
        color: "#757575",
        fontSize: "1.9em",
        marginBottom: 20
    },
    text1: {
        color: "#757575",
        width: 800
    },
    ButtonRow: {
        marginTop: 40,
        marginRight: 50,
        display: 'flex',
        justifyContent: 'space-between'
    },
    search: {
        border: '1px solid grey',
        borderRadius: 5,
        width: 360,
        "&&&:before": {
            borderBottom: "none",
        },
        "&&:after": {
            borderBottom: "none",
        },
    },
    sBtn: {
        backgroundColor: "#005297",
        color: 'white',
        width: 40,
        padding: 0,
        margin: 0,
        border: "3px solid black"
    },
    showForm: {
        marginLeft: 240,
        position: "absolute",
        color: '#909090',
        opacity:1,
        marginTop: -400,
        boxShadow: "2px 2px 2px 2px #888888",
        backgroundColor: 'white',
        height: 380,
        boxSizing: 'border-box',
    },
    formApp: {
        width: 500,
        marginLeft: 30
    },
    hBtn: {
        color: '#005297',
        border: "2px solid #005297",
        backgroundColor: 'white',
        marginRight: 10,
        padding: 10
    },
    formBtn: {
        display: 'flex',
        justifyContent: "end",
        marginRight: 60,
        marginTop: 20
    },
    uBtn: {
        backgroundColor: "#005297",
        color: "white",
        width: 100,
        fontSize: 17,
        fontWeight: 'bold'
    },
})
export default function User() {
    // States
    const [age, setAge] = React.useState('');
    const [show, setShow] = useState(false)
    const [active, setActive] = useState(true)
    const classes = useStyle();
    const navigate = useNavigate();
    
    // Functions
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const showValue = () => {
        setActive(false)
        setShow(true)
    };
    const hideValue = () => {
        setShow(false)
        setActive(true)
    };

    return (
        <div className={active ? classes.main : classes.changeMain}>
            <div>
                <MainNav/>
            </div>
            <div className={classes.userSection}>
                <div className={classes.text}>
                    <Typography>You can add more users based on the user's role, i.e Super Admin, Distributor Admin or Customer Admin User.</Typography>
                </div>
                <div className={classes.text1}>
                    <Typography>Super Admin is a master
                        administrator and has access to all the
                        content and features. Distributor Admin has
                        similar capability as Super Admin except only
                        his Distributor and End customers. Customer
                        Admin has access to corresponding customer's
                        content and features based on customer type
                        (Home/Enterprise).</Typography>
                </div>
                <div className={classes.ButtonRow}>
                    <div>

                        <Button onClick={showValue} style={{ backgroundColor: '#005297', height: 30, textAlign: 'center', padding: "0 12px", color: 'white', marginRight: 20 }}>
                            + ADD</Button>
                        <Button style={{ border: '1px solid #7FA8CB', height: 30, textAlign: 'center', padding: "0 8px", color: '#7FA8CB', marginRight: 20 }}>
                            <EditIcon /> Edit</Button>
                        <Button style={{ border: '1px solid red', height: 30, textAlign: 'center', padding: "0 10px", color: 'red' }}>
                            <DeleteIcon /> Delete</Button>
                    </div>
                    <div>
                        <TextField id="outlined-basic" placeholder='Search' className={classes.search} />
                        <button className={classes.sBtn}
                            onClick={() => (navigate('/user'))}
                        ><SearchIcon /></button>
                    </div>
                </div>
                <div style={{ marginTop: 20, height: 600, width: 950 }}>
                    <UserTable />
                </div>
            </div>
            <div className={classes.showForm}>
                {
                    show ? <div className={classes.showForm}>

                        <Typography style={{ marginLeft: 20, marginTop: 10 }} variant='h5'> Add User</Typography>
                        <Typography style={{ marginLeft: 40, fontSize: 16 }} variant='h6'> Please Fill the details below</Typography>
                        <form onSubmit={() => navigate("/cong")}>
                            <div className={classes.formApp}>
                                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="UserName" />
                                <TextField type='email' required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="Email" />
                                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="FirstName" />
                                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="LastName" />
                                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="Enter Password" />
                                <Select placeholder='select user Type' style={{ width: 210, marginTop: 20 ,color:'red'}}
                                    id="demo-simple-select"
                                    label="User Type"
                                    required
                                    value={age}
                                    onChange={handleChange}
                                >
                                    <MenuItem value={"SA"}>Super Admin</MenuItem>
                                    <MenuItem value={"O"}>Operator</MenuItem>
                                    <MenuItem value={"FO"}>Floor Operator</MenuItem>
                                    <MenuItem value={"E"}>Employee</MenuItem>
                                    <MenuItem value={"DA"}>DevOps Admin</MenuItem>
                                    <MenuItem value={"SU"}>Support User</MenuItem>
                                </Select>
                            </div>
                            <div className={classes.formBtn}>
                                <button className={classes.hBtn} onClick={hideValue} >Cancel</button>
                                <button type='submit' className={classes.uBtn}>Add User</button>
                            </div>
                        </form>
                    </div>
                        : null
                }
            </div>
        </div>
    )
}
