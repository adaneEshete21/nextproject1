"use client";
import { useParams } from "next/navigation"; // Import useParams for App Router

function ServiceDetail() {
  const { serviIds } = useParams(); // Extract the dynamic route parameter
  console.log(serviIds);

  return (
    <div>
      <h1>Post: {serviIds}</h1>
      {/* Fetch and display post content based on the 'serviIds' */}
      <p>
        This is the content of post {serviIds}. You would fetch this from a
        database or API.
      </p>
    </div>
  );
}

export default ServiceDetail;
