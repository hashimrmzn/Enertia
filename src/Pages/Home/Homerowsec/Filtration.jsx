import images from '../../../utils/images';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Filtration() {
    useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return (
        <section className='home-row-secs' data-aos="fade-right">
            <div className='home-row-sec-content flex-row just-space-between align-cent'>
                <div className='large-col'>
                    <img src={images['filter.png']} alt="Sparkling Water" />
                </div>
                <div className='small-col'>
                    <h2>Advanced Filtration</h2>
                    <p>Our 8-stage filtration, enhanced with UV purification, removes impurities while preserving essential minerals, delivering clean, balanced water with every pour.</p>
                </div>
            </div>
        </section>
    )
}
export default Filtration