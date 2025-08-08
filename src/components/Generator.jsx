import React, { useState } from "react";

const Generator = () => {
  const [showText, setShowText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [copy, setCopy] = useState(false);

  const generateServer = () => {
    setLoading(true);
    setShowText(false);
    setTimeout(() => {
      setLoading(false);
      setShowText(true);
    }, 5000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("dns.adguard-dns.com");
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  return (
    <div className="body">
      <div className="intro">
        <p>
          This is the website to generate a private DNS server to protect your
          device from Ads
        </p>
      </div>
      <div className="button-div">
        <button onClick={generateServer}>
          <span class="shadow"></span>
          <span class="edge"></span>
          <span class="front text"> Generate Private DNS</span>
        </button>
      </div>

      {loading && <div class="spinner"></div>}
      {showText && (
        <div class="para">
          <h4 className="main-para" onClick={handleCopy}>
            dns.adguard-dns.com
          </h4>
          {copy && <p className="copy-msg">Copied!</p>}
          <p>Use this DNS server in your device DNS setting</p>
        </div>
      )}
    </div>
  );
};

export default Generator;
