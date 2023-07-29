import { Fragment } from 'react';
import { useMatches, redirect } from 'react-router-dom';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Caroussel from '../../components/Caroussel/Caroussel';
import Star from '../../components/Star/Star';
import Dropdown from '../../components/Dropdown/Dropdown';

import './Rent.scss';

export default function Rent() {
    const matches = useMatches();
    const match = matches[0];
    const id = match.params.id;
    const { data: rent, error } = useSWR(`http://localhost:3030/rents/${id}`, fetcher);
    
    if (error) {
        return redirect('/not-found');
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

            <div className="primary-information">
                <div className="quick-information">
                    <h1>{rent.title}</h1>
                    <h5>{rent.location}</h5>
                </div>

                <div className="host">
                    <p>{rent.host.name}</p>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img src={rent.host.picture} alt={`Photo de profil de ${rent.host.name}`} />
                </div>
            </div>

            <div className="secondary-information">
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
            </div>

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