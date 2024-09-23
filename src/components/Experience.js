import React from "react";

const Experience = ({ data, onChange, onAdd, onRemove }) => {
  const handleChange = (index, field, value) => {
    onChange("experience", index, field, value);
  };

  return (
    <div className="experience">
      <h2>Work Experience</h2>
      {data.map((exp, index) => (
        <form key={index} className="experience-form">
          <input
            type="text"
            value={exp.company}
            onChange={(e) => handleChange(index, "company", e.target.value)}
            placeholder="Company Name"
          />
          <input
            type="text"
            value={exp.position}
            onChange={(e) => handleChange(index, "position", e.target.value)}
            placeholder="Position Title"
          />
          <textarea
            value={exp.responsibilities}
            onChange={(e) =>
              handleChange(index, "responsibilities", e.target.value)
            }
            placeholder="Main Responsibilities"
          />
          <input
            type="date"
            value={exp.startDate}
            onChange={(e) => handleChange(index, "startDate", e.target.value)}
          />
          <input
            type="date"
            value={exp.endDate}
            onChange={(e) => handleChange(index, "endDate", e.target.value)}
          />
          {index > 0 && (
            <button type="button" onClick={() => onRemove("experience", index)}>
              Remove Experience
            </button>
          )}
        </form>
      ))}
      <button type="button" onClick={onAdd}>
        Add Another Experience
      </button>
    </div>
  );
};

export default Experience;
