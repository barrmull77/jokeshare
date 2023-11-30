import Feed from '@components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1  className='head_text text-center'>
            Connect and Share your jokes, no matter how bad 
            <br className='max-md:hidden' />
            <span className='orange_gradient text-center'>Cheese it Up!</span>
        </h1>
        <p className='desc text-center'>
            jokeShare is a platform for sharing jokes, especially cringeworthy dad jokes
        </p>
    </section>
  )
}

export default Home