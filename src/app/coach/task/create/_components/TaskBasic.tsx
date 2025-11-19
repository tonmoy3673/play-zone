"use client"
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';
import Select from '@/components/ui/Select';
import Switch from '@/components/ui/Switch';
import React, { useState } from 'react';

const TaskBasic = () => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [locationEnabled, setLocationEnabled] = useState(true)
    const [location, setLocation] = useState("")
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const categories = [
        { id: "physical", label: "Physical", icon: <><Icon name="physical" /></> },
        { id: "technical", label: "Technical", icon: <><Icon name="technical" /></> },
        { id: "mental", label: "Mental Training", icon: <><Icon name="mental" /></> },
        { id: "quiz", label: "Quiz", icon: <><Icon name="quiz" /></> },
        { id: "film", label: "Film Review", icon: <><Icon name="star" /></> },
        { id: "rehab", label: "Rehab and Recovery", icon: <><Icon name="refresh" /></> },
        { id: "user-profile", label: "In Person", icon: <><Icon name="user-profile" /></> },
    ]
    return (

        <div className="">
            <div className="mb-8">

                <h1 className="text-2xl font-bold">Task Basics</h1>
                <span className="text-sm text-gray-500">Capture essential details in under 60 seconds</span>
            </div>
            <Container>
                <div className="bg-[#FFFFFF4D] p-8 border border-white">
                    {/* Title Task */}
                    <div className="mb-8">
                        <label className="block text-base font-medium text-black mb-3">Title Task</label>
                        <input
                            type="text"
                            placeholder="e.g, Sprint Form Drill"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <label className="block text-base font-medium text-black mb-3">Description</label>
                        <textarea
                            placeholder="Short instructions or expectations. You can use markdown or plain text"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={5}
                            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition resize-none"
                        />
                    </div>

                    {/* Estimated Duration */}
                    <div className="mb-8">
                        <label className="block text-base font-medium text-black mb-2">Estimated Duration</label>
                        <p className="text-sm text-[#141b3499] mb-3">
                            Approximate time the task should take to complete. Helps athletes plan their schedule and track workload
                        </p>
                        <Select
                            options={[
                                { value: "15min", label: "15 minutes" },
                                { value: "30min", label: "30 minutes" },
                                { value: "1hour", label: "1 hour" },
                                { value: "2hours", label: "2 hours" },
                            ]}
                            label='Select duration'
                            placeholder='Select duration'
                            value={duration}
                            onChange={(value) => setDuration(value)}
                        />
                    </div>

                    {/* Location Toggle */}
                    <div className="mb-8">
                        <div className="flex items-center gap-3 mb-3">
                            <label className="text-base font-medium text-black">Location</label>
                            <Switch
                                value={locationEnabled}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setLocationEnabled(e.target.checked)}
                            />
                        </div>
                        {locationEnabled && (
                            <Select
                                options={[
                                    { value: "gym", label: "Gym" },
                                    { value: "field", label: "Field" },
                                    { value: "home", label: "Home" },
                                ]}
                                label='Select location'
                                placeholder='Select location'
                                value={location}
                                onChange={(value) => setLocation(value)}
                            />
                        )}
                    </div>

                    {/* Task Category */}
                    <div className="mb-8">
                        <label className="block text-base font-medium text-black mb-4">Task Category</label>
                        <div className="grid grid-cols-4 gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`p-6 rounded-xl border-2 transition-all flex flex-col items-center gap-2 ${selectedCategory === category.id
                                        ? "border-blue-500 bg-blue-50"
                                        : "border-gray-200 bg-white hover:border-gray-300"
                                        }`}
                                >

                                    <span className="text-3xl">{category.icon}</span>
                                    <span className="text-sm font-medium text-black text-center">{category.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>


                </div>
            </Container>

        </div>

    );
};

export default TaskBasic;