export default class Task {

        constructor(title, time, difficulty, importance, date, canDo) {
            this.title = title;
            this.time = time;
            this.difficulty = difficulty;
            this.importance = importance;
            this.date = Date.parse(date);
            this.canDo = canDo;
            this.value = calcValue(this.title, this.time, this.difficulty, this.importance, this.date, this.canDo);
            // console.log(title, time, difficulty, importance, date, this.value);
        }
        
        updateDue = () => {
            this.value = calcValue(this.time, this.difficulty, this.importance, this.date, this.canDo);
        }
        toString() {
            var a = " , "
            return '' + a + this.title + a + this.time + a + this.difficulty + a + this.importance + a + this.date + a + this.canDo;
        }

        
}



function calcValue(title, time, difficulty, importance, date, canDo) {
    if(canDo === 'false') return 10;

    var timeArray = [5, 10, 20, 30, 45, 60, 90, 120, 150, 200];
    var timeIndex = closest(time, timeArray);

    var timeVsDiffMatrix = [
    /* 10 */    [5, 5, 6, 7, 8, 9, 9, 10, 10, 10],
    /* 9 */     [3, 4, 5, 6, 7, 8, 9, 9,  10, 10],
    /* 8 */     [3, 3, 4, 5, 6, 7, 8, 9,  10, 10],
    /* 7 */     [2, 3, 4, 5, 5, 6, 7, 8,  9,  9 ],
    /* 6 */     [1, 2, 3, 4, 5, 5, 6, 7,  8,  9 ],
/*Diff 5 */     [1, 2, 3, 4, 5, 5, 6, 7,  7,  8 ],
    /* 4 */     [1, 2, 2, 3, 4, 4, 5, 6,  7,  8 ],
    /* 3 */     [1, 1, 2, 2, 3, 4, 5, 6,  7,  7 ],
    /* 2 */     [1, 1, 1, 2, 3, 3, 4, 5,  6,  6 ],
    /* 1 */     [1, 1, 1, 1, 2, 3, 4, 5,  5,  6 ],
              /* 5  10 20 30 45 60 90 120 150 200 */
                                //Time

    ];

    var timeVsDiff = timeVsDiffMatrix[10-difficulty][timeIndex];
    
    var tvdVsImportanceMatrix = [
        /* 10 */    [3, 4, 5, 6, 7, 7, 9, 10, 10, 10],
        /* 9 */     [3, 4, 5, 6, 6, 7, 8, 9,  10, 10],
        /* 8 */     [2, 3, 4, 5, 6, 6, 7, 8,  10, 10],
        /* 7 */     [2, 3, 4, 5, 5, 6, 7, 8,  9,  10],
        /* 6 */     [1, 2, 3, 4, 5, 5, 6, 7,  8,  9 ],
  /*T vs D 5 */     [1, 2, 3, 3, 4, 5, 6, 7,  7,  8 ],
        /* 4 */     [1, 2, 2, 3, 4, 4, 5, 6,  7,  8 ],
        /* 3 */     [1, 1, 2, 2, 3, 4, 5, 5,  6,  7 ],
        /* 2 */     [1, 1, 1, 2, 3, 3, 4, 5,  5,  6 ],
        /* 1 */     [1, 1, 1, 2, 2, 3, 4, 4,  5,  5 ],
                  /* 1, 2, 3, 4, 5, 6, 7, 8,  9,  10 */
                                //Importance
        ];
    var tvdVsImportance = tvdVsImportanceMatrix[10-timeVsDiff][importance-1];

    var daysUntilDue = Math.ceil((date - (new Date().getTime()))/(1000*60*60*24));
    console.log(title, daysUntilDue);
    var daysArray = [1,2,3,5,7,14,21,30,90,150];
    var daysIndex = closest(daysUntilDue, daysArray);

    var tvdviVsDaysMatrix = [
        /* 10 */    [1, 2, 3, 5, 7, 8, 9, 10, 10, 10],
        /* 9 */     [1, 2, 3, 5, 7, 8, 9, 9,  10, 10],
        /* 8 */     [1, 2, 3, 4, 6, 7, 8, 9,  10, 10],
        /* 7 */     [1, 2, 2, 3, 5, 6, 7, 8,  9,  10],
        /* 6 */     [1, 2, 2, 3, 4, 5, 6, 7,  8,  10],
  /*TvDvI  5 */     [1, 1, 2, 3, 4, 5, 6, 7,  7,  9 ],
        /* 4 */     [1, 1, 1, 3, 4, 4, 5, 6,  7,  8 ],
        /* 3 */     [1, 1, 1, 2, 3, 4, 5, 6,  7,  8 ],
        /* 2 */     [1, 1, 1, 2, 3, 3, 4, 5,  6,  8 ],
        /* 1 */     [1, 1, 1, 1, 2, 3, 4, 5,  6,  7 ],
                  /* 1, 2, 3, 5, 7, 14, 21, 30,  90,  150 */
                                //Days Until Due
        ];
    var tvdviVsDays = tvdviVsDaysMatrix[10-tvdVsImportance][daysIndex];

    return tvdviVsDays;
}

function closest(num, arr) {
    var curr = arr[0];
    var diff = Math.abs(num-curr);
    var index = 0;
    for(var val = 0; val < arr.length; val++) {
        var newdiff = Math.abs(num - arr[val]);
        if(newdiff < diff) {
            diff = newdiff;
            curr=arr[val];
            index = val;
        }
    }
    return index;
}

