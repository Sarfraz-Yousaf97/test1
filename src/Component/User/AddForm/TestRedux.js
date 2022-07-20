import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { background, reset } from '../../../Redux'
import { makeStyles } from '@material-ui/core'
import MainNav from '../../MainNav/Main'
import UserTable from '../UserTable'

const useStyle = makeStyles({
  State: {
    backgroundColor: 'red',

  }
})
function TestRedux() {

  const classes = useStyle()
  const color = useSelector(state => state.background.backgroundColor)
  const dispatch = useDispatch()



  return (
    <div style={{ width:"100%",height:'100vh',backgroundColor: 'red',transition: '5s' }}>
      <div >
        <h2 style={{ marginTop: 100, textAlign: 'center', backgroundColor: color, color: 'red', transition: '5s' }}>Web Develpor</h2>
        <button style={{ marginLeft: 240 }} onClick={() => dispatch(background())}>click me</button>
        <button style={{ marginLeft: 240 }} onClick={() => dispatch(reset())}>click me</button>
        <MainNav/>
      </div>

      <div>
        <h2 style={{ textAlign: 'center', backgroundColor: color, color: 'red', transition: '5s' }} >DjnericSol</h2>
      </div>
      <UserTable/>
    </div>
  )
}

export default TestRedux
