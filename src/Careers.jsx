import React from 'react';
const careersStyle = {
  color: 'white'

}
const careerLinks = {
  listStyleType: 'none',
  float: 'right'
}
function Careers() {
  return (
    <div style={careersStyle}>
      <h1 className="section-title">Careers</h1>

      <nav className="about-us">
        <ul className="nav-class" style={careerLinks}>
          <li className="nav-item">About </li>
          <li className="nav-item">Careers </li>
          <li className="nav-item">Contact </li>
          <li className="nav-item">Legal </li>
          <li className="nav-item">Investors </li>
          <li className="nav-item">Suppliers </li>
        </ul>
      </nav>
      <hr/>
    </div>
  )
}

export default Careers;
