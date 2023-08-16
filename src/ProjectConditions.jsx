import React from 'react';


function ProjectConditions() {
  return (
    <div>
      <div className="section-title">Project Conditions</div>
      <div>
        <p>Project length</p>
        <input type="text" />
      </div>
      <div>
        <p>Payment</p>
        <input type="text" placeholder="Min" />
        <input type="text" placeholder="Max" />
      </div>
      <div>
        <p>Working hours</p>
        <input type="text" />
      </div>
    </div>
  );
}

export default ProjectConditions;
