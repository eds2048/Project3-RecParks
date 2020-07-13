import React from "react";

const styles = {
  footer: {
    textAlign: "center",
    backgroundColor: "gray",
    color: "white",
    position: "relative",
    left: 0,
    right: 0
  },
}

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>Recs & Park Inc. || 2020 &copy; </p>
    </footer>
  );
}

export default Footer;
