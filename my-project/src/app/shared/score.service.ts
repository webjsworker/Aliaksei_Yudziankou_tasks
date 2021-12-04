export class ScoreService {
    public score: number = 15;
    
    getScore(): number {
        return this.score;
    }

    addData(value: number){
        this.score = value;
    }
}