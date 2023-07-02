//Finding the emoji's what type of emoji you want
import React,{useState} from 'react';
let EmojiLib={
    "😂":"Laugh",
    "🤣":"Rolllaugh",
    "❤":"Heart",
    "👌":"Playboy",
    "😎":"Attitude"
}

function FindingEmoji(){
    var [emoji,findEmoji]=useState("");
    var [Input,SetInput]=useState("")
    function usercall(event){
       let UserInput=event.target.value;
       var meaning=EmojiLib[UserInput]
       SetInput(meaning);
    }
    return(
        <div class="Component">
            <nav id="HeadLine">s
                <h1 style={{fontStyle:'revert'}}>Finding Emoji Game</h1>
                <p style={{fontStyle:'italic',color:"yellow"}}>Can you guess the emoji??</p>

            </nav>
            <div class="BodyPart">
                <label htmlFor='UserInput' id="Users">
                    <input id="UserInput" type="text" onChange={usercall}/>
                </label>
                {/* <button id="Search_Button" onClick={searchemoji}>Search</button> */}
            </div>
            <div id="BodyEnd">
            <h2>Out<u>put</u></h2>
            <div id="output" style={{fontStyle:'italic',color:"ButtonText"}}>
               <b>{Input}</b> 
            </div>
            </div>
        </div>
    )

}
export default FindingEmoji;



//1st part heading part 
//2nd part user input
//output part
//thanks 

