import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Education from "./Education";
import Experience from "./Experience";

function App() {
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

  function handlePersonalInfoSubmit(info) {
    setPersonalInfo(info);
  }

  function handleEducationSubmit(newEducation) {
    setEducation([...education, newEducation]);
  }

  function handleExperienceSubmit(newExperience) {
    setExperience([...experience, newExperience]);
  }
}

export default App;
