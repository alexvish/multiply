import React from 'react';
import {
  HashRouter as Router,
  Link, Route, Switch,
  useParams
} from 'react-router-dom';
import './App.css';

const App: React.FC = () => {
  return <>
    <Router>
      <h1>Умножалка</h1>
      <Link to={'/mult'}>Умн/Дел</Link> &nbsp;
      <Link to={'/add'}>Cл/Выч</Link>
      <br/>Распечатать, разрезать, решать по 1 карточке в минуту.
      <Switch>
        <Route path={'/:op'} component={MainTable}/>
        <Route path={'/'} component={MainTable}/>
      </Switch>
    </Router>
  </>;
};

function randomOperation(operation:string): string {
  let a,b,op;
  if (operation === 'add') {
    a = Math.floor(1.0 + Math.random()*9);
    b = Math.floor(1.0 + Math.random()*9);
    if (Math.random() < 0.5) {
      op = '&nbsp;+&nbsp;'
    } else {
      a = a + b;
      op = '&nbsp;-&nbsp;'
    }
  } else {
    a = Math.floor(2.0 + Math.random()*8);
    b = Math.floor(2.0 + Math.random()*8);
    if (Math.random() < 0.5) {
      op = '&nbsp;&centerdot;&nbsp;'
    } else {
      a = a*b;
      op = '&nbsp;:&nbsp;'
    }
  }
  return `${a}${op}${b}`
}

function randomOperations(op:string): string[][] {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push([randomOperation(op), randomOperation(op), randomOperation(op)])
  }
  return result;
}

const MainTable: React.FC = () => {
  return (
    <table className="App">
      <tbody>
      <tr>
        <td>
          <RandomTable />
        </td>
        <td>
          <RandomTable/>
        </td>
      </tr>

      <tr>
        <td>
          <RandomTable/>
        </td>
        <td>
          <RandomTable/>
        </td>
      </tr>

      </tbody>
    </table>
  );
};

const RandomTable: React.FC = () => {
  let {op} = useParams();
  const ops = randomOperations(op);
  const rows = ops.map( r => {
    let operations = r.map( o =>
             (<>
               <td className="op inner-td" dangerouslySetInnerHTML={{__html:o}}></td>
               <td className="inner-td"></td>
             </>));
    return (
      <tr>
        {operations}
      </tr>
    );
  });


  return (<table className="randomTable">
    <tbody>
      {rows}
    </tbody>
  </table>)

};

export default App;
