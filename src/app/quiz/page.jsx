'use client';
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { useRouter } from "next/navigation";

export default function Quiz() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name && age) {
            if (age < 8 || age > 18) {
                setError("Age must be between 8 and 18.");
                return;
            }

            localStorage.setItem("userName", name);
            localStorage.setItem("userAge", age);

            if (age >= 8 && age <= 12) {
                router.push("/quiz/1");
            } else if (age >= 13 && age <= 18) {
                router.push("/quiz/2");
            }

            setFormSubmitted(true);
            setError("");
        } else {
            setError("Please fill in both fields.");
        }
    };

    return (
        <>
            <Header />
            <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-80 sm:w-96">
                <div className="flex-grow">
                    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
                        {!formSubmitted ? (
                            <form onSubmit={handleSubmit}>
                                <h2 className="text-2xl font-bold mb-6 text-center text-secondary">Start the Quiz</h2>
                                <div className="mb-4">
                                    <label className="block text-lg font-medium text-secondary mb-2">Name</label>
                                    <input
                                        type="text"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="mb-6">
                                    <label className="block text-lg font-medium text-secondary mb-2">Age</label>
                                    <input
                                        type="number"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                        className="w-full p-3 border border-gray-300 rounded-lg"
                                        placeholder="Enter your age"
                                        required
                                        min="8"
                                        max="18"
                                    />
                                </div>
                                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                                <button
                                    type="submit"
                                    className="w-full bg-secondary text-white py-3 rounded-lg hover:bg-secondaryHover"
                                >
                                    Start Quiz
                                </button>
                            </form>
                        ) : (
                            <div className="text-center">
                                <h2 className="text-2xl font-bold text-secondary mb-4">Welcome, {name}!</h2>
                                <p className="text-lg mb-6">You are {age} years old. Click below to start the quiz!</p>
                                <button
                                    className="bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondaryHover"
                                    onClick={() => {
                                        
                                        if (age >= 8 && age <= 12) {
                                            router.push("/quiz/1");
                                        } else if (age >= 13 && age <= 18) {
                                            router.push("/quiz/2");
                                        }
                                    }}
                                >
                                    Start Quiz
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer stick={true} />
        </>
    );
}
