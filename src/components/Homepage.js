import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function Homepage(props) {
  return (
    <div className="Homepage">
      <header title="Employee"/>
      <Header title="Employee Directory"/>
      <SearchBar />
      <EmployeeList data={props.data}/>
    </div>
  );
}

export default Homepage;
