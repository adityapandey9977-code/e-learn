import {useState,useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import {apiurluser} from '../../ApiUrl';

function Verify()
{
     //alert("verify");
    const { token } = useParams();
    const [output,setOutput] = useState();
    useEffect(()=>{
        axios.get(apiurluser+"verify/"+token).then((res)=>{
            setOutput(res.data.msg);
            alert("verify");
        }).catch((error)=>{
            console.log(error);
            setOutput("Error in Email Verification");
        });
    },[])

    return(
        <></>
    )
}

export default Verify;