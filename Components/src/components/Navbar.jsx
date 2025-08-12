import { Link } from "react-router-dom"

function Navbar() {
  return (

    <nav className='flex justify-between py-5 px-10 items-center bg-emerald-900'>
        <h2 className="text-2xl">Sheriyans Student</h2>
        <div className='flex items-center gap-10'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
  )
}

export default Navbar
