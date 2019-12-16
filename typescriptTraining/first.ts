let a : number=10;
let b : string="'hello'";
let c : boolean= true;

let d : any[] = [5,6,8,'5']
let d1 : number[] = [5,6,8]
let d2 : Array<number> = [5,6,8]
enum Color { Red, Blue, Green }
console.log(Color.Blue);
console.log(d[1]);

function doit() : void{
    console.log("world")
}
doit();
let didit = function() : number{
    return 12.5;
}
console.log(didit() );
let didit2 = ()=> {
    return 12.5;
}
let didit3= () :number =>  12.5;
let doit2 = () :void => console.log("mondo");
console.log(didit2() + didit3() );
let m = doit2;
m();

let square = (i:number) => i*i;
console.log(square(4));

interface Person{
    name:string;
    age?:number;
    [key:string]:any;
    plusOne ():void;

}
function myf3(s:number|string ):number|string[]{
    return 12;
}

function anyf<T>(s:T) : string|T{
  let t:T = s;
  return "hello";
}

let p:Person = {
     name:"pierre"
    , age:15 ,
    firstname:'toto',
    plusOne: () => p.age++
};
console.log(p.name);
let agePlusOne = (pp:Person) => pp.age++;
agePlusOne(p);
console.log(p.age);
let p2:Person = { name:"pierre", 
    plusOne: () => p2.age++
};
p.plusOne();
console.log(p.age);
p2.plusOne();
console.log(p2.age);

let AddN = ( p:Person, n:number=1)=>{ p.age+=n;};
AddN(p);

class Animal {
    private readonly name:string;
    constructor(name:string, private age:number=0){
        if(name.length>0 && age >=0){
            this.name=name;
        }
        else
            throw "Impossible to create animal"
    }
    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }

}

let an:Animal = new Animal("cheetah", 12);
//an.age=-25;
console.log(an.getName());

class Lion extends Animal{
    public get tailLength(): number {
        return this.tail_length;
    }
    public set tailLength(value: number) {
        if(value > 150){
            throw "Impossible to create lion"
        }
        else
            this.tail_length = value;
    }
    constructor(name:string, age:number=0, private tail_length: number){
        super(name,age);
        this.tailLength=tail_length;
    }
}
const leo = new Lion("leo",10,120);
//leo.tailLength=200;
console.log(leo.tailLength);

module Zoo {
    export class Giraffe extends Animal{
        constructor(name:string, age:number=0){
            super(name,age);
        }
    }
}

let gigi = new Zoo.Giraffe("Gigi", 8);


for(const i in d1){
    console.log(d1[i]);
}

let d4 = [5,6,8]
for(const i of d4){
    console.log(i);
}