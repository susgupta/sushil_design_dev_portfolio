import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const TechStack = () => {

    useGSAP(() => {

        //animate tech icons
        gsap.fromTo('.tech-card', 
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
            stagger: 0.2,
            scrollTrigger: {
                trigger: "#skills",
                start: "top center",
            },
        });
    })

    return (
        <div id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>

                <TitleHeader 
                    title="My Preferred Tech Stack"
                    subTitle="🛠️ The Skills I Bring"
                />

                <div className='tech-grid'>

                    {/** At this point I can't enough good models - so will use iamges */}

                    {techStackImgs.map((icon) => (
                        <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                            <div className='tech-card-animated-bg' />
                            <div className='tech-card-content'>
                                <div className="icon-wrapper">
                                    <img src={icon.imgPath} alt="icon"  />
                                </div>
                                <div className='padding-x w-full'>
                                    <p>
                                        {icon.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default TechStack