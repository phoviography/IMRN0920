console.log('================');
//soal 1
var word = 'JavaScript '; 
var second = 'is '; 
var third = 'awesome '; 
var fourth = 'and '; 
var fifth = 'I '; 
var sixth = 'love '; 
var seventh = 'it!';

var mix = word.concat(second, third, fourth, fifth, sixth, seventh);
console.log(mix);

console.log('================');
//soal 2
var sentence = "I am going to be React Native Developer"
var FirstWord = sentence[0]; 
var SecondWord = sentence[2] + sentence[3]; 
var thirdWord = sentence[5] + sentence[6] + sentence[7] + sentence[8] +sentence[9];
var fourthWord = sentence[11] + sentence[12];
var fifthWord = sentence [14] + sentence[15];
var sixthWord = sentence[17] + sentence[18] + sentence[19] + sentence[20] + sentence[21];
var seventhWord = sentence[23] + sentence[24] + sentence[25] + sentence[26] + sentence[27] + sentence[28];
var eighthWord = sentence[30] + sentence[31] + sentence[32] + sentence[33] + sentence[34] + sentence[35] + sentence[36] + sentence[37] + sentence[38]

console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + SecondWord);
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord);

console.log('================');
//soal 3
var sentence2 = 'wow JavaScript is so cool'; 

var FirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14);
var thirdWord2 = sentence2.substring(15, 17);
var fourthWord2 = sentence2.substring(18, 20);
var fifthWord2= sentence2.substring(21, 26);

console.log('First Word: ' + FirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

console.log('================');
//soal 4
var sentence3 = 'wow JavaScript is so cool'; 

var firstWord3 = sentence2.substring(0, 3); 
var secondWord3 = sentence2.substring(4, 14);
var thirdWord3 = sentence2.substring(15, 17);
var fourthWord3 = sentence2.substring(18, 20);
var fifthWord3 = sentence2.substring(21, 26);

var firstWordLength = firstWord3.length
var secondWordLength = secondWord3.length
var thirdWordLength = thirdWord3.length
var fourthWordLength = fourthWord3.length
var fifthWordLength = fifthWord3.length
// lanjutkan buat variable lagi di bawah ini 
console.log('First Word: ' + firstWord3 + ', with length: ' + firstWordLength); 
console.log('Second Word: ' + secondWord3 + ', with length: ' + secondWordLength); 
console.log('Third Word: ' + thirdWord3 + ', with length: ' + thirdWordLength); 
console.log('Fourth Word: ' + fourthWord3 + ', with length: ' + fourthWordLength); 
console.log('Fifth Word: ' + fifthWord3 + ', with length: ' + fifthWordLength); 