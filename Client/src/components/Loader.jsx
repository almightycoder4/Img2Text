import React from "react";
import SyncLoader from "react-spinners/SyncLoader";

export default function Loader() {
  return (
    <div
      style={{
        margin: "auto",
      }}
    >
      <SyncLoader color="#e61414" cssOverride={{}} />
    </div>
  );
}
