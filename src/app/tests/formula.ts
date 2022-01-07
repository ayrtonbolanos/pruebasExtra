export class formula{
    r=0;
    calcular(i:number){
        if(i<=0){
            return i;
        }
        i=i*-1
        this.r=i;
        return this.r;
    }
}