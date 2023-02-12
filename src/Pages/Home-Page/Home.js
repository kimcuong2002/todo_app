import React, {useState} from 'react'
import './Home.css'
import { v4 as uuidv4 } from 'uuid';
import Header from '../../Layouts/Header/Header'
import Content from '../../Layouts/Content/Content'
import Modal from '../../components/Modal/Modal'
import FormComponent from "../../components/Form/FormComponent"
import { actions } from '../../utils/const'

const initState = {
  id: '',
  title: '',
  completed: false,
  time: {
    start: '',
    end: ''
  },
  priority: '',
};

const Home = () => {
  const [openModal, setOpenModal] = useState(false);
  const [job, setJob] = useState(initState);
  const [jobs, setJobs] = useState([]);
  const [action, setAction] = useState('');

  const changeInput = (e) => {
    const cloneJob = JSON.parse(JSON.stringify(job))
    if (e.target.name == "end" || e.target.name == "start") {
      cloneJob.time[e.target.name] = e.target.value;
    } else {          
      cloneJob[e.target.name] = e.target.value;
    }
    setJob({...cloneJob})
  };
  
  const handleCloseModal = () => {
    setJob(initState);
    setOpenModal(false);
  }

  const handleSubmit = (action) => {
    if (action === actions.create) {
      setJobs([...jobs, { ...job, id: uuidv4() }]);
    }
    if (action === actions.update) {
      const cloneJobs = JSON.parse(JSON.stringify(jobs));
      const objIndex = cloneJobs.findIndex((obj => obj.id == job.id));
      cloneJobs[objIndex] = job;
      setJobs(cloneJobs);
    }
    if (action === actions.delete) {
      const cloneJobs = JSON.parse(JSON.stringify(jobs));
      const objIndex = cloneJobs.findIndex((obj => obj.id == job.id));
      cloneJobs.splice(objIndex, 1);
      setJobs(cloneJobs);
    }
    handleCloseModal()
  };         
  
  const handleUpdate = (job, index) => {
    const cloneJob = JSON.parse(JSON.stringify(job));
    setAction(actions.update);
    setJob(cloneJob);
    setOpenModal(true);
  };
  
  const handleDelete = (job) => {
    setAction(actions.delete)
    setJob(job)
    setOpenModal(true);
  };    
  
  return (
    <div className="home_container">
      <Header setOpenModal={setOpenModal} setAction={setAction} />
      <Content jobs={jobs} handleDelete={handleDelete} setJobs={setJobs} handleUpdate={ handleUpdate } />
      {openModal && 
        <Modal handleCloseModal={handleCloseModal} handleSubmit={handleSubmit} action={action} >
          {action === actions.delete
            ?
            <div className="delete">
              Are you sure you want to delete? 
              <div>Your todo: {job.title}.</div>
            </div>
            :
            <FormComponent changeInput={changeInput} job={job} />
          }
        </Modal>
      }
    </div>
  )
} 

export default Home