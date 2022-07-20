// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Notes from './pages/Notes'
// import Create from './pages/Create'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { makeStyles, Typography } from '@material-ui/core'
import Nav from './Component/Nav/Nav';
import About from './Component/Nav/About/About';
import Terms from "./Component/Nav/Terms&Serviece/Terms";
import Privacy from "./Component/Nav/Privacy/Privacy";
import PersistentDrawerLeft from "./Component/Dashbord/DashBoard.js";
import User from "./Component/User/User.js";
import EnhancedTable from "./Component/User/Sample";
import UserTable from "./Component/User/UserTable";
import AddForm from "./Component/User/AddForm/AddForm";
import MainNav from "./Component/MainNav/Main";
import TestRedux from "./Component/User/AddForm/TestRedux";
import TableAlert from "./Component/Alert/TableAlert";
import Alert from "./Component/Alert/Alert";


const style = makeStyles({
})
function App() {
  const classes = style();
  return (
    <div className="main">
      {/* <MainNav> */}
        <Routes>
          <Route index element={<Nav />} />
          <Route path="about" element={<About />}/>
          <Route path="terms" element={<Terms/>}/>
          <Route path="privacy" element={<Privacy/>}/>
          <Route path="dashboard" element={<PersistentDrawerLeft/>} className={classes.draw}/>
          <Route path="user" element={<User/>}/>
          <Route path="table" element={<EnhancedTable/>}/>
          <Route path='tableuser' element={<UserTable/>}/>
          <Route path='cong' element={<AddForm/>}/>
          <Route path="king" element={<TestRedux/>}/>
          <Route path="alerttable" element={<TableAlert/>}/>
          <Route path="alert" element={<Alert/>}/>
        </Routes>
        {/* </MainNav> */}

    </div>
  );
}
export default App;