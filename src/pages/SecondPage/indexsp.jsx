import React from 'react';
import { Link } from 'react-router-dom';
import HowIMet from '../../assets/how i met your mother.png'
import './stylesp.css'

const SecondPage = () => {

    return (
        <div className='body'>

            <aside className='container-menu'>
                <div className='icones'>
                    <button className='icone-user'>
                        <i class="ri-user-line"></i>
                    </button>

                    <button className='icone-pesquisar'>
                        <i class="ri-search-line"></i>
                    </button>

                    <button className='icone-home'>
                        <i class="ri-home-4-line"></i>
                    </button>

                    <button className='icone-assistir'>
                        <i class="ri-slideshow-3-line"></i>
                    </button>

                    <button className='icone-variaveis'>
                        <i class="ri-apps-line"></i>
                    </button>

                    <button className='icone-config'>
                        <i class="ri-settings-3-line"></i>
                    </button>
                </div>
            </aside>

            <section>
                <div className='container-return'>
                    <Link to="/">
                        <button className='return'>
                            <i class="ri-arrow-left-line"></i>
                        </button>
                    </Link>
                </div>


                <div className='banner'>
                    <img src={HowIMet} className='img-secondPage' />
                </div>

                <div className='information'>
                    <h1>How i met your mother</h1>
                    <h3>2014</h3>
                    <h4>Ted se apaixonou. Tudo começou quando seu melhor amigo, Marshall, soltou a bomba de que planejava pedir em casamento a namorada de longa data, Lily, uma professora de jardim de infância.
                        Ted percebeu que era melhor se mexer se esperava encontrar o verdadeiro amor. Para ajudá-lo na missão está Barney, um amigo com opiniões sem fim
                        -- e às vezes absurdas --, uma queda por ternos e uma fórmula infalível para conhecer garotas. Quando Ted conhece Robin, tem certeza que é amor à primeira vista, mas o relacionamento esfria e se transforma em uma amizade.</h4>

                    <h4 className='autor'>Diretor: Carter Bays e Craig Thomas</h4>

                </div>

            </section>
        </div>
    );
};

export default SecondPage;
