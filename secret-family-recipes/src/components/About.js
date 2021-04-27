import React from "react";


const About = (prop)=>{

    return(
        <section>
            <header>
                <h2>
                    Anyone can go out and buy a cookbook these days, 
                    <br></br>
                    but you want a place to store all your 
                    <br></br>
                    secret family recipes,
                    <br></br>
                    handed down from generation to generation.
                </h2>
            </header>
            <p>The little cards grandma wrote her recipes on in her beautiful cursive are getting lost or are hard to read. You need somewhere secure to keep my recipes with me forever!</p>
            
            <ul>
                <li>
                    <a href="#" className="button">Learn More</a>
                </li>
            </ul>
        </section>
    );
}

export default About;