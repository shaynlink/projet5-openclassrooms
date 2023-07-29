import useSWR from 'swr';
import TopCard from '../../components/TopCard/TopCard';
import { Link } from 'react-router-dom';
import fetcher from '../../lib/fetcher';

import './Home.scss';

export default function Home() {
    const { data: rents, error } = useSWR('http://localhost:3030/rents?limit=6', fetcher, {
        revalidateOnFocus: false
    });

    if (error) return <div>Erreur lors du chargement des locations</div>

    if (!rents) return <div>Chargement des locations...</div>

    return (
        <>
            <div className="home-hero">
                <TopCard
                    src="/Imagesource1.webp"
                    alt="Paysage d'une côte montagneuse"
                    title="Chez vous, partout et ailleurs"
                    brightness={0.7}
                />
            </div>
    
            <section className="rents">
                {!rents && <div>Chargement des locations...</div>}
                {rents && rents.map(rent => (
                    <Link to={`/rents/${rent.id}`} key={rent.id} aria-label={`La page de location de ${rent.title}`}>
                        <article key={rent.id}>
                            <img src={rent.cover} alt={rent.title} />
                            <div className="title-container">
                                <p>{rent.title}</p>
                            </div>
                        </article>
                    </Link>
                ))}
            </section>
        </>
    )
}