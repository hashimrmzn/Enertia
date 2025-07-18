import images from '../../utils/images';

function CarbonFootprint() {
    return (
        <>
            <section className='carbon-footprint-sec'>
                <p>Opulent Energy Efficiency</p>
                <h2>Reduces carbon footprint with refined energy use</h2>
                <div className='multi-footprint'>
                    <div className='single-footprint'>
                        <img src={images['carbon-1.png']} alt="Crabon Footprint" />
                        <h3>Filter & Bottle Replacement Alerts</h3>
                        <p>Never worry about missing a change. Stay ahead with intelligent reminders.</p>
                    </div>
                    <div className='single-footprint'>
                        <img src={images['carbon-2.png']} alt="Crabon Footprint" />
                        <h3>Smart Alerts – Stay Ahead</h3>
                        <p>Never run out of clean water. Our intelligent alert system notifies you when it’s time to replace your filter or bottle*, so you’re always prepared.</p>
                    </div>
                    <div className='single-footprint'>
                        <img src={images['carbon-3.png']} alt="Crabon Footprint" />
                        <h3>Minimalist, Modern Design</h3>
                        <p>A sleek addition to any contemporary home. No more cluttered appliances. One product to rule them all.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CarbonFootprint