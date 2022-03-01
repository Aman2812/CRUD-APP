import React,{useEffect, useState} from 'react'
import { Table, Button } from 'semantic-ui-react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Read = () => {

    const [apiData, setDataApi] = useState([])

    useEffect(()=>{
        axios.get(`https://621dd77f849220b1fc86bb99.mockapi.io/Crud`)
        .then((getData)=>{
        setDataApi(getData.data);
        })
    }, [])


    
    const handleDelete = (id) => {
        axios.delete(`https://621dd77f849220b1fc86bb99.mockapi.io/Crud/${id}`)
        const temp = apiData.filter((j)=>{
            return j.id !== id
        })
        setDataApi(temp)
    }


  return (
    <div>
        <Table celled>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>ID</Table.HeaderCell>
                    <Table.HeaderCell>First Name</Table.HeaderCell>
                    <Table.HeaderCell>Last Name</Table.HeaderCell>
                    <Table.HeaderCell>Update</Table.HeaderCell>
                    <Table.HeaderCell>Delete</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {
                    apiData.map((i)=>{
                        return(
                            <Table.Row>
                                <Table.Cell>{i.id}</Table.Cell>
                                <Table.Cell>{i.firstName}</Table.Cell>
                                <Table.Cell>{i.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to={`/update/${i.id}`}>
                                        <Button color='green'>Update</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                        <Button color='red' onClick={()=>handleDelete(i.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                
            </Table.Body>
            </Table>
    </div>
  )
}

export default Read