import { useAuth0 } from '@auth0/auth0-react';

export const ProtectedAPI = () => {
  const { getAccessTokenSilently } = useAuth0();

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently();
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      alert(`✅ API Response:\nTitle: ${data.title}\n\n(In real apps, backend validates token)`);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to call API — but this is expected for demo purposes.");
    }
  };

  return (
    <button
      onClick={callApi}
      className="px-6 py-2 bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-green-300"
    >
     🌐 CallCheck Protected API
    </button>
  );
};