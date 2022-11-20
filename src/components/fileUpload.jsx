import React , { useState}  from "react";
import Button from "@mui/material/Button";
import { Storage } from 'aws-amplify';
import { Select } from "@mui/material";

export default function FileUpload({userType, userId}) {
    const [file, setFile] = useState();
    const [uploaded, setUploaded] = useState(false);
    
    const veteranNumber = 'veteran1'
    //there are 4 veterans 
    //userType is 'bucket', either veterans or sponsors 
    //userId is a unique Id for a 'folder' in sponsors bucket
    return (
        <>
            <div>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <Button variant="contained" component="label" onClick={async () => {
                    //Storage.put({foldername}/{filename}.{type}
                    const storageResult = await Storage.put(`${userId || 'uniqueIdForS322'}}/${veteranNumber}/${file.name}`, file, {
                        level: 'public',
                        bucket: `new-dawn-${userType || 'veterans'}`,
                    
                    }).then(res => Storage.get(res.key, {
                        bucket: `new-dawn-${userType || 'veterans'}`,
                    
                    }))
                        .catch(err => console.warn(err))
                    setUploaded(true)
                    console.log(storageResult);
                }}>
                    Upload File to veterans bucket
            
                </Button>
            </div>
            <hr />
            <div>
                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                <Button variant="contained" component="label" onClick={async () => {
                    //Storage.put({foldername}/{filename}.{type}
                    const storageResult = await Storage.put(`${userId || 'uniqueIdForS322'}}/${file.name}`, file, {
                        level: 'public',
                        bucket: `new-dawn-${userType || 'sponsors'}`,
                    }).then(res => Storage.get(res.key, {
                        bucket: `new-dawn-${userType || 'sponsors'}`,
                    
                    }))
                        .catch(err => console.warn(err))
                    setUploaded(true)
                    console.log(storageResult);
                }}>
                    Upload File to sponsors bucket
            
                </Button>
                <div>
                    {uploaded
                        ? <div>Your image is uploaded!</div>
                        : <div>Upload a photo to get started </div>}
                </div>
            </div>
        </>
    );
}
