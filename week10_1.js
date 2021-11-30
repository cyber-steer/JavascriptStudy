/**
 * 브라우저 객체 모델
 * 브라우저의 기능들을 제공하는 객체들
 * Browser Object Model BOM
 * 
 * window 브라우저 객체 구조에서 가장 최상위의 객체
 * alert(msg), prompt(msg, <default msg>), confirm(msg)
 * 
 * location  현재 URL에 관한 정보들을 제공 href외 나머지속성은 href 분해요소
 * href-문서의 URL주소, host, hostname, port, pathname
 * 
 * navigator 웹 브라우저 정보 객체
 * appCodeName-코드이름, appName-이름, appVersion-버전, platform-운영체제 시스템환경, userAgent-웹브라우저의 전체적인 정보
 * 
 * history 웹브라우저의 앞으로 , 뒤로가기 기능을 담당
 * forward(), back()
 * 
 * screen 웹브라우저가 아닌 운영체제의 화면(바탕화면) 정보 제공
 * width, height, availWidth-실제사용가능, availHeight-실제사용가능, colorDetpth
 * 
 * doucument DOM(Document Object Model)-웹브라우저가 HTML 문서를 인식하고 관리하는 방법
 * 
 * html문서 <=> DOM 시험제출
 * 요소 노드는 각 태그 , 텍스트노드
 * 자손노드 조상노드
 * 한 계층차이는 자식노드, 부모노드, 형제노드(sibling)
 * 
 * 문서객체 선택
 * id 속성 id 하나를 가져온다
 * document.getElementById("id")
 * 
 * tagname 태그이름을 주고 다 가져옴
 * document.getElementsByTagName("h1");
 * 
 * class name 클래스이름을 주고 다 가져옴
 * document.getElementsByClassName("cls");
 * 
 * csss selector 
 * document.querySelector("sel");
 * document.querySelectorAll("p.intro");
 * 
 * html object collection
 */

