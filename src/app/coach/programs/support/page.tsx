"use client";
import Container from '@/components/ui/Container'
import Icon from '@/components/ui/Icon';
import React, { useState, useRef, useEffect } from 'react'
import SupportCard from './_components/SupportCard';
import FAQ from './_components/faq';
import NeedMoreHelp from './_components/NeedMoreHelp';
import PlayzoneSupportCard from './_components/PlayzoneSupportCard';
import TrustAndSecurity from './_components/TrustAndSecurity';
import PopupModal from '@/components/Modal/PopupModal';

const supportTopics = [
    {
        icon: 'rocket',
        title: 'Getting Started',
        description: 'Learn how to set up your Playzone account.'
    },
    {
        icon: 'document-icon',
        title: 'Uploading Documents',
        description: 'Step-by-step instructions for ID, bank info, and program forms.'
    },
    {
        icon: 'wallet-icon',
        title: 'Payment Status',
        description: 'Understand payment schedules, statuses, and delays.'
    },
    {
        icon: 'progress-icon',
        title: 'Program Progress',
        description: 'Track milestones, tasks, and requirements.'
    },
    {
        icon: 'settings-icon',
        title: 'Account & Profile Settings',
        description: 'Update personal info, password, and security preferences.'
    },
    {
        icon: 'support-icon',
        title: 'Technical Support',
        description: 'Find answers to common questions and issues.'
    },
];

