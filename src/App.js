import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { Profile } from './components/Profile';
import { ProtectedAPI } from './components/ProtectedAPI';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto"></div>
          <p className="mt-4 text-white text-lg">Loading SSO...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-white mb-4 tracking-tight">
            🎓 React SSO Demo
          </h1>
          <p className="text-xl text-purple-200">
            OAuth 2.0 + OpenID Connect with Auth0
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
          {!isAuthenticated ? (
            <div className="text-center py-16">
              <div className="mb-6">
                <svg className="w-20 h-20 mx-auto text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v-2l1-1V9a2 2 0 012-2h2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Welcome!</h2>
              <p className="text-purple-100 text-lg mb-8 max-w-md mx-auto">
                Please log in to access your secure dashboard. Single Sign-On powered by Auth0.
              </p>
              <div className="animate-bounce">
                <LoginButton />
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Profile Section */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <Profile />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <ProtectedAPI />
                <LogoutButton />
              </div>

              {/* Footer Note */}
              <div className="text-center mt-6 pt-6 border-t border-white/10">
                <p className="text-purple-200 text-sm">
                  Last updated: {new Date().toLocaleString()}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12">
          <p className="text-purple-300">
            Built with ❤️ using React + Auth0 + Netlify
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;