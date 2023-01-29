import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export default function Home() {
  const {
    data: myData,
    isLoading,
    isError,
    refetch,
    fetchStatus,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1>Error...</h1>;
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>This is Home Page :</h1>
      <h4>{myData?.fact}</h4>
      <h4>{fetchStatus}</h4>
      <button onClick={refetch}>Update data</button>
    </div>
  );
}
