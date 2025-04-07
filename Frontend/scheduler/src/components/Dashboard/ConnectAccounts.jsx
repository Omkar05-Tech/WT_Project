import { useEffect, useState } from "react";
import ConnectAccountsLoading from "../LoadingComponents/ConnectAccountsLoading";

export default function ConnectedAccounts() {
    const [isLoading, setIsLoading] = useState(true);
    const [connectedPlatforms, setConnectedPlatforms] = useState([]); // Store only connected platforms from backend
    const [error, setError] = useState(null);

    const allApps = [
        { icon: 'facebook-f', color: 'bg-blue-500', name: 'Facebook', platform: 'facebook' },
        { icon: 'instagram', color: 'bg-gradient-to-br from-pink-500 to-yellow-500', name: 'Instagram', platform: 'instagram' },
        { icon: 'twitter', color: 'bg-blue-400', name: 'Twitter', platform: 'twitter' },
        { icon: 'youtube', color: 'bg-red-500', name: 'YouTube', platform: 'youtube' },
        { icon: 'whatsapp', color: 'bg-green-500', name: 'WhatsApp', platform: 'whatsapp' },
        { icon: 'plus', color: 'bg-gray-800', name: 'Add More', platform: 'add' } // Use a unique platform for the add button
    ];

    useEffect(() => {
        async function fetchConnectedAccounts() {
            setIsLoading(true);
            setError(null);
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setError("No token found. Please log in.");
                    setIsLoading(false);
                    return;
                }

                const response = await fetch('http://localhost:5173/api/ConnectedAccounts', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status ${response.status}`);
                }

                const contentType = response.headers.get("content-type");
                if (!contentType || !contentType.includes("application/json")) {
                    throw new Error("Invalid JSON response");
                }

                const data = await response.json();
                setConnectedPlatforms(data);
            } catch (error) {
                console.error('Error fetching connected Accounts: ', error);
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        }

        fetchConnectedAccounts();
    }, []);

    const handleConnectButtonClick = (platform) => {
        if (platform !== 'add') {
            console.log(`Connect/Disconnect button clicked for ${platform}`);
            // Implement your logic to initiate connection/disconnection
        } else {
            console.log("Add More button clicked");
            // Implement logic to show options for adding more accounts
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <i className="fas fa-link mr-3"></i> Connected Accounts
            </h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="flex flex-wrap gap-8 justify-center">
                {isLoading ? (
                    <ConnectAccountsLoading />
                ) : (
                    allApps.map((app, index) => (
                        <div className="text-center" key={index}>
                            <div
                                className={`social-circle ${app.color} text-white cursor-pointer ${app.platform === 'add' ? 'border-2 border-dashed' : ''}`}
                                onClick={() => handleConnectButtonClick(app.platform)}
                            >
                                <i className={`fab fa-${app.icon} text-3xl mb-2 ${app.platform === 'add' ? 'fa-plus' : ''}`}></i>
                                <span>{app.name}</span>
                            </div>
                            {app.platform !== 'add' && (
                                <span className={`text-sm font-bold mt-1 ${connectedPlatforms.includes(app.platform) ? 'text-green-500' : 'text-red-500'}`}>
                                    {connectedPlatforms.includes(app.platform) ? 'Connected' : 'Not Connected'}
                                </span>
                            )}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}