<<<<<<< HEAD
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

=======
>>>>>>> 7cd17b8ceea922b99496c1a5deaf64d4143ab3f2
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

function counterUp(el, to) {
<<<<<<< HEAD
  let from = 0;
  let speed = 200;
  let step = to / 200;

  const counter = setInterval(() => {
    from += step;

    if (from > to) {
      clearInterval(counter);
=======
  let speed = 200;
  let from = 0;
  let step = to / 200;

  const interval = setInterval(() => {
    from += step;
    if (from > to) {
      clearInterval(interval);
>>>>>>> 7cd17b8ceea922b99496c1a5deaf64d4143ab3f2
      el.innerText = to;
    } else {
      el.innerText = Math.round(from);
    }
  }, 1);
}

<<<<<<< HEAD
counterUp($(".face h2"), 9000);
counterUp($(".youtube h2"), 9999);
counterUp($(".tiktok h2"), 99999);
=======
counterUp($(".face h2"), 2000);
counterUp($(".youtube h2"), 1995);
counterUp($(".tiktok h2"), 1987);
>>>>>>> 7cd17b8ceea922b99496c1a5deaf64d4143ab3f2
