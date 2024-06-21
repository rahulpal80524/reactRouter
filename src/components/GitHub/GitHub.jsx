import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function GitHub() {
  const data = useLoaderData();

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/rahulpal80524")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);

  return (
    <div className="text-center m-4 bg-orange-700 text-white p-4 text-3xl">
      GitHub Followers: {data.followers}
      <img
        src={data.avatar_url}
        alt="Git picture"
        width="100"
        style={{ borderRadius: "50%" }}
      />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const res = await fetch("https://api.github.com/users/rahulpal80524");
  return res.json();
};
