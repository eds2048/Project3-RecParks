import React from "react";
import Logo from "../components/nyc_parks.png";

const styles = {
  card: {
    background: "#e8eaf6"
  },
  heading: {
    background: "#006400",
    maxHeight: 50,
    fontSize: "2.0rem",
    color: "white",
    padding: "0 10px",
    width: "auto"
  },
  login: {
    marginRight: 20,
    textAlign: "right",
  },
  logo: {
    maxHeight: 40,
    position: "relative",
    paddingBottom: "3px"
  }
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.login}> Login / Logout </div>
      <div style={styles.heading}>Welcome!<img src={Logo} alt="nyc_parks_logo" style={styles.logo}/></div>
    </div>
  );
}

export default Navbar;

{/* <div style={styles.login}> <Link to="/Login">Login </Link> / <Link to="/logout">Logout </Link></div> */}
