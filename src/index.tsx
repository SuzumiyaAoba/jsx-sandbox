const createElement = (
  _type: string,
  _props?: unknown,
  ..._children: Element[]
): string => {
  return "createElement";
};

/** @jsx createElement */
const App = <div>Hello, World</div>;

const root = document.getElementById("root");
if (root) {
  root.innerText = App;
}
