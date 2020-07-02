import React from "react";

const styles = {
  card: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#006400",
    minHeight: 50,
    lineHeight: 2.5,
    fontSize: "2.0rem",
    color: "white",
    padding: "0 20px"
  }
};

function Navbar() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Navbar</div>
    </div>
  );
}

export default Navbar;
