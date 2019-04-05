import React from 'react';

function About() {
    return(
        <React.Fragment> 
            <h1 style={hStyle}>ACERCA DE NOSOTROS</h1>
            <p style={pStyle}>Del Carmen Coffee Shop es una experiencia diferente. 
            Buen ambiente, buena comida y el mejor café del pais 
            acompañados del mejor servicio. Vení a conocernos, 
            disfrutá de la experiencia que tenemos para brindarte, y
            llevate a tu casa el mejor café del mundo. 
            Fundada en 1998, desde entonces servimos platillos 
            especiales para vos, con el sabor de nuestra tierra, 
            todo lo hecho en casa y de la mejor calidad lo 
            encontrás aqui. Te ofrecemos comida con el mejor 
            sabor, los mejores ingredientes y lo mejor de todo 
            con el toque casero que todos desean. Todos los 
            productos son elaborados en el momento, de la mano 
            de las personas que saben darle el mejor sabor a tus 
            comidas, te garantizamos frescura, calidad y sabor.
            </p>
        </React.Fragment>
    )
}

const hStyle = {
    color: '#fff',
    textAlign: 'center',
    paddingTop: '20px',
    fontWeight: 'bold',
    fontSize: '30px'
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