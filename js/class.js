// value-text 배열 생성기
export class Value_Text {
    constructor() {
        this.name = {};
        this.list = [];
    }
    naming(value, text) {
        if (value && text) {
            this.name = {value, text};
        } else {
            return console.log("매개변수 falsy");
        }
    }
    add(value, text) {
        if (value && text) {
            const obj = {value, text};
            this.list.push(obj);
        } else {
            return console.log("매개변수 falsy");
        }
    }
}