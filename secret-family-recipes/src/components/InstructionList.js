import React from 'react'
import Instruction from './Instruction'

export default function InstructionList({instructions, setInstructions}) {
    return (
        <div className="instructionList">
            {instructions.length > 0 && <ol className="instruction-list">
                {instructions.map((element, index) => (
                    <Instruction instructionName={element.instructionName} key={index} instruction={element} instructions={instructions} setInstructions={setInstructions}/>    
                ))}
            </ol>}
        </div>
    )
}