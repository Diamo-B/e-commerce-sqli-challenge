import { FiSend } from "react-icons/fi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { AiOutlineApple } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content grid grid-cols-5 ">
      <section className="w-full">
        <p className="capitalize font-black text-2xl h-fit">exclusive</p>
        <p className="">subscribe for 10% off at your first purchase</p>
        <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow placeholder:text-sm" placeholder="Enter your email" />
            <button className="btn btn-primary !min-h-0 !min-w-0 !h-fit !w-fit !px-2 py-2"><FiSend className="size-5"/></button>    
        </label>
      </section>
      <section>
        <p className="capitalize font-semibold text-lg">support</p>
        <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>
      </section>
      <nav>
        <p className="capitalize font-semibold text-lg">Account</p>
        <a href="" className="capitalize">my account</a>
        <a href="" className="capitalize">cart</a>
        <a href="" className="capitalize">wishlist</a>
        <a href="" className="capitalize">shop</a>
      </nav>
      <nav>
        <p className="capitalize font-semibold text-lg">Quick links</p>
        <a href="" className="capitalize">Privacy Policy</a>
        <a href="" className="capitalize">Terms of use</a>
        <a href="" className="capitalize">FAQ</a>
        <a href="" className="capitalize">Contact</a>
      </nav>
      <section>
        <p className="capitalize font-semibold text-lg">Download App</p>
        <p>Save 3$ with app (new users only)</p>
        <div className="flex flex-col">
            <img src="" alt="" />
            <div className="">
                <button className="w-full flex btn btn-accent border-4 justify-between">
                    <IoLogoGooglePlaystore className="size-10"/>
                    <div>
                        <p className="uppercase text-sm font-bold">get it on</p>
                        <p className="font-bold text-xl">google play</p>
                    </div>
                </button>
                <button className="w-full flex btn btn-accent border-4 justify-between">
                    <AiOutlineApple className="size-10"/>
                    <div>
                        <p className="uppercase text-sm font-bold">get it on</p>
                        <p className="font-bold text-xl">apple store</p>
                    </div>
                </button>
            </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
