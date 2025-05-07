

import profilepic from "../assets/images/Me/MeWithoutBgV1.png";
import github from "../assets/icons/github.svg";
import linkedin from "../assets/icons/linkedin-original.svg";
import books from "../assets/images/bgImages/books.jpg";
import cinema from "../assets/images/bgImages/Cinema.jpg";
import games from "../assets/images/bgImages/games.jpg";
import ronaldo from "../assets/images/bgImages/Ronaldo.jpg";
import { useState, useEffect} from "react";

export default function Home(){
    const backgrounds = [{img : books, description : "Sometimes in my free time, a book and a cup of coffee is enough to transfer me to another world where my imagination is unrestricted and anything is possible."}, {img : cinema, description : "As a dedicated cenephile, I can't appreciate cinema enough, I've watched most of the classics and have enjoyed modern masterpieces."}, {img : games, description : "Part of the reason I am interested in game development is because I like playing games, I've been an active gamer since I was a child and still play sometimes."}, {img : ronaldo, description : "I love watching and playing Football, and have been a fan of Cristiano Ronaldo for a long time now, he is my favorite player and him and Messi are the reason I fell in love with football."}];
    const [currIndex, setIndex] = useState(0);
    let charIndex = 0;
    let typeSpeed = 100;
    let eraseSpeed = 30;
    let Erase = 1000;
    let style = {background : "center/cover no-repeat " + "url(" + backgrounds[currIndex].img + ")"};

    useEffect(()=>{
        const timer = setTimeout(()=>{
            document.querySelector(".profile").classList.add("animate");
        }, 500)
        return ()=> clearTimeout(timer);
    }, [])

    
    useEffect(()=>{
            let typeTimeout = null;
            let bigEraseTimeout = null;
            let eraseTimeout = null;
        function type(){
            let target = document.querySelector(".interests .type");

            if (charIndex < backgrounds[currIndex].description.length){
                target.textContent += backgrounds[currIndex].description.charAt(charIndex);
                charIndex ++;
                typeTimeout = setTimeout(type, typeSpeed);
            }
            else{
                bigEraseTimeout = setTimeout(erase, Erase);
            }
        }
        function erase(){
            let target = document.querySelector(".interests .type");
            clearTimeout(typeTimeout);
            if (charIndex >= 0){
                target.textContent = target.textContent.substring(0, charIndex);
                charIndex --;
                eraseTimeout = setTimeout(erase, eraseSpeed);
            }
            else{
                if (currIndex >= 3 ){
                    setIndex(0);
                }
                else{
                    setIndex(currIndex + 1);
                }
            }
        }
        type();
        return () =>{
            clearTimeout(eraseTimeout);
            clearTimeout(bigEraseTimeout);
        }
    })

    
    return <section id="Home" style={style} >
        <div className="self row">
            <img src={profilepic} alt="Farhad Rasoli" className="profile"/>
            <div className="card">
                <h2>About Me</h2>
                <p>Hello there&#x1F44B;, welcome to my Portfolio website&#x1F60A;, I am Farhad Rasoli, a 2nd year Computer Science student at York University with a passion for web development and game development.</p>
                <div className="links">
                    <a href="https://github.com/rasooli451" target={"_blank"}><img src={github} alt="github" /></a>
                    <a href="https://www.linkedin.com/in/farhad-rasoli-7b7230294/" target={"_blank"}><img src={linkedin} alt="linkedin" /></a>
                </div>
            </div>
        </div>
        <div className="interests"><p><span className="type"></span><span className="cursor"></span></p></div>
    </section>
}