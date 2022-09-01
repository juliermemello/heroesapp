import { api } from "services/api";

export const GetCharacters = async (page, rowsPerPage, filter) => {
  let endpoint = `characters?orderBy=name&limit=${rowsPerPage}&offset=${
    rowsPerPage * page
  }`;

  if (filter) endpoint += `&nameStartsWith=${filter}`;

  const data = await api.get(endpoint);

  const results = data.data.data.results;
  const total = data.data.data.total;

  return { results, total };
};

export const GetCharacter = async (id) => {
  const data = await api.get(`characters/${id}`);

  return data.data.data.results[0];
};
