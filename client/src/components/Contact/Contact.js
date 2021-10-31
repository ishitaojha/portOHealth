import React,{useState} from 'react'
import './Contact.css';
import axios from 'axios';
const Contact = () => {
    const [Name, setName] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            Name:Name,
            Email:email,
            Message:message
        }
        axios.post('http://localhost:5000/contact',data)
        .then(resp=> console.log(resp))
        .catch(err=>console.log(err))
        console.log(Name,email,message);
    }
    return (
        <div className="contactWrapper" id="chat">
            <div className="wrapper">
                <h2 className="header">CONTACT US</h2>
                <form action="" method="POST" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input type="text" name="Name" onChange={e=>setName(e.target.value)} value={Name} id="name" placeholder="First and Last" required minLength="3" maxLength="25" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" name="Email"  onChange={e=>setemail(e.target.value)} value={email} id="email" placeholder="email@domain.tld" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea name="Message" id="message"  onChange={e=>setmessage(e.target.value)} value={message} rows="5" placeholder="Type your message here...."></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="submit"><i className="far fa-paper-plane"></i>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
