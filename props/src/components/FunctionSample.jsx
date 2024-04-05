import PropTypes from "prop-types";

function FunctionSample(props) {
  const { handleClick } = props;
  return (
    <div>
      <p>This is a function component.</p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default FunctionSample;

FunctionSample.propTypes = {
    FunctionSample: PropTypes.func
}

