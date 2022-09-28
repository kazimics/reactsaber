function Home() {
  return (
    <div className="v-center items-center f-page px-[9.333vw]">
      <div className="flex-1 v-center">LOGO</div>
      <div className="basis-12 text-3xl v-center items-center text-primary">
        TODO APP
      </div>
      <div className="basis-12 v-center items-center">some AD wrods</div>
      <div className="v-center py-6 w-[100%]">
        <Link to="/login" className="p-button">
          Login
        </Link>
        <Link
          to="/resgister"
          className="text-[4.267vw] text-center font-bold w-full py-3"
        >
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Home
