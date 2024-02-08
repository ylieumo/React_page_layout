import Header from "./Header";
import SearchBar from "./SearchBar";
import EmployeeList from "./EmployeeList";

function Homepage() {
  return (
    <div className="Homepage">
        <h1></h1>
      <Header />
      <SearchBar />
      <EmployeeList />
    </div>
  );
}

export default Homepage;
