var i,row,newString,count,btncount,len,answers,bttn,j,k,h,lan,ans;
var sentence=document.getElementById("sentence");
var statement0=document.getElementById("statement0");
var statement=document.getElementById("statement1");
var reform=document.getElementById("reform");
var check=document.getElementById("check");
var result=document.getElementById("result");
var finalsent="";
var showAns=document.getElementById("show");
var correctAnswer=document.getElementById("correctAns");
var statement2=document.getElementById("matter");
function getOption(lang)
{
  initialize();
	if(lang=="null")
	{
    statement0.innerHTML="";
		alert('Select language');
		return false;
	}
	else  {
		document.getElementById("content").style.display="block";
    statement0.innerHTML=
    "<br>"+"<br>"+"<font color='Indigo'><h5><b>Form a sentence (Declarative or Interrogative or any other type) from the given words.</b></font><br><font color='DarkRed'><i>(select the buttons in proper order)</i></font></h5>"+"<br>"
		if(lang=="english")
		{
      initialize();
      lan="english";
		     row=randomNumber(lang);
         displaySplit(english[row][0]);
		}
		else if(lang=="hindi")
		{
       initialize();
       lan="hindi";
			row=randomNumber(lang);
      displaySplit(hindi[row][0]);
		}
	}
}

var english=[
    ["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"],
    ["some students like to study in the night", "at night some students like to study"],
    ["John and Mary went to church", "Mary and John went to church"],
    ["John went to church after eating", "after eating John went to church", "John after eating went to church"],
    ["did he go to market", "he did go to market"],
    ["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics"],
    ["John goes to the library and studies", "John studies and goes to the library"],
    ["John ate an apple so did she", "she ate an apple so did John"],
    ["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"],
    ["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her",	
"yesterday I bought a book that I told her"]
  ]
