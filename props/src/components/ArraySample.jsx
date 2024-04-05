import PropTypes from "prop-types";
function ArraySample(props) {
  const { items } = (props);
  return (
    <div>
      <ul>{items.map((item,index1,index2,index3)=>(
        <><li key={index1}>{item.name}</li>
        <li key={index2}>{item.age}</li>
        <li key={index3}>{item.gender}</li></>

      ))}</ul>
    </div>
  );
}

export default ArraySample;
ArraySample.propTypes={
    items:PropTypes.arrayOf(
       PropTypes.shape(
       {
        name: PropTypes.string,
        age: PropTypes.number,
        gender: PropTypes.string
       }
       )
    )
}
