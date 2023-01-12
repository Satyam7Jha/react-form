import React from 'react'
import "./component.css"

export default function FormType({
    setFormType,formType
}) {
  return (
    <div className='form-type-container rowDirection'>
        <div style={{color:formType=="Personal" ?"#3e51b4":"black",borderBottom:"Personal"==formType ?"2px solid":"",borderColor:formType=="Personal" ?"#3e51b4":""
        
        }} className='formCat' id="Personal" selected={formType} onClick={()=>setFormType("Personal")}>
            Personal
        </div>
        <div style={{color:formType=="Business" ?"#3e51b4":"black",borderBottom:"Business"==formType ?"2px solid":"",borderColor:formType=="Personal" ?"#3e51b4":""
        
    }} className='formCat' id="Business" selected={formType} onClick={()=>setFormType("Business")}>
            Business
        </div>

    </div>
  )
}
