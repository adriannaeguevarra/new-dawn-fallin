import React , { useState}  from "react";
import Button from "@mui/material/Button";
import { Storage } from 'aws-amplify';

export default function FileUpload() {
    const [file, setFile] = useState();
    const [uploaded, setUploaded] = useState(false);

    return (
        <div>
            <input type="file"  onChange={(e) => setFile(e.target.files[0])}/>
            <Button variant="contained" component="label" onClick={async () => {
                //Storage.put({foldername}/{filename}.{type}
                const storageResult = await Storage.put('test/puppy.png', file, {
                    level: 'public',
                    type: 'image/png'
                }).then(res => Storage.get(res.key))
                .catch(err => console.warn(err))
                setUploaded(true)
                console.log(storageResult);
        }}>
        Upload File
            
        </Button>
            <div>
                {uploaded
                    ? <div>Your image is uploaded!</div>
                    : <div>Upload a photo to get started </div>}
            </div>
      </div>
  );
}
