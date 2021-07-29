// const fakeRequest = (url) => {
//     return new Promise((resolve, reject) => {
//         const rand = Math.random();

//         setTimeout(() => {
//             if(rand < 0.7){
//                 resolve('Your fake data here');
//             }
//             reject('Request error');
//         }, 1000)
//     })
// }

// fakeRequest('/dogs/1')
// .then((data)=>{
//     console.log("Done With Request");
//     console.log("Data is:", data);
// })
// .catch((err)=>{
//     console.log("Oh no", err);
// })

const delayedColorChange=(color, delay)=> {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor = color
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('teal', 1000))
    .then(() => delayedColorChange('olive', 1000))

async function rainbow(){
    await delayedColorChange('red', 1000)
    delayedColorChange('orange', 1000)
}






// const login = async (username, password) => {
//     if(!username || !password) throw 'Missing Credentials'
//     if(password === 'CorgiAreNice') return 'WELCOME'
//     throw 'Invalid password'
// }

// login('asdasd', 'CorgiAreNice')
// .then(msg => {
//     console.log("Logged in");
//     console.log(msg);
// })
// .catch(err =>{
//     console.log("error");
//     console.log(err);
// })