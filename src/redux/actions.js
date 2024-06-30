import axios from 'axios';

export const fetchRooms = () => async (dispatch) => {
  try {
    dispatch({ type: 'ROOMS_REQUEST' });
    const { data } = await axios.get('/api/rooms');
    dispatch({ type: 'ROOMS_SUCCESS', payload: data });
  } catch (error) {
    dispatch({ type: 'ROOMS_FAIL', payload: error.message });
  }
};
