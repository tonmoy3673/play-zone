"use client";
import Checkbox from '@/components/ui/Checkbox';
import Container from '@/components/ui/Container';
import DatePicker from '@/components/ui/DatePicker';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import Switch from '@/components/ui/Switch';
import TimePicker from '@/components/ui/TimePicker';
import Image from 'next/image';
import React, { useState } from 'react';

const TaskAssignSchedule = () => {
    const [allAthletesSelected, setAllAthletesSelected] = useState(true)
    const [skillGroupSelected, setSkillGroupSelected] = useState(true)
    const [expandAthletes, setExpandAthletes] = useState(false)
    const [selectedAthletes, setSelectedAthletes] = useState([
        { id: 1, name: "Sarah Johnson", position: "Forward", image: "https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png" },
        { id: 2, name: "Mike Chen", position: "Midfielder", image: "https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png" },
    ])
    const [skillGroup, setSkillGroup] = useState<string | null>(null)
    const [dueDate, setDueDate] = useState("06/15/2025")
    const [time, setTime] = useState("06:00 PM")
    const [priority, setPriority] = useState("High")
    const [categoryAssign, setCategoryAssign] = useState("Fitness")
    const [endDate, setEndDate] = useState("")
    const [repeatSummary, setRepeatSummary] = useState<string | null>(null)
    // schedule 
    const [recurringTask, setRecurringTask] = useState(false)
    const [frequency, setFrequency] = useState("Daily")
    const removeAthlete = (id: number) => {
        setSelectedAthletes(selectedAthletes.filter((athlete) => athlete.id !== id))
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Assign & Schedule</h1>
                <span className="text-sm text-gray-500">Choose who receives the task, and when</span>
            </div>
            <div className='flex gap-4'>
                <div className='w-1/2 bg-[#FFFFFF4D] rounded-2xl p-8 shadow-sm'>
                    <div className="mb-3 border-gray-200">
                        <h2 className="text-base font-medium text-black mb-3">Assign to</h2>
                    </div>
                    <div className="border-gray-200">

                        {/* All Program Athletes */}
                        <div className="p-4 bg-gray-50 rounded-lg mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    checked={allAthletesSelected}
                                    onChange={() => setAllAthletesSelected(!allAthletesSelected)}
                                />
                                <div>
                                    <p className="font-medium text-black">All Program Athletes</p>
                                </div>
                            </div>
                            {
                                allAthletesSelected ? (
                                    <p className="text-[#141b3499] font-medium">24 athletes</p>
                                ) : (
                                    <p className="text-[#141b3499] font-medium">0 athletes</p>
                                )
                            }
                        </div>

                        {/* Select Athletes */}
                        <div className="mb-6">
                            <button
                                onClick={() => setExpandAthletes(!expandAthletes)}
                                className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 transition"
                            >
                                <div className="flex items-center gap-3">
                                    <Checkbox
                                        checked={selectedAthletes.length > 0 ? true : false}
                                        className="w-5 h-5 accent-blue-500 cursor-pointer"
                                    />
                                    <p className="font-medium text-black">Select Athletes</p>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-[#141b3499] transition-transform ${expandAthletes ? "rotate-180" : ""}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>

                            {expandAthletes && (
                                <div className="mt-4 space-y-3 p-4 bg-blue-50 rounded-lg">
                                    {selectedAthletes.map((athlete) => (
                                        <div key={athlete.id} className="flex items-center justify-between p-3 bg-white rounded-lg">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    width={40}
                                                    height={40}
                                                    src={athlete.image || "/placeholder.svg"}
                                                    alt={athlete.name}
                                                    className="w-10 h-10 rounded-full"
                                                />
                                                <div className="flex gap-4 items-center">
                                                    <p className="font-medium text-black">{athlete.name}</p>
                                                    <p className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full inline-block">
                                                        {athlete.position}
                                                    </p>
                                                </div>
                                            </div>
                                            <button
                                                onClick={() => removeAthlete(athlete.id)}
                                                className="text-gray-400 hover:text-[#141b3499] transition"
                                            >
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}

                                    {/* Add More Athletes */}
                                    <button className="w-full p-4 border-2 border-dashed border-blue-400 rounded-lg hover:border-blue-500 transition flex items-center justify-center gap-2 text-blue-500 font-medium mt-4">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                        </svg>
                                        Add More Athletes
                                    </button>
                                </div>
                            )}
                        </div>

                        {/* Skill Group */}
                        <div className="p-4 bg-gray-50 rounded-lg mb-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Checkbox
                                    checked={skillGroupSelected}
                                    onChange={() => setSkillGroupSelected(!skillGroupSelected)}
                                />
                                <div>
                                    <p className="font-medium text-black">Skill Group</p>
                                </div>
                            </div>
                            {
                                skillGroupSelected ? (
                                    <>
                                        <Select
                                            value={skillGroup || undefined}
                                            onChange={(value) => setSkillGroup(value)}
                                            placeholder='Select skill group'
                                            options={[
                                                { label: "Beginners", value: "Beginners" },
                                                { label: "Intermediate", value: "Intermediate" },
                                                { label: "Advanced", value: "Advanced" },
                                            ]}
                                            className='!py-2'
                                        />
                                    </>
                                ) : (
                                    <>
                                    </>
                                )
                            }
                        </div>
                        {/* Due Date & Time Section */}
                        <div className="mb-8">
                            <h2 className="text-base font-medium text-black mb-3">Due Date & Time</h2>

                            {/* Date Input */}
                            <div className="mb-8">
                                <div className="relative">
                                    <DatePicker
                                        value={dueDate}
                                        onChange={setDueDate}
                                        placeholder="08/07/2026"
                                        className="bg-[#EEF6F8] rounded-2xl"
                                    />
                                  
                                    {/* <Icon name="schedule-icon" className="absolute right-4 top-3.5 text-[#141b3499]" /> */}
                                </div>
                            </div>

                            {/* Time Input */}
                            <div className="mb-8">
                                <label className="block text-base font-medium text-black mb-2">Time (Time is optional)</label>
                                <div className="relative">
                                    
                                    <TimePicker
                                        value={time}
                                        onChange={setTime}
                                        placeholder="8:30 AM"
                                        className="bg-[#EEF6F8] rounded-2xl"
                                    />

                                </div>
                            </div>

                            {/* Priority and Category */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-base font-medium text-black mb-3">Priority</label>
                                    <Select
                                        value={priority || undefined}
                                        onChange={(value) => setPriority(value)}
                                        placeholder='Select priority'
                                        options={[
                                            { label: "High", value: "High" },
                                            { label: "Medium", value: "Medium" },
                                            { label: "Low", value: "Low" },
                                        ]}
                                    />

                                </div>

                                <div>
                                    <label className="block text-base font-medium text-black mb-3">Category</label>
                                    <Select
                                        value={categoryAssign || undefined}
                                        onChange={(value) => setCategoryAssign(value)}
                                        placeholder='Select category'
                                        options={[
                                            { label: "Skill Development", value: "Skill Development" },
                                            { label: "Fitness", value: "Fitness" },
                                            { label: "Strategy", value: "Strategy" },
                                        ]}
                                    />


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-1/2 bg-[#FFFFFF4D] rounded-2xl p-8 shadow-sm flex flex-col gap-4'>
                    {/* Recurring Task? */}
                    <div className="p-4 bg-gray-50 rounded-lg mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div>
                                <p className="font-medium text-black">Recurring Task?</p>
                            </div>
                        </div>
                        <Switch value={recurringTask} onChange={() => setRecurringTask(!recurringTask)} />
                    </div>
                    <div>
                        <label className="block text-base font-medium text-black mb-3">Frequency</label>
                        <Select
                            value={frequency}
                            onChange={(value) => setFrequency(value)}
                            placeholder='Select frequency'
                            options={[
                                { label: "Daily", value: "Daily" },
                                { label: "Weekly", value: "Weekly" },
                                { label: "Monthly", value: "Monthly" },
                            ]}
                        />
                    </div>
                    <div>
                        <label className="block text-base font-medium text-black mb-3">End Date (Optional)</label>
                        <DatePicker
                            value={endDate}
                            onChange={setEndDate}
                            placeholder="08/07/2026"
                            className="bg-[#EEF6F8] rounded-2xl"
                        />
                        
                    </div>
                    <div>
                        <label className="block text-base font-medium text-black mb-3">Repeat Summary</label>
                        <Input
                            placeholder='Task will be created once when published'
                            className='w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white transition'
                            type='text'
                            maxLength={100}
                            value={repeatSummary || undefined}
                            onChange={(e) => setRepeatSummary(e.target.value)}
                        />
                    </div>
                    <div className="">

                        {/* Summary Grid */}
                        <div className="space-y-6 bg-gray-50 rounded-[30px] p-8">
                            <h2 className="text-base font-medium text-black mb-4">Assignment Summary</h2>
                            {/* Athletes Row */}
                            <div className="flex justify-between items-center">
                                <span className="text-[#141b3499]">Athletes:</span>
                                <span className="text-black font-medium text-sm">{selectedAthletes.length} selected</span>
                            </div>

                            {/* Due Date Row */}
                            <div className="flex justify-between items-center">
                                <span className="text-[#141b3499]">Due Date:</span>
                                <span className="text-black font-medium text-sm">{dueDate}</span>
                            </div>

                            {/* Due Time Row */}
                            <div className="flex justify-between items-center">
                                <span className="text-[#141b3499]">Due Time:</span>
                                <span className="text-black font-medium text-sm">{time}</span>
                            </div>

                            {/* Recurring Row */}
                            <div className="flex justify-between items-center">
                                <span className="text-[#141b3499]">Recurring:</span>
                                <span className="text-black font-medium text-sm">{recurringTask ? "Yes" : "No"}</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskAssignSchedule;