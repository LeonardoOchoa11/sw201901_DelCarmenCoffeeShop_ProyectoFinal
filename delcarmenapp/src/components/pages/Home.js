import React from 'react';

function About() {
    return(
        <React.Fragment> 
            <h1 style={hStyle}>BIENVENIDO A DEL CARMEN COFFEE APP</h1>
            <p style={pStyle}>Del Carmen Coffee App te permite explorar nuestros productos, 
            hacer reservaciones, registrarte y disfrutar del mejor café del pais. Explorá nuestra aplicación 
            y disfrutá de la experiencia que tenemos para brindarte, y llevate a tu casa el mejor café del mundo.
            </p>
        </React.Fragment>
    )
}

const hStyle = {
    color: '#fff',
    textAlign: 'center',
    paddingTop: '20px',
    fontWeight: 'bold',
    fontSize: '27px'
}

const pStyle = {
    color: '#fff',
    fontSize: '17px',
    paddingTop: '20px',
    paddingLeft: '30px',
    paddingRight: '30px',
    textAlign: 'justify',
    fontFamily :'Karla, sans-serif'
}


export default About;