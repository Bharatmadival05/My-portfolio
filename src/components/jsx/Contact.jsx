import mycv from '../assets/Bharat Madival CSE.pdf'
import React, { useEffect } from 'react';

export default function Contact() {
    useEffect(() => {
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwXkJcMO34EW3gci1ijgw6Qt8U7rYb9pOEYUwAufjCJ0S2y6AyiG5shx2b3vwa63lwojw/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById("msg")
    
        const submitHandler = (event) => {
          event.preventDefault();
    
          fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => {
              msg.innerHTML="Message sent succssfully"
              msg.style.boxShadow = "0 5px 5px rgba(0, 0, 0, 0.1)";
              setTimeout(function(){
                msg.innerHTML=""
                msg.style.boxShadow="none";
              },3000)
              form.reset();
            })
            .catch(error => console.error('Error!', error.message));
        };
    
        // Check if the event listener is already attached
        if (!form.hasSubmitHandler) {
          form.addEventListener('submit', submitHandler);
          form.hasSubmitHandler = true; // Set a flag to indicate that the event listener is attached
        }
    
        // Cleanup function to remove the event listener when the component is unmounted
        return () => {
          form.removeEventListener('submit', submitHandler);
          form.hasSubmitHandler = false; // Reset the flag when the component is unmounted
        };
      }, []);

    return(
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="contact-left">
                        <h1 className="sub-title">Contact <span>Me</span></h1>
                        <p><i class="fa-solid fa-paper-plane fa-bounce"></i>bharatmadival586@gmail.com</p>
                        <p><i class="fa-solid fa-phone"></i>+91 9108545363</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/bharat.madival.9/" target='_blank'><i class="fa-brands fa-facebook"></i></a>
                            <a href="https://www.instagram.com/bharat_madival._/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/in/bharatmadival/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                            <a href="https://twitter.com/BharatMadival05" target='_blank'><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://github.com/Bharatmadival05" target='_blank'><i class="fa-brands fa-github"></i></a>
                        </div>
                        <a href={mycv} download className="btn btn2">Download CV</a>
                    </div>
                    <div className="contact-right" id='myForm'>
                        <form name="submit-to-google-sheet">
                            <input type="text" name="Name" placeholder="Your Name" required />
                            <input type="email" name="Email" placeholder="Your Email" required />
                            <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                            <button type="submit" className='btn btn2'>Submit</button>
                        </form>
                        <div className='msg' id='msg'></div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy; Bharat Madival.<i class="fa-solid fa-heart fa-beat"></i></p>
            </div>
        </div>

        
    )
};
