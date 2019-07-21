import React from 'react';
import game from './game.png';
import './App.css';
import play from './play.png';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Container from 'react-bootstrap/Container';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
// import Col from '/react-bootstrap/Col';

const size = {
  maxWidth:1200 + 'px',
}

const p = {
  fontSize: 30 + "px",
  color: 'gray'
}

const h3 = {
  fontSize: 65 + "px",
  color: 'white',
}
const btn = {
  backgroundImage: 'linear-gradient(26.907deg, rgb(251,35,79) 0%, rgb(255,217,13) 100%)',
  borderRadius: 41 + 'px',
  color: 'white',
  width: 272 + 'px',
  paddingTop: 25 +'px',
  paddingBottom: 25 +'px',
  fontSize: 20 + 'px',
  border: "none"
}

const search = {
  width: 100 + '%',
  borderRadius: 10 + "px",
  border: 'none',
  border: '1px solid lightgray',
}
const li = {
  display: "inline-block",
  padding: 5 + 'px',
  backgroundImage: 'linear-gradient(26.907deg, rgb(251,35,79) 0%, rgb(255,217,13) 100%)',
  
}
const liEx = {
  paddingLeft: 15 + "px",
}
const a =  {
  textDecoration: 'none',
  color: 'white'
}
function App() {
  return ( 
    <div className="App">
      <div className="Cover">
        <div className="container pt-3" style={size} >
          <div className="row" >
            <div className="col-12" lg={12}>
              <img  src = {game} alt="" />         
            </div>
          </div>
          <div className="row mt-5 pt-5 pb-5 text-center">
            <div className="col-12 pt-5 pb-5" lg={12}>
             <p style={p}>2000 dən çox oyun </p> 
             <h3 style={h3}>Tək Ünvanda </h3>    
             <button className="btn" style ={ btn }> Oyuna Basla  <img src={ play } alt="" /> </button>    
            </div>
          </div>

        </div>
      </div>
      <div className="container pb-5">

        <div className="row aft">
          <div className="col-12 text-center h1">
            Oyunlar
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <ul style={{padding: 0}}>
              <li style={li}><a style={a} href="">En chox oynanilanlar</a></li>
              <li style={li} style={liEx}><a style={a} href="">Yeni Oyunlar</a></li>
              <li style={li} style={liEx}><a style={a} href="">Butun Oyunlar</a></li>
            </ul>
            
            
          </div>
          <div className="col-6">
            <input type="search" style={search}/>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
