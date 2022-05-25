//친구목록과 관련된 쿼리셀렉터
let friend_list = document.getElementById("friend_list")
let friends_count = document.querySelector(".friends_count");
let friends = document.querySelectorAll(".friend")
let friendsname = document.querySelectorAll(".friend_name")
let break_btn = document.querySelectorAll('.friend-break-btn');
let friend_todo_name = document.querySelector('.friend_todo_name');
let friend_todo_placeholder = document.querySelector('.todo_body_placeholder');
let c_friends = document.querySelectorAll('.c_friend');
let chat_btn = document.querySelector('.chat_start_button');
let chat_opposite = document.querySelector('.chat_opposite');
let chat_box = document.querySelector('.chat_box');
let friend_isSelected = 0; // 채팅기능 작동여부를 위한 변수

//친구요청과 관련된 쿼리셀렉터
let accept_btn = document.querySelectorAll('.bxs-user-check'); // 친구수락 버튼
let reject_btn = document.querySelectorAll('.bxs-user-x'); // 친구거절 버튼
let r_friendsname = document.querySelectorAll('.r_friend .friend_name'); //받은요청 친구 이름
let s_friendsname = document.querySelectorAll('.s_friend .friend_name'); // 보낸요청 친구 이름
let r_friendsimg = document.querySelectorAll('.r_friend img')
let s_friendsimg = document.querySelectorAll('.s_friend img')
let r_friends = document.querySelectorAll('.r_friend'); // 받은 친구요청
let s_friends = document.querySelectorAll('.s_friend'); // 보낸 친구요청
let received_btn = document.getElementById("received_button"); // 받은요청 보기 버튼
let sent_btn = document.getElementById("sent_button"); // 보낸요청 보기 버튼
let cancel_btn = document.querySelectorAll('.cancel_button'); // 요청취소 버튼
let request_list = document.querySelector(".request_body"); // 친구요청 리스트 박스

//요청수락 (친구목록에 추가 후 요청리스트에서 삭제)
for(let i = 0; i < accept_btn.length; i++) {
  accept_btn[i].addEventListener('click', () => {
    alert(r_friendsname[i].innerText + '님의 친구요청을 수락했습니다.')
    AddFriend(r_friendsname[i].innerText, r_friendsimg[i].src)
    r_friends[i].remove();
  })
}

  //요청거부 (요청리스트에서 삭제)
for(let i = 0; i < reject_btn.length; i++) {
  reject_btn[i].addEventListener('click', () => {
    alert(r_friendsname[i].innerText + '님의 친구요청을 거절했습니다.')
    r_friends[i].remove();
  })
}

  //요청취소 (요청리스트에서 삭제)
for(let i = 0; i < cancel_btn.length; i++) {
  cancel_btn[i].addEventListener('click', () => {
    alert(s_friendsname[i].innerText + '님에게 보낸 친구요청을 취소했습니다');
    s_friends[i].remove();
  })
}

//보낸요청 보기, 받은요청 보기 버튼으로 전환
received_btn.addEventListener('click', () => {
  for(let i = 0; i < r_friends.length; i++) {
    r_friends[i].classList.remove('hidden');
  }
  for(let j = 0; j < s_friends.length; j++) {
    s_friends[j].classList.add('hidden');
  }
})
sent_btn.addEventListener('click', () => {
  for(let i = 0; i < r_friends.length; i++) {
    r_friends[i].classList.add('hidden');
  }
  for(let j = 0; j < s_friends.length; j++) {
    s_friends[j].classList.remove('hidden');
  }
})

// 요청목록 갱신 (잘못만든함수)
/*function RefreshRequest() {
accept_btn = document.querySelectorAll('.bxs-user-check'); // 친구수락 버튼
reject_btn = document.querySelectorAll('.bxs-user-x'); // 친구거절 버튼
r_friendsname = document.querySelectorAll('.r_friend .friend_name'); //받은요청 친구 이름
s_friendsname = document.querySelectorAll('.s_friend .friend_name'); // 보낸요청 친구 이름
r_friends = document.querySelectorAll('.r_friend'); // 받은 친구요청
s_friends = document.querySelectorAll('.s_friend'); // 보낸 친구요청
received_btn = document.getElementById("received_button"); // 받은요청 보기 버튼
sent_btn = document.getElementById("sent_button"); // 보낸요청 보기 버튼
cancel_btn = document.querySelectorAll('.cancel_button'); // 요청취소 버튼

for(let i = 0; i < accept_btn.length; i++) {
  accept_btn[i].addEventListener('click', () => {
    alert(r_friendsname[i].innerText + '님의 친구요청을 수락했습니다.')
    r_friends[i].remove();
  })
  }

  //요청거부 (요청리스트에서 삭제)
for(let i = 0; i < reject_btn.length; i++) {
  reject_btn[i].addEventListener('click', () => {
    alert(r_friendsname[i].innerText + '님의 친구요청을 거절했습니다.')
    r_friends[i].remove();
  })
  }

  //요청취소 (요청리스트에서 삭제)
for(let i = 0; i < cancel_btn.length; i++) {
    cancel_btn[i].addEventListener('click', () => {
      alert(s_friendsname[i].innerText + '님에게 보낸 친구요청을 취소했습니다');
      s_friends[i].remove();
    })
  }
}*/

