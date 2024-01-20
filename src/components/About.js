import React, { useState } from 'react';

export default function About(props) {

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  let myStyle= {
    color: props.mode ==='dark'?'white':'#343a40',
    backgroundColor: props.mode === 'dark'?'#272d33':'white',
    
  }
  
  return (
    <div className='container' style={{color: props.mode ==='dark'?'white':'#343a40',}}>
      <h1 className='mb-3'>About Us</h1>
      <p><strong>"TextUtils"</strong>  a versatile and user-friendly text transformation app, simplifies text editing tasks for students, 
      professionals, and anyone handling text. Empowering users with an array of intuitive tools, TextUtils facilitates effortless modification 
      and enhancement of text. Whether you need to adjust case, extract emails, or remove extra spaces, TextUtils provides a seamless experience. 
      Its clean and accessible interface ensures efficiency, making it an essential tool for diverse users. Perfect for streamlining workflows, 
      TextUtils is designed to enhance productivity and accuracy in text-related endeavors. Experience the convenience of quick and efficient text editing – 
      TextUtils is your go-to solution for hassle-free text transformation.</p>
      <h4 className='my-2'><strong>Key features:</strong></h4>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              1. Change Case
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils simplifies text editing by offering a seamless solution for changing case with just one click. 
            This feature is perfect for users dealing with titles, names, or any text content that requires consistent 
            formatting. Whether you need to convert text to uppercase for emphasis or lowercase for a uniform appearance, 
            TextUtils streamlines the process, enhancing efficiency and saving valuable time. With its user-friendly interface, 
            the app caters to diverse users, from students working on assignments to professionals managing documents. Say goodbye to manual case adjustments 
            and embrace the convenience of TextUtils, your go-to tool for quick and effortless text transformation.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              2. Email Extraction
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            The Email Extraction feature in our TextUtils app revolutionizes the process of extracting emails from a block of text, 
            providing a swift and efficient solution for users. Tailored for extracting contact information and effortlessly managing 
            email lists, this feature is an invaluable asset for professionals, businesses, and individuals alike. With just a few clicks, 
            TextUtils streamlines the extraction process, enabling users to swiftly gather email addresses embedded within any text. 
            This functionality is ideal for tasks requiring contact details, making it an indispensable tool for seamless communication management. 
            Say goodbye to manual searching and tedious data sorting – TextUtils' Email Extraction simplifies the way you gather and 
            organize email information, enhancing your efficiency and productivity in one user-friendly platform.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              3. Remove Extra Spaces
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils revolutionizes text editing with its "Remove Extra Spaces" feature, offering a seamless solution for those weary of 
            grappling with excessive spaces in their text. If you've ever found yourself frustrated by uneven spacing or untidy formatting, 
            TextUtils is your go-to tool for a quick and efficient resolution.
            Say goodbye to the hassle of manually editing spaces and welcome a neat and polished appearance to your content. 
            By effortlessly eliminating unnecessary spaces, TextUtils ensures a tidy layout, saving you valuable time and enhancing 
            the overall aesthetic of your text. Whether you're a student striving for a polished essay or a professional refining a document, 
            TextUtils simplifies the process, making text cleanup a swift and stress-free experience. 
            Optimize your content effortlessly with TextUtils and enjoy a clutter-free, professional presentation every time.>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              4. Copy Text to Clipboard
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            With TextUtils, streamline your workflow effortlessly by utilizing the "Copy Text to Clipboard" feature. 
            This functionality revolutionizes the way you handle modified text, eliminating the need for manual copying. 
            With a simple click, TextUtils ensures that your edited text is swiftly copied directly to your clipboard. 
            This time-saving feature allows you to seamlessly integrate the modified content into other applications or 
            documents without the hassle of traditional copy-and-paste methods. Bid farewell to the tedious process of 
            selecting, copying, and pasting – TextUtils simplifies the entire experience, making it more efficient and user-friendly.
            Boost your productivity by embracing the convenience of 
            instant text copying, ensuring a smoother and quicker text transformation journey with every use.
            </div>
          </div>
        </div>
      </div>
      <h5 className='mt-4'><strong>Why Choose TextUtils?</strong></h5>
      <p>TextUtils is a text transformation powerhouse that stands out for its remarkable features, making it a go-to tool for 
        users across various domains. One of the most compelling aspects of TextUtils is its commitment to efficiency. By offering 
        straightforward and easy-to-use tools for text manipulation, TextUtils becomes a time-saving ally in the digital landscape. 
        Whether you're a student working on assignments, a professional drafting important documents, 
        or anyone dealing with text-related tasks, the efficiency of TextUtils translates into tangible time and effort savings.
        The user-friendly design of TextUtils is a testament to its commitment to providing a seamless experience for users of all levels. 
        The clean and intuitive interface makes navigation a breeze, ensuring that users can harness the power of TextUtils without a steep learning curve. 
        Whether you're a tech-savvy professional or someone new to text manipulation tools, 
        TextUtils welcomes all users with an interface that prioritizes clarity and ease of use. This user-centric approach enhances the overall experience, 
        making TextUtils a tool that feels intuitive from the first interaction.</p>

      <p>In conclusion, TextUtils is more than just a text transformation app; it's a multifaceted solution that prioritizes efficiency, 
        versatility, user-friendliness, and accessibility. By embodying these principles, TextUtils emerges as an indispensable companion 
        for anyone seeking to streamline their text-related tasks, saving time, and enhancing overall productivity. As it continues to be freely available, 
        TextUtils remains a beacon of innovation in the realm of text manipulation tools.</p>
    </div>
  );
}
