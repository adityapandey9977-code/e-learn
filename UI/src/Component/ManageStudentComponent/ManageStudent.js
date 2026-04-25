import { useEffect, useState } from 'react';
import './ManageStudent.css';
import axios from 'axios';
import { apiurluser } from '../../ApiUrl';

function ManageStudent(){

    const [user,setUser]=useState([]);
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        
        axios.get(apiurluser+"fatch?role=instructor&role=student").then((response)=>{
                console.log(response.data);
                setUser(response.data);
                //navigate("/login");
                //alert();
           })
    },[reload])

    const updateUser=(s,id)=>{
        alert(s);
        if(s=='verify')
        {
            axios.patch(apiurluser+"update?_id="+id,{status:1}).then((res)=>{
                alert("verified successfully");
                setReload(!reload);
            })
        }
        else if(s=='block')
        {
            axios.patch(apiurluser+"update?_id="+id,{status:0}).then((res)=>{
                alert("Blocked successfully");
                setReload(!reload);
            })
        }
        else
        {
             axios.delete(apiurluser+"delete?_id="+id).then((res)=>{
                alert("Deleted successfully");
                setReload(!reload);
            }).catch((e)=>{alert(e)})
        }
        
    }
    
    return (
        <>
                <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">_id</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Status</th>
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
            <td>
                {
                    (row.status == 0) ? <a className='btn btn-success' style={{ color: 'white' }} onClick={() => { updateUser('verify', row._id) }}>Verify</a> : <a className='btn btn-warning' style={{ color: 'white' }} onClick={() => { updateUser('block', row._id) }}>Block</a>
                }
            </td>
            <td>
                <a className='btn btn-danger' style={{ color: 'white' }} onClick={() => { updateUser('delete', row._id) }}>Delete</a>
            </td>
    </tr>
    ))}
    
  </tbody>
</table>
        </>
    );
}

export default ManageStudent;