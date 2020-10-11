console.log('===================')
//soal 1

class Score {
    constructor(subject, points, email) {
        this.subject = subject
        this.points = points
        this.email = email
    }
    average() {
        return this.points.reduce((a, b) => a + b) / this.points.length;
    }
}

let num = [89,87,90,100,75]
newData = new Score("exam2",num,"sparta@mail.com")
console.log(newData)
console.log(newData.average(num))