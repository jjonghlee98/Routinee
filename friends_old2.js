//꼬여서 망한 코드이므로 신경쓰지 마세요

let hidden = document.getElementsByClassName("hidden-friend-menu");
let menu_btn = document.getElementsByClassName("friend-menu-btn");
let body = document.querySelector("body");
let break_btn = document.getElementsByClassName("menu-break")
let friend_list = document.getElementById("friend_list")
let accept_btn = document.getElementsByClassName("bxs-user-check");
let reject_btn = document.getElementsByClassName("bxs-user-x");
let received_btn = document.getElementById("received_button");
let sent_btn = document.getElementById("sent_button");
let r_friend = document.getElementsByClassName("r_friend");
let s_friend = document.getElementsByClassName("s_friend");
let c_friend = document.querySelectorAll(".c_friend");


received_btn.addEventListener('click', () => {
  for(let i = 0; i < r_friend.length; i++) {
    r_friend[i].classList.remove('hidden');
  }
  for(let j = 0; j < s_friend.length; j++) {
    s_friend[j].classList.add('hidden');
  }
})
sent_btn.addEventListener('click', () => {
  for(let i = 0; i < r_friend.length; i++) {
    r_friend[i].classList.add('hidden');
  }
  for(let j = 0; j < s_friend.length; j++) {
    s_friend[j].classList.remove('hidden');
  }
})

//친구목록 갱신
function RefreshFriendList() {
  hidden = document.getElementsByClassName("hidden-friend-menu");
  menu_btn = document.getElementsByClassName("friend-menu-btn");
  break_btn = document.getElementsByClassName("menu-break");
  r_friend = document.getElementsByClassName("r_friend");
  s_friend = document.getElementsByClassName("s_friend");
  accept_btn = document.getElementsByClassName("bxs-user-check");
  reject_btn = document.getElementsByClassName("bxs-user-x");
  let eachBreak;
  let eachAccept;
  let eachReject;
  ActiveFriendSide();
  for(let l = 0; l < break_btn.length; l++) {
    eachBreak = break_btn[l];
    eachBreak.addEventListener('click', () => BreakFriend(l));
  }
  for(let l = 0; l < accept_btn.length; l++) {
    eachAccept = accept_btn[l];
    eachAccept.addEventListener('click', () => AcceptRequest(l));
  }
  for(let l = 0; l < reject_btn.length; l++) {
    eachReject = reject_btn[l];
    eachReject.addEventListener('click', () => RejectRequest(l))
  }
}

// 친구목록 사이드메뉴 작동
function ActiveFriendSide() {
  for(let i = 0; i < menu_btn.length; i++) {
    let eachBtn = menu_btn[i];
    let eachHidden = hidden[i];
    let hiddenIndex;
    eachBtn.addEventListener('click', function() {
      for(let j = 0; j < hidden.length; j++) {
        hiddenIndex = hidden[j];
        hiddenIndex.classList.add('hidden');
      }
        eachHidden.classList.remove('hidden');
    })
  }
}

// 친구목록 영역 밖의 공간을 클릭하면 모든 사이드메뉴가 닫히도록 함
function clickBodyEvent(event) {
  var target = event.target;

  if(target == event.currentTarget.querySelector('.hidden-friend-menu')) {
    console.log(2);
    return;
  }
  else if(target == event.currentTarget.querySelector('.friend-menu-btn')) {
    console.log(1);
    return;
  }
  else { for(let i = 0; i < hidden.length; i++) {
    console.log(0);
    hiddenIndex = hidden[i];
    hiddenIndex.classList.add('hidden');
  } }
}

// 친구삭제 함수
function BreakFriend(index) {
  console.log(index);
  console.log(friend_list.childNodes[index]);
  friend_list.removeChild(friend_list.childNodes[index]);
  RefreshFriendList();
}

// 친구요청 수락
function AcceptRequest(index) {
  console.log(index)
}

// 친구요청 거절
function RejectRequest(index) {
  console.log(index)
}

body.addEventListener('click', clickBodyEvent);
ActiveFriendSide();
RefreshFriendList();
//body.addEventListener('click', clickBodyEvent);