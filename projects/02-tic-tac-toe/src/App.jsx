import { useState } from "react"
import './App.css'

const TURNS = {
    X: '❌​',
    O: '🟣​'
}



const Square = ({children, isSelected, updateboard, index}) => {
    const className = `square ${isSelected ? 'is-selected' : ''}`
    const handleClick = () => {
        updateboard(index)
    }
    return (
        <div onClick={handleClick} className={className}>
            {children}
        </div>
    )
}

const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

function App() {
    //dibujamos el tablero
    const [board, setboard] = useState(Array(9).fill(null))
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null) //null no hay ganador, false hay un empate

    const checkWinner = (board) => {
        for (const comb of WINNER_COMBOS){
            const [a,b,c] = comb
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null


    }

    const updateboard = (index) => {
        if (board[index] || winner) return //si hay algo no la actualizamos
        const newBoard = [...board]
        newBoard[index] = turn
        setboard(newBoard)
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)
        //revisamos si hay un ganador
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            setWinner(newWinner)
        }
    }

    return (
        <main className='board'>
            <h1>Tic Tac Toe</h1>
            <section className="game">
                {board.map((_,index) => {
                    return (
                        <Square 
                            key={index}
                            index={index}
                            updateboard={updateboard}
                        >
                            {board[index]}
                        </Square>
                    )
                    })
                }	
            </section>
            <section className="turn">
                <Square isSelected={turn === TURNS.X }>
                    {TURNS.X}
                </Square>
                <Square  isSelected={turn === TURNS.O }>
                    {TURNS.O}
                </Square>
            </section>
            {
                winner !== null && (
                    <section className="winner">
                        <div className="text">
                            <h2>
                                {
                                    winner === false ? 'Empate' : 'Ganó'
                                }
                            </h2>
                            <header className="win">
                                {winner && <Square>{winner}</Square>}
                            </header>

                            <footer>
                                <button>
                                    Empezar de nuevo
                                </button>
                            </footer>
                            
                        </div>
                    </section>
                )
            }
        </main>
        
    )
}

export default App
