import React from 'react';
import Machine from '../assets/zax-removebg-preview.png'
function Home() {
    return (
        <div className="Header">
            <div className="Header-Content">
                <div className="Contents">
                    <h1>Quantum Embroidery Evolution</h1>
                    <img src="" />
                </div>
                <div className="Contents">
                    <img src={Machine} className='Img-Logo' />
                </div>
            </div>
        </div>
    )

}
export default Home