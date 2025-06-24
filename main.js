const globs = [
  {
    name: 'Glob',
    image: 'assets/glob.png',
    rarity: '1/4',
    description: `What can we say about Globs? You’ve seen ‘em. Globs might go to the store, but they don’t do things like: thinking about the things that they’re not doing. Some of them sometimes have jobs, others don’t know what that is. You know ’em. My uncle (married in) was a Glob. He was a chill guy. He actually decided to stop being a Glob, though. Not because anything really bad happened, just because he felt like that period of his life was over. That’s just glob stuff. Right? All of this is to say: Globs are chillers.`
  },
  {
    name: 'Blue Hat Glob',
    image: 'assets/bluehatglob.png',
    rarity: '1/4',
    description: `Andrew Saxon is a very interesting individual. He is stylish and very upset that the game has reduced him to the meager title of “Blue Hat Glob.” His name is Andrew Saxon. Say it with me: Andrew Saxon. I don’t wanna talk about it anymore.
Andrew Saxon enjoys hiking in scenic locations and stargazing. He’s the guy who always brings a snack with him (in his hat). Nobody ever asks about why his hat makes his head disappear, but it does.`
  },
  {
    name: 'Green Pants Glob',
    image: 'assets/greenpantsglob.png',
    rarity: '1/4',
    description: `Green Pants Glob lives on some paintings and napkins as a drawing. He is on the back of some cardboard, and not in your yard. You might catch him hiding behind a tree. Don’t look at him, he’s shy. He’s a groovy fellow. He enjoys potted plants and fancy pants, avoids passing glances, and molasses, uh, crasses. Woohoo. Voted Most Likely to be Run Into at the Supermarket in Glob school.`
  },
  {
    name: 'Split Dye Bob Glob',
    image: 'assets/splitdyebobglob.png',
    rarity: '1/4',
    description: `Her name is short for Split-Dye Roberta Glob. Her friends call her SD Berty G. Can be seen at the local umbrella store, and also enjoys cantaloupe. There is no cantaloupe store. Loves sidewalk chalk and hiking, and she also hands people glasses of water, and walks past plants. She likes to think of herself as "Pretty Split-Dye Bob Glob."`
  },
  {
    name: 'Cute Split Dye Bob Glob',
    image: 'assets/cutesplitdyebobglob.png',
    rarity: '1/80',
    description: `Split-Dye Bob Glob variant. 
Her name is also short for Split-Dye Roberta Glob. Kind of a Gloth girl - rocks her style with an iron fist. Despite always being mistaken for SD Berty G, she actually has a completely unique set of interests and talents. For example: She can tie her necktie into an Eldredge Knot while riding a horse. And she's a real girls' girl. You know, ride or tie.`
  },
  {
    name: 'Evil Glob',
    image: 'assets/evilglob.png',
    rarity: '1/100',
    description: `Not much is known about them. We actually have no evidence that they're evil at all. They have a clean criminal record and keep to themself for the most part. I think they just call him Evil Glob because his eyes look like that. I don't really know him that well, to be honest.`
  },
  {
    name: 'Midas',
    image: 'assets/midas.png',
    rarity: '1/1,000,000',
    description: `This Glob’s painted smile hides a dark reality for this Glob. Anything he touches turns to Glob! I mean Golb! I mean, you know. Gourd. Whatever. Midas can’t be bought for the worlb. I mean-jeez. Anywho, he is sad because of that, since he cannot hold his family's hands, or hold hands with old ladies at the crosswalk, or any other similarly noble Glob pursuits. However because he’s a Glob, nothing that bad can actually really happen to him, so it’s all ok.
He likes to wear expensive fabrics. His favorite foods are golden lemon meringue pie, golden lemons, golden soup, and more. He has a metal water bottle, and drinks metal water. He has a heart of gold. Has a very inefficient bicycle, and an equally inefficient car. His favorite color is green.`
  }
];

function renderGallery() {
  const app = document.getElementById('app');
  app.innerHTML = '<div id="gallery"></div>';
  const gallery = document.getElementById('gallery');
  globs.forEach((glob, index) => {
    const link = document.createElement('a');
    link.href = `index.html?id=${index}`;
    const img = document.createElement('img');
    img.src = glob.image;
    img.alt = glob.name;
    img.addEventListener('mouseenter', () => {
      document.body.classList.add('dimmed');
    });
    img.addEventListener('mouseleave', () => {
      document.body.classList.remove('dimmed');
    });
    link.appendChild(img);
    gallery.appendChild(link);
  });
}

function renderGlob(id) {
  const glob = globs[id];
  if (!glob) {
    renderGallery();
    return;
  }
  const app = document.getElementById('app');
  app.innerHTML = `
    <div id="glob-view">
      <h1>${glob.name} - ${glob.rarity || 'Undef.'}</h1>
      <img src="${glob.image}" alt="${glob.name}">
      <p>${glob.description}</p>
      <nav>
        <button id="prev">Previous</button>
        <button id="home">Home</button>
        <button id="next">Next</button>
      </nav>
    </div>
  `;
  document.getElementById('home').onclick = () => { window.location = 'index.html'; };
  document.getElementById('prev').onclick = () => {
    const prev = (id - 1 + globs.length) % globs.length;
    window.location = `index.html?id=${prev}`;
  };
  document.getElementById('next').onclick = () => {
    const next = (id + 1) % globs.length;
    window.location = `index.html?id=${next}`;
  };
}

function init() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'), 10);
  if (isNaN(id)) {
    renderGallery();
  } else {
    renderGlob(id);
  }
}

window.onload = init;