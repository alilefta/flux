import { SignUp } from "@clerk/nextjs";
import { shadcn, experimental_createTheme } from "@clerk/themes";

export default function SignUpPage() {
	const theme = experimental_createTheme({
		theme: shadcn,
		elements: [{}],
	});
	return (
		<main className="w-full h-dvh py-8 flex-1 flex items-center justify-center">
			<SignUp
				appearance={{
					layout: {
						shimmer: true,
						animations: true,
					},
					theme: theme,
				}}
			/>
		</main>
	);
}
