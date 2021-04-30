import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import Modal from 'react-modal';
import * as yup from 'yup';

const INITIAL_FORM_VALUES = {
    username: '',
    email: '',
    password: ''
} 

const INITIAL_FORM_ERRORS = {
    username: '',
    email: '',
    password: ''
}

const schema = yup.object().shape({
    username: yup.string().required('required'),
    email: yup.string().required('required'),
    password: yup.string().required('required')
})


export default function SignUpModal(props) {
    const {modalIsOpen, setModalIsOpen, submitS, setUserID} = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS);
    const [disabled, setDisabled] = useState(true);
    const { push } = useHistory();


    const onSubmit = event => {
        event.preventDefault();
        schema.validate(values)
        .then(_ => {
        submitS(values, push, setUserID);
        setModalIsOpen(false);
        setValues(INITIAL_FORM_VALUES);
        setErrors(INITIAL_FORM_ERRORS);
        })
        .catch(err => {
            console.log(err)
        })
    }

    const onChange = event => {
        const {name, value} = event.target
        setValues({
            ...values,
            [name]: value
        })

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

    
    return (
        <Modal isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}
        portalClassName='modal'
        style={
            {
                overlay: {
                    backgroundColor: 'rgba(0,0,0,.7)'
                },
                content: {
                    margin: 'auto',
                    color: 'orange',
                    maxWidth: '22em',
                    minHeight: '15%',
                    maxHeight: '40%',
                }
            }
        }
        >
            <form onSubmit={onSubmit}>
                <button style={{float: 'right'}} onClick={()=> setModalIsOpen(false)}>X</button>
                <h2>User Sign Up</h2>
                <br/>
                <div>
                    <label>Username: </label>
                    <input
                        onChange={onChange}
                        value={values.username}
                        name='username'
                        type='text'
                        error={errors.username}
                    />

                    <label>Email: </label>
                    <input
                        onChange={onChange}
                        value={values.email}
                        name='email'
                        type='email'
                        error={errors.email}
                    />
                    <br/>

                    <label>Password: </label>
                        <input
                        onChange={onChange}
                        value={values.password}
                        name='password'
                        type='text'
                        error={errors.password}
                    />

                    <button variant={disabled ? 'disabled' : 'success'} id='submit-button'>Register</button>
                </div>
            </form> 
        </Modal>
    )
}