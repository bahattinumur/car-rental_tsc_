import CustomButton from "../CustomButton";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="hero">
      <div className="flex-1 padding-x pt-36 max-h-[920px]">
        <h1 className="hero__title">Feel the Freedom, Start Your Journey!</h1>
        <p className="hero__subtitle text-gray-200">
          Luxury and Comfort Combined! Every journey with our premium vehicles
          turns into a delight.
        </p>

        <CustomButton title="Experience The Cars" designs="mt-10" />
      </div>
      <div className="w-100 flex justify-center">
        <motion.img
          initial={{ translateX: 200, scale: 0.7 }}
          whileInView={{ translateX: 0, scale: 1 }}
          transition={{ duration: 1 }}
          src="./../../../public/hero.png"
          alt=""
          width={700}
          className="img-fluid object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
