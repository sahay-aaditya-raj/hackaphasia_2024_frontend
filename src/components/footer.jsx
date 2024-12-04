export default function Footer() {
    return (
        <footer className="bg-secondary text-primary py-4 mt-8">
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
