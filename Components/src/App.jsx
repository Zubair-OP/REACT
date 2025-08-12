import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";

// let users = [
//   {
//     name: "Ayesha Khan",
//     age: 28,
//     city: "Lahore",
//     profession: "Web Developer",
//     profilePhoto: "https://randomuser.me/api/portraits/women/45.jpg",
//   },
//   {
//     name: "Ali Raza",
//     age: 32,
//     city: "Karachi",
//     profession: "Graphic Designer",
//     profilePhoto: "https://randomuser.me/api/portraits/men/32.jpg",
//   },
//   {
//     name: "Sara Ahmed",
//     age: 25,
//     city: "Islamabad",
//     profession: "Content Writer",
//     profilePhoto: "https://randomuser.me/api/portraits/women/12.jpg",
//   },
//   {
//     name: "Usman Malik",
//     age: 30,
//     city: "Faisalabad",
//     profession: "Software Engineer",
//     profilePhoto: "https://randomuser.me/api/portraits/men/27.jpg",
//   },
//   {
//     name: "Zara Sheikh",
//     age: 29,
//     city: "Rawalpindi",
//     profession: "Digital Marketer",
//     profilePhoto: "https://randomuser.me/api/portraits/women/18.jpg",
//   },
// ];

function App() {
  return (
    <>
      <div>
        {/* {users.map((user , idx) => (
          <Card
            key={idx}
            user={user}
            age={user.age}
            city={user.city}
            profession={user.profession}
            profilePhoto={user.profilePhoto}
          />
        ))} */}

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
