import images from '../../../utils/images';
function Purity() {
    return (
        <section className='home-row-secs'>
            <div className='home-row-sec-content flex-row just-space-between align-cent'>
                <div className='large-col'>
                    <img src={images['purity.png']} alt="Sparkling Water" />
                </div>
                <div className='small-col'>
                    <h2>Engineered for Purity</h2>
                    <p>Crafted from high-grade stainless steel, both the tank and dispensing outlets are durable, corrosion-resistant, and naturally prevent bacterial growth, ensuring pure, safe and indulgently refreshing water.</p>
                </div>
            </div>
        </section>
    )
}
export default Purity