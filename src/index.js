import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const List = (props) => {
  const [itemArr, setArr] = React.useState(props.items);

  const moveUp = (e) => {
    const index = e.target.attributes.name.value;
    const newArr = [...itemArr];
    newArr.splice(index, 1);
    newArr.unshift(itemArr[index]);
    setArr(newArr);
  };

  return (
    <ul>
      {itemArr.map((item, i) => {
        return (
          <li key={i} name={i} onClick={moveUp}>
            {item}
          </li>
        );
      })}
    </ul>
  );
};

document.body.innerHTML = "<div id='root'> Test </div>";

const rootElement = document.getElementById("root");
ReactDOM.render(<List items={["A", "B", "C"]} />, rootElement);

let listItem = document.querySelectorAll("li")[1];

if (listItem) {
  listItem.click();
}

setTimeout(() => console.log(document.getElementById("root").innerHTML));
