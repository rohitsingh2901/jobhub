import React, { useEffect, useState } from 'react'


const Contact = (props) => {
  const [name, setName] = useState('')
  const [email, setemail] = useState('')
  const [message, setMessage] = useState('')


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])


  const handleMessage = (e)=>{
    e.preventDefault();
    const credentials = {
      name,email,message
    };
    fetch('http://localhost:5000/contactus', {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {"Content-type": "application/json"}
    })
    .then(response => response.json()) 
    .then(json => {
      console.log(json)
      if(json.error){
        props.alert.alert("Something went wrong",'danger')
      }
      else{
        props.alert.alert("We will be in touch with you shortly",'success')
      }
    })
    .catch(err => {
      console.log(err)
      props.alert.alert("Some error occured",'danger')
    });

  }

  return (
    <div style={{"minHeight":"50vw"}}>
    <div className='w-100 h-100' id='contactDiv'>

        <div class="container ">
        <h1 class="font-extrabold text-center text-6xl pt-12">Contact Us</h1>
        <hr class="my-12" />
      </div>

      <div id="contact">
      <div class="container text-center">
        <small class="font-light text-center font-semibold text-gray-600"
          >Say Hello JobHub</small
        >
        <div class="flex items-center justify-content-center my-3">
          <h4 class="text-4xl font-extrabold">Reach us &nbsp;</h4>
          <h4 class="text-4xl font-extrabold text-red-600">here</h4>
        </div>
      </div>

      <div class="flex justify-around items-center py-12" id="id1234">
        <div>
          <div id="map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448227.35133808805!2d76.6998436734375!3d28.6364694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfcba3000006f%3A0xacce82ee0dfaaba1!2sJobs%20Hub!5e0!3m2!1sen!2sin!4v1688328246831!5m2!1sen!2sin" title='Embd'
          id='map'
           allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div>
        <div className="card my-4" id="cardDivC">
  <div className="row no-gutters">
    <div className="col-md-12">
      <h2 className='text-center font-extrabold my-4'>Send us a  <span className="sp"> message</span></h2>
      <hr></hr>
      <div className="card-body">
      <form id="form" onSubmit={handleMessage}>
          <div className="form-group ">
            <label className="font-medium" htmlfor="name">Name</label>
            <input
              required
              minLength={3}
              type="text"
              className="form-control"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              id="name"
              placeholder="Type your name"
            />
          </div>
          <div className="form-group my-3">
            <label className="font-medium" htmlfor="email">Email</label>
            <input
              required
              type="email"
              className="form-control"
              value={email}
              onChange={(e)=>setemail(e.target.value)}
              id="email"
              placeholder="Type your email"
            />
          </div>
          <div className="form-group my-3">
            <label className="font-medium" htmlfor="message">Message</label>
            <textarea
                  required
                  id="message"
                  value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                  placeholder="Type your message"
                  className='form-control'
                  rows="3"
                ></textarea>
          </div>
          
            <div className="my-1">
          <small className="form-text text-muted">
          We're here to listen! Share any concerns or question.
            </small>
            </div>
            <div>
          <button type="submit" className="btn mt-2 registerbtn btn-block">
            Send
          </button>
            </div>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>





    </div>
    </div>
  )
}

export default Contact
