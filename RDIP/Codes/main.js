/*function getOption(lang)
{
	if(lang=="null")
	{
		alert('Select language');
		return false;
	}
} */
var x="";
var i,j,y="";
var eng={
"sen": [
    {"num":"1", "types":["John ate an apple before afternoon", "before afternoon John ate an apple", "John before afternoon ate an apple"]},
    {"num":"2", "types":["some students like to study in the night", "at night some students like to study"]},
    {"num":"3", "types":["John and Mary went to church", "Mary and John went to church"] },
    {"num":"4", "types":["John went to church after eating", "after eating John went to church", "John after eating went to church"]},
    {"num":"5", "types":["did he go to market", "he did go to market"]},
    {"num":"6", "types":["the woman who called my sister sells cosmetics", "the woman who sells cosmetics called my sister", "my sister who sells cosmetics called the woman",
    "my sister who called the woman sells cosmetics"]},
    {"num":"7", "types":["John goes to the library and studies", "John studies and goes to the library"]},
    {"num":"8", "types":["John ate an apple so did she", "she ate an apple so did John"]},
    {"num":"9", "types":["the teacher returned the book after she noticed the error",
"the teacher noticed the error after she returned the book",
"after the teacher returned the book she noticed the error",
"after the teacher noticed the error she returned the book",
"she returned the book after the teacher noticed the error",
"she noticed the error after the teacher returned the book",
"after she returned the book the teacher noticed the error",
"after she noticed the error the teacher returned the book"]},
    {"num":"10", "types":["I told her that I bought a book yesterday",
"I told her yesterday that I bought a book",
"yesterday I told her that I bought a book",
"I bought a book that I told her yesterday",
"I bought a book yesterday that I told her",	
"yesterday I bought a book that I told her"]}
  ]
}
var hin={
	"sen":[
	{"num":"1", "types":["राम और श्याम बाजार गयें",
                            "राम और श्याम गयें बाजार",
                            "बाजार गयें राम और श्याम",
                            "गयें बाजार राम और श्याम"]},
	{"num":"2", "types":["राम सोया और श्याम भी",
                           "श्याम सोया और राम भी",
                           "सोया श्याम और राम भी",
                           "सोया राम और श्याम भी"]},
	{"num":"3", "types":["मैंने उसे बताया कि राम सो रहा है",
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
                         "बताया उसे मैंने कि सो रहा है राम"]},
	{"num":"4", "types":["राम खाकर सोया",
                         "खाकर राम सोया",
                         "राम सोया खाकर",
                         "खाकर सोया राम",
                         "सोया राम खाकर",
                         "सोया खाकर राम"]},
	{"num":"5", "types":["बिल्लियों को मारकर कुत्ता सो गया", 
	                     "मारकर बिल्लियों को कुत्ता सो गया",	 
                          "बिल्लियों को मारकर सो गया कुत्ता",	
                           "मारकर बिल्लियों को सो गया कुत्ता",	
                          "कुत्ता सो गया बिल्लियों को मारकर",	
                           "कुत्ता सो गया मारकर बिल्लियों को",	
                           "सो गया कुत्ता बिल्लियों को मारकर",
                          "सो गया कुत्ता मारकर बिल्लियों को"]},
	{"num":"6", "types":["एक लाल किताब वहाँ है",
                         "एक लाल किताब है वहाँ",
                        "वहाँ है एक लाल किताब",
                        "है वहाँ एक लाल किताब"]},
	{"num":"7", "types":["एक बड़ी सी किताब वहाँ है",	
                        "एक बड़ी सी किताब है वहाँ",
                            "बड़ी सी एक किताब वहाँ है",
                        "बड़ी सी एक किताब है वहाँ",
                        "वहाँ है एक बड़ी सी किताब",
                         "वहाँ है बड़ी सी एक किताब",
                           " है वहाँ एक बड़ी सी किताब",
                         "है वहाँ बड़ी सी एक किताब"]}
]
}

for( i in eng.sen)
{
	for( j in eng.sen[i].types)
	{
		
		
			x=x+eng.sen[i].types[j]+"<br>";
		
	}
}
document.getElementById("ans1").innerHTML = x;
for( i in hin.sen)
{
	for( j in hin.sen[i].types)
	{
		
		
			y=y+hin.sen[i].types[j]+"<br>";
		
	}
}
document.getElementById("ans2").innerHTML = y;