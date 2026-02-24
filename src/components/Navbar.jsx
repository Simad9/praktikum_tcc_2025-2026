import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/data"> Data</Link> | 
        <Link to="/tambah-data"> Tambah Data</Link>
      </nav>
    </>
  )
}