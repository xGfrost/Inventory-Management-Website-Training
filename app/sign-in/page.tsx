import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage() {
    return (
        <div className="min-h-screen flex  items-center justify-center">
            <div className="max-w-md w-full space-y-8">
                <SignIn />
                <Link href="/">Go back home </Link>
            </div>
        </div>
    )
}