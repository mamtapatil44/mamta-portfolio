import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Technology from "./components/Technology";

function App() {
  return (
    <div className="overflow-x-hidden overflow-y-auto text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0  h-screen w-screen z-[-2]
       bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
         </div>
        <div className="container mx-auto px-8">
        <Header />
        <Home />
        <About/>
        <Technology/>
        <Experience />
        <Project/>
        <Contact />
        <Footer/>
        </div>

       
     
    </div>
  );
}

export default App;
