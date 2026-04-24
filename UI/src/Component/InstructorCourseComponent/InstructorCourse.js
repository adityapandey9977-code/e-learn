import { createContext, useEffect, useState } from 'react';
import './InstructorCourse.css';
import axios from 'axios';
import { apiurlcourse } from '../../ApiUrl';
import { useNavigate } from 'react-router-dom';
import UpdateCourse from '../UpdateCourseComponent/UpdateCourse';
    const cid=createContext();
function InstructorCourse(){
    
    const navigate=useNavigate();
    const [course,setCourse]=useState([]);
    const [reload, setReload] = useState(false);
    useEffect(()=>{
        
        axios.get(apiurlcourse+"fatch?instructorid="+localStorage.getItem('_id')).then((response)=>{
                console.log(response.data);
                setCourse(response.data);
                //navigate("/login");
                //alert();
           })
    },[reload])

    const updateUser=(s,id)=>{
        alert(s);
        if(s=='update')
        {

            navigate('/updatecourse', {
            state: { aid: id }
            });
            /* axios.patch(apiurlcourse+"update?_id="+id,{status:1}).then((res)=>{
                alert("verified successfully");
                setReload(!reload);
            }) */
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
      <th scope="col">_id</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Duration</th>
      
      
      <th scope="col">Status</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {course.map((row)=>(
    <tr>
      <th scope="row">{row._id}</th>
      <td>{row.title}</td>
      <td>{row.price}</td>
      <td>{row.duration}</td>
      <td>
        {row.status==1?"Apporved":"Pending"}

      </td>
        
      
            <td>
                <a className='btn btn-warning' style={{ color: 'white' }} onClick={() => { updateUser('update', row._id) }}>Update</a>
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

export default InstructorCourse;
export {cid};