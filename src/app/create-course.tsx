"use client";

import { useState } from "react";

const CourseManagement = () => {
    const [courses, setCourses] = useState([
        // {
        //     courseTitle: "Introduction to React",
        //     modules: [
        //         { moduleTitle: "Getting Started", content: "Introduction video link" },
        //         { moduleTitle: "JSX Basics", content: "PDF guide link" }
        //     ],
        //     prerequisite: "Basic JavaScript",
        //     progress: 30
        // },
        // {
        //     courseTitle: "Advanced JavaScript",
        //     modules: [
        //         { moduleTitle: "Closures", content: "Article link" },
        //         { moduleTitle: "Async/Await", content: "Video tutorial link" }
        //     ],
        //     prerequisite: "Intermediate JavaScript",
        //     progress: 50
        // }
    ]);

    const [courseTitle, setCourseTitle] = useState('');
    const [moduleTitle, setModuleTitle] = useState('');
    const [content, setContent] = useState('');
    const [prerequisite, setPrerequisite] = useState('');
    const [progress, setProgress] = useState(0);

    // New state for managing uploaded file
    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files ? e.target.files[0] : null;
        if (uploadedFile) {
            setFile(uploadedFile);
            setContent(URL.createObjectURL(uploadedFile)); // Generate a preview URL
        }
    };

    const handleAddCourse = () => {
        const newCourse = {
            courseTitle,
            modules: [{ moduleTitle, content: file ? URL.createObjectURL(file) : content }],
            prerequisite,
            progress
        };
        setCourses([...courses, newCourse]);

        // Reset form
        setCourseTitle('');
        setModuleTitle('');
        setContent('');
        setPrerequisite('');
        setProgress(0);
        setFile(null);  // Reset file input
    };

    return (
        <div className="bg-white min-h-screen py-8 px-4">
            <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Course Management</h2>
                
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-gray-700">Create a New Course</h3>
                    
                    <input
                        type="text"
                        placeholder="Course Title"
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="Module Title"
                        value={moduleTitle}
                        onChange={(e) => setModuleTitle(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    
                    {/* File input for content upload */}
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {file && (
                        <p className="text-gray-500">Selected file: {file.name}</p>
                    )}
                    
                    <input
                        type="text"
                        placeholder="Prerequisite (optional)"
                        value={prerequisite}
                        onChange={(e) => setPrerequisite(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    />
                    {/* <input
                        type="number"
                        placeholder="Progress (%)"
                        value={progress}
                        onChange={(e) => setProgress(Number(e.target.value))}
                        className="w-full p-2 border border-gray-300 rounded-md"
                    /> */}
                    
                    <button
                        onClick={handleAddCourse}
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                    >
                        Add Course
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto mt-8">
                <h3 className="text-2xl font-semibold text-gray-700 mb-4">Courses</h3>
                {courses.length === 0 ? (
                    <p className="text-gray-500">No courses added yet.</p>
                ) : (
                    courses.map((course, index) => (
                        <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
                            <h4 className="text-xl font-semibold text-gray-800">{course.courseTitle}</h4>
                            <p className="text-gray-600"><strong>Prerequisite:</strong> {course.prerequisite || "None"}</p>
                            <p className="text-gray-600"><strong>Progress:</strong> {course.progress}%</p>
                            <h5 className="text-lg font-semibold mt-4">Modules:</h5>
                            {course.modules.map((module, idx) => (
                                <div key={idx} className="mt-3">
                                    <p className="text-gray-600"><strong>Module Title:</strong> {module.moduleTitle}</p>
                                    {module.content && (
                                        <p className="text-gray-600">
                                            <strong>Content:</strong>{" "}
                                            {module.content.startsWith("blob:") ? (
                                                <a href={module.content} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                                                    View uploaded content
                                                </a>
                                            ) : (
                                                module.content
                                            )}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CourseManagement;
