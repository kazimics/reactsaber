function Home() {
  return (
    <div className="v-center items-center h-[100vh]">
      <div className="basis-96 v-center">LOGO</div>
      <div className="basis-12 text-3xl v-center items-center">TODO APP</div>
      <div className="basis-12 v-center items-center">some AD wrods</div>
      <div className="v-center py-4">
        <Link to="/login" className="p-button">
          Login
        </Link>
        <div className="text-lg text-center font-bold w-[84vw] py-3">
          Sign Up
        </div>
      </div>
    </div>
  )
}

export default Home
