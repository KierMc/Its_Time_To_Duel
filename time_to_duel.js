
class Ninja{
    constructor(cost, power, resilience){
        this.cost=cost;
        this.power=power;
        this.resilience=resilience;
    }

    hardAlgo(){
        this.cost-=2;
        this.resilience+=3;
        console.log("increase target's resilience by 3");
    }

    unhandledPromiseReject(){
        this.cost-=1;
        this.resilience-=2;
        console.log("reduce target's resilience by 2");
    }

    pairProgram(){
        this.cost-=3;
        this.power+=2;
        console.log("increase target's power by 2");
    }
}

const Red_Belt_Ninja=new Ninja(3, 3, 4)
const Black_Belt_Ninja=new Ninja(4, 5, 4)

Red_Belt_Ninja.hardAlgo();
Red_Belt_Ninja.unhandledPromiseReject();
Red_Belt_Ninja.pairProgram();