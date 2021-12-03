export class DataService {
    public date: Date = new Date();
    
    getData(): Date {
        return this.date;
    }

    /* addData(name: string){
          
        this.data.push(name);
    } */
}