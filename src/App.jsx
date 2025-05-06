import { useState } from 'react'
import './App.css'

import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Projects from './Components/Projects';

import Cvgenerator from "./assets/images/projects/CvGenerator.jpeg";
import MemoryGame from "./assets/images/projects/memoryGame.jpeg";
import toDoList from "./assets/images/projects/todoList.jpeg";
import WeatherApp from "./assets/images/projects/weatherApp.jpeg";
import codeClock from "./assets/images/projects/codeClock.jpeg";
import battleShip from "./assets/images/projects/battleship.jpeg";
import spaceShooter from "./assets/images/projects/spaceShooter.jpg";
import html from "./assets/icons/html-5.svg";
import css from "./assets/icons/css-3.svg";
import python from "./assets/icons/file-type-python.svg";
import java from "./assets/icons/java-original.svg";
import javascript from "./assets/icons/javascript.svg";
import react from "./assets/icons/file-type-reactjs.svg";
import github from "./assets/icons/github.svg";
function App() {

  let projects = [{img : Cvgenerator, title : "CV Generator",description : "Enter your information in this customizable cv generator app to make your Resume in minutes, made using react library.", tools : [css, html, javascript, react], visit : "https://c-vgenerator-zeta.vercel.app/", github : "https://github.com/rasooli451/CVgenerator"}, {img : MemoryGame, description : "A fun and simple memory game that test your visual memory. Made using React library.", title : "Memory Game", tools : [css, html, javascript, react], visit : "https://memory-game-sigma-roan.vercel.app/", github : "https://github.com/rasooli451/MemoryGame"}, {img : toDoList, title : "To Do List", description : "A dynamic task management app that uses the borwser's local storage to store and restore tasks and projects.", tools : [css, html, javascript], visit : "https://rasooli451.github.io/ToDoList/", github : "https://github.com/rasooli451/ToDoList"}, {img : WeatherApp, title : "Weather App", description : "A dynamic weather app that uses visual crossing API to pull real world hourly and weekly data for any city in the world.", tools : [css, html, javascript], visit : "https://rasooli451.github.io/WeatherApp/", github : "https://github.com/rasooli451/WeatherApp"}, {img : codeClock, title : "CodeClock", description : "A website to help someone track their hours of programming to help them be consistent and hit their hourly goals that they set for each week.", tools : [css, html, javascript], visit : "https://rasooli451.github.io/CodeClock/", github : "https://github.com/rasooli451/CodeClock"}, {img : battleShip, title : "BattleShip", description : "The classic battleship game with smartly implemented AI and explosive sound Effects.", tools : [css, html, javascript], visit : "https://rasooli451.github.io/Battleship/", github : "https://github.com/rasooli451/Battleship"}, {img : spaceShooter, title : "SpaceShooter", description : "A 2Player space game that you can play with your friend, implemented using the pygame library.", tools : [python], visit : "https://github.com/rasooli451/Spacegame/archive/refs/heads/main.zip", github : "https://github.com/rasooli451/Spacegame"}]
  return (
    <>
      <Navbar />
      <Home />
      <Projects projectList={projects}/>
    </>
  )
}

export default App
