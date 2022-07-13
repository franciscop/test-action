import meow from "meow";

const args = meow(``);
const [number, title, body] = meow.input;

console.log({
  number,
  title,
  body,
});
