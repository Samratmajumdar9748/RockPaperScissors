

// Gobal Variables

var Player, Computer;
var PlayerScore=0,ComputerScore=0; 

//Play Again Button

document.querySelector(".play-again").addEventListener("click",function(){
    location.reload();  });

//Player's Choice
for(var i=0 ; i<3 ; i++)
    {
        document.querySelectorAll(".pButton")[i].addEventListener("click",playerMove);
        
    
    }
function playerMove()
    {
        Player= this.classList[0];
    
        Player= assignNumber(Player);
        
        Computer= generateRandom();
        
        computerAnimation(Computer);
    
    
        updateScore();
        
    }

//Generates Computer's Move
function generateRandom()
{
    return Math.floor(Math.random()*3)+1;
}

//Animates Computer's Move
function computerAnimation(random)
{
    switch(random)
    {
        case 1: document.querySelector(".computer .Rock").classList.add("keyPressed");
                setTimeout(function(){
                    document.querySelector(".computer .Rock").classList.remove("keyPressed");
                },1000);
                break;
        case 2: document.querySelector(".computer .Paper").classList.add("keyPressed");
                setTimeout(function(){
                    document.querySelector(".computer .Paper").classList.remove("keyPressed");
                },1000);
                break;
        case 3: document.querySelector(".computer .Scissors").classList.add("keyPressed");
                setTimeout(function(){
                    document.querySelector(".computer .Scissors").classList.remove("keyPressed");
                },1000);
                break;         
    }
}

// Assigns Number to Player's Move
function assignNumber(num)
{
    switch(num)
    {
        case "Rock" :   num=1;
            break;
        case "Paper":   num=2;
            break;
        case "Scissors": num=3;
            break;
    }
    return num;

}

// Update The Scores
function updateScore()
{
    if(Player===1 && Computer===2)
    {
        ComputerScore++;
    }
    else if(Player===1 && Computer===3)
    {
        PlayerScore++;
    }
    else if(Player===2 && Computer===1)
    {
        PlayerScore++;
    }
    else if(Player===2 && Computer===3)
    {
        ComputerScore++;
    }
    else if(Player===3 && Computer===1)
    {
        ComputerScore++;
    }
    else if(Player===3 && Computer===2)
    {
        PlayerScore++;
    }
    else if(Player === ComputerScore )
    {

    }

    // Show Scores on Screen
    document.querySelectorAll("h5")[0].innerHTML="Player: " + PlayerScore;
    document.querySelectorAll("h5")[1].innerHTML="Computer: " + ComputerScore;

    if(PlayerScore>=3 || ComputerScore>=3)
    {
        if(PlayerScore>ComputerScore)
        document.querySelector(".result h2").innerHTML="You Won!!";
        else
        document.querySelector(".result h2").innerHTML="Sorry! You Lost";

        for(var i=0 ; i<3; i++)
        document.querySelectorAll(".pButton")[i].removeEventListener("click",playerMove);
    }
}





