
//let food = {salad:100, somtum:50, pizza:399,pay:function()
  //  {return this.salad + this.somtum + this.pizza}
//}
//console.log(pay);//

//let player = {player1:"Player 1",player2 : "Player 2", rollTheDice:function()
 //            {return this.rollTheDice = Math.floor(Math.random()*6+1)},
 //               playTheDice:function()
 //               {playTheDice();
  //              playTheDice();
  //              playTheDice();}}

//console.log(player);

let rounds = 3 ; //จำนวนครั้งในเกม ว่าจะเล่นกี่รอบ
let player1 = { name : " Jotaro "}; //ประกาศตัวแปร ข้อมูลของผู้เล่น ในที่นี่จะมีชื่อผู้เล่น
let player2 = { name : " Dio "}; 

    function gameOn(){ //ดำเนินการทุกอย่างที่เกิดขึ้นในเกม 1 เกม

     console.log("\n Game On \n");

    for(let i = 0; i < rounds ;i++){ //กำหนดรอบของเกม ซึ่งในที่นี่กำหนดไว้ 3 รอบ

      console.log(" Round : "+(i+1)+" G0!!!! \n");
      console.log(player1.name+" throw the dice")

      function player1ThrowsDice() {
      let dice = [1,2,3,4,5,6];
      let rd = Math.floor(Math.random()*dice.length);
      return dice[rd]; }

      player1.points = player1ThrowsDice();
     console.log(player1.name+" got "+player1.points+" points \n");
    
     console.log(player2.name+" throw the dice")

      function player2ThrowsDice() {
      let dice = [1,2,3,4,5,6];
      let rd = Math.floor(Math.random()*dice.length);
      return dice[rd]; }
      
     player2.points = player2ThrowsDice();
     console.log(player2.name+" got "+player2.points+" points \n");
     console.log("Result of this round \n");

     function resultOfRounds(){
       if(player1.points>player2.points){
         p1result = "Win"
         p2result = "Lose"
       }
       else if(player1.points<player2.points){
        p2result = "Win"
        p1result = "Lose"
      }
      else{
        p1result = "Draw"
        p2result = "Draw"
      }
      return {p1result,p2result}
    }
     let result = resultOfRounds();
     player1.result = result.p1result;
     player2.result = result.p2result;
     console.log(player1.name+" "+player1.result);
     console.log(player2.name+" "+player2.result+" \n");
    }
}
console.log(gameOn())

