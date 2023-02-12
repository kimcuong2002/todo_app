import React, { useState } from "react";
import "./FormComponent.css";
import InputField from '../InputField/InputField'

const FormComponent = ({ changeInput, job }) => {

  return (
      <div className="form-container">
          <div>
            <InputField
              name="title"
              placeholder="Enter your job"
              onChange={changeInput}
              value={job.title}
              label="Job name"
              type="text"
            />
          </div>
          <div>
            <InputField
                name="start"
                placeholder="dd/mm/yy"
                onChange={changeInput}
                value={job.time.start}
                label="Start time"
                type="date"
            />
          </div>
          <div>
            <InputField
                name="end"
                placeholder="dd/mm/yy"
                onChange={changeInput}
                value={job.time.end}
                label="End time"
                type="date"
            />
          </div>
          <div>
            <InputField
                name="priority"
                placeholder="priority"
                onChange={changeInput}
                value={job.priority}
                label="Priority"
                type="text"
            />
          </div>
      </div>
  );
};

export default FormComponent;
