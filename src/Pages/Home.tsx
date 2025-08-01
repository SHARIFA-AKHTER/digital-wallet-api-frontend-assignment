
import AOS from "aos";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="w-full mx-auto px-6 py-20 text-center flex flex-col items-center justify-center min-h-[60vh]">
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight"
        data-aos="fade-down"
      >
        Welcome to <span className="text-indigo-600">Digital Wallet</span>
      </h1>

      <p
        className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Send, receive, and manage money with ease. <br className="hidden sm:block" />
        <span className="font-medium text-gray-800">Safe. Simple. Secure.</span>
      </p>

      <div
        className="mt-10 flex flex-col sm:flex-row gap-4"
        data-aos="zoom-in"
        data-aos-delay="400"
      >
        <a
          href="/register"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition"
        >
          Get Started
        </a>
        <a
          href="/login"
          className="px-6 py-3 rounded-lg border border-indigo-600 text-indigo-600 font-semibold hover:bg-indigo-50 transition"
        >
          Already have an account?
        </a>
      </div>
    </section>
  );
};

export default Home;

