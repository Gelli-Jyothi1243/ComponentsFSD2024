import React, { useState } from 'react';

const App = () => {
  const [selectedOption,setSelectedOption]=useState('+91');
//const [state,setState]=useState('')
  return (
    <div>
      <form style={{border:'2px solid black',marginLeft:'20%', padding: '20px', borderRadius: '10px',width:'520px'}}>
      <h1 style={{ textAlign: 'center' }}>Student Registration Form</h1>

        <p style={{marginLeft:'20px'}}>FirstName <input type="text" placeholder="Enter First Name" style={{marginLeft:'50px',width:'300px'}}/></p> 
        <p style={{marginLeft:'20px'}}>LastName <input type="text" placeholder="Enter Last Name" style={{marginLeft:'53px',width:'300px'}}/></p> 
        <label style={{marginLeft:'20px'}}>Gender <input type="radio" name="" id="" />Male<input type="radio" name="" id="" />Female</label>
        <p style={{marginLeft:'20px'}}>Age <input type="text" placeholder="Enter your age" style={{marginLeft:'93px',width:'300px'}}/></p>
        <p style={{marginLeft:'20px'}}>Date of birth <input type="date" name="" id="" placeholder="dd-mm-yyyy" style={{marginLeft:'40px',width:'300px'}}/></p>
        <p style={{marginLeft:'20px'}}>Email Address <input type="email" name="" id="" placeholder="Enter your Mail" style={{marginLeft:'28px',width:'300px'}}/></p>
        <p style={{marginLeft:'20px'}}>Password <input type="password" name="" id="" placeholder="Enter your password min 8 Characters" style={{marginLeft:'62px',width:'300px'}}/></p>
        <p style={{marginLeft:'20px'}}>Confirm Password  <input type="password" name="" id="" placeholder="Confirm Password" style={{marginLeft:'2px',width:'300px'}}/></p>
        <p style={{marginLeft:'20px'}}>Phone Number  
          <select name="" value={selectedOption} style={{marginLeft:'30px'}}>
            <option>+91</option>
            <option>+1</option>
            <option>+11</option>
          </select>
          in
        </p>
        <p style={{marginLeft:'20px'}}>Address <textarea name="" id="" cols="30" rows="10" placeholder="Enter your address" style={{marginLeft:'68px',width:'300px'}}></textarea></p>
        <p style={{marginLeft:'20px'}}>State
        <select name="" style={{marginLeft:'90px',width:'300px'}}>
            <option>--Select your State--</option>
            <option>Andhra Pradesh</option>
            <option>Telangana</option>
            <option>Kerala</option>
          </select>
        </p>
        <p style={{marginLeft:'20px'}}>Pin code <input type="text" placeholder="Enter your pin code" style={{marginLeft:'63px',width:'300px'}}/></p>
        <label style={{marginLeft:'20px'}}>Hobbies 
          <input type="checkbox" name="" id="" style={{marginLeft:'20px'}}/>Music
          <input type="checkbox" name="" id="" style={{marginLeft:'20px'}}/>Movies
          <input type="checkbox" name="" id="" style={{marginLeft:'20px'}}/>Sports
          <input type="checkbox" name="" id="" style={{marginLeft:'20px'}}/>Travel
        </label>
        <p style={{marginLeft:'20px'}}>Upload Photo<span style={{color:'red',marginLeft:'10px'}}>*Max size 100kb</span><button style={{marginLeft:'10px'}}>Choosefile</button>No file choosen</p>
        <input type="checkbox" name="" id="" style={{marginLeft:'20px'}}/>I hereby declare that the above information provided is true and correct
        <div style={{border:'2px solid gray',marginLeft:'20px',width:'200px',height:'50px'}}>
        <input type="checkbox" name="" id="" style={{ marginTop: '-10px' }} />
  <span>I'm not a robot</span>
          <img src="data:image/png;base64,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" alt="" 
          style={{width:'40px',height:'40px'}}/>
        </div>
        <div style={{marginLeft:'20px'}}>
            <button type="submit" style={{marginLeft:'100px',width:'100px',background:'red'}}>Register</button>
            <button type="reset" style={{marginLeft:'100px',width:'100px',background:'red'}}>Reset</button>
        </div>
      </form>
    </div>
  );
};

export default App;