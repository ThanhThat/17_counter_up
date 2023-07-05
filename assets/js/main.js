// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// function counterUp(el, to) {
//   let speed = 200;
//   let from = 0;
//   let step = to / 200;

//   const interval = setInterval(() => {
//     from += step;
//     if (from > to) {
//       clearInterval(interval);
//       el.innerText = to;
//     } else {
//       el.innerText = Math.round(from);
//     }
//   }, 1);
// }

// counterUp($(".face h2"), 2000);
// counterUp($(".youtube h2"), 1995);
// counterUp($(".tiktok h2"), 1987);

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function counterUp(el, to) {
  let from = 0;
  let speed = 200;
  let step = to / 200;

  const counter = setInterval(() => {
    from += step;

    if (from > to) {
      clearInterval(counter);
      el.innerText = to;
    } else {
      el.innerText = Math.round(from);
    }
  }, 1);
}

counterUp($(".face h2"), 9000);
counterUp($(".youtube h2"), 9999);
counterUp($(".tiktok h2"), 99999);
