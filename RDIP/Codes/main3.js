var statement2=document.getElementById("matter");
var corpDropdown=document.getElementById("corpdropdown");
var lan;
  var engCorp=[
    'The child liked the chocolate.',
    'She was stopped by the bravest knight.',
    'Mary baked a cake for his birthday',
    'She decorated the cake carefully',
    'Mary wore a dress with polka dots.',
  ];
  var hinCorp=[
    'राम ने सीता के लिए फल तोड़ा।',
    'छोटे बच्चे पाठशाला जल्दी आयेंगे।',
    'मेहनत का फल मीठा होता है।',
    'वाह! वह खूबसूरत है।',
    'पेड़ से पत्ते गिर गए।',
  ];

function getOption(value)
{
  if(value=="null")
  {
    initialize();
    lan="";
    alert('Select a language');
    return false;
  }
  else if(value=="english")
  {
    initialize();
    lan="english";
    corpDropdown.innerHTML="<br>"+"<br>"+"<select class='select btn-primary' id='engDrop' name='sentence' data-style='btn-info' onchange='getOption2(this.value);>"+
        "<option value='null'>"+"---select a sentence---"+"</option>"+
        "<option value='null'>"+"-------Select a Sentence------"+"</option>"+
        "<option value='sent1'>"+engCorp[0]+"</option>"+
        "<option value='sent2'>"+engCorp[1]+"</option>"+
        "<option value='sent3'>"+engCorp[2]+"</option>"+
        "<option value='sent4'>"+engCorp[3]+"</option>"+
        "<option value='sent5'>"+engCorp[4]+"</option></select>";
  }
  else if(value=="hindi")
  {
    initialize();
    lan="hindi";
    corpDropdown.innerHTML="<br>"+"<br>"+"<select class='selectpicker btn-primary' id='hinDrop' name='sentence' data-style='btn-info' onchange='getOption(this.value);>"+
        "<option value='null'>--Select a Sentence--</option>"+
        "<option value='null'>"+"-------Select a Sentence------"+"</option>"+
        "<option value='sent1'>"+hinCorp[0]+"</option>"+
        "<option value='sent2'>"+hinCorp[1]+"</option>"+
        "<option value='sent3'>"+hinCorp[2]+"</option>"+
        "<option value='sent4'>"+hinCorp[3]+"</option>"+
        "<option value='sent5'>"+hinCorp[4]+"</option></select>";
      } 

}
function initialize()
{
  corpdropdown.innerHTML="";
}

 function introduction()
{
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("language").value="null";
  statement2.innerHTML=
   "<br>"+"<h4><b>Introduction:</b></h4>"+
   "<br>"+"Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus.The basic parts of speech are : Noun, Verb, Determiner, Adjective, Adverb, Preposition (in English), Postposition (in Hindi)."+"<br>"+"<br>"
   +"<center><img src='../../src/lab/exp7/Exp5/a.jpg' alt='image'></center>";
 }
 function theory()
 {
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("language").value="null";
  statement2.innerHTML=
  "<br>"+"<h4><b>Theory:</b></h4>"+
  "<br>"+'"Parts of speech" are the basic lexical categories of the words present in a language. It is very important to understand these, in order to understand the grammar and use of the language concerned.<br><br>Eg:<ul><li>Ram(Noun) ate(Verb) an(Determiner) apple(Noun) with(Preposition) a(Article) fork(Noun).</li><li>राम(Noun) ने(Postposition) चम्मच(Noun) से(Postposition) मिठाई(Noun) खाई(Verb).</li></ul><br>Each part of speech explains how the word is used. In fact, the same word can act as different parts of speechs depending on the context.<br><br>Eg: A noun in one sentence and an adjective in the next.<ul><li>The glass was broken(Verb).</li><li>The broken(Adjective) glass pierced her flesh.</li><br><br>Part-of-speech tagging is the process of assigning a part-of-speech (lexical class marker) to each word in a corpus.'+"<br>"+
  '<table class="table table-bordered"><tr><th>POS</th><th>FUNCTION</th><th>EXAMPLE</th></tr><tr><td>Verb</td><td>action or state</td><td>take, eat, है, सोना, गया</td></tr><tr><td>Noun</td><td>naming word; person or thing</td><td>table, John, honesty, राम, कुर्सी, हिम्मत</td></tr><tr><td>Pronoun</td><td>replaces noun</td><td>he, she, you, मैं, वह</td></tr><tr><td>Determiner</td><td>occurs before noun or noun phrase</td><td>the, many, all</td></tr><tr><td>Adjective</td><td>describes noun</td><td>green, big, छोटा, सुन्दर, काला</td></tr><tr><td>Adverb</td><td>describes verb</td><td>naturally, slowly,धीरे, जल्दी</td></tr><tr><td>Preposition</td><td>joins noun to other POS</td><td>in,of, about</td></tr><tr><td>Postposition</td><td>joins noun to other POS</td><td>में, से, के लिए</td></tr><tr><td>Conjunction</td><td>joins two words, phrases, sentences</td><td>but, so, और, या</td></tr><tr><td>Interjection</td><td>express emotion or surprise followed by exclamation marks</td><td>Hello!, Hurray!, वाह!</td></tr></table>';
 }
 function objective()
 {
  document.getElementById("exp").style.display="none";
   initialize();
  document.getElementById("language").value="null";
  statement2.innerHTML=
 "<br>"+"<h4><b>Objective:</b></h4>"+
  "<br>"+"The objective of this experiment is to test the knowledge of basic part of speech of words as they appear in a sentence.";
 }
 function experiment()
 {
  statement2.innerHTML=
  "<br>"+"<h4><b>Experiment:</b></h4>";
  document.getElementById("exp").style.display="block";

 }
function quizzes(){
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("language").value="null";
  statement2.innerHTML=
  "<br>"+"<h4><b>Quizzes:</b></h4>"+"<br>"+
  "<b>Assign POS tag to each word in the following sentences</b><ol><li>Heat water in a large vessel.</li><li>The dog is happy.</li><li>The happy dog.</li><li>Park the car near the park.</li><li>The dog is sitting just at the gate.</li></ol><br><ol><li>बहार जाओ</li><li>गाड़ी उद्द्यान में खड़ी करो</li><li>राम खाना खाकर सो गया</li><li>राम खाते खाते सो गया</li><li>राम ने खाते खाते खाता खुलवाया</li></ol>";
}
 function procedure(){
  document.getElementById("exp").style.display="none";
  initialize();
  document.getElementById("language").value="null";
  statement2.innerHTML=
  "<br>"+"<h4><b>Procedure:</b></h4>"+"<br>"+
  "<u><b>STEP 1 :</b></u>  Select a language from the drop down menu."+"<br>"+
"<u><b>STEP 2:</b></u> Select a sentence from the drop down menu."+"<br>"+
"<u><b>STEP 3:</b></u>Select corresponding POS for each word in the sentence and and click the <button class='btn btn-primary'>submit</button>."+"<br>"+
"<u><b>OUTPUT:</b></u> The submitted answer will be checked."+"<br>"+
"<u><b>STEP 4:</b></u>If incorrect, click on <button class='btn btn-primary'>Get Answer</button> button for the correct answer or repeat STEP3."

}