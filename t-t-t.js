const cell=document.querySelectorAll(".cell")

const gameboard={
    board: Array(9).fill(''),    
  
    
  }
 
  const player=(symbol,value)=>{
    function populate(player,index){
      gameboard.board[index]= player

    }
   const yee = (player) =>{
    cell.forEach((div) => {
  div.addEventListener('click', () => {
        div.innerHTML=player.symbol
      });
    });
   }

    return{symbol,value,populate,yee}
  }

  const playerone = player("x",1)
  const playertwo = player("o",2)
playerone.yee(playerone)
