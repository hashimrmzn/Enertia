import images from '../../utils/images';

function Homebgsection() {
    return (
        <section className='bg-sec-home flex-row just-center align-cent'
            style={{
                backgroundImage: `url(${images['bg-sec.png']})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
            <h2>blends effortlessly into your home with a premium, modern aesthetic.</h2>
        </section>
    )
}

export default Homebgsection;