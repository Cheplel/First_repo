function createLoginTracker(userInfo) {
    const userInfo = () => {
        username: user
        password: password
    }
}
const createLoginTracker = (userInfo) => {
    createLoginTracker(userInfo)
    let attemptCount = 0;
    return function loginTracker() {
        attemptCount++;
        console.log(`Login attempt ${attemptCount} for user: ${userInfo.username}`);
    }
}
const correctUserInfo = {
    username: "admin",
    password: "password123"
    
}
if (userInfo.username === incorrectUserInfo.username && userInfo.password === incorrectUserInfo.password) {
 return "Login failed!"
}
else if (userInfo.username === incorrectUserInfo.username && userInfo.password === incorrectUserInfo.password) {
    return "Login failed!"

} 
else if (attemptCount >= 3) {
    return "Account locked due to multiple failed login attempts."
}
else {
    return "Login successful!"
}

return loginTracker()
