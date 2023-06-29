export default async function getAttributes() {
  const url = 'https://musclewiki.p.rapidapi.com/exercises/attributes';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e299f30eb7msh7d24e1fdd92a964p10a38bjsn842bdac08724',
      'X-RapidAPI-Host': 'musclewiki.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}
