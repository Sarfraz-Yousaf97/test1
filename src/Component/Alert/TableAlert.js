import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'
import Spinner from '../Spinner/Spinner'
const useStyle = makeStyles({
    table: {
         width: '100%'
    },
    headerTable:{
        backgroundColor:'#ECF0F1'
    },
    tableBody:{
         
         
        "&&tr:nth-child(even)": {
            backgroundColor: "#f1f8ff",
          }
    }

})

export default function TableAlert() {
    const classes = useStyle()
    const [table, setTable] = useState([])
    const [loading,setLoading]=useState(false)
    useEffect(() => {
        // // fetch('https://jsonplaceholder.typicode.com/users')
        fetch("https://mocki.io/v1/9cd56358-e795-4a74-b935-d0dc6a1760a7")
            .then(res => res.json())
            .then(data => {
                setTable(data)
                console.log(data)
                setLoading(true)
            })
            setLoading(false)
    },[])
    return (
        <>

            <div className={classes.table}>
                <Table>
                    <TableHead className={classes.headerTable}>
                        <TableRow>
                            <TableCell>Alert Id</TableCell>
                            <TableCell>Device ID</TableCell>
                            <TableCell>Device Serial</TableCell>
                            <TableCell>Device Name</TableCell>
                            <TableCell>Alert Type</TableCell>
                            <TableCell>Message</TableCell>
                            <TableCell>Alert Level</TableCell>
                            <TableCell>Operator</TableCell>
                            <TableCell>Location</TableCell>
                            <TableCell>Route</TableCell>
                            <TableCell>Reporting Time</TableCell>
                        </TableRow>
                    </TableHead>
                    {!loading && <Spinner/>}
                        {table.map((row) => {
                            return (
                                <>
                    <TableBody className={classes.tableBody}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.DeviceId}</TableCell>
                                    <TableCell>{row.DeviceSerial}</TableCell>
                                    <TableCell>{row.AlertType}</TableCell>
                                    <TableCell>{row.message}</TableCell>
                                    <TableCell>{row.alertlevel}</TableCell>
                                    <TableCell>{row.operator}</TableCell>
                                    <TableCell>{row.city}</TableCell>
                                    <TableCell>{row.Route}</TableCell>
                                    <TableCell>{row.area}</TableCell>
                                    <TableCell>{row.Reportingtime}</TableCell>
                    </TableBody>
                                </>
                            )
                        })}
                </Table>
            </div>

        </>
    )
}
