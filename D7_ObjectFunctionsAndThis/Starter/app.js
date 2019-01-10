function a() {
  console.log(this);
  this.newvariable = 'hello';
}

var b = function() {
  console.log(this);
};

a();

console.log(newvariable);

b();

var c = {
  name: 'the c object',
  log: function() {
    var self = this;

    self.name = 'updated c';
    console.log(self);

    var setname = function(newname) {
      self.name = newname;
    };
    setname('updated again');
    console.log(self);
  }
};

c.log();
