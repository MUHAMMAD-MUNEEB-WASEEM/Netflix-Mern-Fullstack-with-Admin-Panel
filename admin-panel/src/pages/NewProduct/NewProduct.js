import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import storage from '../../firebase';
import { createMovie } from '../../redux/movie/movieApiCall';
import './NewProduct.css'

function NewProduct() {

    const dispatch = useDispatch()

    const [movie, setMovie] = useState(null);
    const [img, setImg] = useState(null);
    const [imgTitle, setImgTitle] = useState(null);
    const [imgSm, setImgSm] = useState(null);
    const [trailer, setTrailer] = useState(null);
    const [video, setVideo] = useState(null);
    
    //for firebase (0) means how many files upload when 5 files upload, upload button changes to create button
    const [uploaded, setUploaded] = useState(0);


    const handleChange = (e) => {
        const value = e.target.value;
        setMovie({...movie, [e.target.name]:value})

    }

    const upload = (items) => {
        items.forEach((item) => {
          const fileName = new Date().getTime() + item.label + item.file.name;
          const uploadTask = storage.ref(`/items/${fileName}`).put(item.file);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log("Upload is " + progress + "% done");
            },
            (error) => {
              console.log(error);
            },
            () => {
              uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                setMovie((prev) => {
                  return { ...prev, [item.label]: url };
                });
                setUploaded((prev) => prev + 1);
              });
            }
          );
        });
      };
    
      const handleUpload = (e) => {
        e.preventDefault();
        upload([
          { file: img, label: "img" },
          { file: imgTitle, label: "imgTitle" },
          { file: imgSm, label: "imgSm" },
          { file: trailer, label: "trailer" },
          { file: video, label: "video" },
        ]);
      };
    console.log(img)

    const handleSubmit = (e) => {
        e.preventDefault()

        createMovie(movie, dispatch)
    }
    return (
        <div className="newProduct"> 
           <h1 className="addProduct__title">New Movie</h1>

            <form className="addProduct__form">

                <div className="addProduct__item">
                    <label>Image</label>
                    <input type="file" id="file" name="img" onChange={(e)=>setImg(e.target.files[0])}/>
                </div>

                <div className="addProduct__item">
                    <label>Title Image</label>
                    <input type="file" id="imgTitle" name="imgTitle" onChange={(e)=>setImgTitle(e.target.files[0])}/>
                </div>

                <div className="addProduct__item">
                    <label>Thumbnail Image</label>
                    <input type="file" id="imgSm" name="imgSm" onChange={(e)=>setImgSm(e.target.files[0])}/>
                </div>

                <div className="addProduct__item">
                    <label>Title</label>
                    <input type="text" placeholder="John Wick" name="title" onChange={handleChange}/>
                </div>
               
                <div className="addProduct__item">
                    <label>Description</label>
                    <input type="text" placeholder="description" name="desc" onChange={handleChange}/>
                </div>

                <div className="addProduct__item">
                    <label>Duration</label>
                    <input type="text" placeholder="duration" name="duration" onChange={handleChange}/>
                </div>
                
                <div className="addProduct__item">
                    <label>Year</label>
                    <input type="text" placeholder="year" name="year" onChange={handleChange}/>
                </div>
                

                <div className="addProduct__item">
                    <label>Genre</label>
                    <input type="text" placeholder="genre" name="genre" onChange={handleChange}/>
                </div>
                

                <div className="addProduct__item">
                    <label>Limit</label>
                    <input type="text" placeholder="limit" name="limit" onChange={handleChange}/>
                </div>
                

                <div className="addProduct__item">
                    <label>is Series?</label>
                    <select name="isSeries" id="isSeries" onChange={handleChange}>
                        <option value="false">No</option>
                        <option value="true">Yes</option>
                    </select>
                </div>

                <div className="addProduct__item">
                    <label>Trailer</label>
                    <input type="file" name="trailer" onChange={(e)=>setTrailer(e.target.files[0])}/>
                </div>

                <div className="addProduct__item">
                    <label>Video</label>
                    <input type="file" name="video" onChange={(e)=>setVideo(e.target.files[0])}/>
                </div>
            {uploaded === 5 ? (
                <button className="addProduct__button" onClick={handleSubmit}>Create</button>
                
            ):(
                <button className="addProduct__button" onClick={handleUpload}>Upload</button>
            )}

            </form>
        </div>
    )
}

export default NewProduct
