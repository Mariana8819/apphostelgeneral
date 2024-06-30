import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
//import { NavBar } from '../../componentes/NavBar/NavBar';
import { SearchBar } from '../../componentes/SearchBar/SearchBar';
import { Card } from '../../componentes/Card/Card';
import { Header } from '../../componentes/Header/Header';
import { Paginated } from '../../componentes/Paginated/Paginated';
import Footer from '../../componentes/Footer/Footer';
import { Filters } from '../../componentes/Filters/Filters';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import './Home.module.css';

export const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({
    roomType: '',
    priceRange: '',
    // serviceType: ''
});

    const totalPages = 5; // Número total de páginas para el paginado
    const handleFilterChange = (name, value) => {
      setFilters({
          ...filters,
          [name]: value
      });
  };

    // Ejemplo de datos de habitaciones (normalmente vendrían de una API)
    const rooms = [
      { title: 'Habitación Deluxe', text: 'Una lujosa habitación con vista al mar y todas las comodidades.', image: 'https://via.placeholder.com/300', type: 'Deluxe', price: 150 },
      { title: 'Suite Presidencial', text: 'La máxima experiencia en lujo y confort.', image: 'https://via.placeholder.com/300', type: 'Presidential Suite', price: 300 },
      { title: 'Habitación Estándar', text: 'Una cómoda y acogedora habitación para una estancia agradable.', image: 'https://via.placeholder.com/300', type: 'Standard', price: 80 },
  ];

  const filteredRooms = rooms.filter(room => {
    const matchesType = filters.roomType === '' || room.type === filters.roomType;
    const matchesPrice = filters.priceRange === '' ||
        (filters.priceRange === 'low' && room.price <= 100) ||
        (filters.priceRange === 'medium' && room.price > 100 && room.price <= 200) ||
        (filters.priceRange === 'high' && room.price > 200);

    return matchesType && matchesPrice;
});

    return (
        <div>
          <Header />
            {/* <NavBar /> */}
            <div className="banner">
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1>Bienvenidos a Nuestro Hotel</h1>
                            <p>Disfruta de una experiencia inolvidable con nuestras instalaciones de lujo y servicios excepcionales.</p>
                            <button className="btn btn-primary">Reserva Ahora</button>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <SearchBar />
                <Filters onFilterChange={handleFilterChange} />
                <div className="featured-rooms my-5">
                    <h2>Habitaciones Disponibles</h2>
                    <Row>
                        {filteredRooms.map((room, index) => (
                            <Card key={index} title={room.title} text={room.text} image={room.image} />
                        ))}
                    </Row>
                {/* <div className="services my-5">
                    <h2>Nuestros Servicios</h2>
                    <Row>
                        <Card title="Spa y Wellness" text="Relájate y rejuvenece en nuestro spa de clase mundial." image="https://via.placeholder.com/300" />
                        <Card title="Restaurantes Gourmet" text="Disfruta de una cocina exquisita en nuestros restaurantes." image="https://via.placeholder.com/300" />
                        <Card title="Actividades Recreativas" text="Participa en una variedad de actividades y eventos." image="https://via.placeholder.com/300" />
                    </Row> */}
                {/* </div>
                <div className="featured-rooms my-5">
                    <h2>Habitaciones Destacadas</h2>
                    <Row>
                        <Card title="Habitación Deluxe" text="Una lujosa habitación con vista al mar y todas las comodidades." image="https://via.placeholder.com/300" />
                        <Card title="Suite Presidencial" text="La máxima experiencia en lujo y confort." image="https://via.placeholder.com/300" />
                        <Card title="Habitación Estándar" text="Una cómoda y acogedora habitación para una estancia agradable." image="https://via.placeholder.com/300" />
                    </Row> */}
                </div>
                <Paginated currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
            </Container>
            <Footer/>
        </div>
    );
};

//************************************************************* */


//sitio N°2 con otrod servicios disponibles ademas de las habitaciones:(recordar agregar el codigo comentado en filters)) 

// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { NavBar } from '../../componentes/NavBar/NavBar';
// import { SearchBar } from '../../componentes/SearchBar/SearchBar';
// import { Card } from '../../componentes/Card/Card';
// import { Header } from '../../componentes/Header/Header';
// import { Paginated } from '../../componentes/Paginated/Paginated';
// import Footer from '../../componentes/Footer/Footer';
// import { Filters } from '../../componentes/Filters/Filters';
// import './Home.module.css';

// export const Home = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filters, setFilters] = useState({
//     roomType: '',
//     priceRange: '',
//      serviceType: ''
// });

// const itemsPerPage = 5;

// const handleFilterChange = (name, value) => {
//     setFilters({
//         ...filters,
//         [name]: value
//     });
// };

// // Ejemplo de datos de habitaciones (normalmente vendrían de una API)
// const rooms = [
//     { title: 'Habitación Deluxe', text: 'Una lujosa habitación con vista al mar y todas las comodidades.', image: 'https://via.placeholder.com/300', type: 'Deluxe', price: 150, category: 'room' },
//     { title: 'Suite Presidencial', text: 'La máxima experiencia en lujo y confort.', image: 'https://via.placeholder.com/300', type: 'Presidential Suite', price: 300, category: 'room' },
//     { title: 'Habitación Estándar', text: 'Una cómoda y acogedora habitación para una estancia agradable.', image: 'https://via.placeholder.com/300', type: 'Standard', price: 80, category: 'room' },
// ];

// // Ejemplo de datos de servicios (normalmente vendrían de una API)
// const services = [
//     { title: 'Spa y Wellness', text: 'Relájate y rejuvenece en nuestro spa de clase mundial.', image: 'https://via.placeholder.com/300', type: 'Spa', category: 'service' },
//     { title: 'Restaurantes Gourmet', text: 'Disfruta de una cocina exquisita en nuestros restaurantes.', image: 'https://via.placeholder.com/300', type: 'Restaurant', category: 'service' },
//     { title: 'Actividades Recreativas', text: 'Participa en una variedad de actividades y eventos.', image: 'https://via.placeholder.com/300', type: 'Activities', category: 'service' },
// ];

// const allItems = [...rooms, ...services];

// const filteredItems = allItems.filter(item => {
//     const matchesType = filters.roomType === '' || (item.category === 'room' && item.type === filters.roomType);
//     const matchesPrice = filters.priceRange === '' ||
//         (filters.priceRange === 'low' && item.category === 'room' && item.price <= 100) ||
//         (filters.priceRange === 'medium' && item.category === 'room' && item.price > 100 && item.price <= 200) ||
//         (filters.priceRange === 'high' && item.category === 'room' && item.price > 200);
//     const matchesService = filters.serviceType === '' || (item.category === 'service' && item.type === filters.serviceType);

//     return matchesType && matchesPrice && matchesService;
// });

// const indexOfLastItem = currentPage * itemsPerPage;
// const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
// const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

// return (
//     <div>
//         <Header />
//         <NavBar />
//         <div className="banner">
//             <Container>
//                 <Row className="align-items-center">
//                     <Col md={6}>
//                         <h1>Bienvenidos a Nuestro Hotel</h1>
//                         <p>Disfruta de una experiencia inolvidable con nuestras instalaciones de lujo y servicios excepcionales.</p>
//                         <button className="btn btn-primary">Reserva Ahora</button>
//                     </Col>
//                 </Row>
//             </Container>
//         </div>
//         <Container>
//             <SearchBar />
//             <Filters onFilterChange={handleFilterChange} />
//             <div className="featured-items my-5">
//                 <h2>Habitaciones y Servicios Disponibles</h2>
//                 <Row>
//                     {currentItems.map((item, index) => (
//                         <Card key={index} title={item.title} text={item.text} image={item.image} />
//                     ))}
//                 </Row>
//             </div>
//             <Paginated currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
//         </Container>
//         <Footer />
//     </div>
// );
// };


//****************************************************************** */
//sitio hostel N° 3 sin el pagino incluye solo los servicios, habitaciones disponibles y han destacadas en la pag principal:
// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { NavBar } from '../../componentes/NavBar/NavBar';
// import { SearchBar } from '../../componentes/SearchBar/SearchBar';
// import { Card } from '../../componentes/Card/Card';
// import { Header } from '../../componentes/Header/Header';

