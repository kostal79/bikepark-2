import { collection } from "firebase/firestore";
import React, { useState } from "react";
import makeNewBike from "../Api/makeNewBike";
import uploadImage from "../Api/uploadImage";
import { db } from "../config/firebase";

const Rent = () => {
  const [bike, setBike] = useState({
    material: "",
    description: "",
    price: "",
    imageRef: "",
  });

  const [realBike, setRealBike] = useState({
    brend: "",
    model: "",
    size: "",
    price: "",
    material: "",
    imageRef: "",
  });

  const [file, setFile] = useState();

  const materialOnChange = (material) => {
    setBike({ ...bike, material });
  };

  const descriptionOnChange = (description) => {
    setBike({ ...bike, description });
  };

  const priceOnChange = (price) => {
    setBike({ ...bike, price: price });
  };

  const fileHandler = (file) => {
    setFile(file);
  };

  const handleUpload = async () => {
    const collectionRef = collection(db, "bike_types");
    const imageRef = await uploadImage(file);
    await makeNewBike({ ...bike, imageRef }, collectionRef);
    console.log("new bike added");
  };

  const handleRealBikeUpload = async () => {
    const collection = collection(db, "");
  };

  return (
    <div>
      <h2>Add new type</h2>
      <input
        type="text"
        placeholder="material"
        value={realBike.material}
        onChange={(event) => materialOnChange(event.target.value)}
      />
      <br />
      <textarea
        placeholder="description"
        value={bike.description}
        onChange={(event) => descriptionOnChange(event.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="price"
        value={bike.price}
        onChange={(event) => priceOnChange(event.target.value)}
      />
      <br />
      <br />
      <input
        type="file"
        onChange={(event) => fileHandler(event.target.files[0])}
      />
      <button onClick={handleUpload}>add new bike in type list</button>
      <br />
      <br />
      <br />
      <br />
      <h2>Add new bike in collection</h2>
      <input
        type="text"
        placeholder="brend"
        value={realBike.brend}
        onChange={(event) =>
          setRealBike({ ...realBike, brend: event.target.value })
        }
      />
      <br />
      <input
        type="text"
        placeholder="model"
        value={realBike.model}
        onChange={(event) =>
          setRealBike({ ...realBike, model: event.target.value })
        }
      />
      <br />
      <input
        type="number"
        placeholder="size"
        value={realBike.size}
        onChange={(event) =>
          setRealBike({ ...realBike, size: event.target.value })
        }
      />
      <br />
      <input
        type="text"
        placeholder="material"
        value={realBike.material}
        onChange={(event) =>
          setRealBike({ ...realBike, material: event.target.value })
        }
      />
      <br />
      <input
        type="number"
        placeholder="price"
        value={realBike.price}
        onChange={(event) =>
          setRealBike({ ...realBike, price: event.target.value })
        }
      />
      <br />
      <br />
      <input type="file" onChange={(event) => {}} />
      <button onClick={() => {}}>add bike in collection</button>
    </div>
  );
};

export default Rent;
