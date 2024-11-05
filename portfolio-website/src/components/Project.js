import luffy from "../assets/snapshot1.jpg"

const Project = () => {
    return (
        <section className='pt-36 pb-32 bg-slate-300' id='project'>
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Featured Portfolio</h4>
                        <h2 className="font-bold text-secondary text-3xl mb-4">New Project</h2>
                        <p className="font-medium text-md text-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies augue vel risus luctus, id tempus odio dignissim. Donec et diam tellus. Sed sodales tempus ligula, sit amet viverra tellus posuere sit amet. Nam tristique enim non lacus porttitor, vitae laoreet augue consectetur. Nulla facilisi
                        </p>
                    </div>
                </div>
                <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/13 xl:mx-auto">
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

                </div>

            </div>
            
        </section>
    )
}

export default Project