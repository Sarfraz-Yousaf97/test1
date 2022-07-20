import React, { useState, useEffect } from 'react'
import {  makeStyles } from '@material-ui/core';
import './index.css'
import Spinner from '../Spinner/Spinner';

import ReactPaginate from 'react-paginate'
const useStyle = makeStyles({
paginate:{
  width: '300px',
  display: 'flex',
  listStyle: 'none',
  color:'black',
  justifyContent: 'space-between',
  padding: '10px',
  marginBottom: '50px',
  cursor: 'pointer',
  marginTop:50
}
})

export default function UserTable() {
  const [tableRow, setTableRow] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const classes = useStyle();


  useEffect(() => {
    // fetch('https://dummyjson.com/todos')
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      setTableRow(data)
      console.log(data)
      setLoading(true)
    });
    setLoading(false)
  }, [])

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className={classes.item}>
      <table className='table'>
        <tr>
          {/* {Checkbox} */}
          <th><input type='checkbox' checked={isChecked}onChange={handleOnChange}/></th>
          <th>UserName</th>
          <th>Email     </th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>UserType</th>
          <th>Opertor</th>
          <th>Opertor Type</th>
          <th>Created By</ th>
        </tr>
        {!loading && <Spinner/>}
        {loading && tableRow.map((item) => {
          return (
            <>
              <tr>
              <td><input type="checkbox" name="sample[]"/></td>
              <td >{item.id}</td>
              <td >          </td>
              <td >{item.name}</td>
              <td > </td>
              <td >{item.username}</td>
              <td > </td>
              <td > </td>
              <td > {item.website}</td>
              </tr>


            </>
          )
        })}
      </table>
      <ReactPaginate
          pageRangeDisplayed={2}
          pageCount={Math.ceil(15)}
          marginPagesDisplayed={2}
          containerClassName={classes.paginate}
        />

    </div>
  )
}
