import Image from "next/image";
import logo from "@/assets/logo2.png";

const About = () => {
    return (
        <section className="container mx-auto lg:px-16 px-4 lg:py-28 py-16">
            <div className=" mx-auto text-center flex items-center justify-center">
                <Image
                    src={logo}
                    alt="diginite it logo "
                    className="h-16 w-auto"
                ></Image>
            </div>
            <div className="max-w-4xl mx-auto lg:text-base text-xs text-center">
                <div className=" py-10">
                    <p className=" ">
                        Incepted in 2015, Diginite It. has been serving as a
                        leading IT Solution provider in Bangladesh. Our aim is
                        to help businesses all around the world by providing the
                        digital solutions according to their need. Serving a
                        number of renowned companies from the USA, UK, and many
                        other countries, we have already created a wide range of
                        satisfied clients!
                    </p>
                </div>
            </div>

            <div className="py-16">
                <h3 className="mb-10 text-4xl font-semibold text-center">
                    Why Diginie it
                </h3>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Expertise and Experience
                            </h2>
                            <p className="text-xs">
                                - Showcase the depth of your team&#39;s
                                expertise and the years of experience in the
                                industry.
                            </p>
                            <p className="text-xs">
                                - Highlight any certifications, awards, or
                                recognition your company has received.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start md:text-end mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Customized Solutions
                            </h2>
                            <p className="text-xs">
                                - Emphasize your commitment to providing
                                tailored solutions that meet the unique needs of
                                each client.
                            </p>
                            <p className="text-xs">
                                - Mention any flexibility in your services to
                                adapt to diverse business requirements.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Innovative Approach
                            </h2>
                            <p className="text-xs">
                                - Highlight your company&#39;s commitment to
                                staying at the forefront of industry trends and
                                adopting the latest technologies.
                            </p>
                            <p className="text-xs">
                                - Showcase any innovative solutions or
                                approaches that set your company apart.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start md:text-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Client Success Stories
                            </h2>
                            <p className="text-xs">
                                - Share success stories or testimonials from
                                satisfied clients to build trust.
                            </p>
                            <p className="text-xs">
                                - Share success stories or testimonials from
                                satisfied clients to build trust.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Customer-Centric Focus
                            </h2>
                            <p className="text-xs">
                                - Emphasize your dedication to excellent
                                customer service.
                            </p>
                            <p className="text-xs">
                                - Mention any customer support channels,
                                response times, or personalized assistance you
                                offer.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start md:text-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Collaborative Process
                            </h2>
                            <p className="text-xs">
                                - Describe your collaborative approach to
                                working with clients, involving them in the
                                decision-making process.
                            </p>
                            <p className="text-xs">
                                - Highlight how you value client input and
                                feedback throughout the project lifecycle.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Quality Assurance
                            </h2>
                            <p className="text-xs">
                                - Assure potential clients of the quality of
                                your work through rigorous testing, quality
                                control processes, or adherence to industry
                                standards.
                            </p>
                            <p className="text-xs">
                                - Mention any guarantees or warranties you
                                provide.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start md:text-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Transparent Communication
                            </h2>
                            <p className="text-xs">
                                - Emphasize transparent and open communication
                                practices, keeping clients informed at every
                                stage of the project.
                            </p>
                            <p className="text-xs">
                                - Highlight the availability of project managers
                                or points of contact for clients.
                            </p>
                        </div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-8 w-8"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end  mb-10">
                            <h2 className="text-2xl font-black pb-6">
                                Community Involvement or Sustainability
                                Practices
                            </h2>
                            <p className="text-xs">
                                - If relevant, share any community involvement,
                                social responsibility initiatives, or
                                sustainable business practices that align with
                                your company values.
                            </p>
                            <p className="text-xs">
                                - If applicable, mention any expedited services
                                or options for tight deadlines.
                            </p>
                        </div>
                        <hr />
                    </li>
                </ul>
            </div>

            <div className="text-center">
                <div className="lg:mt-30">
                    <div className="about-item">
                        <h3 className="mb-5 text-4xl font-semibold">
                            Our Mission
                        </h3>
                        <p className="max-w-4xl mx-auto lg:text-base text-xs">
                            Leave a positive footprint by devoting our human
                            resources, technologies and expertise to deliver
                            top-of-the-line digital products, thereby
                            contributing to the success of modern businesses
                            around the globe.
                        </p>
                    </div>
                    <div className="about-item">
                        <h3 className="my-5 text-4xl font-semibold">
                            Our Vision
                        </h3>
                        <p className="max-w-4xl mx-auto lg:text-base text-xs">
                            Deliver one-of-a-kind digital solutions to
                            facilitate global businesses, powered by innovation
                            and guided by integrity.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
