import React from 'react';

function About() {
    return(
        <React.Fragment> 
            <h1 style={hStyle}>BIENVENIDO A DEL CARMEN COFFEE APP</h1>
            <p style={pStyle}>Del Carmen Coffee App te permite explorar nuestros productos, 
            hacer reservaciones, registrarte y disfrutar del mejor café del pais. Explorá nuestra aplicación 
            y disfrutá de la experiencia que tenemos para brindarte, y llevate a tu casa el mejor café del mundo.
            </p>
            <p style={pStyle}>Del Carmen Coffee Shop te ofrece los mejores precios. 
            Sabemos que es lo que nuestros clientes quieren, por ello ajustamos nuestros precios 
            de tal forma que son los adecuados para tu bolsillo, nuestros productos nacionales y 
            caseros se ajustan comodamente a tus gustos, nada como desayunar algo delicioso y 
            con un cómodo precio, de igual forma tomar un cafe de la mejor calidad para vos a un precio excelente. 
            Vení y descubrílo vos mismo.
            </p>
            <p style={pStyle2}>Sabemos que todos los hondureños somos apasionados por el café y que apoyamos lo 
            nuestro, por ello te ofrecemos el mejor producto nacional, de calidad y con una gran variedad de 
            sabores para tus gustos.En Del Carmen Coffee Shop creemos que en Honduras tenemos el mejor café del mundo, 
            y queremos convencerte de lo mismo. Nos tomamos el café muy en serio, 
            y nos preocupamos por cada paso del proceso. Desde la finca hasta tu taza. 
            Usamos una combinación de los mejores cafés especiales, seleccionados a mano, 
            y calibramos nuestro equipo a diario. Todo esto para asegurar que disfrutes la mejor taza de café.
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

const pStyle2 = {
    color: '#fff',
    fontSize: '17px',
    paddingTop: '20px',
    paddingLeft: '30px',
    paddingRight: '30px',
    paddingBottom: '60px',
    textAlign: 'justify',
    fontFamily :'Karla, sans-serif'
}


export default About;