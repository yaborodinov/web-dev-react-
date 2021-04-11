import './App.css';
import { cheskLS, showMessage} from "./cookies"


function App() {

// arrow functions
  const arrow = () => 4;
  
  // spread rest=====================
  //spred оператор 
  const normalWork = [
    "ingineer", "teacher", "driver"
  ]
  const works = [...normalWork, "capitan", "fisher"];
  

  //c объектами 
  let worker = {
    'name': "Vova",
    "job": "builder",
  }
  let fullWorker = {
    ...worker,
    "position": "manager",
  }


  //rest!

  const num = (...args) => {
    return console.log(args)
  }


  // деструктуризация 

  const someArr=[
    44,55,66,77
  ];
  const [d1, , d2, ,] = someArr;
  const { name, position } = fullWorker


  //методы Map Filter тоже оч важны

  
  return (

    <>
      <h1>hello</h1>
      { !cheskLS() ? console.log(showMessage("Prob ")) : ""}
      
        
      {console.log(arrow())}
      {console.log(works)}

      {console.log(fullWorker)}


      {/* rest */}
      {num(1, 2)}


      {/* деструктуризация */}
      {console.log(d1, d2)}
      {console.log(name, position)}
      
    </>
  );
}

export default App;

