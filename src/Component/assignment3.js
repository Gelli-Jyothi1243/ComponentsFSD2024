import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      fcount: 0,
      scount: 0,
      tcount: 0
    };
  }

  fincrement = () => {
    this.setState({ fcount: this.state.fcount + 1 });
  };
  sincrement = () => {
    this.setState({ scount: this.state.scount + 1 });
  };
  tincrement = () => {
    this.setState({ tcount: this.state.tcount + 1 });
  };
  fdecrement = () => {
    this.setState({ fcount: this.state.fcount - 1 });
  };
  sdecrement = () => {
    this.setState({ scount: this.state.scount - 1 });
  };
  tdecrement = () => {
    this.setState({ tcount: this.state.tcount - 1 });
  };

  render() {
    return (
      <div  style={{display:'flex'}}>
        <div className="cart">
          <p style={{ textAlign: 'center' }}>count: {this.state.fcount}</p>
          <p>Churros</p>
          <img
            src=""
            alt="Product"
            className="cart-image"
            style={{ marginTop: '5%' }}
          />
          <div className="cart-content">
            <button onClick={this.fincrement}>order</button>
            <button onClick={this.fdecrement}>Remove</button>
          </div>
        </div>
        <div className="cart">
          <p style={{ textAlign: 'center' }}>count: {this.state.scount}</p>
          <p>Tacos</p>
          <img
            src=""
            alt="Product"
            className="cart-image"
            style={{ marginTop: '5%' }}
          />
          <div className="cart-content" >
            <button onClick={this.sincrement}>order</button>
            <button onClick={this.sdecrement}>Remove</button>
          </div>
          </div>
        <div className="cart" >
          <p style={{ textAlign: 'center' }}>count: {this.state.tcount}</p>
          <p>Momos</p>
          <img src=""  alt="Product"className="cart-image"
            style={{ marginTop: '5%'}}
          />
          <div className="cart-content">
            <button onClick={this.tincrement}>order</button>
            <button onClick={this.tdecrement}>Remove</button>
          </div>
        </div >
        <div className="cart" >
          <p style={{ textAlign: 'center' }}>count: {this.state.tcount}</p>
          <p>Muffins</p>
          <img src=""  alt="Product"className="cart-image"
            style={{ marginTop: '5%'}}
          />
          <div className="cart-content">
            <button onClick={this.tincrement}>order</button>
            <button onClick={this.tdecrement}>Remove</button>
          </div>
        </div >
      </div>  
      
    );
  }
}

export default App;
