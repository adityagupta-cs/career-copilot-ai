import Button from "./Button";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

        <div className="flex-1">

          <p className="text-2xl text-blue-400 font-semibold mb-4">
            AI Powered Career Platform
          </p>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
            Ace Your Next
            <span className="text-blue-500"> Interview </span>
            With AI
          </h1>

          <p className="text-gray-400 mt-8 text-lg leading-8">
            Practice mock interviews, improve your resume,
            track your coding journey and land your dream job —
            all in one platform.
          </p>

          <div className="flex gap-5 mt-10">

            <Button>
              Get Started
            </Button>

            <Button primary={false}>
              Watch Demo
            </Button>

          </div>

        </div>

        <div className="flex-1 flex justify-center">

          <div className="w-96 h-96 rounded-full bg-blue-600/20 flex items-center justify-center">

            <div className="text-8xl">
                🤖
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;