import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left"></div>
        <div className="footer-links">
          <p>Contact</p>
          <h3>xuankhuong1402@gmail</h3>
        </div>{" "}
        <div className="footer-bottom">
          © 2023—2025. All rights reserved. Designed by nuixw.
        </div>
      </div>
    </footer>
  );
}
