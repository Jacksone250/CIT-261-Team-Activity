import Auth from './auth.js';
import { makeRequest } from './authHelpers.js';

// makeRequest('login', 'POST', {
//     password: 'user1',
//     email: 'user1@email.com'
//     });

const myAuth = new Auth();

const loginForm = document.getElementById('login');
loginForm.querySelector('button').addEventListener('click', () => {
    myAuth.login(getPosts);
})

async function getPosts() {
    try {
      const data = await makeRequest('posts', 'GET', null, myAuth.token);
      // make sure the element is shown
      document.getElementById('content').classList.remove('hidden');
      document.getElementById('login').classList.add('hidden');
      console.log(data);
      var ul = document.getElementById('list');
      ul.innerHTML = '';
      for (var i = 0; i < data.length; i++) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(data[i].title));
        ul.appendChild(li);
      }
    } catch (error) {
      // if there were any errors display them
      console.log(error);
    }
  }

