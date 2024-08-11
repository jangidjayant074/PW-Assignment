class User {
    constructor(username, password) {
        this.username = username;
        this._password = password; 
    }

    get password() {
        return this._password.replace(/./g, '*');
    }

    set password(newPassword) {
        if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
            this._password = newPassword;
            console.log('Password updated successfully.');
        } else {
            console.error('Invalid password. Password must be at least 8 characters long and contain at least one number and one uppercase letter.');
        }
    }
}

const user = new User('Shivank', 'OldPass123');
console.log(user.username); 
console.log(user.password); 

user.password = 'NewPass123'; 

user.password = 'short'; 
