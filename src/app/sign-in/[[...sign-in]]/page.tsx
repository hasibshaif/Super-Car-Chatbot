import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="flex justify-center auth-pages">
            <SignIn />
        </div>
    )
}