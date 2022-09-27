
let spinner;
const infiniteSpinner = () => {
  const animations = ["|", "/", "-", "\\"];
  let i = 0;

  spinner = setInterval(() => {
    process.stdout.write(`\r${animations[i]}`);
    i < 3 ? i++ : i = 0;
  }, 120);
}

infiniteSpinner();
setTimeout(() => {
  clearInterval(spinner);
  console.log();
}, 10000);