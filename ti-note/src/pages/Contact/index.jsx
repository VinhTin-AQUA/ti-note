import { BsFacebook, BsGithub } from "react-icons/bs";
import {FaYoutube} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai"

function Contact() {
  return (
    <div className="w-full">
      <div
        className="w-full h-[50%] rounded-sm bg-center bg-cover duration-500"
        style={{ backgroundImage: `url("/contact_img.jpg")` }}
      ></div>

      <div className="w-full mt-3">
        <hr />
        <div className="h-10 text-center text-2xl font-800">Contact us</div>
        <div className="flex items-center justify-around">
          <a target="_blank" href="https://www.facebook.com/vinhtin.aquarius"><BsFacebook className="text-[#3b82f6]" size={70} /></a>
          <a target="_blank" href="https://github.com/VinhTin-AQUA"><BsGithub size={70} /></a>
          <a target="_blank" href="https://www.youtube.com/channel/UCOvKhgwuxVoQC0e-E2wFskQ"><FaYoutube className="text-[#e11d48]" size={70} /></a>
          <a target="_blank" href="https://www.instagram.com/lily_meoo/"><AiFillInstagram className="text-[#ec4899]" size={70} /></a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
