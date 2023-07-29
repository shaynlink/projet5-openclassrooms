import { Link } from 'react-router-dom';

import './NotFound.scss'

export default function NotFound() {
  return (
    <div className="not-found-layout">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas</h2>
        <Link to="/">Retournez sur la page d'accueil</Link>
    </div>
  );
}