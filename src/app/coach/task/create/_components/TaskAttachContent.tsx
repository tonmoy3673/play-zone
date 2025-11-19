"use client";
import Icon from '@/components/ui/Icon';
import Switch from '@/components/ui/Switch';
import Image from 'next/image';
import React, { useState, useRef } from 'react';

interface UploadedFile {
    id: number;
    name: string;
    size: string;
    type: string;
    thumbnail: string;
    file: File;
}

const TaskAttachContent = () => {
    const [recordingTipsEnabled, setRecordingTipsEnabled] = useState(true)
    const [youtubeUrl, setYoutubeUrl] = useState("")
    const [googleDriveUrl, setGoogleDriveUrl] = useState("")
    const [hudlUrl, setHudlUrl] = useState("")
    const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])

    const videoInputRef = useRef<HTMLInputElement>(null)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const totalFiles = uploadedFiles.length
    const totalSize = uploadedFiles.reduce((sum, file) => {
        return sum + file.file.size
    }, 0)

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes'
        const k = 1024
        const sizes = ['Bytes', 'KB', 'MB', 'GB']
        const i = Math.floor(Math.log(bytes) / Math.log(k))
        return (bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]
    }

    const getFileType = (file: File): string => {
        if (file.type.startsWith('video/')) return 'Video'
        if (file.type.startsWith('image/')) return 'Image'
        if (file.type === 'application/pdf') return 'PDF'
        if (file.type.includes('document') || file.type.includes('word')) return 'Document'
        return 'File'
    }

    const generateThumbnail = (file: File): Promise<string> => {
        return new Promise((resolve) => {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader()
                reader.onload = (e) => {
                    resolve(e.target?.result as string)
                }
                reader.readAsDataURL(file)
            } else if (file.type.startsWith('video/')) {
                const video = document.createElement('video')
                const url = URL.createObjectURL(file)
                video.src = url
                video.onloadedmetadata = () => {
                    video.currentTime = 0.1
                }
                video.onseeked = () => {
                    const canvas = document.createElement('canvas')
                    canvas.width = video.videoWidth
                    canvas.height = video.videoHeight
                    const ctx = canvas.getContext('2d')
                    ctx?.drawImage(video, 0, 0, canvas.width, canvas.height)
                    const thumbnail = canvas.toDataURL('image/png')
                    URL.revokeObjectURL(url)
                    resolve(thumbnail)
                }
            } else {
                // Default thumbnail for non-image/video files
                resolve('https://i.ibb.co.com/WvNktNfW/9f447944b31f2dfc586a06da40a72805b14e4e27.png')
            }
        })
    }

    const handleFileUpload = async (files: FileList | null) => {
        if (!files || files.length === 0) return

        const newFiles: UploadedFile[] = []

        for (let i = 0; i < files.length; i++) {
            const file = files[i]
            const thumbnail = await generateThumbnail(file)
            const fileSize = formatFileSize(file.size)
            const fileType = getFileType(file)

            newFiles.push({
                id: Date.now() + i,
                name: file.name,
                size: fileSize,
                type: fileType,
                thumbnail: thumbnail,
                file: file,
            })
        }

        setUploadedFiles([...uploadedFiles, ...newFiles])
    }

    const handleVideoUpload = () => {
        videoInputRef.current?.click()
    }

    const handleFileUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleVideoInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileUpload(e.target.files)
        // Reset input to allow selecting the same file again
        if (videoInputRef.current) {
            videoInputRef.current.value = ''
        }
    }

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileUpload(e.target.files)
        // Reset input to allow selecting the same file again
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    const deleteFile = (id: number) => {
        setUploadedFiles(uploadedFiles.filter((file) => file.id !== id))
    }

    return (
        <div>
            <div className="mb-8">
                <h1 className="text-2xl font-bold">Attach Content</h1>
                <span className="text-sm text-gray-500">Add any supporting content (or skip if none needed)</span>
            </div>
            <div className='flex gap-4'>
                <div className='w-2/3 bg-[#FFFFFF4D] rounded-2xl p-8 shadow-sm'>
                    <div className="mb-12 border-gray-200">
                        <h2 className="text-base font-medium text-black mb-3">Upload Files</h2>

                        {/* Hidden File Inputs */}
                        <input
                            type="file"
                            ref={videoInputRef}
                            onChange={handleVideoInputChange}
                            accept="video/*"
                            multiple
                            className="hidden"
                        />
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileInputChange}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png,.gif,image/*"
                            multiple
                            className="hidden"
                        />

                        {/* Upload Options */}
                        <div className="grid grid-cols-2 gap-4 mb-10">
                            {/* Upload Video */}
                            <button
                                onClick={handleVideoUpload}
                                className="p-8 border-2 border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
                            >
                                <Icon name='video-icon' />
                                <div className="text-center">
                                    <p className="font-medium text-black">Upload Video</p>
                                    <p className="text-sm text-[#141b3499]">MP4, MOV, AVI</p>
                                </div>
                            </button>

                            {/* Upload File */}
                            <button
                                onClick={handleFileUploadClick}
                                className="p-8 border-2 border-dashed border-[#276AEE] rounded-2xl hover:border-blue-500 transition flex flex-col items-center gap-3 bg-white cursor-pointer"
                            >
                                <Icon name='file-icon' />
                                <div className="text-center">
                                    <p className="font-medium text-black">Upload File</p>
                                    <p className="text-sm text-[#141b3499]">PDF, DOC, Image</p>
                                </div>
                            </button>
                        </div>

                        {/* Link From Library */}
                        <div className="mb-8">
                            <h3 className="text-base font-medium text-black mb-4">Link From Library</h3>
                            <div className="space-y-3">
                                {/* Content Library */}
                                <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-3">
                                        <Icon name='library-icon' />

                                        <div className="text-left">
                                            <p className="font-medium text-black">Content Library</p>
                                            <p className="text-sm text-[#141b3499]">Previously uploaded content</p>
                                        </div>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>

                                {/* Drip Content Schedule */}
                                <button className="w-full p-4 bg-gray-50 rounded-lg flex items-center justify-between hover:bg-gray-100 transition">
                                    <div className="flex items-center gap-3">
                                        <Icon name='schedule-icon' />

                                        <div className="text-left">
                                            <p className="font-medium text-black">Drip Content Schedule</p>
                                            <p className="text-sm text-[#141b3499]">Schedule content library</p>
                                        </div>
                                    </div>
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Recording Tips Toggle */}
                        <div className="mb-8">
                            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                <label className="text-base font-medium text-black">Recording Tips</label>

                                <Switch
                                    value={recordingTipsEnabled}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRecordingTipsEnabled(e.target.checked)}
                                />
                            </div>
                        </div>

                        {/* External Links */}
                        <div>
                            <h3 className="text-base font-medium text-black mb-4">External Links</h3>
                            <div className="space-y-3">
                                <input
                                    type="text"
                                    placeholder="YouTube URL"
                                    value={youtubeUrl}
                                    onChange={(e) => setYoutubeUrl(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Google Drive Link"
                                    value={googleDriveUrl}
                                    onChange={(e) => setGoogleDriveUrl(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Hudl Video Link"
                                    value={hudlUrl}
                                    onChange={(e) => setHudlUrl(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-full bg-[#FFFFFF4D] rounded-2xl p-8 shadow-sm'>
                    <h2 className="text-base font-medium text-black mb-6">Content Preview</h2>

                    {/* Preview Cards Container */}
                    <div className="space-y-4 mb-8">
                        {uploadedFiles.length > 0 ? (
                            uploadedFiles.map((file) => (
                                <div key={file.id} className="bg-white border border-gray-200 rounded-xl p-4">
                                    {/* Thumbnail */}
                                    <div className="relative w-full h-48 bg-gray-200 rounded-lg overflow-hidden mb-4">
                                        <Image
                                            width={100}
                                            height={100}
                                            src={file.thumbnail || "/placeholder.svg"}
                                            alt={file.name}
                                            className="w-full h-full object-cover"
                                            unoptimized
                                        />
                                        {/* Play button overlay - only for videos */}
                                        {file.type === 'Video' && (
                                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                                                <div className="w-12 h-12 bg-white bg-opacity-80 rounded-full flex items-center justify-center">
                                                    <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* File Info */}
                                    <div className="mb-4">
                                        <h3 className="text-lg font-semibold text-black mb-2">{file.name}</h3>
                                        <p className="text-[#141b3499]">
                                            {file.size} • {file.type}
                                        </p>
                                    </div>

                                    {/* Delete Button */}
                                    <button
                                        onClick={() => deleteFile(file.id)}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-500 rounded-full hover:bg-red-100 transition font-medium"
                                    >
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                                        </svg>
                                        Delete
                                    </button>
                                </div>
                            ))
                        ) : (
                            /* Empty State */
                            <div className="border-2 border-dashed border-blue-400 rounded-2xl p-16 flex flex-col items-center justify-center bg-white">
                                <button className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600 transition mb-4">
                                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                                    </svg>
                                </button>
                                <p className="text-[#141b3499] text-sm text-nowrap">Add content to see preview</p>
                            </div>
                        )}
                    </div>

                    {/* File Statistics */}
                    <div className="flex flex-col justify-between gap-3 text-gray-700">
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-base ">
                                Total Files:
                            </p>
                            <span className="font-medium text-gray-700">{totalFiles}</span>
                        </div>
                        <div className="flex items-center justify-between gap-2">
                            <p className="text-base ">
                                Total Size:
                            </p>
                            <span className="font-medium text-gray-700">{formatFileSize(totalSize)}</span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskAttachContent;