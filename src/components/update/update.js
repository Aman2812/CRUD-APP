import React, {useState, useEffect} from 'react'
import {Form, Button} from 'semantic-ui-react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {useNavigate} from 'react-router-dom'

const Update = () => {

  let navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const {id} = useParams();


  const fetchvalue = async () => {
    const res = await axios.get(`https://621dd77f849220b1fc86bb99.mockapi.io/Crud`)
     res.data.map((j)=>{
      if(j.id === id){
        setFirstName(j.firstName)
        setLastName(j.lastName)
      }
    })
  }

  useEffect(()=>{
    fetchvalue();
  }, [])



    const sendDataToAPI = () => {
      axios.put(`https://621dd77f849220b1fc86bb99.mockapi.io/Crud/${id}`, {
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
            <input placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
            </Form.Field>
            <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
        </Form>
    </div>
  )
}

export default Update