import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getStorage, uploadBytesResumable, ref, getDownloadURL } from 'firebase/storage';
import { app } from '../firebase';

const Profile = () => {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imageper, setImageper] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formdata, setFormdata] = useState({});
  const { currentUser } = useSelector(state => state.user)
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log('upload is'+progress+'% done');
        setImageper(Math.round(progress));
      },
      (error) => { setImageError(true) },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormdata({ ...formdata, profilePicture: downloadURL })
        })
      }
    );
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-3'>
        <input type='file' ref={fileRef}
          className='hidden'
          accept='image/*'
          onChange={(e) => setImage(e.target.files[0])}
        // onClick={(e) => setImage(e.target.files[0])}
        />
        <img src={currentUser.profilePicture}
          // onClick={() => fileRef.current.click()}
          onClick={() => fileRef.current.click()}
          alt='profile'
          className='h-28 w-28 self-center rounded-full object-cover'
        />
<p className='text-center'>
  {imageError ? (
    <span className='text-red-700'>Error uploading image</span>
  ) : (
    imageper > 0 && imageper < 100 ? (
      <span className=''>{`Uploading image...${imageper} '%'`}</span>
    ) : imageper === 100 ? (
      <span className='text-green-700'>Image Uploaded successfully</span>
    ) : ""
  )}
</p>

 
        <input type='text'
          id='username'
          placeholder='Username'
          defaultValue={currentUser.username}
          className='bg-slate-100 rounded-lg p-3' />
        <input type='email'
          id='email'
          placeholder='Email'
          defaultValue={currentUser.email}
          className='bg-slate-100 rounded-lg p-3' />
        <input type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-100 rounded-lg p-3' />
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
        <div className='flex flex-row justify-between mt-5'>
          <span className='text-red-500 cursor-pointer'>Delete Account</span>
          <span className='text-red-500 cursor-pointer'>Sign Out</span>
        </div>
      </form>
    </div>
  )
}

export default Profile