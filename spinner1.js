const animations = ["|", "/", "-", "\\"];
let i = 0;

const spinner = setInterval(() => {
  process.stdout.write(`\r${animations[i]}`);
  i < 3 ? i++ : i = 0;
}, 120);