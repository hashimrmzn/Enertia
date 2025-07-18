import images from '../../../utils/images';
function Future() {
    return (
        <section className='home-row-secs'>
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