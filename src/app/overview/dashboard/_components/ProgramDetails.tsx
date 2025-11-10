import React from 'react';

const ProgramDetails = () => {
  return (
    <div className="bg-[#e7f2f5] p-8 rounded-3xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-semibold text-[#141b34]">Program Details</h1>
        <p className="text-[rgba(20,27,52,0.6)] mt-2">
          Select the format that fits your coaching goals and athlete needs. You can always create additional programs later
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-3xl">
          <form className="space-y-6">
            <div>
              <label htmlFor="programTitle" className="block text-sm font-medium text-[#141b34] mb-2">Program Title</label>
              <input type="text" id="programTitle" placeholder="Enter program title" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none placeholder-[rgba(20,27,52,0.7)]" />
            </div>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-[#141b34] mb-2">Description</label>
              <textarea id="description" placeholder="Describe your program..." rows={4} className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none placeholder-[rgba(20,27,52,0.7)]"></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#141b34] mb-2">Program Thumbnail</label>
              <div className="flex items-center justify-center w-full h-40 bg-[rgba(255,255,255,0.6)] border-2 border-dashed border-[#276aee] rounded-2xl">
                <div className="text-center">
                    <p className="text-xs text-[#141b34] font-medium">Upload Program Thumbnail Image</p>
                    <p className="text-sm text-[rgba(20,27,52,0.7)] my-1">or</p>
                    <button type="button" className="text-sm font-medium text-blue-600">Browse Files</button>
                </div>
              </div>
            </div>
            <div>
                <label className="block text-sm font-medium text-[#141b34] mb-2">Gallery</label>
                <div className="grid grid-cols-3 gap-4">
                    <div className="w-full h-24 bg-gray-300 rounded-2xl bg-cover bg-center" style={{backgroundImage: "url('https://s3-alpha-sig.figma.com/img/9b1f/6232/5a3311696222bde9f1a271732d82e185?Expires=1731283200&Key-Pair-Id=K1MODK432HS29M&Signature=m-R6k1vEa4R9r45QOa1v0Uj~b6g8BwI4iB4hF5~9i~-f4f2G1b6q7N0hJ3b5v0b5g~i~-f4f2G1b6q7N0hJ3b5v0b5g==')"}}></div>
                    <div className="flex items-center justify-center w-full h-24 bg-[rgba(255,255,255,0.6)] rounded-2xl">
                        <button type="button" className="text-sm text-blue-600">+ Add Picture</button>
                    </div>
                    <div className="flex items-center justify-center w-full h-24 bg-[rgba(255,255,255,0.6)] rounded-2xl">
                        <button type="button" className="text-sm text-blue-600">+ Add Picture</button>
                    </div>
                </div>
                <p className="text-xs text-[rgba(20,27,52,0.7)] mt-2">Pro users can upload videos and up to 10 pictures</p>
            </div>
             <div className="grid grid-cols-2 gap-4">
                <div>
                    <label htmlFor="sport" className="block text-sm font-medium text-[#141b34] mb-2">Sport</label>
                    <select id="sport" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none text-[rgba(20,27,52,0.7)]">
                        <option>Select sport</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="position" className="block text-sm font-medium text-[#141b34] mb-2">Position (Optional)</label>
                    <select id="position" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none text-[rgba(20,27,52,0.7)]">
                        <option>Position</option>
                    </select>
                </div>
            </div>
            <div>
                <label htmlFor="skillLevel" className="block text-sm font-medium text-[#141b34] mb-2">Skill Level</label>
                <select id="skillLevel" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none text-[rgba(20,27,52,0.7)]">
                    <option>Select your skill level</option>
                </select>
            </div>
          </form>
        </div>
        {/* Right Column */}
        <div className="bg-[rgba(255,255,255,0.3)] p-6 rounded-3xl space-y-6">
            <div>
                <label className="block text-sm font-medium text-[#141b34] mb-2">Age Range</label>
                <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl">
                        <div className="flex items-center">
                            <input type="radio" id="allAges" name="age" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="allAges" className="ml-3 text-sm text-[#141b34]">All ages</label>
                        </div>
                        <span className="text-sm text-[rgba(20,27,52,0.4)]">Select all ages people</span>
                    </div>
                     <div className="flex items-center justify-between p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl">
                        <div className="flex items-center">
                            <input type="radio" id="youth" name="age" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="youth" className="ml-3 text-sm text-[#141b34]">Youth (8-12)</label>
                        </div>
                        <span className="text-sm text-[rgba(20,27,52,0.4)]">Elementary school age</span>
                    </div>
                     <div className="flex items-center justify-between p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl">
                        <div className="flex items-center">
                            <input type="radio" id="teen" name="age" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="teen" className="ml-3 text-sm text-[#141b34]">Teen (13-17)</label>
                        </div>
                        <span className="text-sm text-[rgba(20,27,52,0.4)]">Middle & high school</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl">
                        <div className="flex items-center">
                            <input type="radio" id="adult" name="age" className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="adult" className="ml-3 text-sm text-[#141b34]">Adult (18+)</label>
                        </div>
                        <span className="text-sm text-[rgba(20,27,52,0.4)]">College & professional</span>
                    </div>
                </div>
            </div>
             <div>
                <label className="block text-sm font-medium text-[#141b34] mb-2">Gender</label>
                <div className="grid grid-cols-3 gap-4">
                    <button className="p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl text-[rgba(20,27,52,0.7)]">All</button>
                    <button className="p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl text-[rgba(20,27,52,0.7)]">Male</button>
                    <button className="p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl text-[rgba(20,27,52,0.7)]">Female</button>
                </div>
            </div>
            <div>
                <label htmlFor="location" className="block text-sm font-medium text-[#141b34] mb-2">Location</label>
                <select id="location" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none text-[rgba(20,27,52,0.7)]">
                    <option>Global (All Location)</option>
                </select>
            </div>
             <div>
                <label htmlFor="language" className="block text-sm font-medium text-[#141b34] mb-2">Language</label>
                <select id="language" className="w-full p-4 bg-[rgba(255,255,255,0.6)] rounded-2xl border-none text-[rgba(20,27,52,0.7)]">
                    <option>English</option>
                </select>
            </div>
             <div className="p-4 bg-[rgba(255,255,255,0.3)] rounded-2xl">
                <p className="text-sm text-[rgba(20,27,52,0.7)]"><span className="font-semibold text-[#141b34]">Best for:</span> Long-term passive content and skill development. Perfect for fundamental training that remains relevant over time.</p>
            </div>
        </div>
      </div>
       <div className="flex justify-between mt-8">
            <button className="px-6 py-3 bg-[rgba(255,255,255,0.3)] rounded-full text-[#141b34] font-medium">Back</button>
            <button className="px-12 py-3 bg-blue-600 text-white rounded-full font-medium">Next</button>
        </div>
    </div>
  );
};

export default ProgramDetails;
