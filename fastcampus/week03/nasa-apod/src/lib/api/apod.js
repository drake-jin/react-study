import axios from 'axios'

export const getAPOD = (date = '') => axios.get(`https://api.nasa.gov/planetary/apod?api_key=5q6uswo7lQPq6HcC05xDRdcoikRkPCVdIqk6mbxe&date=${date}`)
