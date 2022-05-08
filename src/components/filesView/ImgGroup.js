import React, { useState, useEffect } from "react"
import FileItem from "./FileItem"
import { db } from '../../firebase'

const ImgGroup = () => {

    const [files, setFiles] = useState([])

    useEffect((event) => {
        db.collection('myFiles').where("type", "in", ['image/png', 'image/jpeg']).onSnapshot(snapshot => {
            setFiles(snapshot.docs.map(doc => ({
                id: doc.id,
                item: doc.data()
            })))
        })
    }, [])

    return (
        <div>
            {
            files.map(({ id, item }) => (
                <FileItem id={id} caption={item.caption} timestamp={item.timestamp} fileUrl={item.fileUrl} size={item.size} />
            ))
            }
        </div>
    )
}

export default ImgGroup
