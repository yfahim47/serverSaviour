const url = "https://servicesaver-gzn8.onrender.com/serviceSaver/v1.0/data/getServerDetails";

const getData = async () => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    return error;
  }
};

export default getData;
