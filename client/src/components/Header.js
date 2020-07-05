import React from "react";
// import "./components/styles/Header.css";

const styles = {

  header: {
    height: "90px",
  },
  h2: {
    margin: 0,
    textAlign: "center",
    paddingTop: "3px",
    color: "#006400",
    fontSize: "3rem",
  }
}

function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.h2}>Recs & Park</h2>
      <p style={{textAlign: "center", color: "#006400"}}>In Partnership with the NYC Parks Department
      </p>
    </header>
  );
}

export default Header;
