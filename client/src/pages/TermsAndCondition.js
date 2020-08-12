import React, {useState, useEffect} from 'react'
import Layout from '../components/Layout'
import  {storageRef}  from "../firebase"


const TermsAndCondition = () => {

    const [imgFile, setImgFile] = useState({})
    const [imgUrl, setImgUrl] = useState('')


    useEffect(() => {
        // storageRef.child('ecommerce/products_images/real-me.jpg').getDownloadURL().then((url) => (
        //     setImgUrl(url)
        // )) 

        let formData = new FormData()
        for(const key of Object.keys(imgFile)) {
            formData.append('productImgs', imgFile[key])
        }
        console.log(formData)
    }, [imgFile])


    return (
        <Layout>
            <div className="display-2 container">
                 <img src={imgUrl} alt=""/>
                 
                Terms and conditions
            </div>
            <input name="productImgs" onChange={e => setImgFile(e.target.files)} type="file" accept="image/*" multiple/>
        </Layout>
    )
}

export default TermsAndCondition
