import React from 'react'
import './List.css'
import data from '../../data.json'
import { usePathname } from 'next/navigation'
import Image  from 'next/image';


export default function List({searched}) {
    const page = usePathname();
    let data_to_display = [];
    let title;
    if (searched !== ''){
        data_to_display = data.filter(display => display.title.includes(searched));
        title = `Found ${data_to_display.length > 0 ? data_to_display.length : ''} ${data_to_display.length === 0 ? 'nothing like' : data_to_display.length === 1 ? 'result for' : 'results for'} ‘${searched}’`;
    }
    else if(page === '/'){
        data_to_display = data.filter(display => display.isTrending === false);
        title = "Recommended for you";
    }
    else if(page === '/movies'){
        data_to_display = data.filter(display => display.category === "Movie");
        title = "Movies";
    }
    else if(page === '/series'){
        data_to_display = data.filter(display => display.category === "TV Series");
        title = "TV Series";
    }
    else if(page === '/bookmarked'){
        data_to_display = data.filter(display => display.isBookmarked === true);
        title = "Bookmarked Movies";
    }
  return (
    <div className='list'>
        <h1>{title}</h1>
        <div className='displaying-list'>
            {
                data_to_display.map((displayed, index) => (
                    <div className='displayed-container' key={index}>
                        <Image src={displayed.thumbnail.regular.large} alt='thumbnail' width={280} height={174}></Image>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
