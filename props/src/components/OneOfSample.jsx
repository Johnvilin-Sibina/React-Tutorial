import PropTypes from "prop-types";

function OneOfSample(props) {
    const {color} = (props)
  return (
    <div style={{backgroundColor: color, color:"white", padding: "10px"}}>
        <p>This paragraph has background color green</p>
    </div>
  )
}

export default OneOfSample

OneOfSample.propTypes = {
    color: PropTypes.oneOf(["red","green","blue"])
}