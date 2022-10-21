export let changeTab = (name) => {
    switch (name){
        case 'Jeu':
            console.log('Tab : Jeu')
            break;
        case 'Scoreboard':
            console.log('Tab : Tableau des scores')
            break;
        case 'Parametre':
            console.log('Tab : Paramètre')
            break;
        case 'A propos':
            console.log('Tab : A propos')
            break;
        default:
            console.log('Tab : Accueil')
            break;
    }
}