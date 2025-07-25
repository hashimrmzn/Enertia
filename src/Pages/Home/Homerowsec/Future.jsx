import images from '../../../utils/images';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
function Future() {
    useEffect(() => {
             AOS.init({ duration: 1000, once: true });
           }, []);
    return (
        <section className='home-row-secs' data-aos="fade-left">
            <div className='home-row-sec-content flex-row just-space-between align-cent'>
                <div className='small-col'>
                    <h2>Designed for the Future</h2>
                    <p>Engineered with advanced sensors, the dispenser activates automatically, delivering your selected water without the need for any touch.</p>
                </div>
                <div className='large-col'>
                    <img src={images['refresh.png']} alt="Sparkling Water" />
                </div>
            </div>
        </section>
    )
}
export default Future