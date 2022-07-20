import React from 'react'
import loading from '../Static/loading.gif'
import { makeStyles } from '@material-ui/core'

const useStyle = makeStyles ({
    loading:{
        marginLeft:400
    }
}) 

export default function Spinner() {
  const classes = useStyle();
    return (
    <div className={classes.loading}>
      <img src={loading} alt="loading" />
    </div>
  )
}
