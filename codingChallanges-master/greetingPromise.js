function greeting(name){
    return  new Promise((resolve) => {
        const messege = `Hello ${name}`;
        resolve(messege);
    });
}

greeting("Shivank Tyagi").then((messege) => console.log(messege));