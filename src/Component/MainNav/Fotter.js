import React from 'react'
import { makeStyles } from '@material-ui/core'
import { useNavigate } from 'react-router-dom';
const useStyle = makeStyles({
    fotterHeader:{
        position:'absolute',
        marginTop:898,
        width:'100%'
    },
    fotter:{
        display:'flex',
        backgroundColor:'#3A3A3C',
        marginLeft:240,
        color:'white'
    },
    listItem:{
        marginLeft:10,
        marginRight:10,
        listStyleType:'none',
        fontSize:16,
        paddingTop:5,
        paddingBottom:5,
        cursor:'pointer'
    }
})

export default function Fotter() {
  const classes = useStyle();
  const navigate = useNavigate();
    return (
    <div className={classes.fotterHeader}>
        <ul className={classes.fotter}>
            <li onClick={()=> navigate('/about')} className={classes.listItem}>About</li>
            <li onClick={()=> navigate('/terms')} className={classes.listItem}>Terms Of Serviece</li>
            <li onClick={()=> navigate('/privacy')} className={classes.listItem}>Privacy Policy</li>
        </ul>
        
      
    </div>
  )
}
