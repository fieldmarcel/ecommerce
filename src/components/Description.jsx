import React, { useState } from 'react'

const Description = ({describe}) => {
const [see, setsee] = useState(false)

const handlesetsee =()=>{
    setsee(!see)
}

  return (
    <div>
 <button type='button' onClick={()=>handlesetsee({describe})} className='sm:hidden bg-gray-100 px-2 py-1 text-sm rounded-full'>
 {`${see? "Hide Description" :"See description"}`}   </button>

        <p className={`${see? "block":"hidden"} sm:hidden  text-gray-700 text-sm`}  >{describe}</p>
       <p className='hidden sm:block sm:text-md sm:w-4/5'>{describe}</p>
    </div>
  )
}

export default Description

// Use onClick={handlesetsee} when you don't need to pass any arguments and just want the function to run when clicked.
// Use onClick={() => handlesetsee({describe})} when you need to pass arguments to the function based on the click event.
// In your specific case, handlesetsee doesn’t seem to need {describe} as an argument (since describe is already available as a prop), so the onClick={handlesetsee} approach should suffice.