import data from "data/data.json";

export const GetData = (
  page,
  rowsPerPage,
  filter,
  heroes,
  villains,
  others
) => {
  let list = data;
  let total = 0;

  if (heroes === false) {
    list = list.filter((x) => x.biography.alignment !== "good");
  }

  if (villains === false) {
    list = list.filter((x) => x.biography.alignment !== "bad");
  }

  if (others === false) {
    list = list.filter(
      (x) => x.biography.alignment === "good" || x.biography.alignment === "bad"
    );
  }

  total = list.length;

  if (filter) {
    list = list.filter((x) =>
      x.name.toLowerCase().includes(filter.toLowerCase())
    );
  } else {
    list = list.slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }

  return { list, total };
};

export const GetDataId = (id) => {
  return data.filter((x) => parseInt(x.id) === parseInt(id));
};
