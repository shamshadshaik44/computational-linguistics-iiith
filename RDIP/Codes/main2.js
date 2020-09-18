var statement2=document.getElementById("matter");
var CorpusPara=document.getElementById("corpuspara");
var submit1=document.getElementById("submit1");
var result1=document.getElementById("result1");
var newMsg=document.getElementById("newmsg");
var submit2=document.getElementById("submit2");
var result2=document.getElementById("result2");
var numOfTokens,numOfTypes,newTypes,corp,modPasg;
var corpus=[
  'A mouse was having a very bad time. She could find no food at all. She looked here and there, but there was no food, and she grew very thin. At last the mouse found a basket, full of corn. There was a small hole in the basket, and she crept in. She could just get through the hole. Then she began to eat the corn. Being very hungry, she ate a great deal, and went on eating and eating. She had grown very fat before she felt that she had had enough. When the mouse tried to climb out of the basket, she could not. She was too fat to pass through the hole. "How shall I climb out?" said the mouse. "oh, how shall I climb out?" Just then a rat came along, and he heard the mouse. "Mouse," said the rat, "if you want to climb out of the basket, you must wait till you have grown as thin as you were when you went in.',
  'A wolf carried off a lamb. The lamb said, "I know you are going to eat me, but before you eat me I would like to hear you play the flute. I have heard that you can play the flute better than anyone else, even the shepherd himself." The wolf was so pleased at this that he took out his flute and began to play. When he had done, the lamb insisted him to play once more and the wolf played again. The shepherd and the dogs heard the sound, and they came running up and fell on the wolf and the lamb was able to get back to the flock.',
  'A man had a little dog, and he was very fond of it. He would pat its head, and take it on his knee, and talk to it. Then he would give it little bits of food from his own plate. A donkey looked in at the window and saw the man and the dog. "Why does he not make a pet of me?" said the donkey. "It is not fair. I work hard, and the dog only wags its tail, and barks, and jumps on its master\'s knee. It is not fair." Then the donkey said to himself, "If I do what the dog does, he may make a pet of me." So the donkey ran into the room. It brayed as loudly as it could. It wagged its tail so hard that it knocked over a jar on the table. Then it tried to jump on to its master\'s knee. The master thought the donkey was mad, and he shouted, "Help! Help!" Men came running in with sticks, and they beat the donkey till it ran out of the house, and they drove it back to the field. "I only did what the dog does," said the donkey," and yet they make a pet of the dog, and they beat me with sticks. It is not fair.',
];
var stemmer = new Snowball('English');

function getOption(value)
{
  if(value=="null")
  {
    initialize();
    corp="";
    alert('Select a corpus');
    return false;
  }
  else if(value=="corpus1")
  {
    initialize();
    corp="corpus1";
    CorpusPara.innerHTML=corpus[0]+"<br>"+"<br>"+
    "<center>Enter the number of tokens and types for the above corpus:"+"<br>"+
    "<table class='table table-bordered'><tr><td>#tokens: </td><td><input type='text' id='tokeninput' size='6'></td></tr><tr><td>#types: </td><td><input type='text' id='typeinput' size='6'></td></tr></table></center>";
     submitbton(corpus[0]);
   }
  else if(value=="corpus2")
  {
    initialize();
    corp="corpus2";
     CorpusPara.innerHTML=corpus[1]+"<br>"+"<br>"+
    "<center>Enter the number of tokens and types for the above corpus:"+"<br>"+
    "<table class='table table-bordered'><tr><td>#tokens: </td><td><input type='text' id='tokeninput' size='6'></td></tr><tr><td>#types: </td><td><input type='text' id='typeinput' size='6'></td></tr></table></center>";
     submitbton(corpus[1]);
    } 

  else if(value=="corpus3")
  {
     initialize();
     corp="corpus3";
     CorpusPara.innerHTML=corpus[2]+"<br>"+"<br>"+
    "<center>Enter the number of tokens and types for the above corpus:"+"<br>"+
    "<table class='table table-bordered'><tr><td>#tokens: </td><td><input type='text' id='tokeninput' size='6'></td></tr><tr><td>#types: </td><td><input type='text' id='typeinput' size='6'></td></tr></table></center>";
     submitbton(corpus[2]);
}
    
}
function submitbton(pasg)
{
  submit1.innerHTML="<button class='btn btn-primary' id='submit' value='submit' onclick='check()'><b>SUBMIT</b></button>";
  modPasg=pasg.replace(/[^a-zA-Z ]/g, "");
  modPasg=modPasg.toLowerCase();
  modPasg=modPasg.split(" ");
  numOfTokens=modPasg.length;
  var distinct=new Set(modPasg);
  numOfTypes=distinct.size;
  // console.log(numOfTokens);
  // console.log(numOfTypes);
  result1.innerHTML="";
  result2.innerHTML="";
}
function check()
{
  var TokenAns=document.getElementById("tokeninput").value;
  var TypeAns=document.getElementById("typeinput").value;
  if(numOfTokens==TokenAns)
  {
    document.getElementById("tokeninput").style.backgroundColor="Green";
  }
  else
  {
    document.getElementById("tokeninput").style.backgroundColor="Red";
  }
  if(numOfTypes==TypeAns)
  {
    document.getElementById("typeinput").style.backgroundColor="Green";
  }
  else
  {
    document.getElementById("typeinput").style.backgroundColor="Red";
  }
  if(numOfTokens==TokenAns&&numOfTypes==TypeAns)
  {
    result1.innerHTML="<font color='Green'><b>RIGHT ANSWER !!!</b></font>"+"<br>"+"<br>"+
    "<button class='btn btn-primary' id='continue' onclick='continuefun()'><b>CONTINUE</b></button>";
  }
  else{
    result1.innerHTML="<font color='Red'><b>WRONG ANSWER  :(</b></font>";
  }

}
function continuefun()
{
 result1.innerHTML="";
 submit1.innerHTML="";
 newMsg.innerHTML="Now, consider all the tokens with the same 'root' word to be of the same type. Recalculate the number of types."+
  "<br>"+"#new types:"+"<br>"+"<input type='text' id='newinput'>";
  submit2.innerHTML="<button class='btn btn-primary' id='submit2' value='submit' onclick='stemmingfun()'><b>SUBMIT</b></button>";

}
function stemmingfun()
{
   newTypes=document.getElementById("newinput").value;
   var j=0;
   var stemPara=[];
   for(var i=0;i<modPasg.length;i++)
   {
    if(modPasg[i]=="the"||modPasg[i]=="to"||
      modPasg[i]=="did"||modPasg[i]=="does"||
      modPasg[i]=="of"|| modPasg[i]=="off"||
      modPasg[i]=="me"|| modPasg[i]=="you"||
      modPasg[i]=="up"|| modPasg[i]=="can"||
      modPasg[i]=="than"||modPasg [i]=="very")
    {
      continue;
    }
    else
    {
      stemmer.setCurrent(modPasg[i]);
      stemmer.stem();
      stemPara[j]=stemmer.getCurrent();
      j++;

    }
    }
    stemPara=new Set(stemPara);
    stemPara=Array.from(stemPara);
    // console.log(stemPara.length);
    var len=stemPara.length;
    if(len==newTypes)
  {
    document.getElementById("newinput").style.backgroundColor="Green";
    result2.innerHTML="<font color='Green'><b>RIGHT ANSWER!!!! :)</b></font>";
  }
  else
  {
    document.getElementById("newinput").style.backgroundColor="Red";
    result2.innerHTML="<font color='Red'><b>WRONG ANSWER :(</b></font>";
  }
}

