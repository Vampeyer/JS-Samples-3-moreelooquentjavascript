let type  =" Fkn archaic rabbut" 

function ArchaicRabbit(type) {
    this.type = type;
  }
  ArchaicRabbit.prototype.speak = function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  };
  let oldSchoolRabbit = new ArchaicRabbit("old school");

console.log(oldSchoolRabbit)