// import Footer from '../../componentes/Footer/Footer';
// import { Filters } from '../../componentes/Filters/Filters';
// import './Home.module.css';

// export const Home = () => {

//   const [filters, setFilters] = useState({
//     roomType: '',
//     priceRange: '',
   
// });

// const handleFilterChange = (name, value) => {
//     setFilters({
//       ...filters,
//       [name]: value
//     });
//   };

//   // Ejemplo de datos de habitaciones (normalmente vendrían de una API)
//   const rooms = [
//     { title: 'Habitación Deluxe', text: 'Una lujosa habitación con vista al mar y todas las comodidades.', image: 'https://via.placeholder.com/300', type: 'Deluxe', price: 150 },
//     { title: 'Suite Presidencial', text: 'La máxima experiencia en lujo y confort.', image: 'https://via.placeholder.com/300', type: 'Presidential Suite', price: 300 },
//     { title: 'Habitación Estándar', text: 'Una cómoda y acogedora habitación para una estancia agradable.', image: 'https://via.placeholder.com/300', type: 'Standard', price: 80 },
//   ];

//   const filteredRooms = rooms.filter(room => {
//     const matchesType = filters.roomType === '' || room.type === filters.roomType;
//     const matchesPrice = filters.priceRange === '' ||
//       (filters.priceRange === 'low' && room.price <= 100) ||
//       (filters.priceRange === 'medium' && room.price > 100 && room.price <= 200) ||
//       (filters.priceRange === 'high' && room.price > 200);

//     return matchesType && matchesPrice;
//   });

//   return (
//     <div>
//       <Header />
//       <NavBar />
//       <div className="banner">
//         <Container>
//           <Row className="align-items-center">
//             <Col md={6}>
//               <h1>Bienvenidos a Nuestro Hotel</h1>
//               <p>Disfruta de una experiencia inolvidable con nuestras instalaciones de lujo y servicios excepcionales.</p>
//               <button className="btn btn-primary">Reserva Ahora</button>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//       <Container>
//         <SearchBar />
//         <Filters onFilterChange={handleFilterChange} />
//         <div className="featured-rooms my-5">
//           <h2>Habitaciones Disponibles</h2>
//           <Row>
//             {filteredRooms.map((room, index) => (
//               <Card key={index} title={room.title} text={room.text} image={room.image} />
//             ))}
//           </Row>
//         </div>
//         <div className="services my-5">
//           <h2>Nuestros Servicios</h2>
//           <Row>
//             <Card title="Spa y Wellness" text="Relájate y rejuvenece en nuestro spa de clase mundial." image="https://via.placeholder.com/300" />
//             <Card title="Restaurantes Gourmet" text="Disfruta de una cocina exquisita en nuestros restaurantes." image="https://via.placeholder.com/300" />
//             <Card title="Actividades Recreativas" text="Participa en una variedad de actividades y eventos." image="https://via.placeholder.com/300" />
//           </Row>
//         </div>
//         <div className="featured-rooms my-5">
//           <h2>Habitaciones Destacadas</h2>
//           <Row>
//             <Card title="Habitación Deluxe" text="Una lujosa habitación con vista al mar y todas las comodidades." image="https://via.placeholder.com/300" />
//             <Card title="Suite Presidencial" text="La máxima experiencia en lujo y confort." image="https://via.placeholder.com/300" />
//             <Card title="Habitación Estándar" text="Una cómoda y acogedora habitación para una estancia agradable." image="https://via.placeholder.com/300" />
//           </Row>
//         </div>
       
//       </Container>
//       <Footer />
//     </div>
//     );
// };

//*********************************************************************************************** */
//esto solo es para aprender react:


// import React, { useState } from 'react'

// export const Home = () => {
//   const [text, setText] = useState()
//   const [upDate, setUpDate] = useState()

//   const textOnChange = (event) => {
//     setText(event.target.value)
//   }

//   const buttonOnClick = () => {
//     setUpDate(text)
//   }  

// return (
//   <div>
//     <input type='text' value={text} onChange={textOnChange} />
//     <button onClick={buttonOnClick}>Actualizar</button>
//     <p>Texto Input: {text}</p>
//     <p>Texto actualizado: {upDate}</p>
//   </div>
// )
// }

