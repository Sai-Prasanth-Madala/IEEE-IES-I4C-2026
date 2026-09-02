import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import CircuitTrace from './components/CircuitTrace'
import About from './components/About'
import Highlights from './components/Highlights'
import Guests from './components/Guests'
import Speakers from './components/Speakers'
import AreasOfInterest from './components/AreasOfInterest'
import Venue from "./components/venue";
import Register from './components/Register'
import Footer from './components/Footer'

export default function App() {
    return (
    <BrowserRouter>

      <div className="min-h-screen bg-paper">

        <Navbar />

        <Routes>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <CircuitTrace />
                <About />
                <Highlights />
                <Guests />
                <Speakers />
                <AreasOfInterest />
                <Register />
              </main>
            }
          />

          {/* VENUE PAGE */}
          <Route
            path="/venue"
            element={<Venue />}
          />

        </Routes>

        <Footer />

      </div>

    </BrowserRouter>
  );
}
