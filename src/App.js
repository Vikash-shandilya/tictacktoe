import {useState} from 'react'

function Square({value , onSquareClick})
{
  return <button className='square' onClick={onSquareClick}>{value}</button>
}

export default function Board() {

  const [arr,setValue]=useState(Array(9).fill(null))
  const [xIsNext,setXisNext]=useState(true);

  function handleClick(i)
  {
    if(arr[i] || calculateWinner(arr))
    {
      return;
    }
    const nextArr=arr.slice();
    if(xIsNext)
    {
      nextArr[i]='X';
      

    }
    else{
      nextArr[i]='O';
    
    }
    setValue(nextArr)
    setXisNext(!xIsNext)
    
  }

  const winner=calculateWinner(arr)
  let status;
  if(winner)
  {
    status='winner '+winner
  }
  else
  {
    status='next player :' +(xIsNext ? 'X' : 'O');
  }

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  return (

    <>
    <div className='status'> {status}</div>
    <div className='board-row'>
    <Square value={arr[0]} onSquareClick={()=>{handleClick(0)}}/>
    <Square value={arr[1]} onSquareClick={()=>{handleClick(1)}}/>
    <Square value={arr[2]} onSquareClick={()=>{handleClick(2)}}/>

    
    </div>
    <div className='board-row'>
    <Square value={arr[3]} onSquareClick={()=>{handleClick(3)}}/>
    <Square value={arr[4]} onSquareClick={()=>{handleClick(4)}}/>
    <Square value={arr[5]} onSquareClick={()=>{handleClick(5)}}/>
    </div>
    <div className='board-row'>
    <Square value={arr[6]} onSquareClick={()=>{handleClick(6)}}/>
    <Square value={arr[7]} onSquareClick={()=>{handleClick(7)}}/>
    <Square value={arr[8]} onSquareClick={()=>{handleClick(8)}}/>
    
    </div>
    
    </>



  )
}
