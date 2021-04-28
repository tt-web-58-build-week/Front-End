  
import React from 'react'
import styled from 'styled-components'

const InstructionItem = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`

const InstructionDescription = styled.li`
    width: 185px;
    margin: 3px 15px;
`

const DeleteButton = styled.button`
    max-height: 60%;
`

export default function Instruction({instructionName, instruction, instructions, setInstructions}) {



    const deleteItem = () => {
        setInstructions(instructions.filter((el) => el.instructionId !== instruction.instructionId))
    }

    return (
        <InstructionItem>
            {console.log(instruction)}
            <InstructionDescription className="instruction-item">{instructionName}</InstructionDescription>
            <DeleteButton onClick={deleteItem}className="trash-btn">Delete</DeleteButton>
        </InstructionItem>
    )
}