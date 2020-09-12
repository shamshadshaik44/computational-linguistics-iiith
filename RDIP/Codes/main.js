var i,row,newString,count,btncount,len,btn,j,k,h,lan;
var sentence=document.getElementById("sentence");
var statement=document.getElementById("statement1");
var reform=document.getElementById("reform");
var check=document.getElementById("check");
var result=document.getElementById("result");
var finalsent="";
function getOption(lang)
{
        document.getElementById("words").innerHTML="";
	if(lang=="null")
	{
		alert('Select language');
		return false;
	}
	else  {
		document.getElementById("content").style.display="block";
		if(lang=="english")
		{
      sentence.innerHTML="";
      statement.innerHTML="";
      lan="english";
		     row=randomNumber(lang);
                displaySplit(english[row][0]);
		}
		else if(lang=="hindi")
		{
       lan="hindi";
       sentence.innerHTML="";
       statement.innerHTML=" ";
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
       document.getElementById("words").innerHTML="";
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
         btn=document.createElement("button");
        btn.innerHTML=newString[i];
        btn.id="buton"+j;
        btn.addEventListener("click",function(){
              hiding(this.id,this.innerHTML);
        });
        newString[i]=0;
        count+=1;
        document.getElementById("words").appendChild(btn);
        j+=1;
       
        }

       }
     
}
function hiding(id,value)
{
 finalsent+=value+" ";
 sentence.innerHTML=finalsent;
 statement.innerHTML="<b>Formed Sentences(after Selecting Words)</b>";
 document.getElementById(id).style.display="none";
 btncount+=1;
 reform.innerHTML="<button id='reformbtn' onclick='reformSentence()'>Re-Form the sentence</button>"
  console.log(count);
  console.log(btncount);
  console.log(newString);
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
  sentence.innerHTML="";
  statement.innerHTML="";
  finalsent="";
  check.innerHTML="";
  result.innerHTML="";
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
  if(lan=="english")
  {
   ans=english[row].includes(finalsent.trim());
  }
  else if(lang=="hindi")
  {
    ans=hindi[row].includes(finalsent.trim());
  }
  if(ans==true)
  {
    result.innerHTML="RIGHT ANSWER";
  }
  if(ans==false)
  {
    result.innerHTML="Wrong ANSWER";
  }

}