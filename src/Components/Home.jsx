

import profilepic from "../assets/images/Me/alternateMeFinalResized.png";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin-original.svg";
import { useState, useEffect} from "react";

export default function Home(){
    const backgrounds = [{img : "books.jpg", description : "In my free time, I enjoy reading with a cup of coffee, it's a simple way for me to relax and get lost in a good story."}, {img : "Cinema.jpg", description : "I am a big movie buff and enjoy storytelling."}, {img : "games.jpg", description : "I've always enjoyed playing games, and that interest naturally led me to game development"}, {img : "Ronaldo.jpg", description : "I enjoy both watching and playing football, something I've been passionate about since I was young."}];
    const [currIndex, setIndex] = useState(0);
    let charIndex = 0;
    let typeSpeed = 100;
    let style = {background : "center/cover no-repeat " + "url(/bgImages/" + backgrounds[currIndex].img + ")"};

    useEffect(()=>{
        const timer = setTimeout(()=>{
            document.querySelector(".profile").classList.add("animate");
        }, 500)
        return ()=> clearTimeout(timer);
    }, [])


    
    useEffect(()=>{

            let typeTimeout = null;
            let target = document.querySelector(".interests .type");
            target.classList.remove("fadeout");
            target.textContent = "";
            
        function type(){

            if (charIndex < backgrounds[currIndex].description.length){
                target.textContent += backgrounds[currIndex].description.charAt(charIndex);
                charIndex ++;
                typeTimeout = setTimeout(type, typeSpeed);
            }
            else{
                target.classList.add("fadeout");
                if (currIndex >= 3){
                    setTimeout(()=>{
                        setIndex(0);
                    }, 1500)
                }
                else{
                    setTimeout(()=>{
                        setIndex(currIndex + 1);
                    }, 1500)
                }
            }
        }
        type();
        return () =>{
            clearTimeout(typeTimeout);
        }
    })

    
    return <section id="Home">
        <div className="background" style={style}>
        </div>
        <div className="self row">
            <img src={profilepic} alt="Farhad Rasoli" className="profile"/>
            <div className="card">
                <h2>About Me</h2>
                <p>Hello there&#x1F44B;, welcome to my Portfolio website&#x1F60A;, I am <b>Farhad Rasoli</b>, a 4th year Computer Science student at York University with a passion for web development and game development.</p>
                <div className="links">
                    <a href="https://github.com/rasooli451" target={"_blank"}><img src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/farhad-rasoli-7b7230294/" target={"_blank"}><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </div>
        <div className="interests"><p><span className="type"></span><span className="cursor"></span></p></div>
    </section>
}