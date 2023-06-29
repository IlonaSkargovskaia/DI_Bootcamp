const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'img/robots/1.png'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'img/robots/3.png'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'img/robots/4.png'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'img/robots/5.png'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'img/robots/6.png'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'img/robots/7.png'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'img/robots/8.png'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'img/robots/9.png'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
];


// class Robots {
//     constructor ({name, username, email, image}) {
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.image = image;
//     }

//     displayRobots() {
//         const row = document.querySelector('.row__content');
// //card__outer
//         const robotCard = document.createElement('div');
//         robotCard.classList.add('card__item');
// //card__inner
//         const cardContent = document.createElement('div');
//         cardContent.classList.add('card__content');
// //card__image
//         const robotImageDiv = document.createElement('div');
//         robotImageDiv.classList.add('card__img');
//         const robotImage = document.createElement('img');
//         robotImage.src = this.image;
// //card__title
//         const robotTitle = document.createElement('h3');
//         robotTitle.classList.add('card__title');
//         const title = document.createTextNode(this.name);
// //email
//         const robotEmail = document.createElement('p');
//         robotEmail.classList.add('card__email');
//         const emailText = document.createTextNode(this.email);

// //img
//         robotImageDiv.appendChild(robotImage);
//         cardContent.appendChild(robotImageDiv);
// //title
//         robotTitle.appendChild(title);
//         cardContent.appendChild(robotTitle);
// //email
//         robotEmail.appendChild(emailText);
//         cardContent.appendChild(robotEmail);

// //display card in DOM
//         robotCard.appendChild(cardContent);
//         row.appendChild(robotCard);
//     }



// }

// robots.forEach(element => {
//     const robot = new Robots(element);
//     robot.displayRobots();
        
        // const allRobotosObj = [];
        // allRobotosObj.push(robot)
// })




const row = document.querySelector('.row__content');


robots.forEach(element => {
    displayRobots(element);
})


function displayRobots(element) {   
//card__outer
    const robotCard = document.createElement('div');
    robotCard.classList.add('card__item');
//card__inner
    const cardContent = document.createElement('div');
    cardContent.classList.add('card__content');
//card__image
    const robotImageDiv = document.createElement('div');
    robotImageDiv.classList.add('card__img');
    const robotImage = document.createElement('img');
    robotImage.src = element.image;
//card__title
    const robotTitle = document.createElement('h3');
    robotTitle.classList.add('card__title');
    const title = document.createTextNode(element.name);
//email
    const robotEmail = document.createElement('p');
    robotEmail.classList.add('card__email');
    const emailText = document.createTextNode(element.email);

//img
    robotImageDiv.appendChild(robotImage);
    cardContent.appendChild(robotImageDiv);
//title
    robotTitle.appendChild(title);
    cardContent.appendChild(robotTitle);
//email
    robotEmail.appendChild(emailText);
    cardContent.appendChild(robotEmail);

//display card in DOM
    robotCard.appendChild(cardContent);
    row.appendChild(robotCard);
}


function search() {

    const input = document.querySelector('#header-Search');
    input.addEventListener('input', () => {

        let results = robots.filter(element => element['name'].toLowerCase().includes(input.value));
//clear main
        row.innerHTML = '';

        results.forEach(element => {
            displayRobots(element);
        })
    })
}

search();





