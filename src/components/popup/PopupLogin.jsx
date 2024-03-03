
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const PopupLogin = ({ showPopup, setShowPopup }) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const dataForm = new FormData(form)

    const email = dataForm.get("email")
    const password = dataForm.get("password")

    console.log(email, password);
    form.reset()
    setShowPopup(false)
  }
  

  return (
    <>
      {showPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-[50%]  right-[20%] lg:right-[30%] xl:right-[40%]  p-4 shadow-md bg-white rounded-md duration-200 w-[300px]">
              {/* header section */}
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-dark">Login</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setShowPopup(false)}
                  />
                </div>
              </div>

              {/* login form section */}
              <div className="mt-4">
                <form onSubmit={handleSubmit}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    className="w-full rounded-md border border-gray-300 dark:border-gray-500 px-2 py-1 mb-4"
                  />
                  
                  {/* Login button section */}
                  <div>
                    <button type="submit" className="w-full bg-primary text-white p-2 rounded-md border-0">
                      Login
                    </button>
                  </div>
                </form>

                {/* social login */}
                <div className="mt-4">
                  <p className="text-center">or login with</p>
                  <div className="flex justify-center gap-2 mt-2">
                    <FaFacebook className="text-3xl hover:text-blue-500 duration-200"/>
                    <FaGoogle className="text-3xl hover:text-primary duration-200"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopupLogin;
