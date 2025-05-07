import React from "react";

const News = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">News</h1>
      <p className="text-lg text-center">
        Stay updated with the latest news and updates from GlobalTradeConnect.
      </p>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Latest News</h2>
        <ul className="list-disc list-inside">
          <li>
            GlobalTradeConnect launches new features to enhance user experience.
          </li>
          <li>
            Join us for our upcoming webinar on international trade trends.
          </li>
          <li>GlobalTradeConnect partners with leading logistics providers.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Watch Our Latest Video</h2>
        <video className="mt-4 mx-auto" controls width="600">
          <source src="/videoplayback.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default News;
