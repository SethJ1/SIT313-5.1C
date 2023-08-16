import React, { useState } from 'react';
import './App.css';
import JobDescription from './JobDescription';
import ProjectConditions from './ProjectConditions';
import Experience from './Experience'; // Only imported for employment type


function App() {
  const [jobType, setJobType] = useState('');

  return (
    <div className="App">
      <div className="section-title">New Job</div>
      <div>
        <p>Select Job Type:</p>
        <button onClick={() => setJobType('freelance')}>Freelance</button>
        <button onClick={() => setJobType('employment')}>Employment</button>
      </div>
      <br />
      <JobDescription />
      <ProjectConditions />
      {jobType === 'employment' ? <Experience /> : null}
      <button>Post</button>
    </div>
  );
}

export default App;
