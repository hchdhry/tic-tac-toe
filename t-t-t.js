const gameboard={
    board: Array(9).fill(''),    
  }
 
  const player=(symbol,value)=>{
    function populate(player,index){
      gameboard.board[index]= player

    }

    return{symbol,value,populate}
  }

  
  const playerone = player("x",1)
  const playertwo = player("o",2)
 playerone.populate("x",2)
  console.log(gameboard.board)