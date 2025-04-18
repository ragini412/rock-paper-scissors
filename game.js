let comp_choice;
function computer_choice() {
  let random_number = Math.random() * 3;
  // This will generate random number between 1 to 3
  if (0 < random_number && random_number <= 1) {
    comp_choice = `Rock`;
  } else if (1 < random_number && random_number <= 2) {
    comp_choice = `Paper`;
  } else {
    comp_choice = `Scissors`;
  }
}


function reset_score(){
  localStorage.clear();
}

let score;
let old_score= localStorage.getItem('score');
// Here Guard operator will print the old score from the loaclstorage. if there will no score means undefined score the condition will be falsy and it will print the new score!
clear_storage(old_score);
function clear_storage(old_score){
  
  score = old_score ? JSON.parse(old_score) : {
    Win:0,
    Lost:0,
    Tie:0,
  };
  score.Display_score = function(){
    return `Your Score - Won: ${score.Win} | Lost: ${score.Lost} | Tie: ${score.Tie}`;
  }

  result_message();
}
// score = JSON.parse(old_score) || {
//   Win:0,
//   Lost:0,
//   Tie:0,
// };

// score.Display_score = function(){
//   return `Won: ${score.Win} | Lost: ${score.Lost} | Tie: ${score.Tie}`;
// }

function result(User_choice, comp_choice) {
  let final_result;
  if (User_choice == `Rock`) {
    if (comp_choice == `Rock`) {
      score.Tie++;
      final_result = `It's a tie!`;
    } else if (comp_choice == `Paper`) {
      score.Lost++;
      final_result =`Computer Won!`;
    } else {
      score.Win++;
      final_result =`You Won!`;
    }
    result_message(User_choice, comp_choice,final_result);
  } else if (User_choice == `Paper`) {
    if (comp_choice == `Paper`) {
        score.Tie++;
          final_result =`It's a tie!`;
        } else if (comp_choice == `Scissors`) {
          score.Lost++;
          final_result =`Computer Won!`;
        } else {
          score.Win++;
          final_result =`You Won!`;
        }
        result_message(User_choice, comp_choice,final_result);
      } else {
        if (comp_choice == `Scissors`) {
          score.Tie++;
          final_result =`It's a tie!`;
        } else if (comp_choice == `Paper`) {
          score.Win++;
          final_result =`You Won!`;
        } else {
          score.Lost++;
          final_result =`Computer Won!`;
        }
        result_message(User_choice, comp_choice,final_result);
      }
    }

    
    function result_message(User_choice, comp_choice,final_result){
      localStorage.setItem('score', JSON.stringify(score));
      document.getElementById('user-move').innerText = User_choice !== undefined ? `You Chose: ${User_choice}` : '';
      document.getElementById('comp-move').innerText = comp_choice !== undefined ? `Computer Chose: ${comp_choice}` : '';
      document.getElementById('result').innerText = final_result || '';
      document.getElementById('score').innerText = `${score.Display_score()}`;
      // console.log(`You Chose: ${User_choice} | Computer Chose: ${comp_choice} | ${final_result}`);
      // console.log(`${score.Display_score()}`);
        // console.log(`Computer's Choice is ${comp_choice}`);
        // console.log(`${final_result}`);
    }