const hero = require('./heroFactory');

try {
    const player1 = new hero("Fulano",25,"Mago");
    const player2 = new hero("Sicrano",25,"Ninja");
    const player3 = new hero("Beltrano",25,"Monge");
   
    let players = [player1,player2,player3]
    
    players.forEach((player)=>{
        player.atacar();
    })

} catch (error) {
    console.error(error)
}

