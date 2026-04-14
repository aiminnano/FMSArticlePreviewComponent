import drawers from '../../images/drawers.jpg'
import avatar from '../../images/avatar-michelle.jpg'
import share from '../../images/icon-share.svg'
import facebook from '../../images/icon-facebook.svg'
import pinterest from '../../images/icon-pinterest.svg'
import twitter from '../../images/icon-twitter.svg'
import { useState } from 'react'

function Article(){

    const [isOpen, setIsOpen] = useState(false);

    return (
    <>
        <main>
            <div className='container'>
                <div className="image"><img src={drawers} alt="drawers-image" /></div>
                <div className='content active'>
                    <div className='top-content'>
                        <div className='title'>Shift the overall look and feel by adding these wonderful 
                            touches to furniture in your home</div>
                        <p>Ever been in a room and felt like something was missing? Perhaps 
                            it felt slightly bare and uninviting. I’ve got some simple tips 
                            to help you make any room feel complete.</p>
                    </div>        
                    <div className={isOpen ? 'bottom-content hide': 'bottom-content'}>
                        <div className='author-container'>
                            <div className='author-avatar'><img src={avatar} alt="avatar-michelle" /></div>
                            <div className='author-name'>
                                <div className='name'>Michelle Appleton</div>
                                <div className='date'>28 Jun 2020</div>
                            </div>
                        </div>
                        <div className='share-container'> 
                            {isOpen &&(
                            <div className='share-contents'>
                                <div className='share-text'>SHARE</div>
                                <img src={facebook} alt="facebook-icon" />
                                <img src={twitter} alt="twitter-icon" />
                                <img src={pinterest} alt="pinterest-icon" />
                            </div>
                            )}


                            <div className={isOpen ? 'share-btn active': 'share-btn'} onClick={() => setIsOpen(!isOpen)}><img src={share} alt="share-icon" /></div>
                        </div>
                    </div>
                    <div className={isOpen ? 'share-bottom-content-mobile active' : 'share-bottom-content-mobile'}>
                        <div className='share-contents-mobile'>
                            <div className='platforms-mobile'>
                                <div className='share-text'>SHARE</div>
                                <img src={facebook} alt="facebook-icon" />
                                <img src={twitter} alt="twitter-icon" />
                                <img src={pinterest} alt="pinterest-icon" />
                            </div>    
                            <div className={isOpen ? 'share-btn active': 'share-btn'} onClick={() => setIsOpen(!isOpen)}><img src={share} alt="share-icon" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    )
}

export default Article;