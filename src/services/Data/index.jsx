import { api } from "services/api";

export const GetData = async (
  page,
  rowsPerPage,
  filter,
  heroes,
  villains,
  others
) => {
  const data = await api.get("/all.json");

  let list = data.data;
  let total = 0;

  if (heroes === false)
    list = list.filter((x) => x.biography.alignment !== "good");

  if (villains === false)
    list = list.filter((x) => x.biography.alignment !== "bad");

  if (others === false)
    list = list.filter(
      (x) => x.biography.alignment === "good" || x.biography.alignment === "bad"
    );

  total = list.length;

  if (filter)
    list = list.filter((x) =>
      x.name.toLowerCase().includes(filter.toLowerCase())
    );
  else list = list.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return { list, total };
};

export const GetDataId = async (id) => {
  const data = await api.get(`/id/${id}.json`);

  return data.data;
};
