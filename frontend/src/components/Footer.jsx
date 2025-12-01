import React from 'react';

const Footer = () => (
  <footer className="footer" style={{ backgroundColor: 'black', color: 'white', padding: '20px 0', textAlign: 'center' }}>
    <div className="container">
      <div className="row text-center">
        <div className="col-md-6">
          <h5>Main Branch</h5>
          <p>Pristine Pearls Dental Clinic<br />123 Smile Avenue, City Center, Metropolis</p>
          <p>Email: contact@pristinepearls.com<br />Phone: +123 456 7890</p>
        </div>
        <div className="col-md-6">
          <h5>Other Branches</h5>
          <p><strong>Branch 1:</strong> 45 Wellness Street<br />
             <strong>Branch 2:</strong> 78 Dental Lane<br />
             <strong>Branch 3:</strong> 90 Ortho Road</p>
        </div>
      </div>
      <div className="row text-center mt-4">
        <div className="col">
          <h5>Follow Us</h5>
          <a href="#" className="text-white me-3"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="text-white me-3"><i className="fab fa-instagram"></i></a>
          <a href="#" className="text-white"><i className="fab fa-twitter"></i></a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; 2025 Pristine Pearls. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
