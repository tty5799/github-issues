import { getLabelItemTpl, getLabelTpl } from "../tpl.js";

export class label {

  update(data) {
    // 데이터를 받아와서 랜더링
    const appDiv = document.getElementById('app');
    const dataList = data.map((list) => getLabelItemTpl(list)).join("");
    const labelHtml = getLabelTpl();
    appDiv.innerHTML = labelHtml;
    document.querySelector(".label-list").innerHTML = dataList;
  }
}



