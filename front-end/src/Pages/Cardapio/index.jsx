import React from 'react';

export default function Cardapio() {
    return (
        <div>
            <h1 className='pageTitle'>Cardápio</h1>
            <div className='cardContainer'>
                <div className='card'>
                    <img src='https://static.tagme.com.br/pubimg/thumbs/MenuItem/1c07fc60-69d5-11ee-a2fe-31a83e2f0f71.jpg?ims=filters:quality(70):format(webp)' className='cardImage' />
                    <div className='cardText'>
                        <h2 className='cardTitle'>Couvert</h2>
                        <h3 className='cardPrice'>R$ 25,00</h3>
                        <p className='cardDescription'>Pão italiano artesanal de fabricação própria com fermentação natural, acompanhada de manteiga de ervas e sofritto de abobrinha.</p>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://static.tagme.com.br/pubimg/thumbs/MenuItem/d0a4ba60-644d-11ee-8123-0fcc262027e0.jpg?ims=filters:quality(70):format(webp)' className='cardImage' />
                    <div className='cardText'>
                        <h2 className='cardTitle'>Burrata Cremosa</h2>
                        <h3 className='cardPrice'>R$ 89,00</h3>
                        <p className='cardDescription'>Burrata de fabricação exclusiva, recheada com pequenas muçarelas cremosas, focaccina de alho dourada, tomate fresco marinado com azeite extra virgem, manjericão, aceto balsâmico e pesto de pistache.</p>
                    </div>
                </div>
                <div className='card'>
                    <img src='https://static.tagme.com.br/pubimg/thumbs/MenuItem/dd465680-406e-11f0-b7e2-cb494a4f69a2.jpg?ims=filters:quality(70):format(webp)' className='cardImage' />
                    <div className='cardText'>
                        <h2 className='cardTitle'>Tiramisù</h2>
                        <h3 className='cardPrice'>R$ 50,00</h3>
                        <p className='cardDescription'>Biscoito de champagne artesanal, molhado no exclusivo blend de café Bourbon, creme de queijo mascarpone e zabaione com vinho Marsala.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
