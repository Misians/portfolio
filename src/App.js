import Navbar from "./Components/navbar/Navbar";
import './App.css'
import Intro from "./Components/navbar/Intro/Intro";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Services />
      <Contact />
    </div>
  );
}

export default App;
