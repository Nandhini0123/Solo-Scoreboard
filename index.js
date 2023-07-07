let scoreOfFamily = 0;
let scoreOfFriends = 0;
let familyTotal = document.getElementById("score1")
let friendsTotal = document.getElementById("score2")
function add1ToFamily() {
  scoreOfFamily += 1;
  familyTotal.textContent = scoreOfFamily;
}
function add2ToFamily() {
  scoreOfFamily += 2;
    familyTotal.textContent = scoreOfFamily;
}
function add3ToFamily() {
  scoreOfFamily += 3;
    familyTotal.textContent = scoreOfFamily;
}
function add1ToFriends() {
  scoreOfFriends += 1;
  friendsTotal.textContent = scoreOfFriends;
}
function add2ToFriends() {
    scoreOfFriends += 2;
    friendsTotal.textContent = scoreOfFriends;
}
function add3ToFriends() {
    scoreOfFriends += 3;
    friendsTotal.textContent = scoreOfFriends;
}


