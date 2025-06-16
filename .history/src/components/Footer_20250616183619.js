import React from "react";
import "../styles/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="circle-logo">
            <div className="inner-logo">≡</div>
            <div className="circle-text">PEOPLE </div>
          </div>
        </div>
        <div className="footer-links">
          <div>
            <p>Whitepaper</p>
            <p>GitHub</p>
            <p>Documentations</p>
          </div>
          <div>
            <p>Contact</p>
            <p>Blog & News</p>
            <p>Media Kit</p>
          </div>
          <div>
            <p>Dashboard</p>
            <p>Explorer</p>
            <p>Staking</p>
            <p>Extension</p>
          </div>
          <div>
            <p>Medium</p>
            <p>Telegram</p>
            <p>Discord</p>
            <p>X</p>
          </div>
          <div>
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>{" "}
        <div className="footer-bottom">
          © 2023—2025. All rights reserved. Designed by nuixw.
        </div>
      </div>
    </footer>
  );
}
