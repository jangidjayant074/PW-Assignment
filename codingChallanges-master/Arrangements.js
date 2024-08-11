function bookTitles(){
    const titles = bookDetail.map((bookDetail) => bookDetail.title);
    const sortTitles = titles.sort();
    console.log("Books title in Alphabetical order is :");
    sortTitles.forEach((title) => {
        console.log(title);
    });
}
const bookDetail = [  
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    {title : "Atomic Habits",author : "Goerge Well",year : 1967},
    { title : "Rich Dad & Poor Dad", author : "Robert Kiyosaki",year : 1997},
    { title : "Who Are You", author : "goeorge Orwell",year : 1980},
]
 bookTitles(bookDetail);