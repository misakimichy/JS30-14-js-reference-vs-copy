(function(){
    // start with strings, numbers and booleans
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
    
    // Make a variable which references the players.
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
    console.log('team2', team2, 'team3', team3, 'team4', team4);
    console.log('players', players);
    // The same thing goes for objects, let's say we have a person object
    // with Objects
    const person = {
        name: 'Wes Bos',
        age: 80
    };
    // and think we make a copy:
    // how do we take a copy instead?
    // We will hopefully soon see the object ...spread
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

}());

