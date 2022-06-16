
export default function Navbar() {
  return (
    <div className="bg-blue-500">
        <div className="flex items-center justify-between">
          <div>
              <a class="text-white uppercase font-bold tracking-tight" href="">
                {process.env.appName}
              </a>
          </div>
      
        <div className="flex items-center">
          <a href="/about" class="text-blue-200 hover:text-white py-5 px-3">
            About
          </a>
          <a href="/login" class="text-blue-200 hover:text-white py-5 px-3">
            Login
          </a>
          <a href="/register" class="text-blue-200 hover:text-white py-5 px-3">
            Register
          </a>

        </div>
        </div>
       
    </div>
  )
}
