import MainLayout from '../../layouts/MainLayout';
import Aesthetic from './Aesthetic';
import CarbonFootprint from './CarbonFootprint';
import DispanserProduct from './DispanserProduct';
import Faq from './Faq/Faq';
import Hero from './Hero';
import Homebgsection from './Homebgsection';
import Homerowsec from './Homerowsec';
import HyderationBg from './HyderationBg';

function Home() {
    return (
        <>
            <MainLayout>
                <div className='container'>
                <Hero />
                <Homebgsection />
                <Homerowsec />
                <CarbonFootprint />
                <Aesthetic />
                <DispanserProduct />
                <Faq />
                <HyderationBg />
                </div>
            </MainLayout>

        </>
    )
}

export default Home;