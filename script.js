const entrepreneurs = [
  {
    name: "Steve Jobs",
    image: "images/steve-jobs.jpg",
    bio: "Steve Jobs co-founded Apple Inc. and revolutionized personal computing, music, phones, and design through innovation and focus.",
    quotes: {
      Leadership: [
        "Innovation distinguishes between a leader and a follower.",
        "Great things in business are never done by one person.",
        "My job is not to be easy on people.",
        "Deciding what not to do is as important as deciding what to do."
      ],
      Focus: [
        "Your time is limited, so don’t waste it living someone else’s life.",
        "Focus is about saying no.",
        "Simple can be harder than complex."
      ],
      Growth: [
        "Stay hungry, stay foolish.",
        "Creativity is just connecting things."
      ],
      Discipline: [
        "Perseverance separates successful entrepreneurs."
      ]
    }
  },
  
  {
    name: "Elon Musk",
    image: "images/elon-musk.jpg",
    bio: "Elon Musk founded Tesla and SpaceX, focusing on sustainable energy and space exploration.",
    quotes: {
      Discipline: [
        "When something is important enough, you do it even if the odds are against you.",
        "Work like hell."
      ],
      Failure: [
        "Failure is an option here.",
        "If things are not failing, you are not innovating."
      ],
      Growth: [
        "Take risks now and do something bold."
      ]
    }
  },
  
  {
    name: "Jeff Bezos",
    image: "images/jeff-bezos.jpg",
    bio: "Jeff Bezos founded Amazon by obsessing over customers and long-term thinking.",
    quotes: {
      Leadership: [
        "We are stubborn on vision, flexible on details."
      ],
      Focus: [
        "Your brand is what people say about you when you’re not in the room."
      ],
      Money: [
        "Profitability comes from customer trust."
      ]
    }
  },
  
  {
    name: "Bill Gates",
    image: "images/bill-gates.jpg",
    bio: "Bill Gates co-founded Microsoft and later focused on global philanthropy.",
    quotes: {
      Growth: [
        "Don’t compare yourself with anyone in this world."
      ],
      Failure: [
        "Success is a lousy teacher."
      ]
    }
  },
  
  {
    name: "Oprah Winfrey",
    image: "images/oprah-winfrey.jpg",
    bio: "Oprah Winfrey built a global media empire through authenticity and resilience.",
    quotes: {
      Failure: [
        "Turn your wounds into wisdom."
      ],
      Focus: [
        "You become what you believe."
      ]
    }
  },
  
  {
    name: "Jack Ma",
    image: "images/jack-ma.jpg",
    bio: "Jack Ma founded Alibaba after many failures and rejections.",
    quotes: {
      Discipline: [
        "Never give up."
      ],
      Growth: [
        "If you don’t give up, you still have a chance."
      ]
    }
  },
  
  {
    name: "Mark Zuckerberg",
    image: "images/mark-zuckerberg.jpg",
    bio: "Mark Zuckerberg co-founded Facebook, connecting billions of people.",
    quotes: {
      Growth: [
        "The biggest risk is not taking any risk."
      ]
    }
  },
  
  {
    name: "Richard Branson",
    image: "images/richard-branson.jpg",
    bio: "Richard Branson founded the Virgin Group and believes in bold leadership.",
    quotes: {
      Money: [
        "Business opportunities are like buses."
      ]
    }
  },
  
  {
    name: "Sara Blakely",
    image: "images/sara-blakely.jpg",
    bio: "Sara Blakely founded Spanx and built a billion-dollar brand from scratch.",
    quotes: {
      Failure: [
        "Failure is not trying."
      ]
    }
  },
  
  {
    name: "Aliko Dangote",
    image: "images/aliko-dangote.jpg",
    bio: "Aliko Dangote built Africa’s largest industrial empire through discipline and long-term vision.",
    quotes: {
      Discipline: [
        "Success requires patience and discipline."
      ],
      Focus: [
        "Think long-term."
      ]
    }
  }
];

const cards = document.getElementById("cards");
const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("profile-name");
const profileBio = document.getElementById("profile-bio");
const quoteEl = document.getElementById("quote");
const category = document.getElementById("category");
const newQuote = document.getElementById("newQuote");

let current = null;

entrepreneurs.forEach((p, i) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src="${p.image}"><span>${p.name}</span>`;
  card.onclick = () => selectEntrepreneur(i);
  cards.appendChild(card);
});

function selectEntrepreneur(i) {
  current = entrepreneurs[i];
  profileImg.src = current.image;
  profileName.textContent = current.name;
  profileBio.textContent = current.bio;
  showQuote();
}

function showQuote() {
  if (!current) return;
  
  let pool = [];
  if (category.value === "all") {
    Object.values(current.quotes).forEach(q => pool.push(...q));
  } else {
    pool = current.quotes[category.value] || [];
  }
  
  quoteEl.textContent = pool.length ?
    pool[Math.floor(Math.random() * pool.length)] :
    "No quotes in this category.";
}

newQuote.onclick = showQuote;
category.onchange = showQuote;