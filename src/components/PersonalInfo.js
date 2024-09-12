import React, { useState } from "react";

function PersonalInfo({ info, onSubmit }) {
  const [isEditing, setIsEditing] = useState(!info.name);
  const [formData, setFormData] = useState(info);
}
