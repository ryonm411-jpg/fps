import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-base mb-2 shadow-sm">
            FP
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Sign In to Trading Terminal
          </h1>
          <p className="text-sm text-text-secondary">
            Access your virtual cash portfolio and live football player markets
          </p>
        </div>

        <div className="flex justify-center">
          <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            fallbackRedirectUrl="/markets"
          />
        </div>
      </div>
    </div>
  );
}
