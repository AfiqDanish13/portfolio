import luffy from "../assets/snapshot1.jpg"
import React, { useState, useEffect } from 'react';


const Project = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3; // Update this if you add more slides

    // Function to move to the next slide
    const moveToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Function to move to the previous slide
    const moveToPrevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
        );
    };

    // Auto-slide effect
    useEffect(() => {
        const autoSlideInterval = setInterval(moveToNextSlide, 10000); // 3 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(autoSlideInterval);
    }, []);

    return (
        <section className='pt-36 pb-32 bg-slate-300' id='project'>
            <div className="container">
                <div className="w-full px-4">
                    {/* slideshow featured project */}
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Featured Portfolio</h4>
                        <h2 className="font-bold text-secondary text-3xl mb-3">Recent Project</h2>
                    </div>
                </div>


                {/* <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/13 xl:mx-auto">
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={luffy} alt="gambar luffy" width="w-full"></img>
                        </div>
                        <h3 className="font-semibold text-xl  text-dark mt-2 mb-3">Landing Page Danish</h3>
                        <p className="font-medium  text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies augue vel risus luctus, id tempus odio dignissim. Donec et diam tellus. Sed sodales tempus ligula, sit amet viverra tellus posuere sit amet. Nam tristique enim non lacus porttitor, vitae laoreet augue consectetur. Nulla facilisi
                        </p>
                    </div>
                    <div className="mb-12 p-4 md:w-1/2">
                        <div className="rounded-md shadow-md overflow-hidden">
                            <img src={luffy} alt="snapshot1" width="w-full"></img>
                        </div>
                        <h3 className="font-semibold text-xl  text-dark mt-2 mb-3">Landing Page Danish</h3>
                        <p className="font-medium  text-base text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies augue vel risus luctus, id tempus odio dignissim. Donec et diam tellus. Sed sodales tempus ligula, sit amet viverra tellus posuere sit amet. Nam tristique enim non lacus porttitor, vitae laoreet augue consectetur. Nulla facilisi
                        </p>
                    </div>
                </div> */}

                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/13 xl:mx-auto ">
                    <div className="relative w-full max-w-[900px] overflow-hidden rounded-lg border border-black">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {/* Slide 1 */}
                            <div className="w-full flex-shrink-0">
                                {/* picture */}
                                <div className="w-full">
                                    <img
                                        src={luffy}
                                        className="w-full"
                                        alt="Slide 1"
                                    />
                                </div>
                                {/* case study and button*/}
                                <div className="w-full mt-4 justify-center">
                                    <h2 className="text-xl text-center font-semibold mb-2">Cinema Booking Website</h2>
                                    <p className="text-lg text-center text-gray-700 px-3"> A responsive website developed with PHP, MySQL, HTML, CSS, and JavaScript. It manages multiple functions, such as movie listings, user bookings, and sales reporting. The system includes user management and receipt generation for a complete cinema booking experience.</p>

                                    <div className="w-full flex justify-center  flex-wrap">
                                        <div className="px-4">
                                            <p><span className="font-bold text-slate-800">Built with:</span>   HTML, CSS, PHP, MySQL</p>
                                            
                                        </div>
                                        <div className="border-t-2 py-2 md:border-l md:border-t-0 border-slate-400 flex px-3">
                                            <p className="px-2 font-bold text-slate-800">View: </p>
                                            {/* Github */}
                                            <a href="https://github.com/AfiqDanish13" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                            {/* live view */}
                                            <a href="https://afiqdanish13.github.io/cinema/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" /></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="w-full flex-shrink-0">
                                {/* picture */}
                                <div className="w-full">
                                    <img
                                        src={luffy}
                                        className="w-full"
                                        alt="Slide 1"
                                    />
                                </div>
                                {/* case study and button*/}
                                <div className="w-full mt-4 justify-center">
                                    <h2 className="text-xl text-center font-semibold mb-2">Talabia Chess</h2>
                                    <p className="text-lg text-center text-gray-700 px-3"> A Java-based chess game application with a detailed graphical user interface (GUI). It applies object-oriented programming principles, including the Model-View-Controller (MVC) and strategy design patterns, providing a structured and interactive chess-playing experience.</p>

                                    <div className="w-full flex justify-center  flex-wrap">
                                        <div className="px-4">
                                            <p><span className="font-bold text-slate-800">Built with:</span>   JAVA, OO, GUI</p>
                                            
                                        </div>
                                        <div className="border-t-2 py-2 lg:border-l lg:border-t-0 border-slate-400 flex px-3">
                                            <p className="px-2 font-bold text-slate-800">View: </p>
                                            {/* Github */}
                                            <a href="https://github.com/AfiqDanish13" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                            {/* live view */}
                                            <a href="https://afiqdanish13.github.io/cinema/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" /></svg></a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* Slide 3 */}
                            <div className="w-full flex-shrink-0">
                                {/* picture */}
                                <div className="w-full">
                                    <img
                                        src={luffy}
                                        className="w-full"
                                        alt="Slide 1"
                                    />
                                </div>
                                {/* case study and button*/}
                                <div className="w-full mt-4 justify-center">
                                    <h2 className="text-xl text-center font-semibold mb-2">Scheduling System</h2>
                                    <p className="text-lg text-center text-gray-700 px-3"> A Java application with a user-friendly GUI, implementing Round Robin, Non-Preemptive Shortest Job First (SJF), Preemptive Priority, and Non-Preemptive Priority scheduling algorithms. Designed for process scheduling simulations, it offers insights into CPU scheduling techniques.</p>

                                    <div className="w-full flex justify-center  flex-wrap">
                                        <div className="px-4">
                                            <p><span className="font-bold text-slate-800">Built with:</span>   JAVA, GUI</p>
                                            
                                        </div>
                                        <div className="border-t-2 py-2 lg:border-l lg:border-t-0 border-slate-400 flex px-3">
                                            <p className="px-2 font-bold text-slate-800">View: </p>
                                            {/* Github */}
                                            <a href="https://github.com/AfiqDanish13" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                            {/* live view */}
                                            <a href="https://afiqdanish13.github.io/cinema/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" /></svg></a>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            {/* Slide 4 */}
                            <div className="w-full flex-shrink-0">
                                {/* picture */}
                                <div className="w-full">
                                    <img
                                        src={luffy}
                                        className="w-full"
                                        alt="Slide 1"
                                    />
                                </div>
                                {/* case study and button*/}
                                <div className="w-full mt-4 justify-center">
                                    <h2 className="text-xl text-center font-semibold mb-2">Alien vs. Zombie</h2>
                                    <p className="text-lg text-center text-gray-700 px-3"> A C++ game where players face waves of zombies, equipped with unique power-ups and special abilities to enhance gameplay. The objective is to strategize and eliminate all zombies, making for a dynamic and challenging game experience.</p>

                                    <div className="w-full flex justify-center  flex-wrap">
                                        <div className="px-4">
                                            <p><span className="font-bold text-slate-800">Built with:</span>   C++</p>
                                            
                                        </div>
                                        <div className="border-t-2 py-2 lg:border-l lg:border-t-0 border-slate-400 flex px-3">
                                            <p className="px-2 font-bold text-slate-800">View: </p>
                                            {/* Github */}
                                            <a href="https://github.com/AfiqDanish13" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg></a>
                                            {/* live view */}
                                            <a href="https://afiqdanish13.github.io/cinema/" target="_blank" className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-accent hover:bg-accent hover:text-white" >
                                                <svg role="img" width={20} className="fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z" /></svg></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Navigation Buttons */}
                        <button
                            onClick={moveToPrevSlide}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={moveToNextSlide}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                        >
                            &gt;
                        </button>
                    </div>
                </div>





                {/* show all project */}
                <div className="w-full px-4">
                    <button className="max-w-xl mx-auto text-center mb-16">View All Project</button>
                </div>

            </div>

        </section>
    )
}

export default Project