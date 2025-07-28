import images from '../../../utils/images';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Instant() {
     useEffect(() => {
         AOS.init({ duration: 1000, once: true });
       }, []);
    return (
        <section className='home-row-secs noscroll' data-aos="fade-left">
            <div className='home-row-sec-content flex-row just-space-between align-cent'>
                <div className='small-col'>
                    <h2>Instant Refreshment </h2>
                    <p>Experience the refined pleasure of instant, chilled sparkling water — with balanced carbonation that captures the purity and elegance of fine water, elevated.</p>
                </div>
                <div className='large-col'>
                    <img src={images['refresh.png']} alt="Sparkling Water" />
                </div>
            </div>
        </section>
    )
}
export default Instant