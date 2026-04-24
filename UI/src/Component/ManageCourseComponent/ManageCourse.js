import { useEffect, useState } from 'react';
import './ManageCourse.css';
import axios from 'axios';
import { apiurlcourse } from '../../ApiUrl';

function ManageCourse(){

    const [course,setCourse]=useState([]);
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        
        axios.get(apiurlcourse+"fatch").then((response)=>{
                console.log(response.data);
                setCourse(response.data);
                //navigate("/login");
                //alert();
           })
    },[reload])

    const updateUser=(s,id)=>{
        //alert(s);
        if(s=='verify')
        {
            axios.patch(apiurlcourse+"update?_id="+id,{status:1}).then((res)=>{
                alert("Approved successfully");
                setReload(!reload);
            })
        }
        else if(s=='block')
        {
            axios.patch(apiurlcourse+"update?_id="+id,{status:0}).then((res)=>{
                alert("Rejected successfully");
                setReload(!reload);
            })
        }
        else
        {
             axios.delete(apiurlcourse+"delete?_id="+id).then((res)=>{
                alert("Deleted successfully");
                setReload(!reload);
            }).catch((e)=>{alert(e)})
        }
        
    }
    
    return (
        <>
                <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">CourseId</th>
      <th scope="col">InstructorId</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Duration</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {course.map((row)=>(
    <tr>
      <th scope="row">{row._id}</th>
      <td>{row.instructorid}</td>
      <td>{row.title}</td>
      <td>{row.price}</td>
      <td>{row.duration}</td>
      <td>{row.description}</td> 

            <td>
                {
                    (row.status == 0) ? <a className='btn btn-success' style={{ color: 'white' }} onClick={() => { updateUser('verify', row._id) }}>Approve</a> : <a className='btn btn-warning' style={{ color: 'white' }} onClick={() => { updateUser('block', row._id) }}>Reject</a>
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

export default ManageCourse;