var hindi=[["राम और श्याम बाजार गयें",
                            "राम और श्याम गयें बाजार",
                            "बाजार गयें राम और श्याम",
                            "गयें बाजार राम और श्याम"],
	["राम सोया और श्याम भी",
                           "श्याम सोया और राम भी",
                           "सोया श्याम और राम भी",
                           "सोया राम और श्याम भी"],
	["मैंने उसे बताया कि राम सो रहा है",
                          "मैंने उसे बताया कि सो रहा है राम",
                          "उसे मैंने बताया कि राम सो रहा है",
                          "उसे मैंने बताया कि सो रहा है राम",
                          "मैंने बताया उसे कि राम सो रहा है",
                          "मैंने बताया उसे कि सो रहा है राम",
                          "उसे बताया मैंने कि राम सो रहा है",
                          "उसे बताया मैंने कि सो रहा है राम",
                          "बताया मैंने उसे कि राम सो रहा है",
                          "बताया मैंने उसे कि सो रहा है राम",
                          "बताया उसे मैंने कि राम सो रहा है",
                         "बताया उसे मैंने कि सो रहा है राम"],
	["राम खाकर सोया",
                         "खाकर राम सोया",
                         "राम सोया खाकर",
                         "खाकर सोया राम",
                         "सोया राम खाकर",
                         "सोया खाकर राम"],
	["बिल्लियों को मारकर कुत्ता सो गया", 
	                     "मारकर बिल्लियों को कुत्ता सो गया",	 
                          "बिल्लियों को मारकर सो गया कुत्ता",	
                           "मारकर बिल्लियों को सो गया कुत्ता",	
                          "कुत्ता सो गया बिल्लियों को मारकर",	
                           "कुत्ता सो गया मारकर बिल्लियों को",	
                           "सो गया कुत्ता बिल्लियों को मारकर",
                          "सो गया कुत्ता मारकर बिल्लियों को"],
      ["एक लाल किताब वहाँ है",
                         "एक लाल किताब है वहाँ",
                        "वहाँ है एक लाल किताब",
                        "है वहाँ एक लाल किताब"],
	["एक बड़ी सी किताब वहाँ है",	
                        "एक बड़ी सी किताब है वहाँ",
                            "बड़ी सी एक किताब वहाँ है",
                        "बड़ी सी एक किताब है वहाँ",
                        "वहाँ है एक बड़ी सी किताब",
                         "वहाँ है बड़ी सी एक किताब",
                           " है वहाँ एक बड़ी सी किताब",
                         "है वहाँ बड़ी सी एक किताब"]
]
function randomNumber(lang)
{
   return Math.round(Math.random()*lang.length);  
}
function displaySplit(string)
{ 
       initialize();
       newString=string.split(" ");
       len=newString.length;
       count=0;
       btncount=0;
       j=0;
       while(len>count)
       {
        i=Math.round(Math.random()*newString.length);
        if(newString[i])
        {
         bttn=document.createElement("button");
        bttn.innerHTML=newString[i];

        bttn.id="buton"+j;
        bttn.addEventListener("click",function(){
              hiding(this.id,this.innerHTML);
        });
        newString[i]=0;
        count+=1;
        document.getElementById("words").appendChild(bttn);
        j+=1;
       
        }

       }
     
}
function hiding(id,value)
{
 finalsent+=value+" ";
 sentence.innerHTML=finalsent;
 statement.innerHTML="<h5><font color='Indigo'><b>Formed Sentences(after Selecting Words)</b></font></h5>";
 document.getElementById(id).style.display="none";
 btncount+=1;
 reform.innerHTML="<button id='reformbtn' onclick='reformSentence()'>Re-Form the sentence</button>"
 if(count==btncount)
 {
  check.innerHTML="<button id='checkbtn' onclick='checkSentence()'>Check the Sentence</button>"
 }
}
function reformSentence()
{
  for(k=0;k<=len-1;k++)
  {
    document.getElementById("buton"+k).style.display="inline-block";
  }
  initialize();
  if(lan=="english")
  {
  newString=english[row][0];
  }
  else if(lan=="hindi")
  {
    newString=hindi[row][0];
  }
  displaySplit(newString);
}
function checkSentence()
{
  ans="";
  if(lan=="english")
  {
   ans=english[row].includes(finalsent.trim());
  }
  else if(lan=="hindi")
  {
    ans=hindi[row].includes(finalsent.trim());
  }
  if(ans==true)
  {
    result.innerHTML="<font color='green'><b>RIGHT ANSWER!!!</b></font>";
  }
  if(ans==false)
  {
    result.innerHTML="<font color='red'><b>WRONG ANSWER  :( </b></font>";
    correctAnswer.innerHTML="";
    document.getElementById('correctAns').style.display="block";
    showAns.innerHTML="<button id='ansbtn' onclick='correctAns()'>GET CORRECT ANSWER</button>";
    
  }

}
function correctAns()
{
  answers="";
  showAns.innerHTML="<button id='ansbtn' onclick='hideCorrect()'>HIDE THE CORRECT SENTENCES</button>"
  if(lan=="english")
  {
    for(i=0;i<english[row].length;i++)
    {
      answers+=english[row][i]+"<br>";
    }
  }
  else if(lan=="hindi")
  {
    for(i=0;i<hindi[row].length;i++)
    {
      answers+=hindi[row][i]+"<br>";
    }
  }
  correctAnswer.innerHTML=answers;
  
}
function initialize()
{
  document.getElementById("words").innerHTML="";
  statement.innerHTML="";
  sentence.innerHTML="";
  reform.innerHTML="";
  check.innerHTML="";
  result.innerHTML="";
  showAns.innerHTML="";
  finalsent="";
  correctAnswer.innerHTML="";
  answers="";
  document.getElementById('correctAns').style.display=" ";
}
 function hideCorrect()
 {
    
  document.getElementById('correctAns').style.display="none";
  showAns.innerHTML="<button id='ansbtn' onclick='getAns()'>GET ANSWERS</button>";

 }
 function getAns()
 {
  document.getElementById('correctAns').style.display="block";
  showAns.innerHTML="<button id='ansbtn' onclick='hideCorrect()'>HIDE THE CORRECT SENTENCES</button>";
 }
 function introduction()
 {
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("lang").value="null";
  statement0.innerHTML="";
   statement2.innerHTML=
   "<br>"+"<h4><b>Introduction:</b></h4>"+
   "<br>"+"A sentence can become more complex, if more than one verb is present or by joining two sentences or words using conjunctions or by some other methods."+"<br>"+"<br>"
   +"In this experiment also, you will make more difficult sentences using the given words.";
 }
 function theory()
 {
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("lang").value="null";
  statement0.innerHTML="";
  statement2.innerHTML=
  "<br>"+"<h4><b>Theory:</b></h4>"+
  "<br>"+"A clause typically contains a subject noun phrase and a finite verb. Some languages allow subjects to be omitted. There are two types of subclauses:"+
  "<ol><li>independent clause</li><li>subordinate clause</li></ol>"+
  "Independent clause shows the complete meaning in it." +
  "For example: Ram eats. A subordinate clause is not a complete sentence." +
  "For example: because I am sick. Sentences can also be classified on the basis of clauses.";
 }
 function objective()
 {
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("lang").value="null";
  statement0.innerHTML="";
  statement2.innerHTML=
 "<br>"+"<h4><b>Objective:</b></h4>"+
  "<br>"+"The objective of this experiment is to know how to form logically correct sentences from the given words.";
 }
 function experiment()
 {
  initialize();
  statement2.innerHTML=
  "<br>"+"<h4><b>Experiment:</b></h4>";
  document.getElementById("exp").style.display="block";
 }

 function procedure(){
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("lang").value="null";
  statement0.innerHTML="";
  statement2.innerHTML=
  "<br>"+"<h4><b>Procedure:</b></h4>"+"<br>"+
  "<u><b>STEP 1 :</b></u> Select a language which you know better"+"<br>"+
"<u><b>STEP 2:</b></u> Select the buttons which has words written on it, in a proper order"+"<br>"+
"<u><b>OUTPUT:</b></u> Group of words in a selected order will be shown"+
"<br>"+"<br>"+"<b>Note:</b>"+"<br>"+
"1.If a wrong sentence is formed, <button class='btn btn-primary'>Re-form the sentence</button> is available for re-setting."+"<br>"+"<br>"+
"2.You can check whether the formed sentence is a valid or not by clicking <button class='btn btn-primary'>Check the sentence</button>"+"<br>"+"<br>"+
"3.For a wrong sentence, you can get the correct sentence by clicking <button class='btn btn-primary'>Get correct sentence</button>";
 }