export default class Task {

        constructor(title, time, difficulty, importance, date) {
            this.title = title;
            this.time = time;
            this.difficulty = difficulty;
            this.importance = importance;
            this.date = Date.parse(date);    
        }
        

        toString() {
            return '' + this.title + this.time + this.difficulty + this.importance + this.date;
        }
}