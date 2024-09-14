"use client";

import { MdConstruction } from "react-icons/md";
import Image from "next/image";
import constructionImage from "../../../public/construction.jpg"; // Path to your background image

export default function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${constructionImage.src})` }} // Set the background image
    >
      <div className="relative text-center bg-white p-6 rounded-lg shadow-lg">
        {/* Centered Construction Icon */}
        <div className="flex justify-center mb-4">
          <MdConstruction className="w-16 h-16 text-yellow-600" />
        </div>
        {/* Construction Text */}
        <div>
          <p className="text-xl font-semibold mb-2">This Page is Under Construction</p>
          <p className="text-gray-600">We&apos;re working hard to bring this page to you. Please check back later!</p>
        </div>
      </div>
    </div>
  );
}

