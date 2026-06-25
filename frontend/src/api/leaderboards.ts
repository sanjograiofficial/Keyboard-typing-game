const backendPORT = import.meta.env.BACKEND_PORT;

const getLeaderBoards = async () => {
  const response = await fetch(`http://localhost:${backendPORT}`, {
    method: "GET",
  });
  return response.json();
};

const createRecord = async (data: { name: string; score: number }) => {
  const response = await fetch(`http://localhost:${backendPORT}`, {
    method: "POST",
    body: JSON.stringify(data),
  });
  return response.json();
};

export { getLeaderBoards, createRecord };
