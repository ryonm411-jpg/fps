import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-base px-4 py-12">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white font-bold text-base mb-2 shadow-sm">
            FP
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-text-primary">
            Create Virtual Trading Account
          </h1>
          <p className="text-sm text-text-secondary">
            Receive $10,000 in virtual trading capital to start trading
          </p>
        </div>

        <div className="flex justify-center">
          <SignUp
            routing="path"
            path="/sign-up"
            signInUrl="/sign-in"
            fallbackRedirectUrl="/markets"
          />
        </div>
      </div>
    </div>
  );
}
