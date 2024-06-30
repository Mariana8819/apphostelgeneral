const initialState = {
    rooms: [],
    loading: false,
    error: null
  };
  
  export const roomListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ROOMS_REQUEST':
        return { ...state, loading: true };
      case 'ROOMS_SUCCESS':
        return { ...state, loading: false, rooms: action.payload };
      case 'ROOMS_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  