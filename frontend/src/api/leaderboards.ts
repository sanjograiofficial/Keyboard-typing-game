const backendURL = import.meta.env.VITE_API_URL;

const url = `${backendURL}/leaderboards`;
const getLeaderBoards = async () => {
  const response = await fetch(url, {
    method: "GET",
  });
  return response.json();
};

const createRecord = async (data: { name: string; score: number }) => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export { getLeaderBoards, createRecord };
