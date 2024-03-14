import React from 'react'
import data from '../../data.json'
import { usePathname } from 'next/navigation'


export default function List({searched}) {
    const page = usePathname();
    let data_to_display = [];
    let title;
    if (searched !== ''){
        data_to_display = data.filter(display => display.title.includes(searched));
        title = `Found ${data_to_display.length} results for ‘${searched}’`;
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
    <div className='list'></div>
  )
}
