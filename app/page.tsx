"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const profiles = [
    { id: 1, name: "Saksham Arora" },
    { id: 2, name: "Saksham Arora" },
    { id: 3, name: "Saksham Arora" },
    { id: 4, name: "Saksham Arora" },
    { id: 5, name: "Saksham Arora" },
    { id: 6, name: "Saksham Arora" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      
      {/* Header */}
      <div className="h-20 flex items-center justify-between px-6">
        <img src="/logo-left.png" alt="left logo" className="h-10" />
        <img src="/logo-right.png" alt="right logo" className="h-10" />
      </div>

      {/* Cards Section */}
      <div className="flex justify-center py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => router.push(`/profile/${profile.id}`)}
              className="w-72 bg-white rounded-2xl shadow-md overflow-hidden relative cursor-pointer hover:scale-105 transition"
            >
              
              {/* Orange Top */}
              <div className="h-28 bg-orange-500"></div>

              {/* Profile Image */}
              <div className="flex justify-center">
                <img
                  src="/profile.jpg"
                  className="w-24 h-24 rounded-full border-4 border-white absolute top-16 object-cover"
                  alt="profile"
                />
              </div>

              {/* Info */}
              <div className="pt-20 pb-6 text-center">
                <h2 className="text-lg font-semibold text-black">
                  {profile.name}
                </h2>

                <p className="text-sm text-gray-500">
                  Male | 25 | He/Him
                </p>

                <button
                  onClick={(e) => e.stopPropagation()}
                  className="mt-4 px-4 py-2 border rounded-full text-sm"
                >
                  Download My Resume
                </button>
              </div>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
