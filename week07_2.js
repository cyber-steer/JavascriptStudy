/**
 * literal object(리터럴 객채) 클래스없이 단독으로 존재하는 객채
 * 객채와 인스턴스의 차이는 객체를 만들어내는 클래스의 존재 여부에따라 다르며 객체는 클래스 없이도 존재할수 있다
 * 인스턴스는 클래스로부터 생성되야 한다
 * 
 * 객체 정의 연습
 * 2021. 10. 19.
 */

let st ={
    name: "이름",
    age : 20,
    code : 20211234,
    dept : '컴퓨터정보과',
    "태어난 날" : "2021년 1월 1일",
    생일 : 20200101,
    intro:function(){
        console.log(`안녕하세요, 저는${this["name"]}입니다`);
    },
    introBirthday: function (){
        console.log(`저의 생일${this["태어난 날"]}입니다`);
    }
}
console.log(st["태어난 날"]);
console.log(st['name']);
console.log(st.생일);

st.intro();
st.introBirthday();