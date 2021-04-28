import React,{useState} from 'react';
import Modal from 'react-modal';
import './Modal.css'
import axios from "axios"

export default function LoginModal(props) {
    const {modalIsOpen, setModalIsOpen} = props
    const [formValues, setFormValues] = useState({
        username: "",
        password: ""
    });

    const login = (e) => {
        e.preventDefault();
        axios
            .post("https://tt-web58-recipe-app.herokuapp.com/swagger-ui.html", )
            .then((res) => {
                console.log(res.data);
                localStorage.setItem(token, res.data.---);
                props.history.push("/userinfo");
            });
    }


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
                    minWidth: '20em',
                    width: '30%',
                    minHeight: '15%',
                    height: '20%',
                }
            }
        }
        >
            <form onSubmit={onSubmit}>
                <button style={{float: 'right'}} onClick={()=> setModalIsOpen(false)}>X</button>
                <h2>User Login</h2>
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

                    <button id='submit-button'>Login</button>
                </div>
            </form>
            <button id="do-it-button" onClick={doIt}>console log the users api</button>
        </Modal>
    )
}