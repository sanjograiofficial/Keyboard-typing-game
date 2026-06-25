import { useEffect, useState } from "react";
import { getLeaderBoards } from "../api/leaderboards";

interface Record {
  id: number;
  name: string;
  score: number;
}

export default function LeaderBoards() {
  const [records, setRecords] = useState<Record[]>([]);

  useEffect(() => {
    getLeaderBoards().then((response) => {
      setRecords(response.data);
    });
    console.log(records);
  }, []);
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
