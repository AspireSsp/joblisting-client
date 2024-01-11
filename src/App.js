import Test from "./components/Nevbar"
import Citys from "./components/Citys"
import { BrowserRouter as Router, Routes, Route, Await } from "react-router-dom";
import Home from './pages/Home'
import Footer from "./components/Footer";
import Nevbar from "./components/Nevbar";
import InternshipCard from './components/InternshipCard'
import Filter from "./pages/Filter"
import InternshipDetail from "./components/InternshipDetail"
import  SignUp from "./pages/signup"
import Dashboard from "./pages/Dashboard";
import Postjob from "./pages/Postjob";
import Chatbox from "./components/Chatbox"
import Application from "./components/Application";
import { Box } from "@mui/material";
import MyApplications from "./student/MyApplications";
import MyResume from "./student/MyResume";
import Preferences from "./student/Preferences";
import HelpCenter from "./student/HelpCenter";
import ForgetPass from "./student/ForgetPass";
import StudentNav from "./student/StudentNav";
import Dashbord from "./student/Dashbord";
import ManageHiring from "./employer/ManageHiring";
import Applications from "./employer/Applications";
import EmpDashbord from "./employer/EmpDashbord";
import EmpSignUp from "./employer/SignUp"
import Login from "./student/Login";
import Internshiplist from "./student/Internshiplist ";
import UserContext from "./context/userContext";
import { useEffect, useState } from "react";
import { getEmployer, getUser, logOutUser } from "./services/session";
import InternShipDetails from "./employer/InternShipDetails";
import Billing from "./employer/Billing";
import PremiumPlans from "./employer/PremiumPlans";
import Profile from "./employer/Profile";




function App() {
  const [myUser, setMyUser] = useState(null);
  const logout = async()=>{
    await logOutUser();
    setMyUser(null);
  }
  const updateUser = async()=>{
    console.log("user is updated")
    const user = await getUser();
    if(user){
      setMyUser(user);
    }else{
      const employer = await getEmployer();
      if(employer){
        console.log("sanajy")
        setMyUser(employer);
      }
    }

  }
  useEffect(() => {
    const myUserInfo = async()=>{
      const user = await getUser();
      console.log("app user: " , user);
      if(user){
        setMyUser(user);
      }
      const employer = await getEmployer();
      if(employer){
        setMyUser(employer);
      }
    }
    myUserInfo();
  }, []);
  return (
    <div className="App">
      <UserContext.Provider value={{ user: myUser, logOut : logout, updateUser :updateUser }} >
        <Router>
          {/* <Nevbar/> */}
          <Routes>
            <Route path="/" element={<StudentNav/>} >
              <Route index element={<Dashbord/>} />
            </Route>

            <Route path="/student" element={<StudentNav />} >
              <Route path="signup" element={<SignUp/>} />
              <Route path="login" element={<Login/>} />
              <Route path="dashbord" element={<Dashbord/>} />
              <Route path="applications" element={<MyApplications/>} />
              <Route path="preference" element={<Preferences />} />
              <Route path="resume" element={<MyResume />} />
              <Route path="helpcenter" element={<HelpCenter/>} />
              <Route path="forgetpassword" element={<ForgetPass/>} />
            </Route>

            <Route path="/employer" element={<Nevbar/>}>
              <Route index element={<Dashboard/>} />
              <Route path="signup" element={<EmpSignUp />}/>
              <Route path="login" element={<Login />} />
              <Route path="managed-hiring" element={<ManageHiring />} />
              <Route path="applications" element={<Application />} />
              <Route path="applications/details" element={<InternShipDetails />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="chat" element={<Chatbox />} />
              <Route path="helpcenter" element={<HelpCenter/>} />
              <Route path="billing" element={<Billing/>} />
              <Route path="premium-plans" element={<PremiumPlans/>} />
              <Route path="profile" element={<Profile/>} />
            </Route>

            <Route path="/internships" element={<StudentNav/>}>
              <Route index element={<Internshiplist/>} />
              <Route path="detail" element={<InternshipDetail/>} />
            </Route>

            {/* <Route path="/dashboard" element={<StudentNav/>}>
              <Route index element={<Dashboard/>} />
              <Route path="application" element={<Application/>} />
            </Route> */}

            <Route path="/jobs" element={<Nevbar/>} >
              <Route index element={<Internshiplist/>} />
              <Route path="form" element={<Postjob/>} />
            </Route>

            <Route path="/chat" element={<StudentNav/>} >
              <Route index element={<Chatbox/>} />
            </Route>

            <Route path="/courses" element={<StudentNav/>} >
              <Route index element={<Home/>} />
            </Route>

            <Route path="/events" element={<StudentNav/>} >
              <Route index element={<Home/>} />
            </Route>
          </Routes>
            <Footer/>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
