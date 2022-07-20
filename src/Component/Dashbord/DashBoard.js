import * as React from 'react';
import {useTheme } from '@mui/material/styles';
import './index.css'
import Typography from '@mui/material/Typography';
import { Avatar} from '@material-ui/core'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {useNavigate } from 'react-router-dom';
import Customchart from './Chart/CustomChart';
import ChartTwo from './Chart/ChartTwo';
import ItemChart from './Chart/BarChart';
import MainNav from '../MainNav/Main';

const drawerWidth = 240;

export default function PersistentDrawerLeft() {
  //  States
  const theme = useTheme();
  const navigate = useNavigate();
  const [change , setChange] = React.useState(true)
  //Function
  const showColor = () =>{
    setChange(!change)
  }
  return (
    <>
      <div className={change ? 'section':'changeSection'}>
      <MainNav className={change ? 'colNav' : 'changeColNav' } />

    
    <button className='colButton' onClick={showColor}>Dark Theme</button>
        <div className='CardContent'>
          
          <Card className='card'>
            <CardContent>
              <Typography gutterBottom>
                Online Vending Machine
              </Typography>
              <Typography style={{ position: 'absolute', marginTop: 18 }} variant="h3" color="#949697">
                <span style={{ color: '#5A5A5A' }}> 3 </span> / 397
              </Typography>
              <Typography variant='body2' style={{ marginTop: 100, position: 'absolute' }} color="#949697">
                3% of Vending machine are online
              </Typography>
            </CardContent>
          </Card>

          {/* Seconed Card */}
          <Card style={{ width: 240, height: 200 }} className='card'>
            <CardContent>
              <Typography gutterBottom>
                Total Product Inventory
              </Typography>
              <Typography style={{ position: 'absolute', marginTop: 18 }} variant="h3" color="#949697">
                <span style={{ color: '#5A5A5A' }}> 31 </span>/ 111
              </Typography>
              <Typography variant='body2' style={{ marginTop: 100 }} color="#949697">
                Accross All Vending Machines
              </Typography>
            </CardContent>
          </Card>
          {/* Third Card */}
          <Card style={{ width: 240, height: 200 }} className='card'>
            <CardContent>
              <Typography gutterBottom>
                Stock Current Value
              </Typography>
              <Typography style={{ position: 'absolute', marginTop: 18 }} variant="h3" color="#949697">
                <span style={{ color: '#5A5A5A' }}> 62.00M </span>/ 6
              </Typography>
              <Typography variant='body2' style={{ marginTop: 100 }} color="#949697">
                Accross All Vending Machines
              </Typography>
            </CardContent>
          </Card>
          {/* Fourth Card */}
          <Card style={{ width: 240, height: 200 }} className='card'>
            <CardContent>
              <Typography gutterBottom>
                Online Vending Machine
              </Typography>
              <Typography style={{ position: 'absolute', marginTop: 18 }} variant="h3" color="#5A5A5A">
                $573.47M
              </Typography>
              <Typography variant='body2' style={{ marginTop: 100 }} color="#949697">
                Accross All Vending Machines
              </Typography>
            </CardContent>
          </Card>
        </div>
        <div className='charts'>
        <div>
            <div className="test">
              <Typography>Product Stock Status</Typography>
            </div>
            <div className="firstChart">
              <Customchart />
            </div>
          </div>

          <div>
            <div className="test">
            <Avatar style={{position:'absolute',marginLeft:-40,marginTop:-7,
            backgroundColor:'white',color:'red'
            
            }}>O</Avatar>
              <Typography>Vending Machine Stock Status</Typography>
            </div>
            <div className="firstChart1">
              <ChartTwo />
            </div>
          </div>

          <div>
            <div className="test1">
              <Avatar style={{position:'absolute',marginLeft:-10,marginTop:-5,
            backgroundColor:'white',color:'green'
            
            }}>iIi</Avatar>
              <Typography>Item Availabilty on Vending Machines</Typography>
            </div>
            <div className="BarChart1">
              <ItemChart />
            </div>
          </div>
        </div>
        <div className='FotterHeader' >
          <ul className='fotter'>
            <li className='ListItem'  onClick={()=>navigate('/about')}>About</li>
            <li className='ListItem' onClick={()=>navigate('/terms')}>Terms Of Serviece</li>
            <li className='ListItem' onClick={()=>navigate('/privacy')}>Privacy Policy</li>
            <li className='ListItemRight'>@2022 Digital Media Vending International LLC</li>

          </ul>

        </div>
      </div>
    </>
  );
}



