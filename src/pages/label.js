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
    new NewLabel('.new-label-button').event()
  }
}

export class NewLabel {
  $labelForm = $('#new-label-form');
  constructor(element) {
    this.element = element;
    this.labelStore = new LabelStore();
    this.event = this.event.bind(this);
    this.labelStore.addObserver(this.toggle(this.event));
  }

  event() {
    $(this.element).addEventListener('click', () => {
      console.log("??");
      this.labelStore.isTest();
    });
  }
  toggle(isOpened) {
    isOpened
      ? this.$labelForm.classList.add('hidden')
      : this.$labelForm.classList.remove('hidden');
  }
}