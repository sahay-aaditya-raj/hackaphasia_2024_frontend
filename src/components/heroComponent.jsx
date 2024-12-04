export default function Hero() {
    return (
        <section 
            className="bg-primary text-secondary py-20 md:py-40 relative overflow-hidden rounded-lg mx-4 md:mx-16"
            style={{
                backgroundImage: 'url("/images/children.webp")',  // Reference the image in the public folder
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div 
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm rounded-lg"
            ></div> 
            <div className="container mx-auto text-center px-4 relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
                    Empowering Education for All
                </h1>
                <p className="text-lg md:text-xl mb-6 text-white">
                    Our AI-based education platform offers quizzes tailored for
                    disadvantaged communities. Learn, grow, and excel with age-appropriate quizzes,
                    including image, audio, and paragraph-based questions.
                </p>
            </div>
        </section>
    );
}
