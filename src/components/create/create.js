import React, {useState} from 'react'
import {Form, Button} from 'semantic-ui-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Create = () => {

    let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');


    const sendDataToAPI = () => {
        axios.post(`https://621dd77f849220b1fc86bb99.mockapi.io/Crud`, {
            firstName,
            lastName
        }).then(()=>{
            navigate('/read')
        })
    }

    
  return (
    <div>
        <Form>
            <Form.Field>
            <label>First Name</label>
            <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} required/>
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} required/>
            </Form.Field>
            <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
        </Form>
    </div>
  )
}

export default Create