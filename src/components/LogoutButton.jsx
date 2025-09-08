import { useAuth0 } from '@auth0/auth0-react';

export const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      className="px-6 py-2 bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-600 hover:to-pink-700 text-white font-medium rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-red-300"
    >
      🚪 Log Out
    </button>
  );
};