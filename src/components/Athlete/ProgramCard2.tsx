"use client"

import { ProgramVideoCard } from "./ProgramVideoCard"

const programsData = [
  {
    id: 1,
    instructorName: "Jason Martinez",
    instructorBadge: "New Athlete",
    instructorImage: "/instructor.jpg",
    title: "Film Breakdown - Part 2",
    description: "Advanced footwork analysis",
    thumbnail: "/program/program1.svg",
    dueDate: "March 18, 2025",
  },
  {
    id: 2,
    instructorName: "Jason Martinez", 
    instructorBadge: "New Athlete",
    instructorImage: "/instructor.jpg",
    title: "Throwing Mechanics Deep Dive",
    description: "Perfecting arm motion and release",
    thumbnail: "/program/program1.svg",
    dueDate: "March 20, 2025",
  },
  {
    id: 3,
    instructorName: "Jason Martinez",
    instructorBadge: "New Athlete", 
    instructorImage: "/instructor.jpg",
    title: "Reading Defenses",
    description: "Pre-snap analysis techniques",
    thumbnail: "/program/program1.svg",
    dueDate: "March 18, 2025",
  },
  {
    id: 4,
    instructorName: "Jason Martinez",
    instructorBadge: "New Athlete",
    instructorImage: "/instructor.jpg", 
    title: "Pocket Presence Drills",
    description: "Staying calm under pressure",
    thumbnail: "/program/program1.svg",
    dueDate: "March 18, 2025",
  },
]

const ProgramCard = () => {
  return (
    <div>
      <div className="bg-[#ffffff4d] p-4 flex-1 border border-white rounded-2xl backdrop-blur-3xl overflow-hidden">
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-inter text-xl font-semibold">Next in This Program</h2>
          <button
            style={{
              borderRadius: "100px",
              background: "linear-gradient(177deg, #5C8FF7 10.06%, #276AEE 62.94%)",
            }}
            className="text-white font-semibold px-5 text-sm py-3 leading-4 rounded-full flex items-center gap-2 transition-all whitespace-nowrap"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {programsData.map((program) => (
            <ProgramVideoCard
              key={program.id}
              instructorName={program.instructorName}
              instructorBadge={program.instructorBadge}
              instructorImage={program.instructorImage}
              title={program.title}
              description={program.description}
              thumbnail={program.thumbnail}
              dueDate={program.dueDate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProgramCard
