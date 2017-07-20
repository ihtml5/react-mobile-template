import React, { Component } from 'react';
import Divider from '../../components/divider';
import Article from '../../components/article';
import '../../styles/app.css';
class Detail extends Component {
    render() {
        return (
            <div className="tnm-main">
                <h1 className="tnm-title">腾讯证券</h1>
                <Article>
                    <Divider text={'腾讯证券 2017-06-15 02:00:49'}/>
                    <img className="tnm-img" src="//inews.gtimg.com/newsapp_ls/0/1816181413_640330/0" alt="tnm-img"/>
                    <p className="tnm-pargraph">习近平指出，中巴两国友谊源远流长。中国是最早支持巴勒斯坦人民正义事业、最早承认巴勒斯坦解放组织和巴勒斯坦国的国家之一。两国人民相互理解、相互信赖、相互支持，是真正的好朋友、好伙伴、好兄弟。近年来，中巴两国高层交往密切，政治互信更加巩固，各领域合作得到稳步发展。</p>
                </Article>
            </div>
        );
    }
}


export default Detail;