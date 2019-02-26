
function Unit(name,hp,mp,dmg,time){
    this.name = name; 
    this.hp = hp; 
    this.mp = mp; 
    this.dmg = dmg;
    this.time = time;
}

function attack(unit1, unit2){
    unit2.hp = unit2.hp - unit1.dmg;
}