const Page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [message, setMessage] = useState('');

    // Refs for file inputs
    const imageInputRef = useRef<HTMLInputElement>(null);
    const documentInputRef = useRef<HTMLInputElement>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const audioChunksRef = useRef<Blob[]>([]);
    const streamRef = useRef<MediaStream | null>(null);
    const cameraStreamRef = useRef<MediaStream | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            // Stop recording if component unmounts
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
            // Stop all tracks
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
            }
            // Stop camera stream
            if (cameraStreamRef.current) {
                cameraStreamRef.current.getTracks().forEach(track => track.stop());
            }
        };
    }, []);

    // Handle video stream when camera opens
    useEffect(() => {
        if (isCameraOpen && cameraStreamRef.current && videoRef.current) {
            videoRef.current.srcObject = cameraStreamRef.current;
            videoRef.current.play().catch(err => {
                console.error('Error playing video:', err);
            });
        }
        return () => {
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
        };
    }, [isCameraOpen]);

    // Camera handler
    const handleCameraClick = async () => {
        if (isCameraOpen) {
            // Close camera
            if (cameraStreamRef.current) {
                cameraStreamRef.current.getTracks().forEach(track => track.stop());
                cameraStreamRef.current = null;
            }
            if (videoRef.current) {
                videoRef.current.srcObject = null;
            }
            setIsCameraOpen(false);
        } else {
            // Open camera
            try {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: 'user' }
                });
                cameraStreamRef.current = stream;
                setIsCameraOpen(true);
            } catch (error) {
                console.error('Error accessing camera:', error);
                alert('Could not access camera. Please check permissions.');
            }
        }
    };

    // Capture photo from camera
    const capturePhoto = () => {
        if (videoRef.current && canvasRef.current && cameraStreamRef.current) {
            const video = videoRef.current;
            const canvas = canvasRef.current;

            // Set canvas dimensions to match video
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            // Draw video frame to canvas
            const ctx = canvas.getContext('2d');
            if (ctx) {
                ctx.drawImage(video, 0, 0);

                // Convert canvas to blob
                canvas.toBlob((blob) => {
                    if (blob) {
                        // Create a File object from the blob
                        const file = new File([blob], `camera-photo-${Date.now()}.png`, {
                            type: 'image/png'
                        });
                        console.log('Photo captured:', file);
                        // You can add file handling logic here (e.g., upload to server)

                        // Close camera after capture
                        cameraStreamRef.current?.getTracks().forEach(track => track.stop());
                        cameraStreamRef.current = null;
                        setIsCameraOpen(false);
                    }
                }, 'image/png');
            }
        }
    };

    // Image handler
    const handleImageClick = () => {
        imageInputRef.current?.click();
    };

    // Document handler
    const handleDocumentClick = () => {
        documentInputRef.current?.click();
    };

    // File change handlers
    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            // Handle image file
            console.log('Image selected:', files[0]);
            // You can add file handling logic here
        }
        // Reset input to allow selecting the same file again
        if (imageInputRef.current) {
            imageInputRef.current.value = '';
        }
    };

    const handleDocumentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            // Handle document file
            console.log('Document selected:', files[0]);
            // You can add file handling logic here
        }
        // Reset input to allow selecting the same file again
        if (documentInputRef.current) {
            documentInputRef.current.value = '';
        }
    };

    // Microphone handler
    const handleMicrophoneClick = async () => {
        if (isRecording) {
            // Stop recording
            if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
                mediaRecorderRef.current.stop();
            }
            // Stop all tracks
            if (streamRef.current) {
                streamRef.current.getTracks().forEach(track => track.stop());
                streamRef.current = null;
            }
            setIsRecording(false);
        } else {
            // Start recording
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                streamRef.current = stream;
                const mediaRecorder = new MediaRecorder(stream);
                mediaRecorderRef.current = mediaRecorder;
                audioChunksRef.current = [];

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0) {
                        audioChunksRef.current.push(event.data);
                    }
                };

                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
                    // Handle the recorded audio
                    console.log('Audio recorded:', audioBlob);
                    // You can add audio handling logic here (e.g., upload to server)

                    // Stop all tracks
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach(track => track.stop());
                        streamRef.current = null;
                    }
                };

                mediaRecorder.start();
                setIsRecording(true);
            } catch (error) {
                console.error('Error accessing microphone:', error);
                alert('Could not access microphone. Please check permissions.');
            }
        }
    };

    return (
        <div>
            <Container>
                <div className="w-full space-y-8 p-5">
                    {/* Header Section */}
                    <div
                        style={{ borderRadius: "30px", background: "rgba(255, 255, 255, 0.30)" }}
                        className="w-full backdrop-blur-3xl p-8 border border-white"
                    >
                        <div className="flex items-center justify-between w-full">
                            <div className="flex flex-col gap-2 lg:w-[560px] w-full">
                                <h3 className="text-xl font-medium text-[#000]">
                                    Support & Help Center
                                </h3>
                                <p className="text-sm text-[#141b3499]">
                                    Whether you need quick answers, step-by-step guides, or personal assistance, we're here to make your journey seamless.</p>
                            </div>
                            <div className="relative max-lg:hidden">
                                <input
                                    type="text"
                                    placeholder="Search For help topic..."
                                    className="w-80 h-11 pl-10 pr-4 bg-[#ffffff4D]  border border-white rounded-full  text-sm text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50"
                                />
                                <Icon
                                    name="search"
                                    height={20}
                                    width={20}
                                    className="absolute left-3 top-1/2 -translate-y-1/2  text-[#595F70]"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Support Cards Grid: 3 columns */}
                    <div
                        // style={{ borderRadius: "30px", background: "rgba(255, 255, 255, 0.30)" }}
                        className="w-full backdrop-blur-3xl p-8 border border-white"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {supportTopics.map((topic, index) => (
                                <SupportCard
                                    key={index}
                                    icon={topic.icon}
                                    title={topic.title}
                                    description={topic.description}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Main Content Grid: 2 Columns (FAQ 2-col, Need More Help 1-col) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Column 1-2: FAQ (2 columns grid) */}
                        <div className="lg:col-span-2 flex flex-col">
                            <FAQ />
                            <PlayzoneSupportCard />
                        </div>

                        {/* Column 3: Need More Help (1 column) */}
                        <div className="lg:col-span-1 flex flex-col gap-6">
                            <NeedMoreHelp setIsOpenModal={setIsOpen} />
                            <TrustAndSecurity />
                        </div>
                    </div>

                    {/* Playzone Support Card - Under FAQ Section */}
                </div>
            </Container>
            <PopupModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                {/* <div className="w-full max-w-[650px] overflow-hidden rounded-[32px] bg-white shadow-[0px_24px_60px_rgba(16,30,67,0.08)]"> */}
                {/* Modal */}
                <div className="relative w-full max-w-[650px] h-[650px] bg-gradient-to-b from-blue-50 to-blue-100 rounded-2xl shadow-2xl flex flex-col mx-4">
                    {/* Header */}
                    <div className="flex items-center justify-between px-8 py-6 border-b border-blue-200/50">
                        <h2 className="text-2xl font-bold text-gray-900">Live Chat Support</h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-900 hover:bg-gray-100 transition-colors"
                        >
                            <Icon name="cancel-icon" width={20} height={20} />

                        </button>
                    </div>

                    {/* Chat Messages */}
                    <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
                        {/* Message 1 - Received */}
                        <div className="flex flex-col items-start">
                            <div className="bg-white rounded-3xl px-6 py-4 shadow-sm max-w-md">
                                <p className="text-gray-900 text-lg">
                                    Hello! How Can I Assist you Today?
                                </p>
                            </div>
                            <span className="text-sm text-gray-600 mt-2 ml-2">12:03 PM</span>
                        </div>

                        {/* Message 2 - Sent */}
                        <div className="flex flex-col items-end">
                            <div className="bg-blue-500 rounded-3xl px-6 py-4 shadow-md max-w-md flex items-center gap-2">
                                <p className="text-white text-lg">
                                    How do I reset my password?
                                </p>
                                <svg
                                    className="w-5 h-5 text-white flex-shrink-0"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <span className="text-sm text-gray-600 mt-2 mr-2">12:03 PM</span>
                        </div>

                        {/* Message 3 - Received */}
                        <div className="flex flex-col items-start">
                            <div className="bg-white rounded-3xl px-6 py-4 shadow-sm max-w-md">
                                <p className="text-gray-900 text-lg">
                                    Go to the login page, click &quot;Forgot Password&quot;, and follow
                                    the reset link sent to your email.
                                </p>
                                <span className="text-xl ml-1">😍</span>
                            </div>
                            <span className="text-sm text-gray-600 mt-2 ml-2">12:03 PM</span>
                        </div>
                    </div>

                    {/* Camera Preview Modal */}
                    {isCameraOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                            <div className="relative bg-white rounded-2xl p-6 max-w-md w-full mx-4">
                                <div className="relative">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        playsInline
                                        className="w-full rounded-lg"
                                        style={{ maxHeight: '400px' }}
                                    />
                                    <canvas ref={canvasRef} className="hidden" />
                                </div>
                                <div className="flex items-center justify-center gap-4 mt-4">
                                    <button
                                        onClick={handleCameraClick}
                                        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-full transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={capturePhoto}
                                        className="w-16 h-16 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors shadow-lg"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-full border-4 border-blue-500"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Input Bar */}
                    <div className="px-8 py-6 border-t border-blue-200/50">
                        {/* Hidden File Inputs */}
                        <input
                            type="file"
                            ref={imageInputRef}
                            onChange={handleImageChange}
                            accept="image/*"
                            className="hidden"
                        />
                        <input
                            type="file"
                            ref={documentInputRef}
                            onChange={handleDocumentChange}
                            accept=".pdf,.doc,.docx,.txt"
                            className="hidden"
                        />

                        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-3 shadow-md">
                            {/* Camera Icon */}
                            <button
                                onClick={handleCameraClick}
                                className={`shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isCameraOpen
                                    ? 'bg-blue-500 hover:bg-blue-600'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <Icon
                                    name="camera-icon"
                                    width={20}
                                    height={20}
                                    color={isCameraOpen ? 'white' : undefined}
                                />
                            </button>

                            {/* Image Icon */}
                            <button
                                onClick={handleImageClick}
                                className="flex-shrink-0 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <Icon name="gallery-icon" width={20} height={20} />
                            </button>

                            {/* Document Icon */}
                            <button
                                onClick={handleDocumentClick}
                                className="flex-shrink-0 w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <Icon name="doc-image-icon" width={20} height={20} />
                            </button>

                            {/* Input Field */}
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 bg-transparent outline-none text-gray-900 placeholder-gray-400 text-base"
                            />

                            {/* Microphone Icon */}
                            <button
                                onClick={handleMicrophoneClick}
                                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full transition-colors ${isRecording
                                    ? 'bg-red-500 hover:bg-red-600'
                                    : 'hover:bg-gray-100'
                                    }`}
                            >
                                <Icon
                                    name="microphone-icon"
                                    width={20}
                                    height={20}
                                    color={isRecording ? 'white' : undefined}
                                />
                            </button>

                            {/* Send Button */}
                            <button className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-full transition-colors shadow-md">
                                <Icon name="send-sms-icon" width={20} height={20} color="white" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </PopupModal>
        </div>
    )
}

export default Page