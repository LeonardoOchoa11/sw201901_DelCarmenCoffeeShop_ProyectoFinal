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
            <p style={pStyle}>DelCarmen Café, abrió sus puertas al público en el año de 1998, 
            bajo el concepto de ofrecer comida con toque casero, saludable e higiénica 
            para responder a las necesidades de los clientes que no desean comida chatarra. 
            Desde hace 20 años se dedica a ofrecer variedad de platillos con un toque de sabor inigualable. 
            Asi mismo, ofrece variedad de opciones y bocadillos para picar entre comidas. 
            La atención personalizada ofrece a sus clientes, la opción de pedir al gusto 
            los ingredientes de su preferencia. 
            </p>
            <p style={pStyle}>Actualmente con años de experiencia, 
            nos hemos mantenido en reconocimiento por nuestra constancia y 
            responsabilidad al momento de actuar para el cliente. 
            No solo brindándole un excelente servicio, sino que también la atención deseada 
            por parte de nuestro personal. La gran variedad de platillos hace de la experiencia, 
            una única, dado que el sabor que el cliente espera recibir, es acomodado a sus gustos. 
            Trabajamos para crecer nuestro negocio con la misma honestidad e integridad que usamos 
            para crear nuestros productos, pensando en sustenibilidad y un buen sabor para todos. 
            Como negocio alimenticio, los esfuerzos de la compañía se orientan a estar siempre a la 
            vanguardia de la industria de alimentos. 
            </p>
            <p style={pStyle2}>Tenemos como proposito satisfacer las necesidades gastronómicas 
            de nuestros clientes, ofreciendo alimentos y servicios con la más alta calidad, 
            donde se sobrepasen las expectativas de nuestros clientes y ser un espacio de trabajo 
            que permita la realización personal y el desarrollo de sus colaboradores en el grupo. 
            Tomando como estrategia principal el mejoramiento continúo de los estrictos estándares 
            de higiene y buen servicio en un ambiente seguro, agradable y familiar a un precio justo.
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