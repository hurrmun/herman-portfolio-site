import "./App.css";
import { Navbar, Feature } from "./components";

function App() {
  return (
    <div className="App bg-slate-900 text-white font-poppins pt-24" id="home">
      <Navbar />
      <div className="grid grid-cols-1 max-w-7xl mx-auto">
        <Feature />
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <div className="h-96"></div>
        <h2>About</h2>
        <h2 id="experience">Experience</h2>
        <h2>Projects</h2>
        <h2>Skills</h2>
        <h2>Education</h2>
        <h2>Contact Form</h2>
      </div>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
