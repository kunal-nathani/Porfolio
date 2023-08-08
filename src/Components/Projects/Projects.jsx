import React from 'react';
import Project from './Project';
import './Projects.css';
import MsgBoardImg from './Images/AnonMsgBoard.jpg';
import StockPriceImg from './Images/StockPriceChecker.jpg';
import PersonalLibraryImg from './Images/PersonalLibrary.jpg';
import IssueTrackerImg from './Images/IssueTracker.jpg';
import MIConverterImg from './Images/MetricImperialConverter.jpg';
import CortalaImg from './Images/Cortala.jpg';
import ExerciseTrackerImg from './Images/ExerciseTracker.jpg';
import BarChartImg from './Images/BarChart.jpg';
import TreeMapImg from './Images/TreemapDiagram.jpg';
import ChoroplethMapImg from './Images/ChoroplethMap.jpg';
import QuotingMachineImg from './Images/QuotingMachine.jpg';
import CalculatorImg from './Images/Calculator.jpg';
import TomateTimerImg from './Images/TomateTimer.jpg';
import TicTacToeImg from './Images/TicTacToe.jpg';
import TwitchImg from './Images/Twitch.jpg';
import WeatherAppImg from './Images/WeatherApp.jpg';
import TributeImg from './Images/Tribute.jpg';
import SurveyFormImg from './Images/SurveyForm.jpg';
import LandingPageImg from './Images/LandingPage.jpg';
import DocumentifyImg from './Images/Documentify.jpg';

