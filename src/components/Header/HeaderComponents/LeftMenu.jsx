import { Link } from 'react-router-dom';
import images from '../../../utils/images';
function LeftMenu({ closeHandler }) {

    return (
        <>
            <div className='left-menu-wrapper' onClick={closeHandler}>
                <div className="left-menu-box" onClick={(e) => e.stopPropagation()}>
                    <div className="mini-menu">
                        <h6>PRODUCTS</h6>
                        <ul onClick={closeHandler}>
                            <li><Link to="/water-dispenser">Water dispenser →</Link></li>
                            <li><Link to="/inverter-geyser">Inverter geyser</Link></li>

                        </ul>
                    </div>
                    <div className='left-menu-img'>
                        <img src={images['filter.png']} alt="Sparkling Water" />
                    </div>

                    <div className="mini-menu">
                        <h6>Other Links</h6>
                        <ul onClick={closeHandler}>
                            <li><Link to="/store-locator">Store locator</Link></li>
                            <li><Link to="/about">About Enertia</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className='close-btn no-border'>
                        <button onClick={closeHandler}>×</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LeftMenu