function initialize()
{
  CorpusPara.innerHTML="";
  newMsg.innerHTML="";
  submit1.innerHTML="";
  submit2.innerHTML="";
  result2.innerHTML="";
}
 
 function introduction()
{
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("corpus").value="null";
  statement2.innerHTML=
   "<br>"+"<h4><b>Introduction:</b></h4>"+
   "<br>"+"Tokens correspond to the total number of word counts in a text while type corresponds to the total count of unique words in a text."+"<br>"+"<br>"
   +"<center><img src='http://cl-iiith.vlabs.ac.in/exp3/Exp3/Exp3.jpg' alt='image'></center>";
 }
 function theory()
 {
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("corpus").value="null";
  statement2.innerHTML=
  "<br>"+"<h4><b>Theory:</b></h4>"+
  "<br>"+"<h5><b>Definition</b></h5>"+
  "<br>"+"<b>Tokens</b> correspond to the total number of word counts in a text while type corresponds to the total count of unique words in a text. We can say that language consists of various types of words and all the particular instances of these words are called tokens.<br><br>For Eg: Do not waste time as wasting time does a lot of harm."+"<br>"+"<br>"+"Here,<br>#tokens=12<br>#types=11 (time has been repeated twice)"+"<br>"+"<br>"+
  "<b>Type vs token distinction</b>"+"<br>"+"<br>"+"The type/token distinction is related to that between universals and particulars. Tokens are concrete particular instances of a general and abstract type.<br>There is only one word 'the' (type) but many instances of it found on this page (token).<br>For eg:<ul><li>Beethovenâ  s Fifth Symphony and performances of it</li><li>the white elephant and specimens of it</li><li>Kentucky Fried Chicken and its centres</li>"+"<br>"+"<b>Types - (continued)</b>"+"<br>"+"<br>"+"Study this example again: Do not waste time as wasting time does a lot of harm.<br><br>Now, we notice that 'waste' and 'wasting' share a common root. So do 'do' and 'does'.<br>Do we consider them as different types? The second approach is to consider them as a single type as inflections(different grammatical forms) of the same word (type)."+"<br>"+"Therefore,<br>#tokens=12 #types(root)=9</ul>";
 }
 function objective()
 {
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("corpus").value="null";
  statement2.innerHTML=
 "<br>"+"<h4><b>Objective:</b></h4>"+
  "<br>"+"The objective of this experiment is to impart basic knowledge about the distinction between types and tokens.";
 }
 function experiment()
 {
  statement2.innerHTML=
  "<br>"+"<h4><b>Experiment:</b></h4>";
   result1.innerHTML="";
  result2.innerHTML="";
  document.getElementById("exp").style.display="block";

 }
function quizzes(){
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("corpus").value="null";
  statement2.innerHTML=
  "<br>"+"<h4><b>Quizzes:</b></h4>"+"<br>"+
  "Give number of types and tokens for the following sentences:<ol><li>What did you do?</li><li>Two and two makes four.</li><li>Ram eats an apple afteat eating a banana.</li><li>April will come here after 10th of April.</li><li>John drinks tea and George takes cold drink.</li></ol>";
}
 function procedure(){
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("corpus").value="null";
  statement2.innerHTML=
  "<br>"+"<h4><b>Procedure:</b></h4>"+"<br>"+
  "<u><b>STEP 1 :</b></u> Select the corpus."+"<br>"+
"<u><b>STEP 2:</b></u> Submit the number of tokens and types in the given text box."+"<br>"+
"<u><b>STEP 3:</b></u>If your answer is correct, you can enter the number of types of root and check your answer.";
}