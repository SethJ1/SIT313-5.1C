import React from 'react';

function JobDescription() {
  return (
    <div>
      <div className="section-title">Describe your job</div>
      <div>
        <p>Title/Position</p>
        <input type="text" />
      </div>
      <div>
        <p>Job description</p>
        <textarea />
      </div>
      <div>
        <p>Skills</p>
        <input type="text" />
        <p>Developers will find your job based on the skills you added here.</p>
      </div>
      <br />
    </div>
  );
}

export default JobDescription;
