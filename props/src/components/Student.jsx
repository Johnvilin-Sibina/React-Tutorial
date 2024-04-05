import PropTypes from "prop-types";
function Student(props) {
  return (
    <div className="student">
      <table>
        <tbody>
          <tr>
            <th>Name:</th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Age:</th>
            <td>{props.age}</td>
          </tr>
          <tr>
            <th>isMarried:</th>
            <td>{props.isMarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
      {/* <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>isMarried</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.age}</td>
                <td>{props.isMarried ? "Yes" : "No"}</td>
            </tr>
        </tbody>
      </table> */}
    </div>
  );
}

export default Student;

Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isMarried: PropTypes.bool
};
Student.defaultProps= {
    name: "No Name",
    age: 0,
    isMarried: false
}