// 친구목록 갱신
function RefreshFriendList() {

}

// 친구 요청을 받아 추가
function AddFriend(name, img) {
  console.log("AddFriend Called");
  let div_friend = document.createElement('div');
  div_friend.classList.add('friend');
  div_friend.classList.add('c_friend');

  let new_name = document.createTextNode(name)
  let new_img_src = img;

  let new_img = document.createElement('img');
  new_img.src = new_img_src;
  let new_span = document.createElement('span');
  new_span.appendChild(new_name);
  new_span.classList.add('friend_name')

  let new_i = document.createElement('i');
  new_i.classList.add('bx');
  new_i.classList.add('bxs-user-minus');
  new_i.classList.add('friend-break-btn');

  /*let new_hidden_menu = document.createElement('div');
  let new_share_p = document.createElement('p');
  let new_chat_p = document.createElement('p');
  let new_break_p = document.createElement('p');

  new_hidden_menu.classList.add('hidden-friend-menu');
  new_hidden_menu.classList.add('hidden')
  new_share_p.classList.add("hidden-contents");
  new_share_p.classList.add("menu-share");
  new_share_p.appendChild(document.createTextNode("일정공유"))
  new_chat_p.classList.add("hidden-contents")
  new_chat_p.classList.add("menu-chat")
  new_chat_p.appendChild(document.createTextNode("채팅하기"))
  new_break_p.classList.add("hidden-contents")
  new_break_p.classList.add("menu-break")
  new_break_p.appendChild(document.createTextNode("친구삭제"));

  new_hidden_menu.appendChild(new_share_p);
  new_hidden_menu.appendChild(new_chat_p);
  new_hidden_menu.appendChild(new_break_p);*/

  div_friend.appendChild(new_img);
  div_friend.appendChild(new_span);
  div_friend.appendChild(new_i);
  //div_friend.appendChild(new_hidden_menu);

  friend_list.appendChild(div_friend);

  new_i.addEventListener('click', () => {
    if(confirm("정말 " + new_span.innerText + "님과의 친구를 끊으시겠습니까?") == true) {
      alert(new_span.innerText + "님을 친구목록에서 삭제하였습니다.");
      div_friend.remove();
      UpdateFriendsCount();
  };
})

  div_friend.addEventListener('click', () => {
    c_friends = document.querySelectorAll(".c_friend");
    for(let i = 0; i < c_friends.length; i++) {
      c_friends[i].classList.remove('selected_friend');
    }
    div_friend.classList.add('selected_friend');
    friend_todo_name.innerText = new_span.innerText;
    friend_todo_placeholder.classList.add('hidden');
    friend_isSelected = 1;
  })
  
  UpdateFriendsCount()
}

//함수 테스트용 코드
AddFriend("쓰레기", "image3.jpg")
AddFriend("쓰래기", "innovator.jpg")

//RefreshRequest();

//request_list.appendChild

function UpdateFriendsCount() {
  friends_count.innerText = friend_list.childElementCount;
}

UpdateFriendsCount();
//친구목록 사이드메뉴
/*for(let i = 0; i < menu_btn.length; i++) {
  console.log('aa');
  menu_btn[i].addEventListener('click', () => {
    hidden[i].classList.remove('hidden');
  })
}*/

//친구삭제
for(let i = 0; i < break_btn.length; i++) {
  break_btn[i].addEventListener('click', () => {
    if(confirm("정말 " + friendsname[i].innerText + "님과의 친구를 끊으시겠습니까?") == true) {
      alert(friendsname[i].innerText + "님을 친구목록에서 삭제하였습니다.");
      c_friends[i].remove();
      UpdateFriendsCount();
    }
  })
}

//테스트용 코드: 친구목록에서 친구 선택
for(let i = 0; i < c_friends.length; i++) {
  c_friends[i].addEventListener('click', () => {
    for(let j = 0; j < c_friends.length; j++) {
      if(i === j) {
        c_friends[j].classList.add('selected_friend');
      }
      else {
        c_friends[j].classList.remove('selected_friend');
      }
    }
    friend_todo_name.innerText = friendsname[i].innerText;
    friend_todo_placeholder.classList.add('hidden');
    friend_isSelected = 1;
  })
}

//채팅 시작
chat_btn.addEventListener('click', () => {
  if(friend_isSelected) {
    chat_opposite.innerText = friend_todo_name.innerText;
    chat_box.classList.toggle('hidden');
  }
})