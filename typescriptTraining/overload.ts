function myf(s:string ):string;
function myf(i:number ):number;
function myf(i:number, j:number ):number;
function myf(si: any, sj? : number): string|number {
    if (typeof si == "number")
        if(sj){
            return (si+sj);
        }
        else 
        {
            return si;
        }
    else{
        return 'string='+si;
    }
}
console.log(myf(14));
console.log(myf(14,15));
console.log(myf("toto"));
