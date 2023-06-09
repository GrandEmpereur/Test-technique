import '../scss/Loading.scss';

/**
 * Le composant de chargement de l'application.
 * @returns Le composant de chargement.
 */
const Loading: React.FC = () => {
    // Affiche un spinner en CSS.
    return (
        <div className="Loading">
            <div className="spinner"></div>
        </div>
    );
}

export default Loading;
