import '.styledesc.css'
import HowIMet from '../../assets/how i met your mother.jpeg'

function Description() {

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

                <header className='container-pesquisar'>
                    <i class="ri-search-line"></i>
                    <input name='Pesquisar' type='text' placeholder='Pesquisar' value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}></input>
                </header>

                <div className='container-filmes'>

                    <div className='filmes'>
                        <img src={HowIMet} />
                        <h3>How i met your mother</h3>
                        <h4>2014</h4>
                    </div>
                </div>
            </section >
        </div >
    )
}

export default Description
