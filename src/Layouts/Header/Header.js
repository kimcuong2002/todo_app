import React, { useState } from "react";
import "./Header.css";
import { actions } from "../../utils/const";

const Header = ({ setOpenModal, setAction }) => {
  return (
    <div>
      <div className="header_container">
        <div className="title_container">
          <p>ToDo App Khó Vãi Nồi</p>
        </div>
        <div className="button_container">
          <button
            className="add"
            onClick={() => {
              setAction(actions.create);
              setOpenModal(true);
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="header_title">
        <div className="STT">STT</div>
        <div className="name">Name</div>
        <div className="time_start">Time Start</div>
        <div className="time_end">Time End</div>
        <div className="priority">Priority</div>
        <div className="action">Action</div>
      </div>
    </div>
  );
};

export default Header;
