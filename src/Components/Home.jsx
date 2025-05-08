

import profilepic from "../assets/images/Me/MeV1NoBgupscalededited.png";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin-original.svg";
import { useState, useEffect} from "react";

export default function Home(){
    const backgrounds = [{img : "books.jpg", description : "Sometimes in my free time, a book and a cup of coffee is enough to transfer me to another world where my imagination is unrestricted and anything is possible."}, {img : "Cinema.jpg", description : "As a dedicated cenephile, I can't appreciate cinema enough, I've watched most of the classics and have enjoyed modern masterpieces."}, {img : "games.jpg", description : "Part of the reason I am interested in game development is because I like playing games, I've been an active gamer since I was a child and still play sometimes."}, {img : "Ronaldo.jpg", description : "I love watching and playing Football, i've been obsessed with it ever since I started playing when I was little and still do sometimes."}];
    const [currIndex, setIndex] = useState(0);
    let charIndex = 0;
    let typeSpeed = 100;
    let eraseSpeed = 30;
    let Erase = 1000;
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
                <p>Hello there&#x1F44B;, welcome to my Portfolio website&#x1F60A;, I am <b>Farhad Rasoli</b>, a 2nd year Computer Science student at York University with a passion for web development and game development.</p>
                <div className="links">
                    <a href="https://github.com/rasooli451" target={"_blank"}><img src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/farhad-rasoli-7b7230294/" target={"_blank"}><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </div>
        <div className="interests"><p><span className="type"></span><span className="cursor"></span></p></div>
    </section>
}