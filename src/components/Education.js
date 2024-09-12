import React, { useState } from "react";

function Education({ education, onSubmit }) {
  const [isEditing, setIsEditing] = useState(true);
  const [formData, setFormData] = useState({
    school: "",
    degree: "",
    graduationDate: "",
  });
}
