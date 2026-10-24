import React from "react";

const KonimeLoader = () => {
  return (
    <div className="konime-loader" role="status" aria-label="Loading Konime">
      <div className="konime-mark">
        <span>KO</span>
        <span className="slash" />
        <span>NIME</span>
      </div>
      <div className="konime-bars" aria-hidden>
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
};

export default KonimeLoader;
