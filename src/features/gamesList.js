export const getGameId = async (gname) => {
  const res = await fetch("http://localhost:5000/data/games", {
    method: "GET",
  });
  const games = await res.json();
  console.log(games);
  const game = games.filter((g) => g.gname === gname);
  if (game.length > 0) {
    return {
      gid: game[0].id,
      error: null,
    };
  } else {
    return {
      error: "Game not found",
    };
  }
};
export default async function gamesList() {
  const res = await fetch("http://localhost:5000/data/games", {
    method: "GET",
  });
  const games = await res.json();
  return games;
}
