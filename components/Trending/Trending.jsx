import React from 'react'
import data from '../../data.json'
import Image from 'next/image'
import './Trending.css'

import mv from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import dot from '/public/assets/dot.svg'
import bookempty from '/public/assets/bookmark-empty.svg'
import bookfull from '/public/assets/bookmark-full.svg'
import play from '/public/assets/icon-play.svg'


export default function Trending() {
  return (
    <div className='trending-section'>
        <h1>Trending</h1>
        <div className='trends'>
            {
                data.filter(data => data.isTrending === true).map((movie, index) => (
                    <div className='trend-card' key={index}>
                        <div className='trend-hover'>
                            <Image className='trend-banner' src={movie.thumbnail.trending.large} alt='image not found' width={470} height={230}></Image>
                            <div className='trend-infos'>
                                <p>{movie.year}</p>
                                <Image src={dot} alt='dot'></Image>
                                <div className='category'>
                                    <Image src={movie.category === "Movie" ? mv : tv} alt='tv-mv icon'></Image>
                                    <p>{movie.category}</p>
                                </div>
                                <Image src={dot} alt='dot'></Image>
                                <p>{movie.rating}</p>
                            </div>
                            <h2>{movie.title}</h2>
                            <div className='play-hover'>
                                <Image src={play} alt='play icon'></Image>
                                <h4>Play</h4>
                            </div>
                        </div>
                        <Image className='bookmark' src={movie.isBookmarked === true ? bookfull : bookempty} alt='bookmark'></Image>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
