
export const setLocatoinObject = (locationObj, coordsObj) => {
    const {lat, lon, name, unit } = coordsObj;
    locationObj.setLat(lat);
    locationObj.setLon(lon);
}