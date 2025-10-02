import React, { useState, useEffect } from 'react';
import './Cursus.css'
import githubLogo from './assets/contact/github.png'


function Cursus(){
    return (
        <section id="parcours">
            <div className="Bloc-content">
                <h1>Mon <span id='Colored'>parcours</span></h1>
                <p>J'ai suivi un parcours académique atypique en choisissant un baccalauréat général avec les spécialités NSI, LLCER Anglais et SES.
                    L'informatique et l'anglais ont toujours occupé une place importante dans mon quotidien, que ce soit à travers les jeux vidéo ou l'univers musical anglophone. Ce qui me passionne avant tout, c'est la compréhension et la logique derrière les choses. Ces disciplines se sont donc imposées naturellement comme mes matières de prédilection. Le choix de la SES, quant à lui, relevait davantage d'une stratégie afin d'acquérir une vision plus large du monde professionnel.              J'ai ensuite poursuivi mes études avec une Licence Sciences du Numérique, formation pluridisciplinaire qui m'a permis d'explorer différents domaines et langages de programmation. Ce choix s'est révélé pertinent, car il m'a offert une vue d'ensemble sur les divers métiers du numérique et leurs réalités professionnelles.
                    Aujourd'hui, je poursuis mon parcours en MBA Développeur Full Stack. Au fil de ma licence, j'ai découvert un véritable intérêt pour la création numérique (programmation, développement web, UI/UX). Ce qui me motive particulièrement, c'est la satisfaction de partir d'une idée, de la concrétiser en un programme, un site ou même un jeu, et d'obtenir un résultat fonctionnel et abouti.
                    À terme, j'ambitionne de m'orienter vers un métier dans la création numérique, voire d'évoluer vers un projet entrepreneurial autour d'une application à forte valeur et popularité.</p>
                
                {/* <div className="parcour-history">
                    <div className="gradiation-bar"></div>
                    <div className="box-content-column" id="history-container">
        
                        <div className="box-content-row" id='period-box'>
                            <img src={githubLogo} alt="Test" />
                            <div className="period-content">
                                <h2>Le nom du diplôme</h2>
                                <h3>Le nom de l'école</h3>
                                <h4>La date</h4>
                                <h4>Le lieu</h4>
                                <p>Description de la période</p>
                                <div className="box-content-row" id="skills-list">
                                    <li>VirtualBox</li>
                                    <li>Linux (Ubuntu)</li>
                                    <li>Windows</li>
                                    <li>Cmd</li>
                                    <li>PowerShell</li>
                                    <li>SSH</li>
                                    <li>PuTTY</li>
                                </div>
                            </div>
                        </div>

                    </div>
                </div> */}

            </div>
        </section>
    )
}

export default Cursus;