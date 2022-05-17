import React, { useState } from "react";
import Button from "../atom/CustomButton";
import CustomInput from "../atom/CustomInput";
import Address from "./Address";
import Card from "./Card";
import GetData from "./GetData";
import {
 BrowserRouter as Router,
 Switch,
 Route,
 Link
} from "react-router-dom";


const PageOne = () => {
 const [option1, setOption1] = useState(false);
 const [option2, setOption2] = useState(false);
 const [inputs, setInputs] = useState({});
 const [data , setData] = useState({});

 function open1() {
  setOption1(!option1);
  setOption2(false);
 }
 function open2() {
  setOption2(!option2);
  setOption1(false);
 }
 function handleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  setInputs(values => ({ ...values, [name]: value }))

 }
 function handleSubmit(event) {
  event.preventDefault();
  console.log(inputs);
  sessionStorage.setItem("formData", JSON.stringify(inputs));
  setInputs({});
 }

 function getData() {
  console.log("items");
  let x = sessionStorage.getItem("formData" , inputs );
  setData(JSON.parse(x));
 }

 return (
  <>
   <div className="mx-auto text-center mt-24">

    <form onSubmit={handleSubmit}>
     <CustomInput label="First Name" type="text" name="fN" value={inputs.fN || ""} onChange={handleChange} />
     <CustomInput label="Last Name" type="text" name="lN" value={inputs.lN || ""} onChange={handleChange} />
     <CustomInput label="Email" type="email" name="email" value={inputs.email || ""} onChange={handleChange} />
     <CustomInput label="Phone" type="text" name="phone" value={inputs.phone || ""} onChange={handleChange} />
     {option1 ? <Address change={handleChange} inputs={inputs} /> : null}
     {option2 ? <Card change={handleChange} inputs={inputs} /> : null}
     <div className="space-x-10">
      <Button btn="Option 1" type="button" onClick={open1} />
      <Button btn="Option 2" type="button" onClick={open2} />
     </div>
     <div className="mt-10 space-x-10">
      <Button btn="Submit" type="submit" />
      <Link to="/get">
      <Button btn="Get Data" type="button"onClick={getData}  />
      </Link>

     
     </div>
    </form>
   </div>
  </>
 );
}

export default PageOne;