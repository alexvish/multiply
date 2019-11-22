import React from 'react';
import './App.css';

const App: React.FC = () => {
  return (
    <>
      <h1>Умножалка</h1>
      распечатать, разрезать, решать по 1 карточке в минуту.
      <table className="App">
        <tbody>
          <tr>
            <td>
              <RandomTable/>
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
    </>
  );
};

function randomOperation(): string {
  let a = Math.floor(2.0 + Math.random()*8);
  let b = Math.floor(2.0 + Math.random()*8);
  let op;
  if (Math.random() < 0.5) {
    op = ' &centerdot; '
  } else {
    a = a*b;
    op = ' : '
  }
  return `${a}${op}${b}`
}

function randomOperations(): string[][] {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push([randomOperation(), randomOperation(), randomOperation()])
  }
  return result;
}


const RandomTable: React.FC = () => {

  const ops = randomOperations();
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
