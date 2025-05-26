'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: "Login",
// };

const LoginPage = () => {
  return (
    <div>
      <Card className="max-w-md mx-auto mt-24 rounded-2xl shadow-lg border border-gray-200 bg-white">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">Welcome Back</CardTitle>
          <CardDescription className="text-gray-500 mt-1">Please log in to continue</CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-300"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-red-400 focus:outline-none focus:ring-1 focus:ring-red-300"
          />
          <button className="mt-2 w-full rounded-lg bg-red-500 py-2 text-white font-semibold hover:bg-red-600 transition duration-200">
            Login
          </button>
        </CardContent>

        <CardFooter className="text-center text-sm text-gray-500">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-red-500 hover:underline ml-1">
            Sign up
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default LoginPage;
