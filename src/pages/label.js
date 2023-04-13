import { getLabelItemTpl, getLabelTpl } from "../tpl.js";
import { $ } from "../utils.js";
import { LabelStore } from "../store/labelStore.js";


export class LabelList {

  update(data) {
    // 데이터를 받아와서 랜더링
    const appDiv = document.getElementById('app');

    const dataList = data.map((list) => getLabelItemTpl(list)).join("");
    const labelHtml = getLabelTpl();
    appDiv.innerHTML = labelHtml;
    $(".label-list").innerHTML = dataList;
  }
}
