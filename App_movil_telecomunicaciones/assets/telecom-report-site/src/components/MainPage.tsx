import React from 'react';
import './styles/main.css';
import logo from '../public/images/logo.svg';

const MainPage: React.FC = () => {
    return (
        <div className="main-page">
            <header className="header">
                <img src={logo} alt="Telecom Report Logo" className="logo" />
                <h1>Telecommunications Report Site</h1>
            </header>
            <main className="content">
                <section className="reports">
                    <h2>Latest Reports</h2>
                    {/* Placeholder for report items */}
                    <div className="report-item">Report 1</div>
                    <div className="report-item">Report 2</div>
                    <div className="report-item">Report 3</div>
                </section>
                <section className="statistics">
                    <h2>Statistics Overview</h2>
                    {/* Placeholder for statistics items */}
                    <div className="statistic-item">Statistic 1</div>
                    <div className="statistic-item">Statistic 2</div>
                    <div className="statistic-item">Statistic 3</div>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Telecommunications Report Site. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;