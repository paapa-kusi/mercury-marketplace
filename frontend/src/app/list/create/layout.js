// Layout component for create listing page with authentication protection
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";

// Wraps create listing page with authentication checks
export default function RootLayout({ children }) {
  return (
    <>
      {/* Show content only to signed-in users */}
      <SignedIn>{children}</SignedIn>
      {/* Redirect to sign-in page for non-authenticated users */}
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
