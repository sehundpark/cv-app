import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import Experience from "./Experience";
import Education from "./Education";

const CV = () => {
  const [cvData, setCVData] = useState({
    generalInfo: { name: "", email: "", phone: "" },
    experience: [
      {
        company: "",
        position: "",
        responsibilities: "",
        startDate: "",
        endDate: "",
      },
    ],
    education: [{ school: "", study: "", dateFrom: "", dateTo: "" }],
  });

  const handleChange = (section, index, field, value) => {
    setCVData((prevData) => ({
      ...prevData,
      [section]: prevData[section].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  const handleGeneralInfoChange = (section, field, value) => {
    setCVData((prevData) => ({
      ...prevData,
      [section]: { ...prevData[section], [field]: value },
    }));
  };

  const addExperience = () => {
    setCVData((prevData) => ({
      ...prevData,
      experience: [
        ...prevData.experience,
        {
          company: "",
          position: "",
          responsibilities: "",
          startDate: "",
          endDate: "",
        },
      ],
    }));
  };

  const addEducation = () => {
    setCVData((prevData) => ({
      ...prevData,
      education: [
        ...prevData.education,
        { school: "", study: "", dateFrom: "", dateTo: "" },
      ],
    }));
  };

  const removeEntry = (section, index) => {
    setCVData((prevData) => ({
      ...prevData,
      [section]: prevData[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="cv-container" style={{ display: "flex" }}>
      <div className="form-container" style={{ flex: 1, padding: "20px" }}>
        <GeneralInfo
          data={cvData.generalInfo}
          onChange={handleGeneralInfoChange}
        />
        <Experience
          data={cvData.experience}
          onChange={handleChange}
          onAdd={addExperience}
          onRemove={removeEntry}
        />
        <Education
          data={cvData.education}
          onChange={handleChange}
          onAdd={addEducation}
          onRemove={removeEntry}
        />
      </div>
      <div
        className="resume-view"
        style={{ flex: 1, padding: "20px", backgroundColor: "#f0f0f0" }}
      >
        <h1>{cvData.generalInfo.name}</h1>
        <p>Email: {cvData.generalInfo.email}</p>
        <p>Phone: {cvData.generalInfo.phone}</p>

        <h2>Work Experience</h2>
        {cvData.experience.map((exp, index) => (
          <div key={index}>
            <h3>
              {exp.position} at {exp.company}
            </h3>
            <p>
              {exp.startDate} - {exp.endDate}
            </p>
            <p>{exp.responsibilities}</p>
          </div>
        ))}

        <h2>Education</h2>
        {cvData.education.map((edu, index) => (
          <div key={index}>
            <h3>
              {edu.study} at {edu.school}
            </h3>
            <p>
              {edu.dateFrom} - {edu.dateTo}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CV;
