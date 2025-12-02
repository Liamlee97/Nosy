import { Loader2 } from "lucide-react";

export default function LoadingSpinner() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-12 w-12 animate-spin text-blue-600" />
                <p className="text-gray-500 font-medium animate-pulse">Loading...</p>
            </div>
        </div>
    );
}
