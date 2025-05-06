import React from "react";
import Card from "./Card";




function MainContent(){
    return (
        <div>
            <div class="container">
                <div class="content-wrapper">
                    <div class="text-content">
                        <h1 class="topic-title"><span className="topic-title-span">Schedule </span>Smarter, Stay Connected, and Never Miss a moment</h1>
                        <p class="content-paragraph">
                            Plan events, see friends' availability, and coordinate effortlessly--all in one place. Scheduling made simple,
                            so you can focus on what matters most
                        </p>
                        <button class="content-button">Get SyncUp<span className="content-btn-span"> It's free</span></button>
                    </div>
                    <Card />
                </div>
            </div>
        </div>
    )
}

export default MainContent;


