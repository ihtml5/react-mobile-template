import React from 'react';
import './news.css';
import NEWSLIST from '../../mock/list';
import ListItem from '../../components/listitem';
const News = () => (<ul className="tnm-news">
    {
        NEWSLIST.map((item,i) => {
            return <ListItem item={item} key={i}/>
        })
    }
</ul>)
export default News;