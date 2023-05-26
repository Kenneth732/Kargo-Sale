import React from 'react';
import Machine from '../assets/zax-removebg-preview.png'
function Home() {
    return (
        <div className='Container'>
            <div className="Header">
                <div className="Header-Content">
                    <div className="Contents">
                        {/* <h1>Quantum Embroidery <br /> Evolution</h1> */}
                        <h1>Quantum Embroidery <br /> Evolution</h1>
                        <h4>Quantum Embroidery Eii an heheen </h4>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et pulvinar nibh, eu posuere dui. Sed feugiat quam lectus, a tincidunt neque consectetur non. Sed euismod pulvinar lacus. Nunc sapien neque, hendrerit non mauris sed, dictum condimentum dolor. Aenean gravida vestibulum faucibus. Praesent condimentum consequat mollis. 
                        </p>
                    </div>
                    <div className="Contents">
                        <img src={Machine} className='Img-Logo' />
                    </div>
                </div>
            </div>
            <div className='Container-Content'>
                <div className='Card'></div>
            </div>
        </div>
    )

}
export default Home