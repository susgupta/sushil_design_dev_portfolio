import { socialImgs } from '../constants'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='flex flex-col justify-center'>
                    <a href="https://susgupta.github.io/sushil_designer_portfolio/index.html" target='_blank'>Visit My Profile</a>
                </div>
                <div className='socials'>
                    {socialImgs.map((socialImage) => (
                        <a className='icon' target='_blank' href={socialImage.url} key={socialImage.url}>
                            <img src={socialImage.imgPath} />
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Sushil Gupta. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer