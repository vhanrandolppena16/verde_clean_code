// App.jsx

// Importing the Routes and Route components from react-router to handle routing in the app
import { Routes, Route } from "react-router";

// Importing custom components used in the app
import AppBackground from "./startup_components/AppBackground";     // Sets up the background

import AuthLayout from "./startup_components/AuthLayout";                                   // Welcome or landing screen
import WelcomeScreen from "./startup_components/login_components/WelcomeScreen";  // Login/SignUp form component
import Login from "./startup_components/login_components/Login";            // Login form component
import SignUp from "./startup_components/login_components/Signup";          // Sign-up/registration form component

// import Home from "./app_components/FinalHome";                           // Main component shown after login (dashboard, etc.)
import Home from "./app_components/Home";                           // Main component shown after login (dashboard, etc.)

// Main App component
function App() {
  return (
    <>
      {/* Rendering the AppBackground component to set the background visuals */}
      <AppBackground />

      <Routes>
        <Route path="/" element={<AuthLayout />}>                          
          <Route path="/" element={<WelcomeScreen />} />  {/* Welcome screen route (root path) */}
          <Route path="/login" element={<Login />} />     {/* Login screen route */}
          <Route path="/signup" element={<SignUp />} />   {/* Sign Up screen route */}
        </Route>

        <Route path='/dashboard' element={<Home />}/>
        <Route path='/analysis' element={<Home />}/>
        <Route path='/dataset' element={<Home />}/>
        <Route path='/control' element={<Home />}/>
        <Route path='/logs' element={<Home />}/>
        <Route path='/account' element={<Home />}/>
        <Route path='/about' element={<Home />}/>
        <Route path='/livestream' element={<Home />}/>
        <Route path='/logout' element={<Home />}/>

      </Routes>

    </>
  )
}

// Exporting the App component as default
export default App;
