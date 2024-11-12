'use client';

import { useRef, useState } from 'react';

import classes from './image-picker.module.css';
import Image from 'next/image';

interface ImagePickerProps {
  label: string;
  name: string;
}
export default function ImagePicker({ label, name }: ImagePickerProps) {
  const [pickImage, setPickImage] = useState(null);
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {pickImage ? (
            <Image src={pickImage} alt="The image selected by the user." fill />
          ) : (
            <div className={classes.placeholder}>Pick an image</div>
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
