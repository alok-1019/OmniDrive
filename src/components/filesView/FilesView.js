import React, { useState, useEffect } from 'react'
import '../../styles/FilesView.css'
import FileItem from './FileItem'
import { db } from '../../firebase'
import { Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom'
import galleryIcon from './galleryIcon.jpg'
import music from './music.png'
import pdf from './pdf.png'

const FilesView = () => {
    const [files, setFiles] = useState([])

    useEffect((event) => {
        db.collection('myFiles').orderBy("caption").onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    console.log(files)

    return (
        <div className="fileView">
            <Grid>
                <Grid container spacing={1}>
                    <Grid item md={4}>
                        <div className='fileView__folder'
                            // style={{
                            //     backgroundImage: `url(${pdf})`,
                            //     backgroundSize: 'contain',
                            //     backgroundRepeat: "no-repeat",
                            //     backgroundPositionX: 'center'
                            // }}
                        >
                            <Link to="/pdf" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={pdf} alt="" height = {110} width = {80} 
                                  style={{
                                    display : 'block',
                                    marginLeft : 'auto',
                                    marginRight: 'auto',
                                
                                }}
                                />

                            </Link>
                        </div>

                    </Grid>

                    <Grid item md={4}>
                        <div className='fileView__folder'>
                            <Link to="/img" style={{ textDecoration: 'none', color: 'black' }}>
                                <img src={galleryIcon} height={115} width={130} alt="" />
                            </Link>
                        </div>

                    </Grid>

                    <Grid item md={4}>
                        <div className='fileView__folder'>
                            <Link to="/music" style={{ textDecoration: 'none', color: 'black' }}>
                            <img src={music} height={115} width={135} alt="" />
                            </Link>
                        </div>

                    </Grid>
                </Grid>

                <Grid container >
                    <Grid item md={12} >
                        <div className="fileView__titles">
                            <div className="fileView__titles--left">
                                <Button variant='contained' color='primary'
                                    onClick={event => db.collection('myFiles').orderBy("caption").onSnapshot(snapshot => {
                                        setFiles(snapshot.docs.map(doc => ({
                                            id: doc.id,
                                            item: doc.data()
                                        })))
                                    })
                                    }
                                >
                                    Name
                                </Button>

                            </div>
                            <div className="fileView__titles--right">
                                <Button variant='contained' color='primary'
                                    onClick={event => db.collection('myFiles').orderBy("timestamp", "desc").onSnapshot(snapshot => {
                                        setFiles(snapshot.docs.map(doc => ({
                                            id: doc.id,
                                            item: doc.data()
                                        })))
                                    })
                                    }
                                >
                                    Uploaded On
                                </Button>

                                <Button variant='contained' color="primary"
                                    onClick={event => db.collection('myFiles').orderBy("size", "desc").onSnapshot(snapshot => {
                                        setFiles(snapshot.docs.map(doc => ({
                                            id: doc.id,
                                            item: doc.data()
                                        })))
                                    })
                                    }
                                >
                                    Size
                                </Button>

                            </div>
                        </div>
                        {
                            files.map(({ id, item }) => (
                                <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
                            ))
                        }
                    </Grid>
                </Grid>
            </Grid>
        </div>

    )
}

export default FilesView
