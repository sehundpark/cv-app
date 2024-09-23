import React from "react";

const GeneralInfo = ({ data, onChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onChange("generalInfo", name, value);
  };

  return (
    <div className="general-info">
      <h2>Personal Information</h2>
      <form className="personal-info-form">
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange}
          placeholder="Full Name"
        />
        <input
          type="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          placeholder="Email Address"
        />
        <input
          type="tel"
          name="phone"
          value={data.phone}
          onChange={handleChange}
          placeholder="Phone Number"
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
