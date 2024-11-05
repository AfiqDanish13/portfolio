
import { useEffect } from 'react';

const NavigationBar = () => {
    useEffect(() => {
        window.onscroll = function() {
            const header = document.querySelector('header');
            const fixedNav = header.offsetTop;
        
            if (window.pageYOffset > fixedNav) {
              header.classList.add('navbar-fixed');
            } else {
              header.classList.remove('navbar-fixed');
            }
          };


        const hamburger = document.querySelector('#hamburger');
        const navMenu = document.querySelector('#nav-menu');

        // Hamburger click event
        const handleHamburgerClick = () => {
            hamburger.classList.toggle('hamburger-active');
            navMenu.classList.toggle('hidden');
        };

        hamburger.addEventListener('click', handleHamburgerClick);

        return () => {
            hamburger.removeEventListener('click', handleHamburgerClick);
        };
    }, []); 

    return (
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
            <div className="container">
                <div className="flex items-center justify-between relative">
                    <div className="px-4">
                        <a href="#home" className="font-bold text-2xl text-accent block py-6 no-underline">AfiqDanish' Portfolio</a>
                    </div>
                    <div className="flex items-center px-4 ">
                        <button id="hamburger" name="hamburger" type="button" className="block absolute right-4 lg:hidden">
                            <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out"></span>
                            <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
                        </button>

                        <nav id="nav-menu" className="hidden absolute py-2 bg-transparent md:shadow-lg rounded-lg max-w-[250px] w-full 
                        right-4 top-full lg:block lg:static md:bg-white lg:max-w-full lg:shadow-none lg:rounded-none">
                            <ul className='block lg:flex'>
                                <li className='group'>
                                    <a href="#home" className='no-underline text-base text-[#666666] py-2 mx-8 flex group-hover:text-accent'>
                                        Home
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href="#about" className='no-underline text-base text-[#666666] py-2 mx-8 flex group-hover:text-accent'>
                                        About
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href="#project" className='no-underline text-base text-[#666666] py-2 mx-8 flex group-hover:text-accent'>
                                        Project
                                    </a>
                                </li>
                                <li className='group'>
                                    <a href="#contact" className='no-underline text-base text-[#666666] py-2 mx-8 flex  group-hover:text-accent'>
                                        Contact Me
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default NavigationBar;
