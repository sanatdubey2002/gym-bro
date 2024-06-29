export const exerciseOptions = {
  method: 'GET',
  params: {limit: '100',offset: '20'},
  headers: {
    'X-RapidAPI-Key': 'a42aef2fcemsh53e719ce4bcf0cap1dd65djsnc351aa21ef4e',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url,options) => {
  const res = await fetch(url,options);
  const data = await res.json();

  return data;
};