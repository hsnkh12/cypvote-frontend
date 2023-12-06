import './styles/App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './screens/Home/Home'
import Signin from './screens/Signin/Signin'
import Signup from './screens/Signup/Signup'
import Profile from './screens/Profile/Profile'
import Elections from './screens/Elections/Elections'
import ElectionDetail from './screens/ElectionDetail/ElectionDetail'
import Candidates from './screens/Candidates/Candidates'
import CandidateDetail from './screens/CandidateDetail/CandidateDetail'
import ScrollToTop from './utils/ScrollToTop'
import Navbar from './sections/Navbar/Navbar';
import { Footer } from './sections/Footer/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" exact element={<Home> </Home>} />
        <Route path="/signin" exact element={<Signin></Signin>} />
        <Route path="/signup" exact element={<Signup></Signup>} />
        <Route path="/profile" exact element={<Profile></Profile>} />
        <Route path="/elections" exact element={<Elections></Elections>} />
        <Route path="/elections/:election_id" exact element={<ElectionDetail></ElectionDetail>} />
        <Route path="/candidates" exact element={<Candidates></Candidates>} />
        <Route path="/candidates/:candidate_id" exact element={<CandidateDetail></CandidateDetail>} />
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;
