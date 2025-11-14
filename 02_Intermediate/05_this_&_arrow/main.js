
const user = {
    username: "Animesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} Welcome to the site`)
    }
}

user.welcomeMessage();

// function chai(){
//     console.log(this)
// }

// chai()

const chai = () => {
    let username = 'animesh';
    console.log(this.username)
}