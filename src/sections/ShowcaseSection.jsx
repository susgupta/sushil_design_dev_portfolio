import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {

    //prepare the refs
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    

    useGSAP(() => {

        //animate section first
        gsap.fromTo(sectionRef.current, 
        {
            opacity: 0
        },
        {
            opacity: 1,
            duration: 1.5
        });

        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        //now the cards
        projects.forEach((card, index) => {
            gsap.fromTo(card, 
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: card,
                    start: 'top bottom-=100',
                }
            });
        });

    }, []);

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>

                <div className='showcaselayout'>
                    {/* LEFT */}
                    <div className='first-project-wrapper' ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='images/project1.png' alt='Sushil Gaming'/>
                            <video 
                                src='images/gaming_awwards_export.mp4'
                                muted={true}
                                autoPlay={true}
                                loop={true}
                            />
                        </div>
                        <div className='text-content'>
                            <h2>
                                An interactive style product page site for a gaming company theme.
                            </h2>
                            <p className='text-white-50 md:text-xl'>
                                Built with React, GSAP, Tailwind CSS, this is a fully responsive site, with video and scroll animations that are used to create an immersive, engaging experience.
                            </p>
                        </div>
                    </div>


                    {/* RIGHT */}
                    <div className='project-list-wrapper overflow-hidden'>

                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src="images/project2.png" alt="3D Car Show Demo" />
                            </div>
                            <h2>
                                3D Car Show Demo
                            </h2>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src="images/project3.png" alt="Vacation Theme Site" />
                            </div>
                            <h2>
                                Responsive Vacation Theme Site
                            </h2>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShowcaseSection