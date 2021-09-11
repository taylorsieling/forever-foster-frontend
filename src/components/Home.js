import React from 'react'
import Navigation from '../components/Navigation';
import { useAuth0 } from '@auth0/auth0-react'

const Home = () => {
    const { loginWithRedirect} = useAuth0();
    return (

        <section id="home">

            <div className="bg-opal">
                <Navigation />
            </div>

            <div className="header">
                <div className="p-36 justify-left max-w-3xl text-blkgray">
                    <h1 className="text-6xl font-display pb-4">forever foster</h1>
                    <h2 className="text-3xl pb-6">Giving you the tools to keep your foster kittens safe, healthy, and most of all, <strong>loved.</strong></h2>
                    <p><button className="bg-melon text-base px-8 py-3 text-white rounded-lg" onClick={() => loginWithRedirect()}>Get Started</button></p>
                </div>
            </div>

            <div className="bg-rosewater">
                <div className="px-36 py-24 text-2xl justify-left">
                    <h2><i>“A kitten is, in the animal world, what a rosebud is in the garden.”<br/><br/>- Robert Southey</i></h2>
                    <p></p>
                </div>

                <div className="container">
                    <p>We want to see your foster kittens bloom! To do that, we created Forever Foster - an application to help you manage kitten intake information, record growth and medical data, process adoption applications, and much more! Spend less time maintaining records and paperwork, and more time saving tiny lives. Create an account to get started!</p>
                </div>

                <div className="equal-columns">
                    <div className="info-card tana">
                        <i className="fa fa-folder-open fa-2x" aria-hidden="true"></i>
                        <p>Record intake information for your kittens to make them individual care profiles. Associate your kittens with litters for better organization.</p>
                    </div>
                    <div className="info-card swan">
                        <i className="fa fa-balance-scale fa-2x" aria-hidden="true"></i>
                        <p>Keep those kitten plump - and document it while you do! Easily track your kittens' weights and view stats on how they're growing.</p>
                    </div>
                    <div className="info-card manhattan">
                        <i className="fa fa-medkit fa-2x" aria-hidden="true"></i>
                        <p>Document your kittens' medical history with easy-to-fill forms, including vet visits, vaccines, parasite treatment, surgeries and more.</p>
                    </div>
                </div>
            </div>

            <div className="spruce">
                <div className="equal-columns p-20">
                    <div></div>

                    <ul>
                        <li className="amaranth text-melon"><strong>Forever Foster</strong></li>
                        <li><a href="http://localhost:3000">Features</a></li>
                        <li><a href="http://localhost:3000">Take a Tour</a></li>
                        <li><a href="http://localhost:3000">About Us</a></li>
                    </ul>
                    <ul>
                        <li className="amaranth text-olive"><strong>Getting Started</strong></li>
                        <li><a href="http://localhost:3000">Sign Up</a></li>
                        <li><a href="http://localhost:3000">Log In</a></li>
                        <li><a href="http://localhost:3000">Adopt a Kitten</a></li>
                    </ul>
                    <ul>
                        <li className="amaranth text-marigold"><strong>Contact</strong></li>
                        <li><a href="http://localhost:3000">Email</a></li>
                        <li><a href="http://localhost:3000">Twitter</a></li>
                        <li><a href="http://localhost:3000">Github</a></li>
                    </ul>
                </div>
            </div>
            
        </section>
    )
}

export default Home;