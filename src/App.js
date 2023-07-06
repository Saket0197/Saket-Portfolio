import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";


function App() {
  return (
    <div className="wrapper">
      <div className='container'>
          <Header></Header>
          <About></About>
          <Projects></Projects>
          <TechStack></TechStack>
          <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
