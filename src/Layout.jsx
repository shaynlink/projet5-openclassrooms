import Logo from './components/Logo/Logo'
import { NAVIGATION } from './router';
import { useLocation, Link } from 'react-router-dom';

import './Layout.scss'

export default function Layout({ children }) {
    const location = useLocation();

    return (
        <>
            <div className="container">
                <header>
                    <div className="branding">
                        <Link to="/" aria-label="Page d'accueil"><Logo fill="#FF6060" /></Link>
                    </div>
                    <nav>
                        <ul>
                            {NAVIGATION.map(([path, label]) => (
                                <li
                                    key={path}
                                    className={location.pathname === path ? 'active' : ''}
                                    aria-label={`Page ${label}`}
                                >
                                    <Link to={path}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>

                <main>
                    {children}
                </main>
            </div>

            <footer>
                <div className="branding">
                    <Link to="/" aria-label="Page d'accueil"><Logo fill="#FFFFFF" /></Link>
                </div>
                <p>&copy; 2020 Kasa. All rights reserved.</p>
            </footer>
        </>
    )
}