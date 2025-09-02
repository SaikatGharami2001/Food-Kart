import { useEffect, useState } from "react";
import { RES_API } from "../Utils/constants";

const useRestaurant_API = () => {
  const [resData, setResData] = useState("");

  useEffect(() => {
    const data = async () => {
      try {
        const newData = await fetch(RES_API);
        const fetchedData = await newData.json();
        console.log(fetchedData);
        setResData(fetchedData);
      } catch (err) {
        console.log(err, "fetching failed");
      }
    };
    data();
  }, []);

  return resData;
};

export default useRestaurant_API;
