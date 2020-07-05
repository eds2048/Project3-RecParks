import React from "react";

const styles = {
  footer: {
    textAlign: "center",
    backgroundColor: "gray",
    color: "white",
    marginTop: "20px",
    paddingTop: "12px",
    position: "absolute",
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
