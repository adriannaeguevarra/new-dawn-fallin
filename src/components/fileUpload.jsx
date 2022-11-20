import React , { useEffect, useState}  from "react";
import Button from "@mui/material/Button";
import { Auth, Storage } from 'aws-amplify';
import { Select } from "@mui/material";

 //there are 4 veterans 
    //userType is 'bucket', either veterans or sponsors 
    //userId is a unique Id for a 'folder' in sponsors bucket
    
export default function FileUpload({userType, userId}) {
    const [uploadedfile, setUploadedFile] = useState();
    console.log("File", uploadedfile);
    const [uploaded, setUploaded] = useState(false);
    const [username, setUsername] = useState();
    useEffect(() => {
        Auth.currentUserInfo()
            .then(getUserInfoSuccess)
            .catch(getUserInfoError)
    }, [])

    const getUserInfoSuccess = res => {
        console.log(res);
        setUsername(res.username);
    }
    const getUserInfoError = err => {
        console.warn(err);
    }
    
    const veteranNumber = 'veteran1'
    const vetaranUpload = (
        <div >
            <input type="file" multiple onChange={(e) => setUploadedFile(e.target.files)} />
            <Button variant="contained" component="label" onClick={async () => {
                //Storage.put({foldername}/{filename}.{type}
                for (const file of uploadedfile) {    
                    Storage.put(`${userId || 'uniqueIdForS322'}}/${veteranNumber}/${file.name}`, file, {
                        level: 'public',
                        bucket: `new-dawn-${userType || 'veterans'}`,      
                    }).then(res => {
                        Storage.get(res.key, {
                            bucket: `new-dawn-${userType || 'veterans'}`,
                        }
                        ).then(res => console.log(res))
                        setUploaded(true)
                    }
                    ).catch(err => console.warn(err))
                }
                
            }}>
                Upload Files
            </Button>
            <div>
                {uploaded
                    ? <div>Your files are uploaded!</div>
                    : <div>Upload files to get started </div>}
            </div>
        </div>
    )
    const sponsorUpload = (
        <div>
            <input type="file" multiple onChange={(e) => setUploadedFile(e.target.files)} />
            <Button variant="contained" component="label" onClick={async () => {
                //Storage.put({foldername}/{filename}.{type}
                for (const file of uploadedfile) { 
                    Storage.put(`${userId || 'uniqueIdForS322'}}/${veteranNumber}/${file.name}`, file, {
                        level: 'public',
                        bucket: `new-dawn-${userType || 'sponsors'}`,      
                    }).then(res => {
                        Storage.get(res.key, {
                            bucket: `new-dawn-${userType || 'sponsors'}`,
                        }
                        ).then(res => console.log(res))
                        setUploaded(true)
                    }
                    ).catch(err => console.warn(err))
                }
                
               
            }}>
                Upload Files
            </Button>
            <div>
                {uploaded
                    ? <div>Your files are uploaded!</div>
                    : <div>Upload files to get started </div>}
            </div>
        </div>
    )
   
    if (userType === 'veterans')
        return (vetaranUpload)
    else if (userType === 'sponsors')
        return (sponsorUpload)
    
}
