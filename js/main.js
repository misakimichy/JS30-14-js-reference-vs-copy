(function(){
    // start with strings, numbers and booleans
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    
    // Make a variable which references the players array:
    const team = players;
    console.log('players', players, 'team', team);

    // You might think we can just do something like this:
    // team[3] = "Ada";
    // console.log(players, team);
    // however what happens when we update that array?
    // -> Because team references back the players, the original array is also updated. It's NOT an array copy.

    // So, how do we fix this? We take a copy instead!
    // one way
    const team2 = players.slice();
    
    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    // or use the new ES6 Spread
    const team4 = [...players];
    // now when we update it, the original one isn't changed
    team4[3] = 'Ada';
    console.log('team2', team2, 'team3', team3, 'team4(updated [3] element)', team4);
    console.log('players(not updated)', players);

    const team5 = Array.from(players);
    console.log('team5', team5);
    team5[3] = "hello";
    console.log('team5(update [3] element)', team5, 'players(not updated)', players);


    // The same thing goes for objects, let's say we have a person object
    // with Objects
    const person = {
        name: 'Captain America',
        age: 80
    };
    // Make a variable which references the players object:
    // const captain = person;
    // captain.number = 99;
    // console.log('captain', captain);

    // how do we take a copy instead?
    const captain2 = Object.assign({},person, {age: 21});
    console.log('person', person, 'captain2(age updated)', captain2);
    
    // object ...spread - spread the original person object
    const captain3 = {...person};
    console.log('captain3', captain3);

    /*
        This is only 1 level deep - both for Arrays and Objects.
        lodash has a cloneDeep method, but you should think twice before using it.
    */
    const coop = {
        name: 'Coop',
        age: 2,
        social: {
            instagram: '@hungryCoop',
            twitter: '@CoopTheFoodie'
        }
    };
    console.log('coop', coop);
    
    const copy = Object.assign({}, coop);
    copy.name = "Coop Loo";
    console.log('coop', coop, 'copy', copy);
    // copy.social.instagram = '@curiousCoop';
    // console.log('copy.social', copy.social, 'coop.social', coop.social,);
    // The original object shouldn't be updated but it just updated...
    // This is because `Object.assign` only works on 1 level deep.
    // Use JSON.parse to track all the levels
    const copy2 = JSON.parse(JSON.stringify(coop));
    copy2.social.instagram = '@curiousCoop';
    console.log('copy2.social', copy2.social, 'coop.social', coop.social);
}());