import { Input } from "./input";
import { Button } from "./moving-border";

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="relative px-8 py-12 md:py-20 rounded-[3rem] overflow-hidden">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mt-8 py-4 text-center text-4xl font-medium tracking-tight md:text-7xl">
              Stay up to date
            </h2>
            <p className="mb-8 text-lg">
              Stay in the loop with articles, courses, and much more by
              subscribing to our newsletter.
            </p>
            <form className="inline-flex w-full max-w-sm">
              <div className="flex flex-col justify-center w-full mx-auto sm:flex-row sm:max-w-none">
                <Input
                  id="email"
                  placeholder="johndoe@example.com"
                  type="email"
                />
              </div>
            </form>
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
