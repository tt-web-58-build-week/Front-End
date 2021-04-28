import React,{useState} from 'react';
import Modal from 'react-modal';
import './Modal.css'
import axios from "axios"

export default function SignUpModal(props) {
    const {modalIsOpen, setModalIsOpen} = props
    const [formValues, setFormValues] = useState({})

    const apiURL = "https://tt-web58-recipe-app.herokuapp.com/swagger-ui.html"

    const onChange = event => {
        const {name, value} = event.target
        setFormValues({...formValues, [name]: value})
    }

    const onSubmit = event => {
        event.preventDefault();
        setModalIsOpen(false)
    }

    const doIt = () => {
        axios.get(apiURL)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

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
                    <label>Email: </label>
                    <input
                        name='email'
                        type='text'
                        onChange={onChange}
                    />
                    <br/>

                    <label>Password: </label>
                        <input
                        name='password'
                        type='text'
                        onChange={onChange}
                    />

                    <button id='submit-button'>Register</button>
                </div>
            </form>
            <button onClick={doIt}>console log the users api</button>
        </Modal>
    )
}