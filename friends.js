const friend_list = document.querySelector('.friends-list');
const friends_count = document.querySelector('.friends-count');
const received_list = document.querySelector('.received-request-list');
const rcount = document.querySelector('.received-count');
const sent_list = document.querySelector('.sent-request-list');
const scount = document.querySelector('.sent-count');
const search_list = document.querySelector('.friends-search-list');

const addFriend = (name, img) => {
  console.log("AddFriend Called");

  let div_friend = document.createElement('div');
  div_friend.classList.add('friend');
  div_friend.classList.add('c-friend');

  let new_name = document.createTextNode(name);
  let new_img_src = img;

  let new_img = document.createElement('img');
  new_img.src = new_img_src;

  let new_p = document.createElement('p');
  new_p.appendChild(new_name);
  new_p.classList.add('friend-name');

  let new_i = document.createElement('i');
  new_i.classList.add('bx');
  new_i.classList.add('bxs-user-minus');

  div_friend.appendChild(new_img);
  div_friend.appendChild(new_p);
  div_friend.appendChild(new_i);

  friend_list.appendChild(div_friend);
  UpdateFriendsCount();

  new_i.addEventListener('click', () => {
    if(confirm("정말 " + new_p.innerText + "님을 친구에서 삭제하시겠습니까?") == true) {
      div_friend.remove();
      UpdateFriendsCount();
      alert(new_p.innerText + "님을 친구목록에서 삭제하였습니다.");
    }
  })
};

const addRFriend = (name, img) => {
  console.log("AddRFriend Called");

  let div_friend = document.createElement('div');
  div_friend.classList.add('friend');
  div_friend.classList.add('r-friend');

  let new_name = document.createTextNode(name);
  let new_img_src = img;

  let new_img = document.createElement('img');
  new_img.src = new_img_src;

  let new_p = document.createElement('p');
  new_p.appendChild(new_name);
  new_p.classList.add('friend-name');

  let new_p2 = document.createElement('p');
  new_p2.classList.add('received-request-icons');

  let new_i = document.createElement('i');
  new_i.classList.add('bx');
  new_i.classList.add('bxs-user-check');
  let new_i2 = document.createElement('i');
  new_i2.classList.add('bx');
  new_i2.classList.add('bxs-user-x');

  new_p2.appendChild(new_i);
  new_p2.appendChild(new_i2);

  div_friend.appendChild(new_img);
  div_friend.appendChild(new_p);
  div_friend.appendChild(new_p2);

  received_list.appendChild(div_friend);
  UpdateRFriendsCount();

  new_i.addEventListener('click', () => {
    addFriend(new_p.innerText, new_img.src);
    div_friend.remove();
    alert(new_p.innerText + '님의 친구요청을 수락했습니다.');
  });

  new_i2.addEventListener('click', () => {
    div_friend.remove();
    alert(new_p.innerText + '님의 친구요청을 거절했습니다.');
  });
}

const addSFriend = (name, img) => {
  console.log("AddSFriend Called");

  let div_friend = document.createElement('div');
  div_friend.classList.add('friend');
  div_friend.classList.add('s-friend');

  let new_name = document.createTextNode(name);
  let new_img_src = img;

  let new_img = document.createElement('img');
  new_img.src = new_img_src;

  let new_p = document.createElement('p');
  new_p.appendChild(new_name);
  new_p.classList.add('friend-name');

  let new_i = document.createElement('i');
  new_i.classList.add('bx');
  new_i.classList.add('bx-block');

  div_friend.appendChild(new_img);
  div_friend.appendChild(new_p);
  div_friend.appendChild(new_i);

  sent_list.appendChild(div_friend);
  UpdateSFriendsCount();

  new_i.addEventListener('click', () => {
    div_friend.remove();
    alert(new_p.innerText + '님에게 보낸 친구요청을 취소했습니다.');
  })
}

const addFFriend = (name, img) => {
  console.log("AddFFriend Called");

  let div_friend = document.createElement('div');
  div_friend.classList.add('friend');
  div_friend.classList.add('f-friend');

  let new_name = document.createTextNode(name);
  let new_img_src = img;

  let new_img = document.createElement('img');
  new_img.src = new_img_src;

  let new_p = document.createElement('p');
  new_p.appendChild(new_name);
  new_p.classList.add('friend-name');

  let new_i = document.createElement('i');
  new_i.classList.add('bx');
  new_i.classList.add('bxs-user-plus');

  div_friend.appendChild(new_img);
  div_friend.appendChild(new_p);
  div_friend.appendChild(new_i);

  search_list.appendChild(div_friend);

  new_i.addEventListener('click', () => {
    div_friend.remove();
    addSFriend(new_p.innerText, new_img.src);
    alert(new_p.innerText + '님에게 친구요청을 보냈습니다.');
  })
}

const UpdateFriendsCount = () => {
  friends_count.innerText = friend_list.childElementCount;
}

const UpdateRFriendsCount = () => {
  rcount.innerText = received_list.childElementCount;
}

const UpdateSFriendsCount = () => {
  scount.innerText = sent_list.childElementCount;
}

// 이 아래는 실험용 코드입니다
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addFriend("Test", "image3.jpg");
addRFriend("Talon", "zzang.jpg");
addRFriend("Kha'zix", "profile.png");
addSFriend("Aatrox", "innovator.jpg");
addFFriend("진수진수", "image3.jpg");
addFFriend("16진수", "image3.jpg");
addFFriend("진수성찬", "image3.jpg");
addFFriend("진수s", "image3.jpg");