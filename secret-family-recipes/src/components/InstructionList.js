import React from 'react'
import Instruction from './Instruction'

export default function InstructionList({formValues, setFormValues}) {
    return (
        <div className="instructionList">
            <ul>
                { formValues.instructions.length > 0 ? 

                    formValues.instructions.map((element, index) =>
                        <Instruction instructionName={element.instructionName} key={index} instruction={element} formValues={formValues} setFormValues={setFormValues}/>    
                    ) : <div></div> 
                }
            </ul>
        </div>
    )
}