import icon from '../assets/icon.png';

const Intro = () => {
    return (
        <section className='pt-36' id='home'>
            <div className='container'>
                <div className='flex flex-wrap text-center'>
                    <div className='w-full min-w-100 px-4 lg:w-1/2 mb-3'>
                        <img src={icon} alt='Afiq Danish' className='max-w-full mx-auto'></img>
                    </div>
                    <div className='w-full self-center px-4 lg:w-1/2 lg:text-left'>
                        <h1 className='text-base font-semibold text-accent md:text-xl'>Hi Everyone, I'm
                            <span className='block font-bold text-dark text-4xl mt-1 lg:text-5xl'>Afiq Danish</span></h1>
                        <h2 className='font-medium text-slate-400 mb-2 text-lg lg:text-2xl'>Final-year Computer Science student specializing in software engineering</h2>
                        <p className='font-medium text-slate-400 mb-10 leading-relaxed'>Shaping Tomorrow with Code and Innovation.</p>
                        <a href='#contact'
                            className='no-underline text-base font-semibold bg-accent py-3 px-8 text-white rounded-full hover:shadow-lg hover:opacity-80 duration-300 ease-in-out'>Let's Connect</a>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Intro