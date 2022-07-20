
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import './index.css'
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import AppsIcon from '@mui/icons-material/Apps';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MicrowaveIcon from '@mui/icons-material/Microwave';
import FeaturedVideoIcon from '@mui/icons-material/FeaturedVideo';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import InventoryIcon from '@mui/icons-material/Inventory';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import PivotTableChartIcon from '@mui/icons-material/PivotTableChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PersonIcon from '@mui/icons-material/Person';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../Static/dmvi_logo.png'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useNavigate } from 'react-router-dom';




const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const DrawerHeader = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
}));

// For Lay Out component
// interface Props {
//   children?: React.ReactNode
//   // any props that come into the component
// } { children, ...props}: Props

export default function MainNav() {
  //States
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  // const [active , setActive ] = React.useState(true);

   //Function

  const handleDrawerOpen = () => {
    setOpen(true);
    // setActive(true)
  };

  const handleDrawerClose = () => {
    setOpen(false);
    // setActive(false)
  };
  const [sideBar, setSideBar] = React.useState(true)
  const showSidebar = () => setSideBar(!sideBar)
  const menuItem = [
    {
      text: "Dashboard",
      icon: <LineStyleIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Vending Machine",
      icon: <MicrowaveIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Advertising",
      icon: <FeaturedVideoIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Alerts",
      icon: <AnnouncementIcon fontSize="large" />,
      path: '/alert',
    },

    {
      text: "Finance",
      icon: <AttachMoneyIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "GoPro Rental",
      icon: <ContentPasteGoIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Inventory",
      icon: <InventoryIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Location",
      icon: <LocationOnIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "My Notes",
      icon: <AppsIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "MTDS",
      icon: <AddTaskIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Magtek",
      icon: <AspectRatioIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Opertaors",
      icon: <HeadphonesIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Planogram",
      icon: <PivotTableChartIcon fontSize="large" />,
      path: '/dashboard',
    },

    {
      text: "Products",
      icon: <InventoryIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Reports",
      icon: <AssessmentIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Sales Forecast",
      icon: <CastForEducationIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Theme Manager",
      icon: <ManageAccountsIcon fontSize="large" />,
      path: '/dashboard',
    },
    {
      text: "Users",
      icon: <PersonIcon fontSize="large" />,
      path: '/user',
    },
    {
      text: "Apps",
      icon: <AppsIcon fontSize="large" />,
      path: '/dashboard',
    },
  ]
  return (
    <div >
    {/* <div
    {...props}>{children}
    </div> */}
      <Box>   
        <CssBaseline />
        <AppBar position="fixed" open={open} className='appbar'>
          <div className='appbar'>
            <Toolbar>

              <Typography variant="h6" noWrap component="div">
                DASHBOARD 
              </Typography>
              <IconButton
                onClick={handleDrawerOpen}
              >
                <MenuIcon className='MenuIcon' />
              </IconButton>
              <NotificationsNoneIcon className='NotiIcon' />
              <div className='DropDIcon' >
                <Select>
                  <MenuItem>Admin</MenuItem>
                  <MenuItem>Edit Profile</MenuItem>
                  <MenuItem>Change Password</MenuItem>
                  <MenuItem onClick={() => navigate('/')}>Log Out</MenuItem>
                </Select>
              </div>
            </Toolbar>
          </div>
        </AppBar>
        <Drawer 
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              // backgroundColor:'red',
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className='logo'>
            <img src={logo} alt="" />
          </div>
          <DrawerHeader >
            <IconButton onClick={handleDrawerClose} >
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List  >
            {menuItem.map(item => (
              <ListItem
                button
                key={item.text}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon className={sideBar ? 'navActive' : 'navItem'}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text}
                  className={sideBar ? 'navActive' : 'navItem'}
                   onClick={(showSidebar)}
                />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
   </div>
  );
}




