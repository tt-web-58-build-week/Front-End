import React,{useState, useEffect} from 'react';
import Modal from 'react-modal';
import * as yup from 'yup';
import { useHistory } from 'react-router';

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
    const {modalIsOpen, setModalIsOpen, submit, setUserID } = props
    const [values, setValues] = useState(INITIAL_FORM_VALUES);
    const [errors, setErrors] = useState(INITIAL_FORM_ERRORS)
    const [disabled, setDisabled] = useState(true)
    const { push } = useHistory();





    // const apiURL = "https://tt-web58-recipe-app.herokuapp.com/api/"

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
                <h2>User Login</h2>
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
                    <br/>

                    <label>Password: </label>
                        <input
                        onChange={onChange}
                        value={values.password}
                        name='password'
                        type='password'
                        error={errors.password}
                        />

                    <button variant={disabled ? 'disabled' : 'success'}>Login</button>
                </div>
            </form>
            {/* <button id="do-it-button" onClick={doIt}>console log the users api</button> */}
        </Modal>
    )
}