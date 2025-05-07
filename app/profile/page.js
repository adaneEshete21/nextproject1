import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Profile() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full p-8 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-bold text-center">Access Denied</h2>
          <p className="mt-4 text-center">
            You must be signed in to view this page. <br />
            <Link href="/auth/signin">
              <a className="text-indigo-600 hover:text-indigo-500">Sign in</a>
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
            <button
              onClick={() => signOut()}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
            >
              Sign Out
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-medium text-gray-900">User Information</h2>
              <div className="mt-2 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6">
                <div>
                  <p className="text-sm text-gray-500">Name</p>
                  <p className="mt-1 text-sm text-gray-900">{session.user.name}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="mt-1 text-sm text-gray-900">{session.user.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}