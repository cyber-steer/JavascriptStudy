class Student{
    constructor(name,age){
        this.name =name;
        this.age = age;
        this.koreanScore;
        this.mathScore;
        this.englishScore;
    }
    getInformation(){
        return `학생이름[${this.name}], 나이[${this.age}]`;
    }
    setScore(korean, math, english){
        this.koreanScore = korean;
        this.mathScore = math;
        this.englishScore = english;
    }
    getScore(){
        return `국어[${this.koreanScore}], 수학[${this.mathScore}], 영어[${this.englishScore}]`;
    }
    getScoreAverge(){
        return "평균 : "+(this.koreanScore+this.mathScore+this.englishScore)/3;
    }
    getScoreSum(){
        return "합계 : "+(this.koreanScore+this.mathScore+this.englishScore);
    }
}

let student = new Student("학생",20);
student.setScore(100,90,80);
console.log(student.getInformation());
console.log(student.getScore());
console.log(student.getScoreAverge());
console.log(student.getScoreSum());