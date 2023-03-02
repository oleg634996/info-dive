import axios from 'axios'


export const DD = async () => {
//     const response = await axios.get('./index.json
    const response = await (await fetch("./index.json")).json();
    return response;
  };