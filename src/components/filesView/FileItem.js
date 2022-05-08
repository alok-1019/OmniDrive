import React from 'react'
import '../../styles/FileItem.css'
import Button from '@material-ui/core/Button'
import { db } from '../../firebase'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl, size }) => {
    const fileDate = `${timestamp?.toDate().getHours() + ':' + timestamp?.toDate().getMinutes() + ',' + '\xa0\xa0'} ${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}`

    const getReadableFileSizeString = (fileSizeInBytes) => {
        let i = -1;
        const byteUnits = [' kB', ' MB', ' GB', ' TB', 'PB', 'EB', 'ZB', 'YB'];
        do {
            fileSizeInBytes = fileSizeInBytes / 1024;
            i++;
        } while (fileSizeInBytes > 1024);

        return Math.max(fileSizeInBytes, 0.1).toFixed(1) + byteUnits[i];
    };


    return (
        <div className='fileItem'>
            <a href={fileUrl} target="_blank" rel="noreferrer" download>
                <div className="fileItem--left">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
            </a>
            <div className="fileItem--right">
                <p style={{ marginRight: 33 , paddingLeft : 12}}>{fileDate}</p>
                <p style={{ marginRight: 33 }}>{getReadableFileSizeString(size)}</p>
                <Button
                    className="fileItem--right"
                    variant="contained"
                    onClick={event => db.collection("myFiles").doc(id).delete()}
                >
                    Delete
                </Button>

            </div>

        </div >
    )
}

export default FileItem
