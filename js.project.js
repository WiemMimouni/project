 var question = [
    {
    qst:"Do you have problems with sleeping?\n(a) yes\n (b)No ",
    answer: "yes"
    }, 
    {
        qst:"Do you feel sad or down suddenly ?\n(a) yes\n (b) no ",
        answer: "yes"
    },
    {
        qst:"Do you struggle from excessive fears or worries , or extreme feelings of guilt ?\n(a) yes\n(b) no",
        answer: "yes" 
    },
    {
        qst:"Do you suffer from tiredness all the time with low energy?\n(a) yes\n(b) no" ,
        answer: "yes"
    },
    {
        qst:"Do you have the desire to withdrawl from friends and activities?\n(a) yes\n(b) no",
        answer: "yes" 
    } 

 ]  
 var score=0;
 for(var i=0 ; i<questions.length ; i++){
    var response = window.qst(questions[i].qst);
    if (response==questions[i].answer){
        score=score+10;
        alerte("It's not a good fact")
    }
 }
 alert("you got"+ score ) ;