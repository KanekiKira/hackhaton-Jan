let users = [
    {
        name: 'Trump',
        password: 'pass123',
        age: 30,
        isLogin: false
    },
    {
        name: 'Franklin',
        password: 'pass124',
        age: 33,
        isLogin: false
    },
    {
        name: 'Obama',
        password: 'pass125',
        age: 21,
        isLogin: false
    },
    {
        name: 'Ruzwelt',
        password: 'pass126',
        age: 56,
        isLogin: false
    },
    {
        name: 'Washinton',
        password: 'pass127',
        age: 42,
        isLogin: false
    },
    {
        name: 'Avraam',
        password: 'pass128',
        age: 13,
        isLogin: false
    }
];

//users logic

let inSystem = '';
function changeInSystemUser(userName='') {
    inSystem = userName;
    let h3 = document.querySelector('h3');
    inSystem ? h3.innerText = `User: ${inSystem} in system`: h3.innerText = `No users in system`;
};

//register

function checkUniqueUserName(userName) {
    return users.some(item => item.name === userName);
};

function checkPasswords(pass, passConfirm) {
    return pass === passConfirm;
};

function createUser() {
    let userName = prompt('Enter your username');
    if(checkUniqueUserName(userName)) {
        alert('User already exists!');
        return;
    };
    let pass = prompt('Enter your password');
    let passConfirm = prompt('Enter your password again');
    if (!checkPasswords(pass, passConfirm)) {
        alert('Passwords don\'t match!');
        return;
    };
    let age = +prompt('Enter your age'); 
    let userObj = {
        name: userName,
        password: pass,
        age: age,
        isLogin: false
    };
    users.push(userObj);
    console.log(users);
};

//login

function getUserObj(userName) {
    return users.find(item => item.name === userName);
};

function checkUserPassword(userName, pass) {
    let user = getUserObj(userName);
    return user.password === pass;
};

function loginUser() {
    let userName = prompt('Enter your username');
    if (!checkUniqueUserName(userName)) {
        alert('User is not found');
        return;
    };
    let pass = prompt('Enter your password');
    if (!checkUserPassword(userName, pass)) {
        alert('Wrong password');
        return;
    };
    let user = getUserObj(userName);
    user.isLogin = true;
    changeInSystemUser(userName);
    console.log(users);
};

//logout

function logoutUser() {
    if (!inSystem) {
        alert('Only authorized users can logout!');
        return;
    };
    let user = getUserObj(inSystem);
    user.isLogin = false;
    changeInSystemUser();
    console.log(users);
};

//delete account

function deleteUser() {
    users.splice(checkUserPassword);
    alert('Account was deleted');
};

// Messager

let messages = [];

function addMessage() {
  let message = prompt("Введите ваше сообщение:");
  if(message) {
    messages.push(message);
    alert("Сообщение успешно добавлено!");
  } else {
    alert("Вы не ввели сообщение.");
  }
};

function deleteMessage() {
  if(messages.length > 0) {
    let index = prompt("Введите индекс сообщения для удаления (от 0 до " + (messages.length - 1) + "):");
    index = parseInt(index);
    if (index >= 0 && index < messages.length) {
      messages.splice(index, 1);
      alert("Сообщение успешно удалено!");
    } else {
      alert("Некорректный индекс сообщения.");
    }
  } else {
    alert("Нет доступных сообщений для удаления.");
  }
};

function stopChat() {
  alert("Чат остановлен.");
  messages = [];
};

while(true) {
    let action = prompt("Выберите действие: \n1. Отправить сообщение \n2. Удалить сообщение \n3. Остановить чат");
    action = parseInt(action);
  
  if(action === 1) {
    addMessage();
  } else if (action === 2) {
    deleteMessage();
  } else if (action === 3) {
    stopChat();
    break;
  } else {
    alert("Некорректное действие.");
  }
};