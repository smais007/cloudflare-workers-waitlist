export function Signup() {
  return (
    <div>
      <form className="mx-auto mt-10 flex max-w-md">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          autoComplete="email"
          className="min-w-0 flex-auto rounded-l-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:outline-white/20"
        />
        <button
          type="submit"
          className="flex-none rounded-r-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white dark:shadow-none"
        >
          Notify me
        </button>
      </form>
    </div>
  );
}
