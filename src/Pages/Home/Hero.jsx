import images from '../../utils/images';
function Hero() {
    return (
        <section className="hero-sec">
            <div className='hero-content'>
                <div className='hero-top-img'>
                    <img src={images['heroimage.png']} alt="Cat" />
                    <div className='gradient-overlay'>
                    </div>
                    <div
                        className="hero-text-content"
                        style={{
                            backgroundImage: `url(${images['backgorund-overlay.png']})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >

                        <h1>The world’s first All-in-One Water Dispenser</h1>
                        <div className='bottom-hero-icons flex-row just-center'>
                            <div className='single-icon-box'>
                                <img src={images['hero-icon-1.png']} alt="Sparkling Water" />
                                <p>Sparkling Water</p>
                            </div>
                            <div className='single-icon-box'>
                                <img src={images['hero-icon-2.png']} alt="Sparkling Water" />
                                <p>Bottle less</p>
                            </div>
                            <div className='single-icon-box'>
                                <img src={images['hero-icon-3.png']} alt="Sparkling Water" />
                                <p>Bottle</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Hero;