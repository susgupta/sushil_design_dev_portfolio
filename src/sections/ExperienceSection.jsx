import TitleHeader from "../components/TitleHeader"
import { expCards } from "../constants"
import GlowCard from "../components/GlowCard"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

const ExperienceSection = () => {
    
    useGSAP(() => {

        //use utils to get card needed
        gsap.utils.toArray('.timeline-card').forEach((card) => {
            
            //animate in left side card
            gsap.from(card, {
                xPercent: -100,
                opacity: 0,
                transformOrigin: 'left left',
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top 80%'
                }
            });
        });

        //now draw animate the time line
        gsap.to('.timeline', {
            transformOrigin: 'bottom bottom',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.timeline',
                start: 'top center',
                end: '70% center',
                onUpdate: (self) => {
                    //scale the time line height
                    gsap.to('.timeline', {
                        scaleY: 1 - self.progress
                    })
                }
            }
        });

         //use utils to get card needed
        gsap.utils.toArray('.expText').forEach((text) => {
            
            //animate in left side card
            gsap.from(text, {
                xPercent: 0,
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                scrollTrigger: {
                    trigger: text,
                    start: 'top 60%'
                }
            });
        });
        
    }, []);
    
    return (
        <section id='experience' className='w-full md:mt-40 mt-20 section-padding xl:px-0'>
            <div className="w-full h-full md:px-20 px-5">
                
                <TitleHeader title="Work Experience" subTitle="💼 My Career Overview" />

                <div className="mt-32 relative">
                    <div className="relative z-50 xl:space-y-32 space-y-10">
                        {expCards.map((card, index) => (
                            <div key={card.title} className="exp-card-wrapper">
                                <div className="xl:w-2/6">

                                    <GlowCard card={card} index={index}>
                                        <div className="flex items-center gap-1 mt-2">
                                            <img src={card.imgPath} alt={card.title} />
                                            <p className='text-white-50 text-lg'>
                                                {card.company}
                                            </p>
                                        </div>
                                    </GlowCard>

                                </div>

                                <div className="xl:w-4/6">
                                    <div className="flex items-start">

                                        <div className="timeline-wrapper">
                                            <div className="timeline" />
                                            <div className="gradient-line w-1 h-full" />
                                        </div>

                                        <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                                            <div className="timeline-logo">
                                                <img src={card.logoPath} alt="logo" />
                                            </div>
                                            <div>
                                                <h1 className="font-semibold text-3xl">
                                                    {card.title}
                                                </h1>
                                                <p className="my-5 text-white-50">
                                                    🗓️ {card.date}
                                                </p>
                                                <p className="text-[#839cb5] italic">
                                                    Responsibilities
                                                </p>
                                                <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white-50">
                                                    {card.responsibilities.map((responsibility) => (
                                                        <li key={responsibility} className="text-lg">
                                                            {responsibility}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ExperienceSection