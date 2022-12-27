import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, publishedAt, source } = props;
        let d = publishedAt;
        let date = d.toString();
        let actualDate = new Date(date).toGMTString()
    return (
        <>
            <div className='my-3'>
                <div className="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
                        <span className="badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl !== null ? imageUrl : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuD8k_6mm3edNUNUR_CBQ3Wn_sIzAimpjQw&usqp=CAU'} className="card-img-top" height={'200px'} alt=".." />
                    <div className="card-body">
                        <h5 className="card-title">{title}....</h5>
                        <p className="card-text">{description}....</p>
                        <p className="card-text"><small className="text-muted">Information by {author} on {actualDate}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Full Info..</a>
                    </div>
                </div>
            </div>
        </>

    )
}

export default NewsItem