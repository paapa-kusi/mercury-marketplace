import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
