var kyle = {
  firstname: 'Kyle',
  lastname: 'Spresser',
  address: {
    street: '44 Main St.',
    city: 'Las Vegas',
    state: 'NV'
  }
};

function greet(person) {
  console.log('Hi ' + person.firstname);
}

greet(kyle);

greet({
  firstname: 'Mary',
  lastname: 'Jane'
});

kyle.address2 = {
  street: '222 Second St.'
};
