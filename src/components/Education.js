import React from "react";

const Education = ({ data, onChange, onAdd, onRemove }) => {
  const handleChange = (index, field, value) => {
    onChange("education", index, field, value);
  };

  return (
    <div className="education">
      <h2>Educational Experience</h2>
      {data.map((edu, index) => (
        <form key={index} className="education-form">
          <input
            type="text"
            value={edu.school}
            onChange={(e) => handleChange(index, "school", e.target.value)}
            placeholder="School Name"
          />
          <input
            type="text"
            value={edu.study}
            onChange={(e) => handleChange(index, "study", e.target.value)}
            placeholder="Title of Study"
          />
          <input
            type="date"
            value={edu.dateFrom}
            onChange={(e) => handleChange(index, "dateFrom", e.target.value)}
          />
          <input
            type="date"
            value={edu.dateTo}
            onChange={(e) => handleChange(index, "dateTo", e.target.value)}
          />
          {index > 0 && (
            <button type="button" onClick={() => onRemove("education", index)}>
              Remove Education
            </button>
          )}
        </form>
      ))}
      <button type="button" onClick={onAdd}>
        Add Another Education
      </button>
    </div>
  );
};

export default Education;
