import React from "react";
import EmployeeListItem from "./EmployeeListItem";

function EmployeeList() {
  return (
    <div className="EmployeeList">
        <h4>My employee list items</h4>

      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
      {/* Add more EmployeeListItem components as needed */}
    </div>
  );
}

export default EmployeeList;
