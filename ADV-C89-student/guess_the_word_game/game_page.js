player_1_name =  localStorage.getItem("player_1");
player_2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player_name1").innerHTML = player_1_name;
document.getElementById("player_name2").innerHTML = player_2_name;

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn - " +  player_1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn - " + player_2_name;

function send(){
  get_word = document.getElementById("word");
  word = get_word.toLowerCase();
  console.log("word in lower case" + word);

  charAt1 = word.charAt(1);
  console.log(charAt1);

  length_divide_2 = Math.floor(word.length / 2);
  charAt2 = word.charAt(length_divide_2);
  console.log(charAt2);

  length_minus_1 = word.length - 1;
  charAt3 = word.charAt(length_minus_1);
  console.log(charAt3);

  remove_charAt1 = word.replace(charAt1, "_");
  remove_charAt2 = remove_charAt1.replace(charAt2, "_");
  remove_charAt3 = remove_charAt2.replace(charAt3, "_");
 console.log(remove_charAt3);

 question_word = "<h4 id='word_display'>Q. "+remove_charAt3+"</h4>"
 answer_word = 



}

