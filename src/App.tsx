import { toClassName } from "./to-class-name";

const example1 = toClassName(
  "classA",
  "1",
  2,
  true,
  false,
  null,
  undefined,
  "classB"
);

const example2 = toClassName(
  null ?? "classA",
  "",
  undefined || "classB",
  undefined && "removedClass",
  " ",
  null || "classC",
  null && "removedClass"
);
console.log(example2);

const disabled = true;
const example3 = toClassName(
  disabled ? "disabled" : "removedClass",
  !disabled ? "removedClass" : "!disabled",
  disabled && "disabled",
  !disabled && "removedClass"
);

export default function App() {
  return (
    <div className={toClassName(example1)}>
      <h2>toClassName(...params[]) with examples</h2>
      <h3>example 1 result string: {example1}</h3>
      <h3>example 2 result string: {example2}</h3>
      <h3>example 3 result string: {example3}</h3>
    </div>
  );
}
