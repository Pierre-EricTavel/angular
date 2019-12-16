export class Student {
    private static ids: number= 0;
    private _id: number;
    constructor(private Name: string, private Age: number ){
        Student.ids ++;
        this._id = Student.ids;
    }

    toString(){
        return JSON.stringify(this);
    }

    public get name(): string {
        return this.Name;
    }
    public set name(name: string) {
        this.Name = name;
    }
   public get age(): number {
        return this.Age;
    }
    public set age(age: number){
        this.Age = age;
    }
    public get id() : number {
        return this._id;
    }
    public set id(id:number)  {
        this._id=id;;
    }
    
}