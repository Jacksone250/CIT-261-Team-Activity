import {makeRequest} from './utilities.js';

makeRequest("login", "POST",{
    password: "user1",
    email: "user@email.com"
});

class Auth{
    //login method, 
}