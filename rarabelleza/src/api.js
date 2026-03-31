export const API_URL = 'http://localhost:1337';

const API_TOKEN = '47b679c59b87876385c5ef103de06454b05cd19293062310619ea784b4624037a1f65367d166cd22742e33960c924e499b65c45670a10f615ec71bda372fb9e08024ea434d726795d4e387a03ec8f12cfda62804503d19c3ff1bea0e533eeb4bb65c21ecae8b8cddb92eafa10514d745bbdb8983b7da6d30804cad3d3bbe36ab';

export const apiFetch = (endpoint, options = {}) => {
  return fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${API_TOKEN}`,
      ...options.headers,
    },
  });
};
