import { useEffect, useState } from 'react';
import './ManageInstructor.css';
import { apiurluser } from '../../ApiUrl';
import axios from 'axios';
import {Link} from 'react-router-dom'

function ManageInstructor(){

    
           const [user,setUser]=useState([]);

    useEffect(()=>{
        
        axios.get(apiurluser+"fatch?role=pending_instructor").then((response)=>{
                console.log(response.data);
                setUser(response.data);
                //navigate("/login");
                //alert();
        
            })
    },[])

    const approveInstructor=(id)=>{
        alert(id);
                axios.patch(apiurluser+"update?_id="+id,{role:"instructor"}).then((res)=>{
                        alert(res.data.message);
                }).catch((e)=>{alert(e)})
            }
                const deleteInstructor=(id)=>{
        alert(id);
                axios.delete(apiurluser+"del?_id="+id).then((res)=>{
                        alert(res.data.message);
                }).catch((e)=>{alert(e)})
            }
    
    return (
        <>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">_id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Status</th>
      <th scope="col">Approve</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {user.map((row)=>(
    <tr>
      <th scope="row">{row._id}</th>
      <td>{row.name}</td>
      <td>{row.email}</td>
      <td>{row.city}</td>
      <td>{(row.status==1)?"Verifed":"Pending"}</td>
      <td><Link className='btn btn-success' onClick={()=>{approveInstructor(row._id)}}>Approve</Link></td>
      <td><Link className='btn btn-danger' onClick={()=>{deleteInstructor(row._id)}}>Delete</Link></td>
    </tr>
    ))}
    
  </tbody>
</table>
        </>
    );

}

export default ManageInstructor;