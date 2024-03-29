"use client";

import { useRef, useEffect, useState } from "react";
import data from "../../data.json";
import Image from "next/image";
import { motion, useMotionValue } from "framer-motion";
import "./Trending.css";

import mv from "/public/assets/icon-category-movie.svg";
import tv from "/public/assets/icon-category-tv.svg";
import dot from "/public/assets/dot.svg";
import bookempty from "/public/assets/bookmark-empty.svg";
import bookfull from "/public/assets/bookmark-full.svg";
import play from "/public/assets/icon-play.svg";

export default function Trending({ buffer, width }) {
  var swipe = width > 760 ? 50 : 15;
  const [first_time, setFirstTime] = useState(1);
  const posref = useRef();
  const [index, setIndex] = useState(5);
  const [isDraging, setDraging] = useState(false);
  const [isAnimating, setIsAnimating] = useState(true);
  const [canDrag, setDragstate] = useState(true);

  const xposition = useMotionValue(0);

  const startedDraging = () => {
    setDraging(true);
  };
  const stopedDraging = () => {
    setDraging(false);

    if (xposition.get() <= swipe * -1) {
      setIndex((previndex) => previndex + 1);
    } else if (xposition.get() >= swipe) {
      setIndex((previndex) => previndex - 1);
    }
    handleInfinity();
    setDragstate(false);
    setTimeout(() => {
      setDragstate(true);
    }, 600);
  };

  const handleInfinity = () => {
    console.log(index);
    if (index === 0 || index === 10) {
      setIsAnimating(false);
      setIndex(5);
    } else setIsAnimating(true);
  };
  
  useEffect(() => {
    
    if (index === 0) {
      const interval = setInterval(() => {
        setIsAnimating(false);
        setIndex(5);
      }, 300);
      return () => clearInterval(interval);
    } else setIsAnimating(true);
  }, [index]);

  useEffect(() => {
    const interval = setInterval(
      () => {
        const x = xposition.get();

        if (x === 0) {
          setIndex((pv) => {
            return pv + 1;
          });
          handleInfinity();
        }
      },
      index === 5 && first_time === 0 ? 2000 : 5000
    );
    setFirstTime(0);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="trending-section">
      <h1>Trending</h1>
      <motion.div
        initial={{ translateX: `-${5 * buffer}rem` }}
        className="trends"
        drag={canDrag ? "x" : ""}
        dragConstraints={{ right: 0, left: 0 }}
        onDragStart={startedDraging}
        onDragEnd={stopedDraging}
        style={{ x: xposition }}
        animate={{ translateX: `-${index * buffer}rem` }}
        transition={{ duration: isAnimating ? 0.3 : 0, ease: "linear" }}
        ref={posref}
      >
        {[...data, ...data, ...data]
          .filter((data) => data.isTrending === true)
          .map((movie, index) => (
            <motion.div
              className="trend-card"
              key={index}
              whileTap={{ cursor: "grabbing" }}
            >
              <div className="trend-hover">
                <Image
                  className="trend-banner"
                  src={
                    width > 760
                      ? movie.thumbnail.trending.large
                      : movie.thumbnail.trending.small
                  }
                  alt="image not found"
                  width={width > 760 ? 470 : 240}
                  height={width > 760 ? 230 : 140}
                  priority={true}
                ></Image>
                <div className="trend-infos">
                  <p>{movie.year}</p>
                  <Image src={dot} alt="dot"></Image>
                  <div className="category">
                    <Image
                      src={movie.category === "Movie" ? mv : tv}
                      alt="tv-mv icon"
                    ></Image>
                    <p>{movie.category}</p>
                  </div>
                  <Image src={dot} alt="dot"></Image>
                  <p>{movie.rating}</p>
                </div>
                <h2>{movie.title}</h2>
                <div className="play-hover">
                  <Image src={play} alt="play icon"></Image>
                  <h4>Play</h4>
                </div>
              </div>
              <Image
                className="bookmark"
                src={movie.isBookmarked === true ? bookfull : bookempty}
                alt="bookmark"
              ></Image>
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
}
