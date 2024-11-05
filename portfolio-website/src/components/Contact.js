import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_lpkujq7', // Replace with your actual Service ID
            'template_y4qlmvd', // Replace with your actual Template ID
            form.current,
            '6Fdb72mtlD6rTSzVg' // Replace with your actual User ID
        )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
            }, (error) => {
                console.log(error.text);
                alert("An error occurred, please try again.");
            });

        e.target.reset(); // Reset form fields after submission
    };
    return (
        <section className='pt-36 pb-32 bg-slate-400' id='contact'>
            <div className="container">
                <div className="w-full px-4">
                    <div className="max-w-xl mx-auto text-center mb-16">
                        <h4 className="font-semibold text-lg text-primary mb-2">Contact Me</h4>
                        <h2 className="font-bold text-white text-3xl mb-4">Connect Now !</h2>
                        <p className="font-medium text-md text-slate-200">
                        "I'd love to hear from you! Whether you have a question, a project in mind, or just want to connect, feel free to reach out!"
                        </p>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="w-full lg:w-2/3 lg:mx-auto">
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="name" className="text-base font-bold text-accent">Name</label>
                            <input type="text" name="user_name" id="name" className="w-full bg-slate-300 text-dark p-3 rounded-md focus:ring-accent focus:ring-1 focus:border-accent" required />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="email" className="text-base font-bold text-accent">Email</label>
                            <input type="email" name="user_email" id="email" className="w-full bg-slate-300 text-dark p-3 rounded-md focus:ring-accent focus:ring-1 focus:border-accent" required />
                        </div>
                        <div className="w-full px-4 mb-8">
                            <label htmlFor="message" className="text-base font-bold text-accent">Message</label>
                            <textarea name="message" id="message" className="w-full bg-slate-300 text-dark p-3 rounded-md focus:ring-accent focus:ring-1 focus:border-accent h-32" required></textarea>
                        </div>
                        <div className="w-full px-4">
                            <button type="submit" className="text-base font-semibold text-white bg-accent py-3 px-8 rounded-full w-full hover:shadow-lg transition duration-500">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>);
};

export default Contact;
