"use client";

import React, { useEffect, useState } from "react";

export default function AlarmClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Alarm is ringing!!! Wake upppp!!!");

    setTime(new Date());
  }, [time]);

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{time.toLocaleTimeString()}</p>
    </div>
  );
}
