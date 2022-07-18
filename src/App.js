import logo from './logo.svg';
import './App.css';
import   Greet   from './components/Greet'
// import { Hello, Message } from './components/Greet'
import ClassComponent from './components/ClassComponent';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
    {/* <Greet name= "JAVA" langType="high level">
      <p>Java is best lang.</p>
    {/* </Greet> */}
    {/* <Greet name= "C" langType="low level">
      <button>Click here to learn C</button>
    </Greet> */}
    {/* <Greet name= "C++"/> */}
    {/* <ClassComponent name="Laxmi" gender="Female"></ClassComponent>
    <ClassComponent name="abc" gender="Female"></ClassComponent>
    <ClassComponent name="xyz" gender="male"></ClassComponent> */}
    {/* <Message/> */}
    {/* <Counter/> */}
    {/* <FunctionClick/> */}
    {/* <ClassClick/> */}
    {/* <EventBind/> */}
    <ParentComponent/>
    </div>
  );
}

export default App;
