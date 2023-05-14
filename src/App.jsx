import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Timeline from "./components/Timeline";
import Blogs from "./components/Blogs";
import Index from "./pages/Index";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <div className='font-ubuntu bg-blue-50 dark:bg-gray-800 min-h-screen'>
          <div className="max-w-6xl mx-auto w-11/12">
            <Navbar />
            <Routes>
              <Route index element={<Index />} />
              <Route path="/home" element={<Index />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
            <Footer/>
          </div>
        </div>
      </Router>
    </>
  )
}

export default App