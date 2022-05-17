import React from 'react';

const Button = ({btn , ...props}) => {
 return (
  <>
  <button className='bg-blue-500 px-5 py-5 rounded-lg text-16 font-medium text-white tracking-wider' {...props}>
   {btn}
   </button>
  </>
 );
}

export default Button;