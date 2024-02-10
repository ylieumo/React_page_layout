import Header from "./Header";

function Employeepage(props) {
    return (
      <div className="Employeepage">
          <Header title="Employee"/>

          {/* <Employeepage name="Julie Taylor" text="VP of Marketing" /> */}
        {
            <ul>
                <p>Call Office:</p>
                <li>{props.data[1].office}</li>
                <br />
                <p>Call Mobile:</p>
                <li>{props.data[1].mobile}</li>
                <br />
                <p>Call SMS:</p>
                <li>{props.data[1].sms}</li>
                <br />
                <p>Send Email:</p>
                <li>{props.data[1].email}</li>
            </ul>
        }
     
      </div>
    );
  }
  
  export default Employeepage;
  