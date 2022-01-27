let friends = ['Sam', 'Carol', 'Jenna', 'Paul', 'Brad'];

for (let i = 0; i < friends.length; i++) {
    let name = friends[i];
    console.log (name.toUpperCase() + ':');

    for (let j = 99; j > 0; j--) {

        if (j >= 2) {
            let song1 = j + 'lines of code in the file,' + ' ' + j + ' ' + 'lines of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,';
            console.log(song1);

        } else {
            let song2 =  j +' '+ 'line of code in the file,' + ' ' + j + ' ' + 'line of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,';
            console.log(song2);
        }
    }
}