import { Image } from "@unpic/react";
import { motion, useTransform, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";
import { IoLogoGithub } from "react-icons/io";

export const Card = ({ project }: { project: any }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
    layoutEffect: false,
  });

  const clampedScrollYProgress = useMotionValue(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    clampedScrollYProgress.set(Math.max(clampedScrollYProgress.get(), latest));
  });

  const scaleProgress = useTransform(clampedScrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(clampedScrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="h-auto border-warmmain justify-between items-start border p-4 flex flex-col rounded-xl bg-warmmain/10 w-full overflow-hidden"
    >
      <div className="overflow-hidden">
        <Image
          src={project.image}
          loading="lazy"
          width={416}
          height={208}
          className="rounded-xl hover:scale-110 transition-all duration-150 sm:h-full max-h-52 object-cover w-full"
          alt="ecommerce image"
        />
      </div>
      <p className="text-lightmain text-2xl font-bold">{project.title}</p>
      <p className="text-gray-300 flex-1 p-1 rounded-lg shadow-lg max-w-md">
        {project.description}
      </p>
      <a
        href={project.link}
        target="_blank"
        className="bg-light w-full hover:bg-slate-300 effect flex items-center h-12 justify-center text-darkmain rounded-lg"
      >
        <IoLogoGithub />
        Git
      </a>
    </motion.div>
  );
};
