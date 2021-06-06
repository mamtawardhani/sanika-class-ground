class Ground{

    constructor(x,y){

        this.body = B.rectangle(x,y,400,20, {isStatic:true})
        W.add(wo, this.body)
    }



    display(){

        var pos = this.body.position
        rectMode(CENTER)
       rect(pos.x, pos.y, 400,20) 
    }





}