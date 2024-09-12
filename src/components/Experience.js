import React, { useState } from "react";

function Experience({ experience, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  });
}
