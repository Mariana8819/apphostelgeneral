import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRooms } from '../redux/actions'; // Asegúrate de tener esta acción configurada
import { Cards } from './Cards/Cards';

const Room = () => {
  const dispatch = useDispatch();
  const rooms = useSelector((state) => state.rooms);

  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  return (
    <div>
      <h2>Habitaciones</h2>
      {rooms.loading && <p>Cargando...</p>}
      {rooms.error && <p>{rooms.error}</p>}
      {rooms.items && <Cards items={rooms.items} />}
    </div>
  );
};

export default Room;
