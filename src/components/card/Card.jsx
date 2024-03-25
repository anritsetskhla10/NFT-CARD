import Equilibrium from "/images/image-equilibrium.jpg"
import Ethereum from "/images/icon-ethereum.svg"
import Clock from "/images/icon-clock.svg"
import Avatar from "/images/image-avatar.png"


import "./card.css";

export default function Card(){
    return (
        <div className="container">
                <div className="img-container">
                <img src={Equilibrium} alt="equilibrium" className="equilibrium" />
                <div className="overlay"></div>
                </div>
            
                <h1 className="title">Equilibrium #3429</h1>
                <p className="description">
                    Our Equilibrium collection promotes
                    balanced and calm.
                </p>
                <div className="wrapper">
                    <div className="ethereum">
                        <img  src={Ethereum} alt="ethereum"/>
                        <span >0.041 ETH</span>
                    </div>

                    <div className="clock">
                        <img  src={Clock} alt="clock"/>
                        <span >3 days left</span>
                    </div>
                </div>
                <hr/>

                <div className="avatar">
                <img src={Avatar} alt="avatar"/>
                <p>Creation of  <span>Jules Wyvern</span> </p>
                </div>
        </div>
    );
}