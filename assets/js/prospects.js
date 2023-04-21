// PROSPECTS' OBJECTS

const container = document.getElementById('prospects-set');

const prospects = [
  {
    id: 1,
    fullname: 'Walter Scott',
    team: 'Sin Valley Stars',
    age: 19,
    position: 'F',
    description:
      'This is a potentially transformational player who’s earned his status around the league as a near-unanimous No. 1 prospect, which doesn’t happen as often as you think, nor does it usually happen this early in the process.',
    image: 'assets/img/prospects/player-1.png',
  },
  {
    id: 2,
    fullname: 'Chad Lester',
    team: 'Credwell Steeds',
    age: 18,
    position: 'G',
    description:
      'Lester holds the early crown as the top incoming college guard prospect as an unusually gifted improviser and energy-bringer who should be able to play point guard full time in the NBA.',
    image: 'assets/img/prospects/player-2.png',
  },
  {
    id: 3,
    fullname: 'Adalberto Najera',
    team: 'Johnstown Milebreakers',
    age: 19,
    position: 'PG',
    description:
      'He has every physical tool in the box, good leadership traits, and offers a pretty high floor as a starting-caliber point guard, not to mention a star trajectory. Najera can get into the paint when he wants, knock down shots off the bounce, and already has terrific pick-and-roll acumen.',
    image: 'assets/img/prospects/player-3.png',
  },
  {
    id: 4,
    fullname: 'John Karanowsky',
    team: 'Werkstone Crocodiles',
    age: 18,
    position: 'G/F',
    description:
      'At 6\'7”, his speed and passing gives him a bit of a failsafe if his shot doesn’t come all the way around, as he should be a threat to play downhill in the halfcourt and generate offense in transition. He also projects as a plus defender, with great foot speed, a long stride and plus shot-blocking ability for a wing.',
    image: 'assets/img/prospects/player-4.png',
  },
  {
    id: 5,
    fullname: 'Chung Kuo',
    team: 'Stonebo Fires',
    age: 18,
    position: 'F',
    description:
      'Factoring in his athletic profile, productivity and room for skill development on top of that, Kuo has quite a bit of untapped upside to offer, and there’s a big opportunity for him to rise over the course of the season.',
    image: 'assets/img/prospects/player-5.png',
  },
  {
    id: 6,
    fullname: 'Thomas E. Field',
    team: 'North Clarecro Manatees',
    age: 19,
    position: 'G/F',
    description:
      'Boasting electric athleticism comparable to that of his twin brother and a more aggressive mentality as both a defender and scorer, Thomas presents plenty of upside in his own right.',
    image: 'assets/img/prospects/player-6.png',
  },
  {
    id: 7,
    fullname: 'German Herrmann',
    team: 'Sonbay Hawks',
    age: 19,
    position: 'F',
    description:
      'While he doesn’t boast any one elite skill at this stage, he’s an advanced, well-balanced player who understands team basketball and has good-but-not-elite size on the wing.',
    image: 'assets/img/prospects/player-7.png',
  },
  {
    id: 8,
    fullname: 'Yunus Jabr Handal',
    team: 'Wilshe Stormhunters',
    age: 19,
    position: 'F',
    description:
      'Handal has taken an estimable step forward over the past year, and now couples his enormous frame and above-average coordination with an improved mentality and ball skills.',
    image: 'assets/img/prospects/player-8.png',
  },
  {
    id: 9,
    fullname: 'Mitchell Moghadam',
    team: 'Amesmil Stings',
    age: 18,
    position: 'G',
    description:
      'While not exceptionally fast or quick, Mitchell has a strong frame, good length, and a terrific instinct for blowing up plays on the defensive end. He’s smooth with the ball, rarely gets sped up, and enters college with a developed floater and a pretty reliable jump shot.',
    image: 'assets/img/prospects/player-9.png',
  },
  {
    id: 10,
    fullname: 'Eugene Bryant Jr.',
    team: 'New Lawperth Watchmen',
    age: 18,
    position: 'G',
    description:
      'Bryant Jr. is on the short list of top bucket-getters in this year’s freshman class and has real on-ball scoring ability that sets him apart from his peers. He relies more on skill and craft than athleticism and can be a streaky shooter, but he’s highly confident and there’s not much he can’t do offensively.',
    image: 'assets/img/prospects/player-10.png',
  },
];

prospects.forEach((prospect) => {
  const prospectBody = document.createElement('div');
  prospectBody.classList.add('prospect-body');
  prospectBody.setAttribute('id', prospect.id);
  if (prospect.id > 2) {
    prospectBody.classList.add('hidden');
    prospectBody.classList.add('md:flex');
  }
  const content = `
<div class="prospect-card flex mb-10 gap-6 justify-center">
<img src="${prospect.image}" width="100%" class="rounded place-self-start pt-2 prospect-photo" alt="${prospect.fullname}"
  class="prospect-photo">
<div class="prospect-card-content relative flex flex-col tems-stretch">
<h3 class="prospect-card-heading text-lg font-semibold">${prospect.fullname}</h3>
<h4 class="prospect-info text-lg">${prospect.position}, ${prospect.age}</h4>
<p class="italic text-orange"><span class="text-black">College team:<br /></span>${prospect.team}</p>
<p>${prospect.description}</p>
</div>
</div>
`;
  prospectBody.innerHTML += content;
  container.appendChild(prospectBody);
});

// TOGGLE SHOW MORE BUTTON

function toggleShowMore() {
  const btnMore = document.getElementById('show-more');
  const width = window.innerWidth;
  const state = btnMore.getAttribute('data-opened');
  if (state === 'true' && width < 768) {
    btnMore.setAttribute('data-opened', false);
  } else if (state === 'false') {
    btnMore.setAttribute('data-opened', true);
  }
}

const btnMore = document.getElementById('show-more');
btnMore.addEventListener('click', () => {
  toggleShowMore();
});

// SHOW MORE

const prospectBody = document.querySelectorAll('.prospect-body');

prospectBody.forEach((prospectEl) => {
  const btnMore = document.getElementById('show-more');
  const state = btnMore.getAttribute('data-opened');
  if (state === 'false') {
    btnMore.addEventListener('click', () => {
      prospectEl.classList.remove('hidden');
      const state = btnMore.getAttribute('data-opened');
      const chevron = document.querySelector('.chevron');
      const btnText = document.querySelector('.btn-more-text');
      if (state === 'true') {
        chevron.style.transform = ('scaleY(-1)');
        btnText.textContent = 'Hide';
      } else if (state === 'false') {
        chevron.style.transform = ('scaleY(1)');
        btnText.textContent = 'More';
        btnMore.classList.add('bg-white');
        if (prospectEl.id > 2) {
          prospectEl.classList.add('hidden');
        }
      }
    });
  }
});
