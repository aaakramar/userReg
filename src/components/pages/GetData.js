import React, { useEffect, useState } from "react";

const GetData = (props) => {
 const [data , setData] =  useState({});
 useEffect(()=>{
  function getData() {
   let x = sessionStorage.getItem("formData" , data );
   setData(JSON.parse(x));
  }
  getData();
 },[])

 return(
 <>
 <div className="text-center">
 <p className="mt-24 mb-16">GetData</p>
 <ul>
  <li>{data.fN? <h3>First Name : {data.fN}  </h3> : null}</li>
  <li>{data.lN? <h3>Last Name : {data.lN}  </h3> : null}</li>
  <li>{data.email? <h3>Email : {data.email}  </h3> : null}</li>
  <li>{data.phone? <h3>Phone : {data.phone}  </h3> : null}</li>
  <li>{data.name? <h3>Card Name : {data.name}  </h3> : null}</li>
  <li>{data.no? <h3>Card No : {data.no}  </h3> : null}</li>
  <li>{data.cvv? <h3>Cvv : {data.cvv}  </h3> : null}</li>
  <li>{data.ad1? <h3>Address One : {data.ad1} </h3> : null}</li>
  <li>{data.ad2? <h3>Address Two : {data.ad2}  </h3> : null}</li>
  <li>{data.city? <h3>City : {data.city}  </h3> : null}</li>
  <li>{data.state? <h3>State : {data.state}  </h3> : null}</li>
  <li>{data.zip? <h3>Zip : {data.zip}  </h3> : null}</li>
  <li>{data.country? <h3>Country : {data.country}  </h3> : null}</li>
</ul>
</div>
 </>
 );
}

export default GetData;