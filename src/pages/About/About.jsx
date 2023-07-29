import TopCard from '../../components/TopCard/TopCard';
import Dropdown from '../../components/Dropdown/Dropdown';

import './About.scss'

export default function About() {
    return (
        <>
            <div className="about-hero">
                <TopCard
                    src="/Imagesource2.webp"
                    alt="Paysage d'une forêt dans les montagnes"
                    brightness={0.7}
                />
            </div>

            <section className="dropdown-wrapper">
                <Dropdown
                    title="Fiabilité"
                    content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
                />

                <Dropdown
                    title="Respect"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />

                <Dropdown
                    title="Service"
                    content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
                />

                <Dropdown
                    title="Sécurité"
                    content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </section>
        </>
    )
}