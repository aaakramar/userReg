import React from 'react';
import CustomInput from '../atom/CustomInput';

const Address = ({submit,change , inputs}) => {
 return (
 <>
 <div>
 <CustomInput label="Address line 1" type="text" name="ad1" value={inputs.ad1 || ""} onChange={change} />
 <CustomInput label="Address line 2" type="text" name="ad2" value={inputs.ad2 || ""} onChange={change} />
 <CustomInput label="City" type="text" name="city" value={inputs.city || ""} onChange={change}/>
 <CustomInput label="State" type="text" name="state" value={inputs.state || ""} onChange={change} />
 <CustomInput label="Zip" type="text" name="zip" value={inputs.zip || ""} onChange={change}/>
 <CustomInput label="Country" type="text" name="country" value={inputs.country || ""} onChange={change}/>
 </div>
 </>
 );
}

export default Address;