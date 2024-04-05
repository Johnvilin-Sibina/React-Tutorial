import './App.css'
import ArraySample from './components/ArraySample'
import MultiTypeComponent from './components/MultiTypeComponent'
import OneOfSample from './components/OneOfSample'
import ChildComponent from './components/ChildComponent'
import Student from './components/Student'
import FunctionSample from './components/FunctionSample'

function App() {

  let items = [
    {
      name: "Sibina",
      age: 25,
      gender: "Female"
    },
    {
      name: "Mary",
      age: 55,
      gender: "Female"
    },
    {
      name: "Seelan",
      age: 63,
      gender: "Male"
    }
  ]
const handleClick = ()=>{
  alert("Button Clicked!")
}
  return (
    <>
    <Student name="Johnvilin Sibina" age={25} isMarried={false}/>
    <Student />
    <ChildComponent>
      <p>This is Paragraph 1</p>
      <p>This is Paragraph 2</p>
      <p>This is Paragraph 3</p>
    </ChildComponent>
    <ArraySample items={items}/>
    <OneOfSample color="green"/>
    <MultiTypeComponent value="Hello"/>
    <MultiTypeComponent value={25}/>
    <MultiTypeComponent value={true}/>
    <div>
      <h2>This is parent component</h2>
      <FunctionSample handleClick={handleClick}/>
    </div>
    </>
  )
}

export default App
