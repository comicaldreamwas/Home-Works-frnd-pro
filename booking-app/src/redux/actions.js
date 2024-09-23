
export const FETCH_HOTELS = 'FETCH_HOTELS';
export const SET_HOTELS = 'SET_HOTELS';

export const fetchHotels = () => ({ type: FETCH_HOTELS });
export const setHotels = (hotels) => ({ type: SET_HOTELS, hotels });
