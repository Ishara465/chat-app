import React from 'react'

function GenderCheckBox({onCheckboxChange,selectedGender}) {
  return (
    <div className='flex'>
      <div className='form-control p-2'>
        <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected" :""}`}>
          <span className='label-text'>Male</span>
          <input type="checkbox"  className="checkbox checkbox-info"
          checked={selectedGender === "male"}
          onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className='form-control p-2'>
      <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected" :""}`}>
          <span className='label-text'>Female</span>
          <input type="checkbox"  className="checkbox checkbox-info"
          checked={selectedGender === "female"}
          onChange={() => onCheckboxChange("female")}
          />
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
//           <input type="checkbox"  className="checkbox checkbox-info"/>
//         </label>
//       </div>
//       <div className='form-control p-2'>
//       <label className={`label gap-2 cursor-pointer`}>
//           <span className='label-text'>Female</span>
//           <input type="checkbox"  className="checkbox checkbox-info"/>
//         </label>
//       </div>
      
//     </div>
//   )
// }

// export default GenderCheckBox

