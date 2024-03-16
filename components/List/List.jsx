import React from 'react'
import './List.css'
import data from '../../data.json'
import { usePathname } from 'next/navigation'
import Image  from 'next/image';

import mv from '/public/assets/icon-category-movie.svg'
import tv from '/public/assets/icon-category-tv.svg'
import dot from '/public/assets/dot.svg'
import bookempty from '/public/assets/bookmark-empty.svg'
import bookfull from '/public/assets/bookmark-full.svg'
import play from '/public/assets/icon-play.svg'

export default function List({searched}) {
    const page = usePathname();
    let data_to_display = [];
    let bookmarked_series = [];
    let title;
    if(page === '/'){
        data_to_display = data.filter(display => display.isTrending === false);
        title = "Recommended for you";
    }
    else if(page === '/Movies'){
        data_to_display = data.filter(display => display.category === "Movie");
        title = "Movies";
    }
    else if(page === '/Series'){
        data_to_display = data.filter(display => display.category === "TV Series");
        title = "TV Series";
    }
    else if(page === '/Bookmarked'){
        data_to_display = data.filter(display => display.isBookmarked === true);
        bookmarked_series = data_to_display.filter(display => display.category === "TV Series");
        data_to_display = data_to_display.filter(display => display.category === "Movie");
        title = "Bookmarked Movies";
    }
    if (searched !== ''){
        if (page === '/')
            data_to_display = data.filter(display => display.title.toLowerCase().replace(/\s/g, '').includes(searched.toLowerCase().replace(/\s/g, '')));
        else
            data_to_display = data_to_display.filter(display => display.title.toLowerCase().replace(/\s/g, '').includes(searched.toLowerCase().replace(/\s/g, '')));
        title = `Found ${data_to_display.length > 0 ? data_to_display.length : ''} ${data_to_display.length === 0 ? 'nothing like' : data_to_display.length === 1 ? 'result for' : 'results for'} ‘${searched}’`;
    }
  return (
    <div className={(page === '/' && searched === '') ? 'list' : 'list top-space'}>
        <h1>{title}</h1>
        <div className='displaying-list'>
            {
                data_to_display.map((displayed, index) => (
                    <div className='displayed-container' key={index}>
                        <div className='displayed-hover'>
                            <Image className='displayed-thumbnail' src={displayed.thumbnail.regular.large} alt='thumbnail' width={280} height={174}></Image>
                            <div className='play-hover'>
                                <Image src={play} alt='play icon'></Image>
                                <h4>Play</h4>
                            </div>
                        </div>
                        <div className='displayed-infos'>
                            <p>{displayed.year}</p>
                            <Image src={dot} alt='dot'></Image>
                            <div className='category'>
                                <Image src={displayed.category === "Movie" ? mv : tv} alt='tv-mv icon'></Image>
                                <p>{displayed.category}</p>
                            </div>
                            <Image src={dot} alt='dot'></Image>
                            <p>{displayed.rating}</p>
                        </div>
                        <h2>{displayed.title}</h2>
                        <Image className='bookmark' src={displayed.isBookmarked === true ? bookfull : bookempty} alt='bookmark'></Image>
                    </div>
                ))
            }
        </div>
            {
                page === '/Bookmarked' && searched === '' && (
                    <>
                        <h1>Bookmarked TV Series</h1>
                        <div className='displaying-list'>
                            {
                                bookmarked_series.map((displayed, index) => (
                                    <div className='displayed-container' key={index}>
                                        <div className='displayed-hover'>
                                            <Image className='displayed-thumbnail' src={displayed.thumbnail.regular.large} alt='thumbnail' width={280} height={174}></Image>
                                            <div className='play-hover'>
                                                <Image src={play} alt='play icon'></Image>
                                                <h4>Play</h4>
                                            </div>
                                        </div>
                                        <div className='displayed-infos'>
                                            <p>{displayed.year}</p>
                                            <Image src={dot} alt='dot'></Image>
                                            <div className='category'>
                                                <Image src={displayed.category === "Movie" ? mv : tv} alt='tv-mv icon'></Image>
                                                <p>{displayed.category}</p>
                                            </div>
                                            <Image src={dot} alt='dot'></Image>
                                            <p>{displayed.rating}</p>
                                        </div>
                                        <h2>{displayed.title}</h2>
                                        <Image className='bookmark' src={displayed.isBookmarked === true ? bookfull : bookempty} alt='bookmark'></Image>
                                    </div>
                                ))
                            }
                        </div>
                    </>
                )
            }
    </div>
  )
}
