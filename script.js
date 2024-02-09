;const person   = document.getElementById('person');

const direction = (dir, rev) => {
    let gr;
  if (dir === 'top') gr = rev ? 180 : 0;
  else gr = rev ? 90 : 270;
  person.style.transform = `rotate(${gr}deg)`;
};
const currentCoords = coords => coords >= 0 && coords <= 480;

let handleArrow = (way, rev) => {
    let cWay    = person.style[way] || 0;
    let reverse = rev ? 80 : -80;
    let t       = parseInt(cWay) + reverse;
    person.style[way] = currentCoords(t) ?
                        t + 'px' :
                        person.style[way];
    direction(way, rev);
};

window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp': handleArrow('top', false); break;
        case 'ArrowDown': handleArrow('top', true); break;
        case 'ArrowLeft': handleArrow('left', false); break;
        case 'ArrowRight': handleArrow('left', true); break;
    }
});