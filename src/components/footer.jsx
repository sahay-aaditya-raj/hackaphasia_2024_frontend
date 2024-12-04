export default function Footer({ stick }) {
    return (
        <footer className={`bg-secondary text-primary py-4 mt-8 ${stick ? "fixed bottom-0 left-0 right-0" : "relative"}`}>
            <div className="container mx-auto text-center">
                {/* Copyright or Contact Information */}
                <p className="text-sm">
                    &copy; {new Date().getFullYear()} Edu Application. All Rights Reserved.
                </p>
                <p className="text-sm mt-2">
                    Contact us at: <a href="mailto:info@eduapplication.com" className="text-primaryHover hover:underline">info@eduapplication.com</a>
                </p>
            </div>
        </footer>
    );
}
