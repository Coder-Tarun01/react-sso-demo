import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <div className="text-center">
      <img
        src={user.picture}
        alt={user.name}
        className="w-24 h-24 rounded-full mx-auto mb-4 shadow-lg border-4 border-white"
      />
      <h2 className="text-2xl font-bold text-white mb-1">{user.name}</h2>
      <p className="text-purple-200 mb-2">{user.email}</p>
      <div className="inline-block bg-white/10 px-3 py-1 rounded-full">
        <span className="text-sm text-purple-300">
          Logged in via: {user.sub.split('|')[0]}
        </span>
      </div>
    </div>
  );
};