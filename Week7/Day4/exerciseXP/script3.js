const allBooks = [
    {
        title: 'Harry Potter',
        author: 'Rowling',
        image: 'https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg',
        alreadyRead : true
    },
    {
        title: 'Influence: Science and Practice',
        author: 'Robert Cialdini',
        image: 'https://kbimages1-a.akamaihd.net/5967c02f-cc3f-4dbc-a3d9-076e217dedea/353/569/90/False/influence-new-and-expanded.jpg',
        alreadyRead : false
    }
];

const listBooks = document.querySelector('.listBooks');
console.log(listBooks);

for (let item of allBooks) {
    const list = document.createElement('ul');

    const content = document.createElement('p');
    content.textContent = `${item.title} written by ${item.author}`;

    const img = document.createElement('img');
    img.src = item.image;
    img.style.width = '100px';

    if (item.alreadyRead === true) {
        content.style.color = 'red';
    }

    list.appendChild(content);
    list.appendChild(img);
    listBooks.appendChild(list);
}

