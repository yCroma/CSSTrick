import "./first.css";

export const createFirst = ({ label, backgroundColor }) => {
  const h1 = document.createElement("h1");
  h1.innerText = label;
  h1.className = ["storybook-first", "storybook-first--primary"].join(" ");
  h1.style.backgroundColor = backgroundColor;
  return h1;
};
