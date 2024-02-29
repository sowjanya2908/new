'use client'
import React, { useState } from 'react';

const YourComponent = () => {
  const [name, setname] = useState('');
  const [firstnameerror, setfirstnameerror] = useState('');

  const [lastname, setlastname]= useState('')
  const [lastnameerror, setlastnameerror] = useState('');

  const [password, setpassword] = useState('');
  const [passworderror, setpassworderror] = useState('');

  const [address, setaddress]= useState('')
  const [addresserror ,setaddreserror ]= useState('');

  const [email, setemail]= useState('')
  const [emailerror ,setemailerror]= useState('');
  
  const [phonenumber, setphonenumber]= useState('')
  const [phonenumbererror,setphonenumbererror]= useState('');

  const firstnamechange = (e: any) => {
    const value = e?.target?.value
    setname(value);
    if (value === '') {
      setfirstnameerror("firstname is required")
    } else {
      setfirstnameerror('');
    }
  };

  const lastnamechange = (e: any) => {
    const value = e?.target?.value
    setlastname(value);
    if (value === '') {
      setlastnameerror("lastname is required")
    } else {
      setlastnameerror('');
    }
  };

  const passwordchange = (e: any) => {
    const value = e?.target?.value
    setpassword(value);
    if (value === '') {
      setpassworderror("password is required")
    } else {
      setpassworderror('');
    }
  };


  const Addresschange =(e:any)=>{
    const value=e.target.value
    setaddress(value);
    if (value ===''){
      setaddreserror("Address is Required");
    }else {
      setaddreserror('');
    }
 
  }
 const emailchange= (e:any)=>{
  const value=e.target.value
  setemail(value);
  if (value===''){
    setemailerror("Email is Reauired")
  }else{ 
    setemailerror('');
  }}

  const phonenumberchange = (e:any) => {
    const value = e.target.value;
    const numericValue = value.replace(/\D/g, '');
    const truncatedValue = numericValue.slice(0, 10);
    setphonenumber(truncatedValue);
  
    if (truncatedValue === '') {
      setphonenumbererror("Phone number is required");
    } else if (truncatedValue.length !== 10) {
      setphonenumbererror("Phone number must be 10 digits");
    } else {
      setphonenumbererror('');
    }
  };
  
  
 

 return (
    <div className='center-container'>
      <form>
        <h1>create user page's</h1>
        <div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
            FirstName:
          </label>
          <input
            type="text"
            className={`form-control ${firstnameerror ? 'border-danger' : ''}`}
            id="exampleFormControlInput1"
            placeholder="Enter name"
            onChange={firstnamechange}
            onBlur={firstnamechange}
            value={name}
            style={{ border: firstnameerror ? '1px solid #dc3545' : '1px solid #ced4da' }}
          />
        </div>
        {firstnameerror && (
          <div style={{ color: '#dc3545' }}>{firstnameerror}</div>
        )}

<div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
           LastName:
          </label>
          <input
            type="text"
            className={`form-control ${lastnameerror ? 'border-danger' : ''}`}
            id="exampleFormControlInput1"
            placeholder="Enter name"
            onChange={lastnamechange}
            onBlur={lastnamechange}
            value={lastname}
            style={{ border: lastnameerror ? '1px solid #dc3545' : '1px solid #ced4da' }}
          />
        </div>
        {lastnameerror && (
          <div style={{ color: '#dc3545' }}>{lastnameerror}</div>
        )}

<div>
          <label htmlFor="exampleFormControlInput1" className="form-label">
           Password:
          </label>
          <input
            type="text"
            className={`form-control ${passworderror ? 'border-danger' : ''}`}
            id="exampleFormControlInput1"
            placeholder="Enter name"
            onChange={passwordchange}
            onBlur={passwordchange}
            value={password}
            style={{ border: passworderror ? '1px solid #dc3545' : '1px solid #ced4da' }}
          />
        </div>
        {passworderror && (
          <div style={{ color: '#dc3545' }}>{passworderror}</div>
        )}


        <div>
          <label htmlFor="eampleFormControlInput1" className="form-label">
            Address
          </label>
          <input type="text"
            className={`form-control ${addresserror ?'border-danger':''}`}
            id="exampleFormControlInput1"
            placeholder="address"
            onChange={Addresschange}
            onBlur={Addresschange}
            value={address}
            style={{ border: addresserror ? '1px solid #dc3545' : '1px solid #ced4da' }}
          />
        </div>
       {addresserror &&(
          <div style={{ color: '#dc3545' }}>{addresserror}</div>
       )}

       <div>
        <label htmlFor="eampleFormControlInput1" className="from-label">
          Email
          </label>
        <input type="text"
        className={`form-control ${emailerror ?'border-danger':''}`}
            id="exampleFormControlInput1"
            placeholder="email"
          onChange={emailchange}
          onBlur={emailchange}
          value={email}
          style={{ border: emailerror ? '1px solid #dc3545' : '1px solid #ced4da' }}
          />
          </div>
       {emailerror && (
        <div style={{color:'#dc3545'}}>{emailerror}</div>
       )}  
        <br />

        <div>
        <label htmlFor="eampleFormControlInput1"> 
          Phone Number
          </label>
        <input type="tel"
            id="exampleFormControlInput1"
        placeholder="phonenumber"
          onChange={phonenumberchange} 
          onBlur={phonenumberchange}
          value={phonenumber}
          style={{ border: phonenumbererror ? '1px solid #dc3545' : '1px solid #ced4da' }}
          />
          </div>
        {phonenumbererror &&(
          <div style={{color:'#dc3545'}}>{phonenumbererror}</div>  
                )}
      </form>
    </div>
  );
};
 
export default YourComponent;
 