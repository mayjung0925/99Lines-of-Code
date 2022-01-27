let friends = ['Sam', 'Carol', 'Jenna', 'Paul', 'Brad'];

for (let i = 0; i < friends.length; i++) {
    let name = friends[i];
    console.log (name.toUpperCase() + ':');

    for (let j = 99; j > 0; j--) {
        if(j == 2){
            song1 =  j + 'lines of code in the file,' + ' ' + j + ' ' + 'lines of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,'+ (j-1)+ ' '+ 'line of code in the file';
            console.log(song1);
        } else if( j == 1 ){
            let song2 =  j +' '+ 'line of code in the file,' + ' ' + j + ' ' + 'line of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,' + ' '+'no more lines of code in the file';
            console.log(song2);
        } else {
            let song3 = j + 'lines of code in the file,' + ' ' + j + ' ' + 'lines of code;' + ' ' + name + ' ' + 'strikes one out' + ' ' + 'clears it all out,'+ (j-1)+ 'lines of code in the file';
            console.log(song3);
        }

        }

}