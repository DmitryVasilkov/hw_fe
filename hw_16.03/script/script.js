const wrapper = document.querySelector(".div");

async function getPosts(callback) {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  const responce = data.map(function ({userId, id, title, completed}) {
    return {userId, id, title, completed};
  });

  callback(responce);
}

function createCard(userId, id, title, completed) {
  const container = document.createElement("div");
  const pUserId = document.createElement("p");
  const pId = document.createElement("p");
  const pTitle = document.createElement("p");
  const pComplited = document.createElement("p");

  pUserId.innerText = `User id - ${userId}`;
  pId.innerText = `id - ${id}`;
  pTitle.innerText = `Title - ${title}`;
  pComplited.innerText = `Completed - ${completed}`;

  container.append(pUserId, pId, pTitle, pComplited);
  return container;
}

function rerender(arr) {
  arr.forEach(function ({ userId, id, title, completed }) {
    container = createCard(userId, id, title, completed);
    wrapper.append(container);
  });
}

getPosts(rerender);