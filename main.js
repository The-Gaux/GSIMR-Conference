const menuList = document.querySelector('.menu-sec');
const menuIcon = document.querySelector('.menu');
const allSpeakers = document.querySelector('.speakers');

menuIcon.addEventListener('click', (e) => {
  if (e.target.classList.contains('menu')) {
    menuList.style.display = 'flex';
    menuIcon.style.display = 'none';
  }
});

menuList.addEventListener('click', (e) => {
  const clicked = e.target.classList.contains('links');
  if (clicked) {
    menuList.style.display = 'none';
    menuIcon.style.display = 'flex';
  }
});

const guests = [  
  {
    Name: 'Padma Shri Dr. D. B. Phatak',
    Title: 'Prof. Emeritus, IIT Mumbai',
    Description: 'Patron',
    Img: './SPEAKERS/deepak.jpg',
    Alt: 'speaker1',
  },

  {
    Name: 'Prof. Ajay Kibe ',
    Title: 'Academician',
    Description: 'Hans is consistently recognized among the top VC investors in the world, and has been named to the Forbes Midas list every year, most recently ranking #3.',
    Img: './SPEAKERS/ajay.jpg',
    Alt: 'speaker2',
  },

  {
    Name: 'Shri Abhay S. Bharkatiya ',
    Title: 'Industrialist',
    Description: 'Thomas holds a PhD in mechanical engineering, and enjoys coding and making GitHub contribution graphs green.',
    Img: './SPEAKERS/neelesh.jpg',
    Alt: 'speaker3',
  },

  // {
  //   Name: 'JEFF SHINER',
  //   Title: 'CEO AT 1PASSWORD',
  //   Description: 'Jeff is the CEO of 1Password, a leader in human-centric security and privacy.',
  //   Img: './SPEAKERS/speaker4e.avif',
  //   Alt: 'speaker4',
  // },

  {
    Name: 'Dr. Sangeeta Jain',
    Title: 'Director, GSIMR, Indore',
    Description: 'Chairperson',
    Img: './SPEAKERS/Sangeeta.jpg',
    Alt: 'speaker5',
  },

  {
    Name: 'Dr. Neetesh Purohit ',
    Title: 'Director, SGSITS, Indore',
    Description: 'Eric is an accomplished technologist, entrepreneur, author and philanthropist. He served as Google’s chairman and CEO',
    Img: './SPEAKERS/neetesh.jpg',
    Alt: 'speaker6',
  },
];

function guestSpeakers() {
  let speakerOut = '';
  for (let i = 0; i < guests.length; i += 1) {
    speakerOut += `
        <li class="guest">
        <img src="${guests[i].Img}" alt="${guests[i].Alt}">
        <section>
        <h3>
        ${guests[i].Name}
        </h3>
        <p class="p1">
        ${guests[i].Title}
        </p>
       
        </section>
        </li>`;
  }

  allSpeakers.innerHTML = speakerOut;
}

guestSpeakers();

const loadMoreBtn = document.querySelector('#load-more');
let currentItem = 2;

loadMoreBtn.onclick = () => {
  const boxes = [...document.querySelectorAll('.sec3 .speakers .guest')];
  for (let i = currentItem; i < currentItem + 2; i += 1) {
    boxes[i].style.display = 'inline-block';
  }
  currentItem += 2;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = 'none';
  }
};
