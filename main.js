const globs = [
  {
    name: 'Glob',
    image: 'assets/glob.png',
    rarity: 'Common',
    description: 'The classic Glob.'
  },
  {
    name: 'Blue Hat Glob',
    image: 'assets/bluehatglob.png',
    rarity: 'Uncommon',
    description: 'A Glob sporting a snazzy blue hat.'
  },
  {
    name: 'Green Pants Glob',
    image: 'assets/greenpantsglob.png',
    rarity: 'Uncommon',
    description: 'Known for its bright green pants.'
  },
  {
    name: 'Split Dye Bob Glob',
    image: 'assets/splitdyebobglob.png',
    rarity: 'Rare',
    description: 'A Glob with stylish split dye hair.'
  },
  {
    name: 'Cute Split Dye Bob Glob',
    image: 'assets/cutesplitdyebobglob.png',
    rarity: 'Rare',
    description: 'Adorable version of split dye bob.'
  },
  {
    name: 'Evil Glob',
    image: 'assets/evilglob.png',
    rarity: 'Epic',
    description: 'Watch out for this one.'
  },
  {
    name: 'Midas',
    image: 'assets/midas.png',
    rarity: 'Legendary',
    description: 'Everything it touches turns to gold.'
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