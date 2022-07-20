import React from 'react'
import MainNav from '../MainNav/Main'
import TableAlert from './TableAlert'
import { makeStyles, TextField, Typography } from '@material-ui/core'
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
// import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

// import DesktopDatePicker from 

const useStyle = makeStyles({
    Container: {
        backgroundColor: "#EEEEEE"
    },
    table: {
        marginLeft: 260,
        marginTop: 240,
    },
    text:{
        marginTop:80,
        marginLeft:260,
    },
    input:{
        marginLeft:260
    }
})

export default function Alert() {
    // const [value, setValue] = React.useState("02/04/2022")
    // const handleChange = (newValue) => {
    //     setValue(newValue);
    //   };
    const classes = useStyle()
    return (
        <>
            <div className={classes.Continer}>
                <div>
                    <MainNav />
                </div>
                <div className={classes.text}>
                    <Typography variant='h6'>Details logs about all devices and activities
                    </Typography>
                </div>
                <div className={classes.input}>
                {/* <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        /> */}
        {/* <DateTimePicker/> */}
                    <TextField />
                </div>
                <div className={classes.table}>
                    <TableAlert />
                </div>
            </div>
        </>
    )
}
