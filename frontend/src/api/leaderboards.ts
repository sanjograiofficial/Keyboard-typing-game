const backendPORT = import.meta.env.VITE_BACKEND_PORT;

const url = `http://localhost:${backendPORT}/leaderboards`;
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
