var person = new Object();

person['firstname'] = 'Kyle';
person['lastname'] = 'Spresser';

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.lastname);

person.address = new Object();

person.address.street = '44 Main St.';
person.address.city = 'Las Vegas';
person.address.state = 'Nevada';

console.log(person.address.state);
console.log(person['address']['city']);
console.log(person['address'].street);
