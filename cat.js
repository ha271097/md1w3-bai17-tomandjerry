class cat{
    constructor(name,weight,speed) {
        this.name=name;
        this.weight=weight;
        thia.speed=speed;
    }
    speak(str){
        return this.name + " meo meo" + str;
    }
    catch(mouse){
        if(this.speed>mouse.speed){
            console.log(this.nam+ " da bat dc chuot" + mouse.name);

        }
    }
    eat(mouse){
        if(mouse.status){
            mouse.status=false;
            this.weight+= mouse.weight;
            console.log("chuot" + mouse.name + " da bi meo" + this.name + " an thit");
        }
    }
}
let tom = new cat(tom,25,20);
