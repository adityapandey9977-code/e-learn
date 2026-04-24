import { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { apiurlcontact} from '../../ApiUrl';

function Contact(){
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[subject,setSubject]=useState()
    const[message,setMessage]=useState()
    const[output,setOutput]=useState()

    const buttonHandle=()=>{
        const contactDetails={"name":name,"email":email,"subject":subject,"message":message};
        
        axios.post(apiurlcontact+"save",contactDetails).then((res)=>{
            //setOutput("Data Saved");
            setEmail("");
            setSubject("");
            setMessage("");
            alert("Message sent successfully!");
        }).catch((e)=>{alert(e)})

    }


    return (
        <>
    
        <div class="container-fluid page-header" style={{marginBottom: "90px"}}>
        <div class="container">
            <div class="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                <h3 class="display-4 text-white text-uppercase">Contact</h3>
                <div class="d-inline-flex text-white">
                    <p class="m-0 text-uppercase"><a class="text-white" href="">Home</a></p>
                    <i class="fa fa-angle-double-right pt-1 px-3"></i>
                    <p class="m-0 text-uppercase">Contact</p>
                </div>
            </div>
        </div>
    </div>

             <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="text-center mb-5">
                <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Contact</h5>
                <h1>Contact For Any Query</h1>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-8">
                    <div class="bg-secondary rounded p-5">
                        <h4 class="text-center mb-4"> </h4>
                        <form onSubmit={buttonHandle}>
                            <div class="control-group mb-3">
                                <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control border-0 p-4" placeholder="Your Name" />
                            </div>
                            <div class="control-group mb-3">
                                <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control border-0 p-4" placeholder="Your Email" />
                            </div>
                            <div class="control-group mb-3">
                                <input required value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" class="form-control border-0 p-4" placeholder="Subject" />
                            </div>
                            <div class="control-group mb-3">
                                <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} class="form-control border-0 py-3 px-4" rows="5" placeholder="Message" ></textarea>
                            </div>
                            <div class="text-center">
                                <button class="btn btn-primary py-3 px-5" type="submit">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        </>
    );
}

export default Contact;