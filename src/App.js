import React from 'react';
import Education from './components/Education';
import Expirience from './components/Expirience';
import MainInfo from './components/MainInfo';
import "./App.scss";
import Button from './components/Button';

// SASS - Syntaxically Awesome Style Sheets

const  App = () => {

  const personalData = {
    fullName: "Mamatkulov Аброр",
    birthYear: 2005,
    desiredPosition: "full-stack developer",
    university: "It-Acadenmy",
    graduationYear: 2021,
    lastWorkPlace: "courier at Buffet",
    lastWorkYears: "2020-2021",
    skills: ["HTML", "CSS", "JS", "Python, Django", "React"],
    hobbies: [
      "watching soccer",
      "startups"
    ]
  }

  function getJobExp (data) {
    const years = data.split("-");
    return Number(years[1]) - Number(years[0]);
  }

  const data = (
    <div className="App">
      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>About Us</a></li>
          <li><a>Works</a></li>
          <li><a>Contacts</a></li>
        </ul>
      </nav>
      <Button/>
      <MainInfo
        fullName={personalData.fullName}
        age ={new Date().getFullYear() - personalData.birthYear}
        desiredPosition={personalData.desiredPosition}
      />
      <Education
        university={personalData.university}
        graduationYear={personalData.graduationYear}
      />
      <Expirience
        lastWorkPlace={personalData.lastWorkPlace}
        expirience={getJobExp(personalData.lastWorkYears)}
        skills={personalData.skills}
      />
      <button className="btn">Hello</button>
    </div>
  )

  return data;
}

export default App;
