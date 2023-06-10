import React, { useEffect, useState } from 'react'
import filterimg from '../assets/filterimg.png'
import axios from 'axios'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

import './table.css'

const baseURL = "http://localhost:8080";

const Table = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState([]);
  const [stageFilter, setStageFilter] = useState([]);
  const [statusFilter, setStatusFilter] = useState([]);


  useEffect(()=>{
    fetchData();
    console.log(stageFilter)
    console.log(statusFilter)
   },[stageFilter,statusFilter])

   async function fetchData() {
    try {
      const response = await axios.post(`${baseURL}/claims`, {
        stage: stageFilter,
        status: statusFilter
      });
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleStageCheckboxChange(event) {
    const checkboxValue = event.target.value;
  
    if (event.target.checked) {
      // Checkbox is checked, add its value to the state
      setStageFilter(stageFilter => [...stageFilter, checkboxValue]);
    } else {
      // Checkbox is unchecked, remove its value from the state
      setStageFilter(StageFilter => StageFilter.filter(value => value !== checkboxValue));
    }
  }

  function handleStatusCheckboxChange(event) {
    const checkboxValue = event.target.value;
  
    if (event.target.checked) {
      // Checkbox is checked, add its value to the state
      setStatusFilter(StatusFilter => [...StatusFilter, checkboxValue]);
    } else {
      // Checkbox is unchecked, remove its value from the state
      setStatusFilter(StatusFilter => StatusFilter.filter(value => value !== checkboxValue));
    }
  }

  return (
    <div className='full-container'>
      <div className='filter'>
        <button className='filter-button' onClick={toggleMenu}>Filter<img style={{width:'30%'}}src={filterimg}/></button>
        {isOpen && (
        <div className='dropdown'>
          <h3>Stage</h3>
          <label>
            <input type="checkbox" value="Initial Authorization" onChange={handleStageCheckboxChange}/>
            Initial Authorization
          </label>
          <label>
            <input type="checkbox" value="Enhancement" onChange={handleStageCheckboxChange}/>
            Enhancement
          </label>
          <label>
            <input type="checkbox" value="Discharge" onChange={handleStageCheckboxChange} />
            Discharge
          </label>
          <label>
            <input type="checkbox" value="Final Authorization" onChange={handleStageCheckboxChange} />
            Final Authorization
          </label>
          <h3>Status</h3>
          <label>
            <input type="checkbox" value="Pending Approval" onChange={handleStatusCheckboxChange} />
            Pending Approval
          </label>
          <label>
            <input type="checkbox" value="TPA Query" onChange={handleStatusCheckboxChange} />
            TPA Query
          </label>
        </div>
        )}
      </div>
      <div className='table-container'>
      <table>
        <thead>
          <tr>
          <th style={{width:"2%"}}></th>
            <th style={{width:"8%"}}>Claim ID</th>
            <th style={{width:"10%"}}>Name</th>
            <th style={{width:"10%"}}>Ailment</th>
            <th style={{width:"5%"}}>SLA</th>
            <th style={{width:"5%"}}>P-TAT</th>
            <th style={{width:"15%"}}>Stage</th>
            <th style={{width:"15%"}}>Status</th>
            <th style={{width:"10%"}}>Amount Approved</th>
            <th style={{width:"20%"}}>Hospital</th>
          </tr>
        </thead>
        <tbody>

          {data.map((item, index) => (
            <tr key={index}>
              <td>{index==0?<FiberManualRecordIcon style={{color:"#4C9EAA",width:"90%"}}/>:''}</td>
              <td ><a href='#' style={{color:"#4C9EAA"}}>{item.claimId}</a></td>
              <td>{item.name}</td>
              <td>{item.ailment}</td>
              <td>{item.sla}</td>
              <td>{item.ptat}</td>
              <td>{item.stage}</td>
              <td>{item.status}</td>
              <td>{item.amountApproved}</td>
              <td>{item.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Table;