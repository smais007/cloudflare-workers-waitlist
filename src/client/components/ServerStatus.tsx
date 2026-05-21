import React, { useEffect, useState } from "react";

export const ServerStatus = () => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    fetch("/api/health")
      .then((res) => res.json())
      .then((data) => setStatus(data.message));
  }, []);

  return (
    <div>
      <h1 className="text-center font-bold text-green-500">
        Server Status: {status}
      </h1>
    </div>
  );
};
