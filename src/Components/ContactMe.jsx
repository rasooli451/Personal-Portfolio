

import Swal from 'sweetalert2';


export default function ContactMe(){

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "4b510139-729c-4e7b-9390-567565bd6b5d");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
           Swal.fire({
              title : "Success!",
              text : "Message sent successfully!",
              icon : "success"
           })
           document.querySelectorAll("input")[0].value = "";
           document.querySelectorAll("input")[1].value = "";
           document.querySelectorAll("input")[2].value = "";
           document.querySelector("textarea").value = "";
        }
      };

    return <section id="Contact">
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <div className="snowflake"></div>
        <form onSubmit={onSubmit}>
            <h1>Contact Me</h1>
            <div className="inputBox">
                <input type="text" name="name" required placeholder="Enter First Name..."/>
            </div>
            <div className="inputBox">
                <input type="text" name="lastName" required placeholder="Enter Last Name..."/>
            </div>
            <div className="inputBox">
                <input type="email" name="email" required placeholder="Enter Email..."/>
            </div>
            <div className="inputBox">
                <textarea name="message" placeholder="Enter your message..."/>
            </div>
            <button type="submit" className="send">Send Message</button>
        </form>
    </section>
}