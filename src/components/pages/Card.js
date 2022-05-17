import React from 'react';
import CustomInput from '../atom/CustomInput';
import { useState } from 'react';


const Card = ({submit,change , inputs}) => {
 return (
  <>
   <CustomInput label="Card Number" type="text" name="no" value={inputs.no || ""} onChange={change} />
   <CustomInput label="Name" type="text" name="name" value={inputs.name || ""} onChange={change} />
   <CustomInput label="Expiry" type="text" name="expiry" value={inputs.expiry || ""} onChange={change} />
   <CustomInput label="Cvv" type="text" name="cvv" value={inputs.cvv || ""} onChange={change} />
  </>
 );
}

export default Card;