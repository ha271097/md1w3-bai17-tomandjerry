class mouse{
    constructor(name,weight,speed) {
        this.status=true;
        this.name=name;
        this.weight=weight;
        this.speed=speed;
    }
    speak(str){
        return this.name + "uu"+str;
    }
}
let chuot= new mouse("jerry",5,15);
let chuot1= new mouse("bob",5,25);

