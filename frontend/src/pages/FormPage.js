import React, { useState, useEffect } from "react";
import { Form } from "../components/Form";
import { RegionGraph } from "../components/RegionPlot";
import { TimeGraph } from "../components/TimePlot";

export const FormPage = () => {
  const [addTodo, setAddTodo] = useState("");
  const [regionData, setRegionData] = useState({
    entity_name: "Region-wise interest",
    labels: [],
    property: "Google Search Analytics Region-wise",
    series: [],
  });
  const [timeData, setTimeData] = useState({
    entity_name: "Trend over years",
    labels: [],
    property: "Google Search Analytics previous trends",
    series: [],
  });

  const handleFormChange = (keyword) => {
    setAddTodo(keyword);
  };

  const createRegionGraph = () => {
    console.log(`Fetching region data for ${addTodo}`);
    fetch("/region", {
      method: "POST",
      body: JSON.stringify({
        keyword: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setRegionData(message);
      });
  };

  const createTimeGraph = () => {
    console.log(`Fetching time data for ${addTodo}`);
    fetch("/time", {
      method: "POST",
      body: JSON.stringify({
        keyword: addTodo,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((message) => {
        console.log(message);
        setTimeData(message);
      });
  };

  const handleFormSubmit = () => {
    createRegionGraph();
    createTimeGraph();
    // setAddTodo("");
  };

  const handleFormReset = () => {
    setAddTodo("");
    setRegionData({
      entity_name: "Region-wise interest",
      labels: [],
      property: "Google Search Analytics Region-wise",
      series: [],
    });
    setTimeData({
      entity_name: "Trend over years",
      labels: [],
      property: "Google Search Analytics previous trends",
      series: [],
    });
  };

  return (
    <div>
      <Form
        userInput={addTodo}
        onSubmit={handleFormSubmit}
        onFormChange={handleFormChange}
        onReset={handleFormReset}
      />
      <br />
      <br />
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Keyword Analysis by Region
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-12">
                  <RegionGraph regionDataDict={regionData} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Keyword Trend by Time
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-12">
                  <TimeGraph timeDataDict={timeData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
