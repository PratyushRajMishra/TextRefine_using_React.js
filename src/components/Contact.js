import React from 'react';

export default function Contact(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#343a40',
    backgroundColor: props.mode === 'dark' ? '#272d33' : 'white',
  };

  return (
    <div className='container' style={{color: props.mode ==='dark'?'white':'#343a40',}}>
      <h1 className='mb-2'><strong>Get in touch with..</strong></h1>
      <p>We value your feedback and inquiries at TextUtils, as we strive to enhance your experience with our app. Whether you have 
        questions about specific features, encounter any issues, or simply want to share your thoughts, our dedicated support team 
        is here to assist you. Feel free to reach out to us using the contact form below, and we'll get back to you promptly. 
        Your input is crucial in helping us improve and tailor TextUtils to meet your needs. Thank you for choosing 
        TextUtils—we look forward to hearing from you and ensuring that your text processing endeavors are seamless and efficient.</p>
      <div className="row row-cols-1 row-cols-md-3 g-4 my-3">
        <div className="col">
          <div className="card h-100 d-flex align-items-center justify-content-center" style={myStyle}>
            <img src={process.env.PUBLIC_URL + '/images/instagram.png'} className="card-img-top img-fluid my-3" alt="Instagram" style={{ width: '200px', height: '200px' }} />
            <div className="card-body text-center">
              <h5 className="card-title">__royal__bhumihar__</h5>
              <p className="card-text">royal__bhumihar is an Instagram ID that reflects the regal essence of the Bhumihar community. 
                With a blend of tradition and modernity, this profile encapsulates a unique journey. Through captivating visuals 
                and meaningful captions, it invites you to 
                explore a world that resonates with cultural pride and contemporary perspectives.</p>
              <a href="https://www.instagram.com/__royal__bhumihar__/" target="_blank" className="btn btn-primary">Instagram - Visit Profile</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 d-flex align-items-center justify-content-center" style={myStyle}>
            <img src={process.env.PUBLIC_URL + '/images/facebook.png'} className="card-img-top img-fluid my-3" alt="Facebook" style={{ width: '200px', height: '200px' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Pratyüsh Râj Mishrâ</h5>
              <p className="card-text">Pratyüsh Râj Mishrâ's Facebook account reflects a vibrant personality, 
                featuring engaging content and thoughtful updates. With a diverse range of interests, Pratyüsh shares 
                moments of creativity, personal experiences, and insightful perspectives. Connecting with
                friends and followers, the account exudes positivity.</p>
              <a href="https://www.facebook.com/pratyushraj.mishra.79" target="_blank" className="btn btn-primary">Facebook - Visit Profile</a>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 d-flex align-items-center justify-content-center" style={myStyle}>
            <img src={process.env.PUBLIC_URL + '/images/linkedin.png'} className="card-img-top img-fluid my-3" alt="LinkedIn" style={{ width: '200px', height: '200px' }} />
            <div className="card-body text-center">
              <h5 className="card-title">Pratyush Raj</h5>
              <p className="card-text">Pratyush Raj's LinkedIn profile showcases a dedicated professional with 
              expertise in [mention relevant skills or industry]. Demonstrating a passion for [highlight specific 
              achievements or contributions], Pratyush is committed to continuous growth and collaboration. 
              Connect to explore shared opportunities and insights.</p>
              <a href="https://www.linkedin.com/in/pratyush-raj-/" target="_blank" className="btn btn-primary">LinkedIn - Visit Profile</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
