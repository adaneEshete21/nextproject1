// utils/auth.js
"use client";
import { useRouter } from "next/navigation"; // Correct import for App Router
import { useEffect } from "react";

export const useAdminRouteProtection = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("accessToken"); // Example: check for authentication token
    console.log(token);

    if (!token) {
      router.replace("/login"); // Redirect to login page if not authenticated
    }
  }, [router]); // Add router to the dependency array

  return null; // Return null or placeholder component
};
