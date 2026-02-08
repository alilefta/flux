import { SignIn } from "@clerk/nextjs";
export default async function SignInPage() {
	return (
		<main className="w-full h-screen flex-1 flex items-center justify-center">
			<SignIn />;
		</main>
	);
}
