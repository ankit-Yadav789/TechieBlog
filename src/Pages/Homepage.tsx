import poster from '../assets/poster.png';
import HomeNav from '../components/HomeNav';

const HomePage = () => {
  return (
    <>
      <HomeNav />
      {/* Hero Section */}
      <section className="pb-10 bg-gradient-to-r from-blue-100 to-slate-100">
        <div className="relative container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
            <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0 text-center lg:text-left">
              <span className="text-2xl md:text-3xl font-extralight text-sky-600">
                Create tech posts to spread knowledge.
              </span>
              <h2 className="max-w-2xl mt-6 mb-8 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl text-black font-bold font-heading leading-tight">
                “Technology is a <br /> useful servant but a dangerous master.”
                <br />
                <span className="text-blue-400">By Christian Lous Lange</span>
              </h2>
              <p className="mb-8 lg:mb-12 text-lg md:text-xl text-gray-700">
                Your post must be free from racism and unhealthy words.
              </p>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
                Get Started
              </button>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <img
                className="w-full rounded-lg shadow-lg"
                src={poster}
                alt="Tech Poster"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Featured Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Post Title {post}
                </h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the post goes here. It should be
                  engaging and informative.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Trending Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div
                key={post}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={`https://via.placeholder.com/400x200?text=Trending+Post+${post}`}
                  alt={`Trending Post ${post}`}
                  className="rounded-lg mb-4"
                />
                <h3 className="text-xl md:text-2xl font-semibold mb-4">
                  Trending Post {post}
                </h3>
                <p className="text-gray-600 mb-4">
                  A brief description of the trending post goes here. It should
                  be engaging and informative.
                </p>
                <a
                  href="#"
                  className="text-blue-500 hover:underline font-medium"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-r from-slate-200 to-gray-100">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Us
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            TechieBlog is a platform where tech enthusiasts share their
            knowledge, ideas, and innovations. Our mission is to create a
            community of learners and contributors who are passionate about
            technology and its impact on the world.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            What Our Readers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div
                key={testimonial}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <p className="text-gray-600 italic mb-4">
                  "This blog has been a game-changer for me. The posts are
                  insightful and always on point!"
                </p>
                <h4 className="text-lg font-semibold">- Reader {testimonial}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription Section */}
      <section className="py-16 bg-gradient-to-r from-slate-200 to-gray-100">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-600 mb-8">
            Stay updated with the latest tech posts and news.
          </p>
          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow p-4 rounded-t-lg sm:rounded-l-lg sm:rounded-t-none border border-gray-300 focus:outline-none mb-4 sm:mb-0"
              />
              <button
                type="submit"
                className="p-4 bg-blue-500 text-white rounded-b-lg sm:rounded-r-lg sm:rounded-b-none hover:bg-blue-600 transition"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-8 bg-gray-800 text-white">
        <div className="container px-4 mx-auto text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} TechieBlog. All rights reserved.
          </p>
          <p className="text-sm mt-2">Built with ❤️ by Ankit Yadav .</p>
        </div>
      </footer>
    </>
  );
};

export default HomePage;