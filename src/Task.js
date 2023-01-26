class Task {
    Task(title, time, difficulty, importance, date) {
        this.title = title;
        this.time = time;
        this.difficulty = difficulty;
        this.date = Date.parse(date);
    }
}