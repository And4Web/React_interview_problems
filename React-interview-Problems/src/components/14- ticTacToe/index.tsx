import { MouseEventHandler, useEffect, useState } from "react";
import "./style.css";

// from 3:53:40 to 4:17:00

type SquareProps = {
  value?: number | string;
  onClick: (v: number) => undefined;
};

function Square({ value, onClick }: SquareProps) {
  return (
    <button className="ttt-square" onClick={onClick}>
      <span
        style={{
          color: value === "X" ? "blue" : "red",
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        {value}
      </span>
    </button>
  );
}

function TicTacToe() {
  const [isXTurn, setIsXTurn] = useState<boolean>(true);
  const [squares, setSquares] = useState<string[]>(Array(9).fill(""));
  const [result, setResult] = useState<string>('');
  const [xCount, setXCount] = useState<number>(0);
  const [oCount, setOCount] = useState<number>(0);
  const [drawCount, setDrawCount] = useState<number>(0);
  

  function getWinner(squares: string[]){
    /*
    0 1 2
    3 4 5
    6 7 8
    */
    type Pattern = number[]
    
    const winningPatterns: Pattern[] = [
      [0,1,2],[3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8],[2,4,6]
    ] ;

    for(let i = 0; i < winningPatterns.length; i++){
      const [x, y, z] = winningPatterns[i];
      if(squares[x] && squares[x] === squares[y] && squares[y] === squares[z]){
        return squares[x];       
      }
    }

    return null;
  }
 
  // useEffect(()=>{
  //   if(result !== ""){
  //     setTimeout(()=>{
  //       setSquares(Array(9).fill(""))
  //       setResult('')
  //     }, 1000);
  //   }else return
  // },[result])

  useEffect(()=>{
    if(localStorage.getItem("ttt-result")){
      setXCount(JSON.parse(localStorage.getItem('ttt-result')).x);
      setOCount(JSON.parse(localStorage.getItem('ttt-result')).o);
      setDrawCount(JSON.parse(localStorage.getItem('ttt-result')).d);
    }
  }, [])

  useEffect(()=>{
    const result = {x:xCount, o:oCount, d:drawCount};
    const prevStored = {...JSON.parse(localStorage.getItem('ttt-result'))};
    localStorage.setItem('ttt-result', JSON.stringify({...prevStored, x:result.x, o:result.o, d:result.d}))
  }, [xCount, drawCount, oCount])

  useEffect(()=>{
    if(!getWinner(squares) && squares.every(item => item !== "")){
       setResult("Draw")
       setDrawCount(drawCount+1)       
    } else if (getWinner(squares)){
      const tempRes = getWinner(squares);
      setResult(tempRes);

      if(tempRes === 'X') {
        setXCount(xCount + 1);       
      }
      if(tempRes === "O") {
        setOCount(oCount + 1);        
      }     
    }else {
      return
    }
    
  }, [squares, isXTurn])

  const handleRestart = () => {
    setSquares(Array(9).fill(""))
    setResult('');
    setIsXTurn(true);
  }


  const handleClick = (index:number) => {
    const copySquares = [...squares];

    if(copySquares[index] || result || getWinner(squares)) return;
    
    copySquares[index] = isXTurn ? "X" : "O";
    
    setSquares(copySquares);
    setIsXTurn(!isXTurn);
    
  };

  return (
    <div className="ttt-container">
      <h3 className="ttt-title">Project 14. Tic Tac Toe</h3>

      {Array.from({ length: 3 }).map((_, i) => {
        return (
          <div key={i} className="ttt-row">
            {Array.from({ length: 3 }).map((item, index) => {
              let value: number =
                i === 1 ? 3 + index : i === 2 ? 6 + index : i + index;

              return (
                <Square
                  key={index}
                  onClick={() => handleClick(value)}
                  value={squares[value]}
                />
              );
            })}
          </div>
        );
      })}

      {
        result && <h3 className="ttt-result">{result} {getWinner(squares)? "won" : null}</h3>
      }

      <div className="ttt-players">
        <h3 className="ttt-px">Player X: {xCount}</h3>
        <h3 className="ttt-draw">Draw: {drawCount}</h3>
        <h3 className="ttt-po">Player O: {oCount}</h3>
      </div>

      {result && <button className="ttt-res-btn" onClick={handleRestart}>Restart</button>}
    </div>
  );
}

export default TicTacToe;
