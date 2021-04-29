  
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

export default function Instruction({instructionName, instruction, formValues, setFormValues}) {

    const deleteItem = (event) => {
        // setIngredients(ingredients.filter((el) => el.ingredientId !== ingredient.ingredientId))
        event.preventDefault()
        console.log(formValues.instructions)
        let example = formValues.instructions.filter((el) => el.instructionId !== instruction.instructionId)
        console.log(example)
        setFormValues({...formValues, instructions: example})
        // console.log(ingredient)
    }

    return (
        <InstructionItem>
            <InstructionDescription className="instruction-item">{instructionName}</InstructionDescription>
            <DeleteButton onClick={deleteItem}className="trash-btn">Delete</DeleteButton>
        </InstructionItem>
    )
}