import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    height: 70%;

    input {
        width: 100%;
        height: 4rem;
        font-size: 2rem;
        border: none;
        padding: 10px;

        @media (max-width: 768px) {
            height: 6rem;
            font-size: 3rem;
        }
    }
    
    button {
        display: inline-block;
        color: ${pr => pr.theme.lightGray};
        letter-spacing: 1px;
        height: 50px;
        width: 150px;
        margin: 10px 20px;
        border-radius: 0;
        background-color: ${pr => pr.theme.darkGray};
        border: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        transition: all .5s ease-out;
        margin: 0 auto;
    
        &:hover {
            background-color: ${pr => pr.theme.lightGray};
            border: 3px solid ${pr => pr.theme.gray};
            color: ${pr => pr.theme.gray};
            transition: all .1s ease-in;
            }
        }
        .cancelButton {
            background-color: ${pr => pr.theme.red};

            &:hover {
                border: 3px solid ${pr => pr.theme.red};
                color: ${pr => pr.theme.red};
            }
        }
`

const INITIAL_FORM_VALUES = {
    username: '',
    password: ''
} 

const INITIAL_FORM_ERRORS = {
    username: '',
    password: ''
}

const schema = yup.object().shape({
    username: yup.string().required('required'),
    password: yup.string().required('required')
})


export default function LoginModal(props) {
    const {modalIsOpen, setModalIsOpen, submitL: submit, setUserID } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory();


    const onSubmit = event => {
        event.preventDefault()
        console.log(values)
        schema.validate(values)
        .then(_ => {
        submit(values, push, setUserID);
        setModalIsOpen(false)
        setValues(INITIAL_FORM_VALUES);
        setErrors(INITIAL_FORM_ERRORS) 
        })
        .catch(err => {
            console.error(err)
        })       
    }

    const onChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
             [name]: value
            })
        //could insert validation schema here

        yup.reach(schema, name)
            .validate(value)
            .then(_ => {
                setErrors({
                    ...errors,
                    [name]: ''
                })
            })
            .catch(err => {
                setErrors({ 
                    ...errors,
                    [name]: err.errors[0]
                })
                    setDisabled(true)
            })
    }

    useEffect(() => {
        schema.validate(values)
            .then(isValid => setDisabled(!isValid))
            .catch(err => console.log(err))
    })
    // const doIt = () => {
    //     axios.get(apiURL)
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // }

    return (
        <Modal isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        className='loginModal'
        portalClassName='modal'
        style={
            {
                overlay: {
                    backgroundColor: 'rgba(16, 20, 16, .98)',
                    borderRadius: 'none',
                },
                content: {
                }
            }
        }
        >
            <h2>Welcome back, foodies!</h2>
            <StyledForm onSubmit={onSubmit}>
                <label>Username <br/>
                        <input
                            onChange={onChange}
                            value={values.username}
                            name='username'
                            type='text'
                            error={errors.username}
                            />
                    </label>
                    <label>Password <br/>
                        <input
                            onChange={onChange}
                            value={values.password}
                            name='password'
                            type='password'
                            error={errors.password}
                        />
                    </label>
                <button variant={disabled ? 'disabled' : 'success'}>LOGIN</button>
                <button className="cancelButton" onClick={()=> setModalIsOpen(false)}>CANCEL</button>
            </StyledForm>
            {/* <button id="do-it-button" onClick={doIt}>console log the users api</button> */}
        </Modal>
    )
}