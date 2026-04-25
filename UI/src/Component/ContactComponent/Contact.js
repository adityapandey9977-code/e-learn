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
    
        <div className="container-fluid page-header" style={{marginBottom: "90px"}}>
        <div className="container">
            <div className="d-flex flex-column justify-content-center" style={{minHeight: "300px"}}>
                <h3 className="display-4 text-white text-uppercase">Contact</h3>
                <div className="d-inline-flex text-white">
                    <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                    <i className="fa fa-angle-double-right pt-1 px-3"></i>
                    <p className="m-0 text-uppercase">Contact</p>
                </div>
            </div>
        </div>
    </div>

             <div className="container-fluid py-5">
        <div className="container py-5">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Contact</h5>
                <h1>Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="bg-secondary rounded p-5">
                        <h4 className="text-center mb-4"> </h4>
                        <form onSubmit={buttonHandle}>
                            <div className="control-group mb-3">
                                <input required value={name} onChange={(e)=>setName(e.target.value)} type="text" className="form-control border-0 p-4" placeholder="Your Name" />
                            </div>
                            <div className="control-group mb-3">
                                <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className="form-control border-0 p-4" placeholder="Your Email" />
                            </div>
                            <div className="control-group mb-3">
                                <input required value={subject} onChange={(e)=>setSubject(e.target.value)} type="text" className="form-control border-0 p-4" placeholder="Subject" />
                            </div>
                            <div className="control-group mb-3">
                                <textarea required value={message} onChange={(e)=>setMessage(e.target.value)} className="form-control border-0 py-3 px-4" rows="5" placeholder="Message" ></textarea>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
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