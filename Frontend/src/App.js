import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import NavigationBar from "./components/NavigationBar"; // Corrected import name
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserLogin from "./components/UserLogin";
import OrganizerLogin from "./components/OrganizerLogin";
import UserRegister from "./components/UserRegister";
import AboutUs from "./components/AboutUs";
import UserDashboard from "./components/UserDashboard";
import OrganizerDashboard from "./components/OrganizerDashboard";
import EventRegisteration from "./components/EventRegisteration";
import Faq from "./components/Faq";
import WorkShopShow from "./components/WorkShopShow";
import StandUpShow from "./components/StandUpShow";
import MusicShows from "./components/MusicShows";
import Events from "./components/Events";
import Ticket from './components/Ticket'
import UserNavBar from "./components/UserNavBar";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/NavigationBar" element={<NavigationBar />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/user-login" element={<UserLogin />} />
          <Route path="/organizer-dashboard" element={<OrganizerDashboard />} />
          <Route path="/organizer-login" element={<OrganizerLogin />} />
          <Route path="/EventRegisteration" element={<EventRegisteration />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/MusicShows" element={<MusicShows />} />
          <Route path="/StandUpShow" element={<StandUpShow />} />
          <Route path="/WorkShopShow" element={<WorkShopShow />} />
          <Route path="/Events" element={<Events />} />
          <Route path="/Ticket" element={<Ticket />} />
          <Route path="/UserNavBar" element={<UserNavBar />} />

          {/* <Route path="/event-register" element={<EventRegistrationForm />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
