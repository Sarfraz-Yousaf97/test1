import { FormControl, TextField, Typography, Button, Select, MenuItem } from '@material-ui/core'
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom'
import Fotter from '../../MainNav/Fotter'

//Notificaion Icon     
// Screen Icon
//Menu Icon 
// Inventory Icon
//advertisng Icon
// Planpgram Icon
const useStyle = makeStyles({
  main: {
    marginLeft: 350,
    marginTop: 20,
    border: "2px solid green",
    width: "50%",
    transition: '2s'
  },
  mainChange:{
    backgroundColor:'grey',
    transition: '2s'
  },
  span: {
    color: 'red'
  },
  showForm: {
    marginLeft: 240,
    marginTop:50,
    position: "absolute",
    boxShadow: "2px 2px 8px 2px #888888",
    backgroundColor: 'white',
    height: 350,
    boxSizing: 'border-box'
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
  }

})



export default function AddForm() {

  const [active , setActive] = useState(false)


const showValue = () =>{
  setActive(false)
  setShow(true)
}
const hideValue = () =>{
  setShow(false)
  setActive(true)
}


  const [show, setShow] = useState(false)
  const classes = useStyle();
  const navigate = useNavigate()
  return (
    <div>
      <Typography style={{ color: "grey", width: "100%", textAlign: 'center', marginTop: 200 }} variant='h3'>Greetings</Typography>
      <div className={ active ? classes.main:classes.mainChange}>
        <marquee direction="left">
          <Typography variant='h4'>Your <span className={classes.span}>Information</span> Is <span className={classes.span}>Succesfully</span> Saved</Typography>
        </marquee>
      </div>

      <div>
        {
          show ? <div className={classes.showForm}>

            <Typography variant='h5'> Add User</Typography>
            <form onSubmit={() => navigate("/cong")}>
              <div className={classes.formApp}>

                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="UserName" />
                <TextField type='email' required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="Email" />
                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="FirstName" />
                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="LastName" />
                <TextField required style={{ width: 210, marginTop: 20, marginRight: 20 }} variant='outlined' label="Enter Password" />
                
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

        <Button onClick={showValue} style={{ backgroundColor: '#005297', height: 30, textAlign: 'center', padding: "0 12px", color: 'white', marginRight: 20 }}>
          + ADD</Button>
        <Fotter/>

    </div>
  )
}
