
import poster from '../assets/poster.png'
import HomeNav from '../components/HomeNav';

const HomePage = () => {
  return (
    <>
    <HomeNav/>
    <section className="pb-10 bg-slate-100">
      <div className="relative container px-4   mx-auto">
        <div className="flex flex-wrap items-center -mx-4 mb-10 2xl:mb-14">
          <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
            <span className="text-3xl font-extralight text-sky-600">
              Create tech posts to spread knowledge.
            </span>
            <h2 className="max-w-2xl mt-12 mb-12 text-4xl 2xl:text-6xl text-black font-bold font-heading">
             “Technology is a <br /> useful servant but a dangerous master.”
             <br />
          <span className="text-blue-400">By Christian Lous Lange</span>
            </h2>
            <p className="mb-12 lg:mb-16 2xl:mb-24 text-2xl text-red-500">
              Your post must be free from racism and unhealthy words
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <img className="w-full" src={poster} alt={poster} />
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default HomePage