import React, { Component, useEffect, useState } from "react";

import CardDark from "../template/TemplateDarkMode";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <CardDark>
      <div className="bg-slate-400  h-40 m-5 flex items-center px-5 rounded-2xl justify-center dark:bg-slate-900">
        <h1 className=" text-5xl font-bold text-white">{formatTime(time)}</h1>
      </div>
    </CardDark>
  );
};

export default DigitalClock;
