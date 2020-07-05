import React, { Component } from "react";

class hr extends Component{
    render(){
        return(
            <div className="container">
                <div className="title-box">
                    <h2>Common Diseases</h2>
                    <p>
                        Here is a list of common Diseases with their home remedies
                    </p>
                </div>
                <div className="diseases">
                    <ol>
                        <li>
                            <h3>Sore Throat</h3>
                            <h4>Home Remedies</h4>
                            <ul className='hr-item'>
                                <li>A mixture of Listerine mouth wash and Hydrogen Peroxide. Pour a little of each liquid into a cup
    (equal parts) and gargle.</li>
                                <li>Eat three to four marshmallows to soothe a sore throat. The gelatin in the marshmallows is what
    soothes the sore throat.</li>
                                <li>Drink hot water, lemon juice, and honey mixed together.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Common Fever</h3>
                            <h4>Home Remedies</h4>
                            <ul className='hr-item'>
                                <li>Drink tea made with apinch of saffron.</li>
                                <li>Eat oranges. Oranges give instant energy and helps the body fight unwanted infections</li>
                                <li>A glass of milk with some turmeric also works wonders.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Fever Blisters</h3>
                            <h4>Home Remedies</h4>
                            <ul className='hr-item'>
                                <li>Apply petroleum jelly to the skin</li>
                                <li>Apply cold compress on the affected area.</li>
                                <li>Avoid eating nuts and chocolate.</li>
                            </ul>  
                        </li>
                        <li>
                            <h3>Cough</h3>
                            <h4>Home Remedies</h4>
                            <ul className='hr-item'>
                                <li>Basil leaves and ginger are very effective in relieving an irritating dry cough. You can either chew
    basil leaves or take fresh ginger with hot water.</li>
                                <li>Drinking a few cups of hot water with salt can also help stop coughing.</li>
                                <li>Take a hot shower or steam. As breathing in the steam can provide temporary relief.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>Common Cold</h3>
                            <h4>Home Remedies</h4>
                            <ul className='hr-item'>
                                <li>Garlic soup helps reduce the harshness of a cold.</li>
                                <li>A glass of lemon juice a day would raise the body’s resistance.</li>
                                <li>Onion juice can also help avoid a cold.</li>
                            </ul>
                        </li>
                        <li>
                            <h3>HeartBurn</h3>
                            <h4>Home Remedies</h4>
                            <ul className='hr-item'>
                                <li>Dissolve a tsp. of baking soda in 8 ounces (1 cup) of water and drink. Baking soda is a natural
                                antacid.</li>
                                <li>Bananas act as a natural antacid in the body. You can eat either fresh or dried bananas.</li>
                                <li>Fresh ginger is one of the oldest remedies for heartburn. It can be added to food when its cooked,
                                eaten raw, or consumed as ginger tea.</li>
                            </ul>
                        </li>
                    </ol>
                </div>
            </div>    
        )
    };
};

export default hr;