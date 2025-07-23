import MainLayout from '../../layouts/MainLayout';
import Aesthetic from './Aesthetic';
import CarbonFootprint from './CarbonFootprint';
import DispanserProduct from './DispanserProduct';
import Faq from './Faq/Faq';
import Hero from './Hero';
import Homebgsection from './Homebgsection';
import Homerowsec from './Homerowsec';

function Home() {
    return (
        <>
            <MainLayout>
                <Hero />
                <Homebgsection />
                <Homerowsec />
                <CarbonFootprint />
                <Aesthetic />
                <DispanserProduct />
                <Faq />
            </MainLayout>

        </>
    )
}

export default Home;