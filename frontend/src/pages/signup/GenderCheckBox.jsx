import React from 'react'

function GenderCheckBox() {
  return (
    <div className='flex'>
      <div className='form-control p-2'>
        <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text'>Male</span>
          <input type="checkbox"  class="checkbox checkbox-info"/>
        </label>
      </div>
      <div className='form-control p-2'>
      <label className={`label gap-2 cursor-pointer`}>
          <span className='label-text'>Female</span>
          <input type="checkbox"  class="checkbox checkbox-info"/>
        </label>
      </div>
      
    </div>
  )
}
export default GenderCheckBox

// ! STARTED CODE
// export default GenderCheckBox


// import React from 'react'

// function GenderCheckBox() {
//   return (
//     <div className='flex'>
//       <div className='form-control p-2'>
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Male</span>
//           <input type="checkbox"  class="checkbox checkbox-info"/>
//         </label>
//       </div>
//       <div className='form-control p-2'>
//       <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Female</span>
//           <input type="checkbox"  class="checkbox checkbox-info"/>
//         </label>
//       </div>
      
//     </div>
//   )
// }

// export default GenderCheckBox

