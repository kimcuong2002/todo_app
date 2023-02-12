import React, { useState } from "react";
import "./Content.css";
import { GrDocumentUpdate } from "react-icons/gr";
import { AiFillDelete } from "react-icons/ai";
import { actions } from "../../utils/const";

const Content = ({
  jobs,
  setAction,
  handleUpdate,
  handleDelete,
  setOpenModal,
}) => {
  return (
    <>
      {jobs &&
        jobs.length > 0 &&
        jobs.map((job, index) => {
          return (
            <div className="content_container" key={job.id}>
              <div className="stt">{index + 1}</div>
              <div className="name">{job.title}</div>
              <div className="time_start">{job.time.start}</div>
              <div className="time_end">{job.time.end}</div>
                  <div className="priority">{job.priority}</div>
                  <div className="btn">
              <div className="btn_update">
                <GrDocumentUpdate onClick={() => handleUpdate(job, index)} />
              </div>
              <div className="btn_delete">
                <AiFillDelete onClick={() => handleDelete(job)} />
              </div>
                  </div>
            </div>
          );
        })}
    </>
  );
};

export default Content;
