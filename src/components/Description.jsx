import React, { useState } from 'react'

const Description = ({describe}) => {
const [see, setsee] = useState(false)

const handlesetsee =()=>{
    setsee(!see)
}

  return (
    <div>

        <p className={`${see? "block":"hidden"} sm:w-3/4 text-gray-700 text-sm`}  >{describe}</p>
        <button type='button' onClick={()=>handlesetsee({describe})} className='bg-gray-100 px-2 text-sm rounded-full'>
          {`${see? "Hide Description" :"See description"}`}   </button>
    </div>
  )
}

export default Description