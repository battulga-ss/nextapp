import { signIn } from "@/lib/auth";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center gap-4">
      <div className="rounded-lg border p-8 shadow-md w-full max-w-sm space-y-3">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <form
          action={async () => {
            "use server";
            await signIn("google", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="w-full rounded bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Sign in with Google
          </button>
        </form>
      </div>

      <div className="rounded-lg border p-8 shadow-md w-full max-w-sm space-y-3">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign in</h1>
        <form
          action={async () => {
            "use server";
            await signIn("github", { redirectTo: "/dashboard" });
          }}
        >
          <button
            type="submit"
            className="w-full rounded bg-white border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50"
          >
            Sign in with Github
          </button>
        </form>
      </div>

      <div className="rounded-lg border p-8 shadow-md w-full max-w-sm space-y-3 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-6 text-center">No account?</h1>
        <a
          href="/register"
          className="w-full text-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Register
        </a>
      </div>
    </div>
  );
}
