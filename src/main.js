import { issue } from "./pages/issue"
import { LabelStore } from "./store/labelStore.js";
import {label} from  "./pages/label"



const appDiv = document.getElementById('app');

const labelStore = new LabelStore()
const labelPage = new label()

labelStore.addObserver(labelPage.update);

function router(route) {
  // route 매개변수를 사용하여 각 경로에 맞는 컴포넌트를 렌더링한다
  switch (route) {
    case '':
      appDiv.innerHTML = issue();
      break;
    case 'label':
      labelStore.fetchLabels('/data-sources/labels.json')
      break;
    case "new-issue" :
      break
    case "new-label" :
      break
    default:
      appDiv.innerHTML = '<h1>404 페이지를 찾을 수 없습니다.</h1>';
      break;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // 초기 경로 설정
  router(location.hash.slice(1));

  // 브라우저 뒤로 가기/앞으로 가기 버튼 처리
  window.addEventListener('popstate', () => {
    router(location.hash.slice(1));
  });

  // 각 링크에 클릭 이벤트 등록
  document.querySelectorAll(".router-point").forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // 기본 동작(페이지 이동) 막기
      const route = link.getAttribute('href').slice(1);
      router(route); // 클릭된 링크의 경로로 라우팅
      history.pushState(null, null, `#${route}`); // 브라우저의 URL 변경
    });
  });
});




