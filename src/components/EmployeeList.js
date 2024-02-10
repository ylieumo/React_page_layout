
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList(props) {

  return (
    <div className="EmployeeList">
        <h4>My employee list items</h4>
        {/* {data.map(employee => {
          return {EmployeeListItem}
        // })} */}

      <EmployeeListItem name = "James King" title= "President and CEO"/>
      <EmployeeListItem name = "Julie Taylor" title = "VP of Marketing" />
      <EmployeeListItem name = "Eugene Lee" title = "CEO" />
      <EmployeeListItem name = "John Williams" title = "VP of Engineering" />
      {/* <EmployeeListItem name = "Julie Taylor" title = "VP of Marketing /> */}
    
    </div>
  );
}

export default EmployeeList;
