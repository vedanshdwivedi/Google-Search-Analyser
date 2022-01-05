import React, { useState, useEffect } from "react";
import { Form } from "../components/Form";

export const FormPage = () => {
  const [addTodo, setAddTodo] = useState("");
  const [graphVisible, setGraphVisible] = useState("");

  const handleFormChange = (keyword) => {
    setAddTodo(keyword);
  };

  const handleFormSubmit = () => {
    console.log(addTodo);
    setAddTodo("");
  };

  return (
    <div>
      <Form
        userInput={addTodo}
        onSubmit={handleFormSubmit}
        onFormChange={handleFormChange}
      />
    </div>
  );
};
