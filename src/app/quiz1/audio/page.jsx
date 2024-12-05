'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Footer from "@/components/footer";
import Header from "@/components/header";

export default function AudioQuiz() {
  const [audioData, setAudioData] = useState(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [marks, setMarks] = useState(0); // State to track marks
  const [answeredQuestions, setAnsweredQuestions] = useState({}); // To track which questions have been answered
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/quiz1/audio.json");
      const json = await res.json();
      setAudioData(json);
    };
    fetchData();

    const startTime = Date.now();
    const intervalId = setInterval(() => {
      setTimeTaken(Math.floor((Date.now() - startTime) / 1000)); // Time in seconds
    }, 1000);

    return () => clearInterval(intervalId); // Clean up timer
  }, []);

  const handleNextSection = () => {
    // Store the marks and time taken for audio section
    const quizData = JSON.parse(localStorage.getItem("quiz1")) || {};
    quizData.audio = { marks, timeTaken };
    localStorage.setItem("quiz1", JSON.stringify(quizData));

    router.push("/quiz1/image"); // Navigate to the next section (or finish)
  };

  const handleAnswerChange = (questionId, selectedOption) => {
    // Only update if the question has not been answered yet
    if (!answeredQuestions[questionId]) {
      const question = audioData.questions[questionId]; // Using index to access the question directly
      if (question.correct_answer === selectedOption) {
        setMarks(prevMarks => prevMarks + 1); // Increase marks if answer is correct
      }
  
      // Mark the question as answered
      setAnsweredQuestions(prevState => ({
        ...prevState,
        [questionId]: selectedOption
      }));
    }
  };
  

  if (!audioData) return <div className="text-center text-lg">Loading...</div>;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-primary py-8">
        <div className="container mx-auto p-6 md:p-10 bg-primary rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold text-center text-secondary mb-4">Audio Quiz</h2>
          <p className="text-lg leading-relaxed text-gray-800 mb-6">Listen to the audio and answer the following questions:</p>
          <div className="space-y-6">
            {/* audio play */}
            <div className="flex justify-center mb-8">
              <audio controls className="w-full max-w-3xl">
                <source src="/quiz1/audio.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
            </div>
            
            {/* questions */}
            {audioData.questions.map((q, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-lg shadow-md">
                <p className="text-xl font-semibold text-gray-900">{q.question}</p>
                <ul className="mt-4 space-y-3">
                  {Object.entries(q.options).map(([key, value]) => (
                    <li key={key} className="flex items-center space-x-3">
                      <input 
                        type="radio" 
                        name={`q${index}`} 
                        value={key} 
                        className="h-5 w-5 text-indigo-600 border-gray-300 rounded-full focus:ring-indigo-500"
                        onChange={() => handleAnswerChange(index, key)} 
                        disabled={!!answeredQuestions[index]}
                      />
                      <label className="text-lg text-gray-700">{value}</label>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={handleNextSection} 
              className="bg-secondary text-white py-2 px-6 rounded-lg hover:bg-secondaryHover focus:outline-none transition duration-300"
            >
              Next Section
            </button>
            <div className="text-right text-gray-600">
              <p className="text-lg">Time Taken: {timeTaken} seconds</p>
              <p className="text-lg">Marks: {marks}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
