const Park = function (name, ticket_price, []){
this.name = name;
this.ticket_price = ticket_price;
this.dinosaurs = [];

}

 Park.prototype.addDinosaur = function(dinosaur) {

    this.dinosaurs.push(dinosaur)
 };

 Park.prototype.removeDinosaur = function(dinosaur) {

   this.dinosaurs.shift(dinosaur)

 };

 Park.prototype.findDinosaur = function(dinosaur) {
    let mostAttractiveDino = this.dinosaurs[0];
  for (const dinosaur of this.dinosaurs){
     if(dinosaur.guestsAttractedPerDay> mostAttractiveDino.guestsAttractedPerDay) {
       mostAttractiveDino = dino;
    };

  };
    return mostAttractiveDino;
};
 Park.prototype.findAllDinasourSpeices



module.exports = Park;
