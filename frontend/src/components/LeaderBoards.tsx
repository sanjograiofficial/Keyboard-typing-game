import { useEffect, useState } from "react";
import { getLeaderBoards } from "../api/leaderboards";
import Loading from "./Loading";

interface Record {
  id: number;
  name: string;
  score: number;
}
interface PropType {
  setShowLeaderBoard: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LeaderBoards({ setShowLeaderBoard }: PropType) {
  const [records, setRecords] = useState<Record[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        getLeaderBoards().then((response) => {
          setRecords(response.data);
        });
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="absolute inset-0 z-10 flex justify-center bg-black/80">
          <table className="w-full h-1 border-collapse border border-gray-300 bg-white/60">
            <thead>
              <tr className="border-4">
                <th className="border border-gray-300 p-2">Rank</th>
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Score</th>
              </tr>
            </thead>
            <tbody>
              {records.map((record, index) => (
                <tr key={record.id}>
                  <td className="border border-gray-300 p-2 py-0">
                    {index + 1}
                  </td>
                  <td className="border border-gray-300 p-2 py-0">
                    {record.name}
                  </td>
                  <td className="border border-gray-300 p-2 py-0">
                    {record.score}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={() => setShowLeaderBoard(false)}
            className="hover:bg-black hover:text-white cursor-pointer absolute right-4 top-1 p-2 border border-gray-300 "
          >
            X
          </button>
        </div>
      )}
    </>
  );
}
