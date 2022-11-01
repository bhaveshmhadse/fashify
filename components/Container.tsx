import { useEffect, useState } from "react";
import { Jeans, RoundNeckTshirt, Shoe, Shoe2, Sneaker2, Sneakers } from "./Clothes";
import { getItemFromLocalStorage, setItemtoLocalStorage } from "./utils";

const Container = ({}) => {
  // States
  let [showClothTypeSelection, setShowClothTypeSelection] = useState(false);

  let [userSelection, setuserSelection] = useState({
    gender: "men",
    head: { type: "", color: "white" },
    torso: { type: "", color: "#ffff" },
    pants: { type: "", color: "grey" },
    accessories: { type: "", color: undefined },
    shoes: { type: "", color: "black" },
  });

  let [outfitType, setoutfitsType] = useState([
    { type: "head", height: "h-1/6", toShow: false },
    { type: "torso", height: "h-2/6", toShow: true },
    { type: "pants", height: "h-3/6", toShow: true },
    { type: "shoes", height: "h-1/6", toShow: true },
  ]);

  let [currentSelectTedFashionPart, setcurrentSelectTedFashionPart] = useState("torso");

  let [genderOutfits, setgenderOutfits] = useState({
    men: {
      items: ["Torso", "Pants", "Shoes", "Accessories"],
      torso: ["Round Neck Tshirt", "V Neck Tshirt", "Hoodie", "Fullsleeves Tshirt", "Shirt"],
      pants: ["Jeans", "Cargo", "Chinos", "Tracks"],
      shoes: ["Low Top Sneakers", "High Top Sneakers", "Chelsea", "Sports Shoes"],
    },
    women: {
      items: ["Torso", "Pants", "Shoes", "Accessories"],
      torso: ["Tops", "Saree", "Dress", "Shirts", "Round Neck Tshirts", "V Neck Tshirts", "Fullsleeves Tshirts", "Hoodies"],
      pants: ["Jeans", "Cargo", "Chinos", "Track Pants"],
      shoes: ["Heels", "Sneakers", "Chealsea", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
      accesories: ["Heels", "Sneakers", "Chealsea Boots", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
      accesorsies: ["Heels", "Sneakers", "Chealsea Boots", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
    },
  });

  let [outfitColour, setoutfitColour] = useState({
    head: "#ffff",
    torso: "#ffff",
    pant: "#ffff",
    shoe: "#ffff",
  });

  let [show, setshow] = useState(true);

  // Functions
  const handleClothesSelectionModal = selectTedFashionPart => {
    setShowClothTypeSelection(true);
    setcurrentSelectTedFashionPart(selectTedFashionPart);
  };
  const handleDetailedClothesSelectionModal = (currentSelectTedFashionPart, eachFashionPartDetailed) => {
    setuserSelection(previousSelection => ({ ...previousSelection, [currentSelectTedFashionPart]: eachFashionPartDetailed }));
    setShowClothTypeSelection(false);
  };

  const handleColourChange = e => {
    console.log("userSelection is:", userSelection);

    let { name, value } = e.target;

    setoutfitColour(previousOutfit => ({ ...previousOutfit, [name]: value }));
    setuserSelection(previousSelection => ({ ...previousSelection, [name]: { type: previousSelection[name].type, color: value } }));
    setItemtoLocalStorage("userSelection", { ...userSelection, [name]: { type: userSelection[name].type, color: value } });
    reloadClothes();
  };

  const handleGenderChange = value => {
    setuserSelection(previousSelections => ({ ...previousSelections, gender: value }));
    setItemtoLocalStorage("userSelection", { ...userSelection, gender: value });
  };
  const alertSomething = object => alert(JSON.stringify(object, null, 4));

  const reloadClothes = () => {
    setshow(false);

    setTimeout(() => {
      setshow(true);
    }, 0);
  };

  let [showDown, setshowDown] = useState(true);

  useEffect(() => {
    setuserSelection(previousSelection => ({ ...previousSelection, ...getItemFromLocalStorage("userSelection") }));
    setTimeout(() => {
      // reloadClothes()
      console.log("userSelection is:", userSelection);
    }, 2000);
  }, []);

  return <div className=' w-full h-auto lg:h-full flex flex-col items-center justify-center m-0 bg-slate-100 relative'></div>;
};

export default Container;
