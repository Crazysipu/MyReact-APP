import logo from './logo.svg';
import './App.css';



function App(props) {
 const  {employee} =props;
 const {name,age,location,bloodGroup,profileImg} = props.employee;
    
return(
  <div className="container">
  {/* Start your React code here */}
  
  <div className="image">
      <img src= {profileImg} alt='img'></img>
  </div>
    <div className= "biodata">
      <h1> {name}</h1>
      <p> Location</p>
      <h3> {location}</h3>
      <p> Blood Group</p>
      <h3>{bloodGroup}</h3>
      <p> Age</p>
      <h3>{age}</h3>
    </div>
</div>
)
}
export default App;

