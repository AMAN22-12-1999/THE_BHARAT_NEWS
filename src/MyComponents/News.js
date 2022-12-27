import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
import { Spinner } from "./Spinner";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  const [author, setAuthor] = useState("");
  document.title = `${props.category}-NEWSKheeda`

  const updateNews = async (val) => {
    props.setProgress(10);
    let url;
    url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    console.log("parsedData=", parsedData);
    setArticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setLoading(false)
    setAuthor(parsedData.author)
    props.setProgress(100);
  }

  useEffect(() => {
    updateNews('org');
  }, [])


  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("parsedData=", parsedData);
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setAuthor(parsedData.author);
  };

  return (
    <>
      <h1 className="text-center" style={{marginTop:'4.375rem',marginBottom:'0.625rem'}}>NEWSkheeda - Top HeadLines on {props.category}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((ele, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsItem
                    title={ele.title !== null ? ele.title : ""}
                    description={
                      ele.description !== null ? ele.description : ""
                    }
                    imageUrl={ele.urlToImage}
                    newsUrl={ele.url}
                    author={ele.author !== null ? ele.author : "Unknown"}
                    publishedAt={ele.publishedAt !== null ? ele.publishedAt : "Date Not Avalaible"}
                    source={ele.source !== null ? ele.source.name : "Unknown"}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );

}

News.defaultProps = {
  pageSize: 6,
  country: 'in',
  category: 'general'
}

News.propTypes = {
  pageSize: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string
}

export default News;