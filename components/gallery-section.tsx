"use client"

import { useState } from "react"

const mediaData = [
  {
    file: "/images/group-pic.jpeg",
    title: "Group Visit",
    date: "October 14, 2025",
    location: "Survey of India",
    description:
      "A proud and memorable moment shared with the dedicated members of the Survey of India.",
  },
  {
    file: "/images/field-visit.jpeg",
    title: "Field Visit to Survey of India",
    date: "October 17, 2024",
    location: "Uppal",
  },
  {
    file: "/images/hands-on-experience.jpeg",
    title:
      "Gained hands-on experience with new and emerging technologies.",
  },
  
  {
    file: "/images/ed1.jpeg",
    title:
      "An Inspiring and Transformative Address to Our Students by Honorable Gampa Nageshwer Rao",
    date: "2025",
    location: "Mallepally ITI ATC",
  },
]

export default function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null)

  const isVideo = (file: string) => {
    const extension = file.split(".").pop()?.toLowerCase()
    return ["mp4", "webm", "ogg"].includes(extension || "")
  }

  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Gallery
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {mediaData.map((item, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
            >
              <div
                onClick={() => setSelectedMedia(item.file)}
                className="cursor-pointer"
              >
                {isVideo(item.file) ? (
                  <video
                    src={item.file}
                    className="w-full h-56 object-cover"
                    muted
                    preload="metadata"
                  />
                ) : (
                  <img
                    src={item.file}
                    alt={item.title}
                    className="w-full h-56 object-cover"
                  />
                )}
              </div>

              <div className="p-4">
                <p className="font-semibold">{item.title}</p>

                {item.date && (
                  <p className="text-sm text-gray-500">{item.date}</p>
                )}

                {item.location && (
                  <p className="text-sm">📍 {item.location}</p>
                )}

                {item.description && (
                  <p className="text-sm mt-2 text-gray-600">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(selectedMedia) ? (
              <video
                src={selectedMedia}
                controls
                autoPlay
                className="w-full max-h-[80vh] rounded-lg"
              />
            ) : (
              <img
                src={selectedMedia}
                alt="Preview"
                className="w-full max-h-[80vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  )
}