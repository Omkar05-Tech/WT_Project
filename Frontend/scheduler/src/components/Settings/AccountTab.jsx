// Frontend/components/Settings/AccountTab.jsx
import { useEffect, useState } from "react";

export default function AccountTab() {
    const [enteredValue, setEnteredvalue] = useState({
        name: '',
        email: '',
        timezone: '',
        phone: '',
        photoPreview: null,
    });
    const [error, setError] = useState(null);

    async function fetchUserData() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                setError('Authentication token not found.');
                return;
            }
            const response = await fetch('http://localhost:5173/api/user/userData', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch user data');
            }
            const data = await response.json();
            setEnteredvalue(data);
        } catch (err) {
            console.error('Error fetching user data:', err);
            setError(err.message);
        }
    }

    // async function handleSubmit(event) {
    //     event.preventDefault();
    //     setError(null);
    //     try {
    //         const token = localStorage.getItem('token');
    //         if (!token) {
    //             setError('Authentication token not found.');
    //             return;
    //         }
    //         const response = await fetch('http://localhost:3000/api/user/userData', {
    //             method: 'PUT',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             body: JSON.stringify(enteredValue),
    //         });
    //         if (!response.ok) {
    //             const errorData = await response.json();
    //             throw new Error(errorData.message || 'Failed to update profile');
    //         }
    //         alert('Profile updated successfully!');
    //     } catch (err) {
    //         console.error('Error updating user data:', err);
    //         setError(err.message);
    //     }
    // }

    async function handleSubmit(event) {
      event.preventDefault();
      setError(null);
      try {
          const token = localStorage.getItem('token');
          if (!token) {
              setError('Authentication token not found.');
              return;
          }
  
          const dataToSend = { ...enteredValue };
          // Remove photoPreview if it hasn't changed or if you don't want to send it on every update
          if (!dataToSend.photoPreview) {
              delete dataToSend.photoPreview;
          }
  
          const response = await fetch('http://localhost:3000/api/user/userData', {
              method: 'PUT',
              headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
              },
              body: JSON.stringify(dataToSend),
          });
          if (!response.ok) {
              const errorData = await response.json();
              throw new Error(errorData.message || 'Failed to update profile');
          }
          alert('Profile updated successfully!');
      } catch (err) {
          console.error('Error updating user data:', err);
          setError(err.message);
      }
  }

    function handleChange(identifier, event) {
        setEnteredvalue((prevValues) => ({
            ...prevValues,
            [identifier]: event.target.value,
        }));
    }

    function handlePhotoChange(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setEnteredvalue((prev) => ({
                    ...prev,
                    photoPreview: e.target.result,
                }));
            };
            reader.readAsDataURL(file);
        }
    }

    useEffect(() => {
        fetchUserData();
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className=" max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800">Account</h2>

            <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-sm">
                {/* Name Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={enteredValue.name}
                        onChange={(e) => handleChange('name', e)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        required
                    />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={enteredValue.email}
                        onChange={(e) => handleChange('email', e)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        required
                    />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        value={enteredValue.phone}
                        onChange={(e) => handleChange('phone', e)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                        placeholder="1234567890"
                        pattern="\d{10}"
                        minLength={10}
                        maxLength={10}
                    />
                    <p className="text-xs text-gray-500">10 digits without spaces or dashes</p>
                </div>

                {/* Timezone Field */}
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">Time Zone</label>
                    <select
                        name="timezone"
                        value={enteredValue.timezone}
                        onChange={(e) => handleChange('timezone', e)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                    >
                        <option value="">Select Time Zone</option>
                        <option value="UTC-5">UTC-5 (Eastern Time)</option>
                        <option value="UTC+0">UTC+0 (GMT)</option>
                        <option value="UTC+5:30">UTC+5:30 (India)</option>
                        <option value="UTC+8">UTC+8 (China)</option>
                    </select>
                </div>

                {/* Profile Photo */}
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Profile Photo</label>

                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            {enteredValue.photoPreview ? (
                                <img
                                    src={enteredValue.photoPreview}
                                    alt="Profile preview"
                                    className="w-20 h-20 rounded-full object-cover border-2 border-white shadow"
                                />
                            ) : (
                                <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-medium text-xl">
                                    {enteredValue.name ? enteredValue.name.charAt(0).toUpperCase() : 'U'}
                                </div>
                            )}
                        </div>

                        <div>
                            <label className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Change Photo
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handlePhotoChange}
                                    className="hidden"
                                />
                            </label>
                            <p className="text-xs text-gray-500 mt-1">JPG, PNG up to 2MB</p>
                        </div>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                        Update Profile
                    </button>
                </div>
            </form>
        </div>
    );
}