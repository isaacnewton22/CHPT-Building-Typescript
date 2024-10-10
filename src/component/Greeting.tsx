import React from 'react'; 

// Définir l'interface 'props' qui spécifie que 'name' est une chaîne de caractères
interface props {
    name: string;  // Définit le type de la propriété 'name' comme une chaîne de caractères.
}

// Définir le composant fonctionnel 'Greeting' qui reçoit 'name' en tant que prop
// et retourne un élément JSX
const Greeting = ({ name }: props): JSX.Element => { 
    return (
        <div>
            {/* Affiche le message de salutation en utilisant la valeur de 'name' */}
            Hello, {name} !
        </div>
    );
};

// Exporter le composant 'Greeting' pour l'utiliser dans d'autres parties de l'application
export default Greeting;
