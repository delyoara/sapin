//largeur du sapin 15 sur la branche la plus large
//on calcule ça avec 0 * n + 1; 2 * n + 1; 3 * n + 1 ...
//le premier palier est de 4 lignes
// \x1b[31m =  rouge ...il faut ajouter l'étoile ensuite
//reset les couleurs  : \x1b[0m (après étoile 😵‍💫)
//les couleurs ne fonctionnent pas avec \x1b[31m et avec chalk non plus 
//pour voir les couleurs :https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color/40560590#40560590
const chalk = require('chalk');
console.log(chalk.red("Hello, world!"));
let totalWidth = 15;
let middle = Math.floor(totalWidth / 2)
// console.log(middle);
let treeStar = "+".padStart(middle + 1);

let slash = "/";
let backslash = "\\"; //à ne pas mettre un seul car il sert pour échapper d'autres caractères spéciaux
let pipe = "|"
function afficherPointeSapin(height) {  
    console.log(treeStar)
    for (let n = 0; n < height; n++){
        let starsCount = n + 1
        let space = " ".repeat(middle - starsCount);
        let star = chalk.red('*'.repeat(1 * n ));
        let treeLine = space + slash + star + pipe + star + backslash + space;
        console.log(treeLine);

    }
}

afficherPointeSapin(4);

