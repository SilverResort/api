import { Route, Routes } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<Users />}/>
        <Route path='/profile/:id' element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;
