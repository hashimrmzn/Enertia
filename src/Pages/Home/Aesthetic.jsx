import React from 'react'
import images from '../../utils/images';
function Aesthetic() {
  return (
    <>
  <section className='bg-sec-home flex-row just-center align-cent'
            style={{
                backgroundImage: `url(${images['aestheticbg.png']})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}>
            <h2>blends effortlessly into your home with a premium, modern aesthetic.</h2>
        </section>
    </>
  )
}

export default Aesthetic