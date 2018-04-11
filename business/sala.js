class sala{
    constructor(nome_){
        this.nome = nome_
        this.porta = false
        this.ar = false
        this.datashow = false
    }



    set(porta_,ar_,datashow_){
        this.porta = porta_
        this.ar = ar_
        this.datashow = datashow_
        run();
    }

    run(){

        if (this.porta === true) {
            //feixa
        }else{
            //abre
        }
        if (this.ar === true) {
            //desliga
        }else{
            //liga
        }
        if (this.datashow === true) {
            //desliga
        }else{
            //liga
        }

    }







    
    /* abrirSala(){
        this.porta = true
        this.ligarAr()
        console.log("sala aberta!\n\n")
    }

    fecharSala(){
        this.ar = false
        this.datashow = false
        this.porta = false
    }

    ligarAr(){
        this.ar = true
    }

    desligarAr(){
        this.ar = false
    }

    ligarData(){
        this.datashow = false
    }

    desligarData(){
        this.datashow = false
    }

    */
}
module.exports = sala