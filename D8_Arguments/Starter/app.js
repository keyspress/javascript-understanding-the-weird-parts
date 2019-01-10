function greet(firstname, lastname, language) {
  language = language || 'en';

  if (arguments.length === 0) {
    console.log('missing parameters');
    console.log('------------');
    return;
  }

  console.log(firstname);
  console.log(lastname);
  console.log(language);
  console.log(arguments);
  console.log('arg 0: ' + arguments[0]);
  console.log('--------------');
}

greet();
greet('Jim');
greet('Jim', 'Doe');
greet('Jim', 'Doe', 'es');
