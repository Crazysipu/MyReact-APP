import React from 'react';
import './App.css';

const employee={
  name: 'Alan Ford',
  Id: '00005152',
  Appointment: '9:00 (24-05-2016)',
  email: 'alan.form@email.com',
  Phone: '+31123456789', 
  status:'InProgress', 
  door: 'Mark',
  time: '10:30',
  date: '(24-05-2016)', profileImg: 'https://www.w3schools.com/howto/img_avatar.png',
  role: 'Boltart Bosbessan', summary: 'This is some random description about the product mentioned above.'
}
var arrow="<"
function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='header'>
      <p className='headerarrow'>{arrow}</p>
      <div className='headername'> <h3>{employee.name}</h3> <p>{employee.Id}</p></div>
      <div className='btn'><button >Print</button></div>
    </div>
    <div className='customerinfo'>
      <EmployeeDetails1  detail_Name={"Appointment"} details={employee.Appointment}/>
      <EmployeeDetails1  detail_Name={"Email"} details={employee.email}/>
      <EmployeeDetails1  detail_Name={"Phone"} details={employee.Phone}/>
    </div>
    <div className='orderinfo'>
      <div className='status-dot'></div>
      <EmployeeDetails2  detail_Name={"Status"} details= {"" + employee.status}/>
      <EmployeeDetails2  detail_Name={"Door"} details={employee.door}/>
      <EmployeeDetails2  detail_Name={"Time"} details={employee.time}/>
      <div className='em_date'>{employee.date}</div>
    </div>
    <div className='productlist'>
      <div className='check-box-wrapper'>
        <div className= 'check-box'></div>
      </div>
      <div className='profileImg'>
        <img src= {employee.profileImg} alt=''></img>
      </div>
      <div className='side-text'>
        <div className='employee-role'>{employee.role}</div>
        <div className='employee-summary'>{employee.summary}</div>
        <p id='headerarrow'>{arrow}</p>
      </div>
    </div>
    </div>
  );
}
const EmployeeDetails1 =({detail_Name, details}) => {
  return(
  <div className='employeeDet_Wrapper1'>
    <div className='employee_Detail_Label1'>{detail_Name + "   :"}</div>
    <div className='employee_Detail1'>{details}</div>
  </div>
  )
}
const EmployeeDetails2 =({detail_Name, details}) => {
  return(
  <div className='employeeDet_Wrapper2'>
    <div className='employee_Detail_Label2'>{detail_Name +" "}</div>
    <div className='employee_Detail2'>{details}</div>
  </div>
  )
}
export default App;
    
