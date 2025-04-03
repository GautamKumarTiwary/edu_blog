"use client"
import { useState } from "react";

export default function Page() {
    const [categoryName, setCategoryName] = useState("");
    const [categorySlug, setCategorySlug] = useState("");
    const [image, setImage] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const handleCreate = async () => {
        setIsLoading(true);
        setError("");

        try {
            // Simulate API request (Replace with actual API call)
            await new Promise((resolve) => setTimeout(resolve, 1500));
            
            setIsDone(true);
            alert("Category Created Successfully!");
        } catch (err) {
            setError("Failed to create category.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="w-full p-6">
            <h1 className="font-bold">Categories | Form</h1>
            <section className="flex">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleCreate();
                    }}
                    className="flex flex-col gap-2 bg-blue-50 rounded-xl p-7"
                >
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-500">
                            Category Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Enter Category Name"
                            type="text"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-sm text-gray-500">
                            Category Slug <span className="text-red-500">*</span>
                        </label>
                        <input
                            className="px-4 py-2 rounded-full border bg-gray-50"
                            placeholder="Enter Category Slug"
                            type="text"
                            value={categorySlug}
                            onChange={(e) => setCategorySlug(e.target.value)}
                            required
                        />
                    </div>
                    
                    {error && <p className="text-red-500 text-sm">{error}</p>}

                    <button
                        type="submit"
                        disabled={isLoading || isDone}
                        className="bg-blue-500 rounded-full px-4 py-2 text-white"
                    >
                        {isLoading ? "Loading..." : "Create"}
                    </button>
                </form>
            </section>
        </main>
    );
}
