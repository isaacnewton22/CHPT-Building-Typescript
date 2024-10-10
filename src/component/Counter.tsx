import React, { Component } from 'react';

// Définir un composant Counter qui étend la classe de base Component de React
class Counter extends Component {
    // Initialiser l'état du composant avec une propriété 'count' à 0
    state = {
        count: 0,
    };

    // Méthode pour incrémenter le compteur lorsqu'elle est appelée
    increment = () => {
        // Utiliser 'setState' pour mettre à jour la propriété 'count' dans l'état du composant
        this.setState({ count: this.state.count + 1 });
    };

    // Méthode render pour afficher l'interface utilisateur du composant Counter
    render() {
        return (
            <div>
                {/* Afficher la valeur actuelle de 'count' */}
                <p>Count: {this.state.count}</p>
                {/* Bouton qui déclenche la méthode 'increment' lorsqu'on clique dessus */}
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Exporter le composant Counter pour pouvoir l'utiliser dans d'autres parties de l'application
export default Counter;