const Projects = props => {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Works</h3>
        </div>
        <div className="projects-wrapper">
          <Project
            title="Uniswap-2.0-clone"
            img={'data:image/png;base64,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'}
            tech="js css react"
            repo="https://github.com/sh654/Uniswap-2.0-clone"
          >
            <small>
              Built using Solidity,CSS, React.js and React Router.
            </small>
            <p>
              This is a full-stack website that I made which lets the users to effcient exchange cryptocurrencies.
            </p>
          </Project>
          <Project
            title="Retro Games"
            img={'https://img.freepik.com/premium-vector/retro-games-console-arcade-device-button_165162-532.jpg'}
            tech="Python and it's Libraries"
            repo="https://github.com/kunal-nathani/python_games"
          >
            <small>
              Games Included
              <ul>
                <li>Guess the Number</li>
                <li>Hangman</li>
                <li>Tic-Tac-Toe</li>
                <li>Quiz</li>
                <li>Snake</li>
              </ul>
            </small>
            <p>
              This repository contains a collection of Python games that you can play and enjoy. Each game is implemented as a standalone Python script and comes with its own set of instructions.
            </p>
          </Project>
          <Project
            title="Streamlit"
            img={'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAB8CAMAAABda6xlAAAAw1BMVEX/////S0y9QUN9NDv/QUL/REX/P0D/b3D/6+v/8PD/R0i7ODr/9fV4KTF6NDv79PTs0NC3JSjEW13/kJD/U1P/4eH/Nzj/t7f/w8OshYh/OT//aGm3QELEQUT/1dX/dXXz4uLOfH3v2Nncpqa5MDPIamv/zs7/AADYmpu3lZdjAACke3/w6+u9n6CDQUZyGCLSv8D/g4OJT1P/KCj+n560Bg7/q6yVYGSbbG//X1/dz9DQQkWzXF/rR0mRNzxvCRilOj6HRtxXAAACp0lEQVR4nO3Y23KiQBAGYAcRBcETeIoaTTRusqsiCatZ3SS+/1PtDJ4GRVOlyNRs/d+NVXLTf3XbM5hKAQAAAAAAAAAAAAAAAAAAAAAAAADAf0Tvia4gOcWHyqPoGhLTHwweiqKLSEgpryjlvugqElKhYZVyT3QZcTJPPeiXaVYl/5RkMTc2/NG9j3zAhpgZPEc+Hr38/HXLum7C1DTNjohbfNqEVZSIjTwaT1xrevvq4uZpRHPso2HuD7ZZIwZ5/GpZaTeR8uJVrRFiqG9+LvTt429lpxwe5OLUctPptDtOssqYmFmVUDVnxsUtVvL7sEqeH+TpnEWlYUeJlxqDeo2FJUatNdt99zxQ+LD7q8XinQ4wY71Led2o/jHIOq5mNNa/3RLfV2V/tei9uuuoNKyE64mxVbJh1LIsbniIg/OHDfKiuYuatuZSTnEq1diFJUTVusODIQ4GuZIaNe92UWnYpuiqL+UY+7Qko7aWh1lp2r8FLioNuxBd9KVmNcIzyMdSaR+m/SzwWeeia75YLhyW+egcpm3zjf2SdD0x9BZ1HPcgbGfFtdaV8txZG0aEPepuZz/I7ovoiq+Qy2ai0tLutkODvE0r73pi/MjWEuKEFvNK9kN2rRqdleEX82aQLRnfATgn5jiY5WV7F3cd9k7qxtJb1Nvp3nKbKtjIEh+yG4ZxJi27ZewH+Uvq9cT4xxeLw2HeXi0momu92r16Puz2HFoVpPyLIsz0vk0b/HY7n5Oe6FqvV/8+LD2HOu28fP+gHtMd7eyO2nZ3UBJdaRz0luPQ97uMplKZEDVAF7bjOEPRdcbErN4P6zPft23P87rdbpaiH13Ps23fn9Ubw6ouusYbKJqmrucCuq6bEr/QAQAAAAAAAAAAAAAAAAAAAAAAAAAA5x8lNi9B6pQ5bAAAAABJRU5ErkJggg=='}
            tech="Streamlit python"
           
            repo="https://github.com/kunal-nathani/Streamlit"
          >
            <small>Streamlit turns data scripts into shareable web apps in minutes. All in pure Python. No front‑end experience required.</small>
            <p>
              Project List
            
                Stock Price Predictor
                Insurance Premium Calculation App
                Calories Burned App

            </p>
          </Project>
          <Project
            title="Efficient-Doctor-patient-portal"
            img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZINWrNr1BM5fCkg7N6ydNSmDbEU-aH5kKpg&usqp=CAU'}
            tech="js  css"
            repo="https://github.com/kunal-nathani/Efficient-Doctor-patient-portal"
          >
            <small>Built using HTML, JS + jQuery, CSS + Bootstrap and Php.</small>
            <p>It offers a lot of flexibility to customize the schedule of Appointment as per your need for each medication.These Web Applications can be used pretty easily as they are designed with ease of use in mind. The functionality is always kept very simple so users don’t come across any difficulty in using them.</p>
          </Project>
          <Project
            title="Data Analytics"
            img={'data:image/png;base64,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'}
            tech=""
            repo="https://github.com/kunal-nathani/Linear-and-logistic-Regression"
          >
            <small>Built using jupyter notebook and python.</small>
            <p>
             Implementation of Logistic Regression and Linear Regression in Python for Classification Problems🏗
            </p>
          </Project>
          <Project
            title="Weather-Web-App."
            img={'data:image/png;base64,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'}
            tech="js css"
            
        
            repo="https://github.com/kunal-nathani/Weather-app/blob/main/README.md"
          >
            <small>Built 
              HTML & CSS
Javascript
Vanilla tilt.js library
OpenWeatherMap & OpenCageData API
              .</small>
            <p>
            A simple and responsive Weather web app built using HTML, CSS and Javascript. It uses OpenWeatherMap API to fetch Temperature, Weather, Humidity & Wind Speed details. It uses OpenCageData Geocoder API to fetch exact location coordinates of the user. Background images are fetched from Unsplash and is changed according to the City name. Built based on the 2021 UI trend 'Glassmorphism' (Read More...). Hosted using Netlify.
            </p>
          </Project>
          
        </div>
      </div>
    </section>
  );
};

export default Projects;
