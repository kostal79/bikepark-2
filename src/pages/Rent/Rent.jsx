import { Timestamp, collection } from "firebase/firestore";
import React, { useEffect, useRef, useState } from "react";
import getAllCollection from "../../api/getAllCollection";
import makeNewBike from "../../api/makeNewBike";
import uploadImage from "../../api/uploadImage";
import Dropdown from "../../components/Dropdown/Dropdown";
import { db } from "../../config/firebase";
import { useSelector } from "react-redux";
import { getUserData } from "../../redux/slices/authSlice";
import { getUserId } from "../../redux/slices/authSlice";
import { makeNewReview } from "../../api/makeNewReview";
import PopupBikeCard from "../../components/CustomSlider/CustomSlider";

const Rent = () => {
  const [typesList, setTypesList] = useState([]);
  const typeRef = useRef("");

  const [bike, setBike] = useState({
    material: "",
    description: "",
    price: "",
    imageRef: "",
  });

  const [realBike, setRealBike] = useState({
    brend: "",
    model: "",
    type: "",
    size: "",
    price: "",
    material: "",
    imageRef: "",
    bookedDates: [],
  });

  useEffect(() => {
    async function getTypesList() {
      const typesCollection = collection(db, "bike_types");
      const collectionList = await getAllCollection(typesCollection);
      const typesList = collectionList.map((item) => (
        <option value={item.material} key={item.id}>
          {item.material}
        </option>
      ));
      setTypesList(typesList);
    }
    getTypesList();
  }, []);

  const [file, setFile] = useState();
  const [imageFile, setImageFile] = useState();

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
    const collectionRef = collection(db, "bikes");
    const imageRef = await uploadImage(imageFile);
    await makeNewBike(
      { ...realBike, imageRef, type: typeRef.current.value },
      collectionRef
    );
    console.log("new real bike added");
  };

  //review
  const userData = useSelector(getUserData);
  const userName = userData.user_name;
  const userId = useSelector(getUserId)
  const [review, setReview] = useState("");

  const addReview = async () => {
    if (review.length > 0) {
      const reviewDoc = {
        user_name: userName,
        user_id: userId,
        text: review,
        is_published: false,
        date: Timestamp.fromDate(new Date()),
      }
      await makeNewReview(reviewDoc);
      setReview("");
      alert("review added");
    } else {
      alert("write smpf")
    }
  }

  return (
    <div>
      <h2>Add new type</h2>
      <input
        type="text"
        placeholder="material"
        value={bike.material}
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
      <label htmlFor="types">Choose a type:</label>
      <br />
      <select id="types" name="types" ref={typeRef}>
        {typesList}
      </select>
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
      <input
        type="file"
        onChange={(event) => setImageFile(event.target.files[0])}
      />
      <button onClick={handleRealBikeUpload}>add bike in collection</button>
      <br />
      <br />
      <br />
      <Dropdown optionsList={[1, 2, 3, 4]} placeholder="placeholder"/>
      <br />
      <br />
      <br />
      <br />
      <br />
      <textarea value={review} onChange={(event) => setReview(event.target.value)}/>
      <button onClick={addReview} >add review</button>
      <PopupBikeCard />
    </div>
  );
};

export default Rent;
