import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home'
import Signin from './screens/Auth/Signin/Signin'
import Signup from './screens/Auth/Signup/Signup'
import Profile from './screens/Auth/Profile/Profile'
import Elections from './screens/Elections/Elections'
import ElectionDetail from './screens/ElectionDetail/ElectionDetail'
import Candidates from './screens/Candidates/Candidates'
import CandidateDetail from './screens/CandidateDetail/CandidateDetail'
import ScrollToTop from './utils/ScrollToTop'
import Navbar from './sections/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';
import PhoneNumber from './screens/Auth/PhoneNumber/PhoneNumber';
import PasswordReset from './screens/Auth/PasswordReset/PasswordReset';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" exact element={<Home> </Home>} />
        <Route path="/auth/login" exact element={<Signin></Signin>} />
        <Route path="/auth/register" exact element={<Signup></Signup>} />
        <Route path="/auth/profile" exact element={<Profile></Profile>} />
        <Route path="/elections" exact element={<Elections></Elections>} />
        <Route path="/elections/:election_id" exact element={<ElectionDetail></ElectionDetail>} />
        <Route path="/candidates" exact element={<Candidates></Candidates>} />
        <Route path="/candidates/:candidate_id" exact element={<CandidateDetail></CandidateDetail>} />
        <Route path="/auth/phone-number-verify" exact element={<PhoneNumber></PhoneNumber>} />
        <Route path="/auth/password-reset" exact element={<PasswordReset></PasswordReset>} />
        <Route path="/privacy-policy" exact element={<PrivacyPolicy></PrivacyPolicy>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
