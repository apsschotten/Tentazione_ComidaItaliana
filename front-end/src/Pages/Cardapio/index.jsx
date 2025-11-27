import React from 'react';

export default function Cardapio() {
    return (
        <div>
            <h1>Cardápio</h1>
            <div className='menuContainer'>
                <div className='card'>
                    <img src='https://static.tagme.com.br/pubimg/thumbs/MenuItem/1c07fc60-69d5-11ee-a2fe-31a83e2f0f71.jpg?ims=filters:quality(70):format(webp)' />
                    <h2>Couvert</h2>
                    <h3>R$ 25,00</h3>
                    <p>Pão italiano artesanal de fabricação própria com fermentação natural, acompanhada de manteiga de ervas e sofritto de abobrinha.</p>
                </div>
                <div className='card'>
                    <img src='https://static.tagme.com.br/pubimg/thumbs/MenuItem/d0a4ba60-644d-11ee-8123-0fcc262027e0.jpg?ims=filters:quality(70):format(webp)' />
                    <h2>Burrata Cremosa</h2>
                    <h3>R$ 89,00</h3>
                    <p>Burrata de fabricação exclusiva, recheada com pequenas muçarelas cremosas, focaccina de alho dourada, tomate fresco marinado com azeite extra virgem, manjericão, aceto balsâmico e pesto de pistache.</p>
                </div>
                <div className='card'>
                    <img src='https://static.tagme.com.br/pubimg/thumbs/MenuItem/dd465680-406e-11f0-b7e2-cb494a4f69a2.jpg?ims=filters:quality(70):format(webp)' />
                    <h2>Tiramisù</h2>
                    <h3>R$ 50,00</h3>
                    <p>Biscoito de champagne artesanal, molhado no exclusivo blend de café Bourbon, creme de queijo mascarpone e zabaione com vinho Marsala.</p>
                </div>
            </div>
        </div>
    );
}
