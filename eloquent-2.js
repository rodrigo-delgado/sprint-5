Looping a triangle

// Your code here.
var hashtag = "";
for (var i = 0; i < 7; i++) {
  console.log(hashtag += "#");
}


  FizzBuzz

  for (var i = 0; i <= 100; i++) {
    if ( (i % 5 === 0) && (i % 3 === 0) ) {
      console.log("FizzBuzz");
    }else if (i % 3 == 0) {
      console.log("Fizz");
    }else if (i % 5 == 0) {
      console.log("Buzz");
    }else {
      console.log(i);
    }
  }


ChessBoard

var chessBoard = function(size){
   var hash = '#'
   var space = ' '
   for (var i = 0; i < size; i++)
   {

       hash += '\n'

       for (var j = 0; j < size; j++)
       {
       if((i +j) % 2 == 0)
       {
       hash  += space
       }
       else
       {
       hash  += "#"
       }
   };

};

console.log(hash)
}(8)
