import '../../styles/home.css';

import React, { useEffect, useRef } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { PostsService } from './PostsService/PostsService';
import { Navigate } from 'react-router';
import { useState } from 'react';

const Home = () => {
    const postsService = new PostsService();
    const datasource = useRef(null);
    const [posts, setPosts] = useState();
    useEffect(() => {
        setTimeout(() => {
            postsService.getAllPosts().then(data => {
                datasource.current = data;
                setPosts(datasource.current);
            })
        }, 1000)
    });

    return (
        <main className='containe'>
            {
                posts && posts.length > 0 && posts.map((post) => {
                    const postDetail = window.location.href + '?post_' + post._id;
                    console.log(postDetail)
                    const totalNumbreLiked = post.likes;
                    const totalNumbreDisliked = post.dislikes;
                    const imgPost = 'http://localhost:3000/images' + post.imageUrl;
                    return (
                        <section className="card">
                            <Card key={post._id} title={post.title} style={{ width: '25em' }} >
                                <p className="m-0" style={{ lineHeight: '1.5' }} value={post.description}></p>
                                <img src={imgPost} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} >
                                    <Navigate to={postDetail} />

                                </img>
                                <span>
                                    <Button label="Like" icon="pi pi-thumbs-up-fill"></Button>
                                    <span>{totalNumbreLiked}</span>
                                    <Button label="Dislike" icon="pi pi-thumbs-down-fill" className="p-button-secondary ml-2" />
                                    <span>{totalNumbreDisliked}</span>
                                </span>
                            </Card>
                        </section>
                    )
                })
            };
        </main >
    )


    /*const showPosts = (data) => {
        for (let i = 0; i < data.length; i++) {
            return (
                <section className="card">
                    <Card key={data._id} title={data.title} style={{ width: '25em' }} footer={footer}>
                        <p className="m-0" style={{ lineHeight: '1.5' }} value={data.description}></p>
                        <img src={data.imageUrl}></img>
                    </Card>
                </section>
            )
        }
    };*/
    /* const userLogged = () => {
         if (localStorage != null) {
             return showPosts()
         } else {
             return <Navigate to='/' />
         }
     };
 
     userLogged();*/


};
/*
import React, { useState, useEffect, useRef } from 'react';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Button } from 'primereact/button';
import { PostsService } from './PostsService/PostsService';

const Home = () => {
    const [posts, setPosts] = useState(null);
    const [layout, setLayout] = useState('grid');
    const [loading, setLoading] = useState(true);
    const [first, setFirst] = useState(0);
    const [totalRecords, setTotalRecords] = useState(0);
    const rows = useRef(6);
    const datasource = useRef(null);
    const isMounted = useRef(false);
    const postsService = new PostsService();

    useEffect(() => {
        if (isMounted.current) {
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        }
    }, [loading]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        setTimeout(() => {
            isMounted.current = true;
            postsService.getAllPosts().then(data => {
                datasource.current = data;
                setTotalRecords(data.length);
                setPosts(datasource.current.slice(0, rows.current));
                setLoading(false);
            });
        }, 1000);
    }, []); // eslint-disable-line react-hooks/exhaustive-deps
    //postsService.getAllPosts().then(response => console.log(response));

    const onPage = (event) => {
        setLoading(true);

        //imitate delay of a backend call
        setTimeout(() => {
            const startIndex = event.first;
            const endIndex = Math.min(event.first + rows.current, totalRecords - 1);
            const newPosts = startIndex === endIndex ? datasource.current.slice(startIndex) : datasource.current.slice(startIndex, endIndex);

            setFirst(startIndex);
            setPosts(newPosts);
            setLoading(false);
        }, 1000);
    }

    const renderListItem = (data) => {
        return (
            <div className="col-12">
                <div className="product-list-item">
                    <img src={`images/product/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                    <div className="product-list-detail">
                        <div className="product-name">{data.title}</div>
                        <div className="product-description">{data.description}</div>
                        <i className="pi pi-tag pi-calendar"></i>
                        <span className="product-category">{data.updateDate}</span>
                    </div>
                    <div className="product-list-action">
                        <Button icon="pi pi-ellipsis-h" label="Add to Cart" ></Button>
                    </div>
                </div>
            </div>
        );
    }

    const renderGridItem = (data) => {
        return (
            <div className="col-12 md:col-4">
                <div className="product-grid-item card">
                    <div className="product-grid-item-content">
                        <img src={`images/product/${data.image}`} onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={data.name} />
                        <div className="product-name">{data.title}</div>
                        <div className="product-description">{data.description}</div>
                    </div>
                    <div className="product-grid-item-bottom">
                        <i className="pi pi-tag pi-calendar"></i>
                        <span className="product-category">{data.updateDate}</span>
                        <Button icon="pi pi-ellipsis-h" label="Add to Cart" ></Button>
                    </div>
                </div>
            </div>
        );
    }

    const itemTemplate = (product, layout) => {
        if (!product) {
            return;
        }

        if (layout === 'list')
            return renderListItem(product);
        else if (layout === 'grid')
            return renderGridItem(product);
    }

    const renderHeader = () => {
        let onOptionChange = (e) => {
            setLoading(true);
            setLayout(e.value);
        };

        return (
            <div style={{ textAlign: 'left' }}>
                <DataViewLayoutOptions layout={layout} onChange={onOptionChange} />
            </div>
        );
    }

    const header = renderHeader();

    return (
        <div className="dataview-demo">
            <div className="card">
                <DataView value={posts} layout={layout} header={header}
                    itemTemplate={itemTemplate} lazy paginator paginatorPosition={'both'} rows={rows.current}
                    totalRecords={totalRecords} first={first} onPage={onPage} loading={loading} />
            </div>
        </div>
    );
}*/

export default Home;