import React, { useState, useEffect } from "react";
import Cloud from "../../img/cloud.svg";
import { MdCloudOff } from "react-icons/md";

function Status() {
  const [online, setOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      navigator.onLine ? setOnline(true) : setOnline(false);
    });
    window.addEventListener("offline", () => {
      !navigator.onLine ? setOnline(false) : setOnline(true);
    });
  }, [online]);

  return (
    <div className="status">
      {!online ? (
        <div className="offline-state">
          <MdCloudOff />
          <h4>No internet connection</h4>
        </div>
      ) : (
        ""
      )}
      {/* <h4></h4> */}
    </div>
  );
}

export default Status;
