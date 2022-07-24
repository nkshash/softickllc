import React from 'react';

const WrapperSection = ({children,...props}) => (
    <section id="main" className="wrapper" {...props}>
        <div className="container">
            {children}
        </div> 
    </section>
);

export default WrapperSection;