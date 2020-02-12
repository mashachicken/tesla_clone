import React from 'react';

const topLinks = [
  {name:'MODEL S'},
  {name:'MODEL 3'},
  {name:'MODEL X'},
  {name:'MODEL Y'},
  {name:'CYBERTRUCK'},
  {name:'ROADSTER'},
  {name:'ENERGY'}
];


function Nav() {
  const navStyle = {
    display: 'grid',
    gridTemplateColumns: '2fr 13fr 1fr',
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    height: '55px',
    fontSize: '13px',
    textAlign: 'center',
    zIndex: '1',
    overflow: 'hidden'
  };
  const burger = {
    width: '20px',
    float: 'right',
    marginTop: '15px'
  };
  const linx = {
    fontFamily: 'Arial,sans-serif',
    fontWeight: 'bold',
    textDecoration: 'none',
    listStyleType: 'none',
    color: 'white',
    float: 'left',
    margin: '5px 10px'
  };
  const logo = {
    height: "50px",
    width: "100px",
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: "7px"

  };
  const ulStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  return (
    <div className="nav" >
      <header className="teslaHeader" style={navStyle}>
        <h1 className="logo" style={logo}>
          <img src="/tesla.svg" alt="tesla logo"></img>
        </h1>
        <ul style={ulStyle}>
          {topLinks.map((link,i) => (
            <a style={linx} key={i} href={`https://www.tesla.com/${link.name.toLowerCase().split(' ').join('')}`}>
              <li>{link.name}</li>
            </a>))}
          </ul>
          <img src="/burger.png" alt="for more cliuck here" style={burger}></img>
        </header>
      </div>
    );
  }

  export default Nav;
