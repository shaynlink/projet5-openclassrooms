import { Fragment, useEffect } from 'react';
import { useMatches, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Caroussel from '../../components/Caroussel/Caroussel';
import Star from '../../components/Star/Star';
import Dropdown from '../../components/Dropdown/Dropdown';

import './Rent.scss';

export default function Rent() {
    const matches = useMatches();
    const navigate = useNavigate();
    const match = matches[0];
    const id = match.params.id;
    const { data: rent, error } = useSWR(`http://localhost:3030/rents/${id}`, fetcher);
    
    useEffect(() => {        
        if (error) {
            navigate('/not-found');
        }
    }, [error, navigate]);

    if (error) {
        return <div>Erreur lors du chargements de la location</div>
    }

    if (!rent) return <div>Chargements de la location</div>

    function getRating() {
        const rating = [];

        for (let i = 0; i < 5; i++) {
            rating.push(<Star key={i} isActif={i < rent.rating} />);
        }

        return rating;
    }

    return (
        <>
            <div className="rent-hero">
                <Caroussel
                    images={rent.pictures}
                    alt={`Photo numéro {{index}} de ${rent.title}`}
                />
            </div>

            <section className="section-information">
                <div className="quick-information">
                    <h1>{rent.title}</h1>
                    <h5>{rent.location}</h5>
                </div>

                <div className="host">
                    <p>{rent.host.name}</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={rent.host.picture} alt={`Photo de profil de ${rent.host.name}`} />
                </div>

                <div className="tags">
                    {rent.tags.map((tag) => (
                        <div className="tag" key={tag}>
                            {tag}
                        </div>
                    ))}
                </div>

                <div className="rate">
                    {getRating()}
                </div>
            </section>


            <div className="additional-information">
                <Dropdown
                    title="Description"
                    content={rent.description}
                />

                <Dropdown
                    title="Équipements"
                    content={(
                        rent.equipments.map((equipment) => (
                            <Fragment key={equipment}>
                                {equipment}
                                <br/>
                            </Fragment>
                        ))
                    )}
                />
            </div>
        </>
    )
}