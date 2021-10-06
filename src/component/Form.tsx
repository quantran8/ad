import { Backdrop, Button, TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { uploadData, uploadImg, uploadSingleImg } from 'api/products';
import { Form_Data } from 'lib';
import React, { useState } from 'react';
interface Props {
    
}
const initialValues: Form_Data = {
    name :'',
    slug:'',
    price :undefined,
    weight:undefined,
    color:'',
    frame:'',
    thumbnail:'',
    imgs:[]
}
const Form = (props: Props) => {
    const [values,setValue] = useState(initialValues);
    const [files,setFiles] = useState({});
    const [singleFile,setSingleFile] = useState({});
    const [loadings,setLoadings] = useState(false);
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      const {name,value} = e.target;
      setValue({
          ...values,
          [name]:value
      })
    }
    // multi files change handle
    const handleChangeFiles = (e:React.ChangeEvent<HTMLInputElement>) => {
      const files = e.target.files;
      console.log(files)
      const data = new FormData(); 
      if(files){
        Object.keys(files).forEach((item,index) => {
            data.append('imgs',files[index] as unknown as Blob)
            console.log(files[index])
        })
      }
      setFiles(data);
      
    }
    // single file change handle
    const handleChangeFile = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {files} = e.target;
        if(files){
            const file = files[0];
            const data = new FormData(); 
            data.append('img',file);
            setSingleFile(data)
        }        
    }
    const handleSubmit = async() => {
        try{
            setLoadings(true)
            const res1 = await uploadImg(files);
            const res2 = await uploadSingleImg(singleFile);
            const res = await uploadData({
                ...values,
                thumbnail:res2,
                imgs:res1
            });
            if(res)setLoadings(false)
            console.log(res)
        }
        catch(error){
            console.log(error)
            setLoadings(false)
        }
    }
    return (
        <div>
            <div>
                <TextField variant='standard' label='name' name='name' value={values.name} onChange={handleChange} />
            </div>
            <div>
                <TextField variant='standard' label='slug' name='slug' value={values.slug} onChange={handleChange} />
            </div>
            <div>
                <TextField variant='standard' type='number' label='price' name='price' value={values.price} onChange={handleChange} />
            </div>
            <div>
                <TextField variant='standard' type='number' label='weight' name='weight' value={values.weight} onChange={handleChange} />
            </div>
            <div>
                <TextField variant='standard' label='color' name='color' value={values.color} onChange={handleChange} />
            </div>
            <div>
                <TextField variant='standard' label='frame' name='frame' value={values.frame} onChange={handleChange} />
            </div>
            <div>
                <h4>thumbnail img</h4>
                <input  type='file'  name='img' multiple onChange={handleChangeFile} />
            </div>
            <div>
                <h4>detail imgs</h4>
                <input  type='file'  name='imgs' multiple onChange={handleChangeFiles} />
            </div>
            <Button variant='contained' color='primary' onClick={handleSubmit}>submit</Button>
            <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loadings}
            >
        <CircularProgress color="inherit" />
      </Backdrop>
        </div>
    )
}

export default Form
