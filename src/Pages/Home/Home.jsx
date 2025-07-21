import MainLayout from '../../layouts/MainLayout';
import Aesthetic from './Aesthetic';
import CarbonFootprint from './CarbonFootprint';
import DispanserProduct from './DispanserProduct';
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
            </MainLayout>

        </>
    )
}

export default Home;