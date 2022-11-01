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

  return (
    <div className='m-0 w-full h-auto lg:h-full flex flex-col items-center justify-center m-0 bg-slate-100 relative'>
      {/* <button onClick={() => alertSomething({ outfitColour, userSelection })} className='m-0 fixed'>
        Baray
      </button> */}
      <button className='m-0 fixed top-52' onClick={() => localStorage.clear()}>
        Reset Local
      </button>
      <button className='m-0 fixed top-64' onClick={() => setshowDown(prev => !prev)}>
        Hide it
      </button>
      <div className='m-0 w-full h-full lg:py-12 lg:items-center lg:justify-center lg:flex' style={{ width: "100vw", height: "100vh", margin: "0" }}>
        <div className='m-0 h-full lg:flex lg:flex-row flex flex-col w-full lg:w-11/12 lg:items-center lg:justify-center lg:px-6'>
          <div className='m-0 py-4 lg:hidden items-center justify-center flex font-black text-2xl uppercase'>Fashify</div>
          <div className='m-0 h-auto lg:w-1/6 w-full flex items-center justify-evenly lg:flex-col lg:h-2/6'>
            <div className={`flex items-center justify-center px-8 py-2 rounded-xl font-black text-md hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection.gender == "men" ? " bg-blue-200 border-blue-700 text-blue-700 " : " bg-gray-200 border-gray-700 text-gray-700 "}`} onClick={() => handleGenderChange("men")}>
              Men
            </div>
            <div className={`flex items-center justify-center px-8 py-2 rounded-xl font-black text-md hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection.gender == "women" ? " bg-blue-200 border-blue-700 text-blue-700 " : " bg-gray-200 border-gray-700 text-gray-700 "}`} onClick={() => handleGenderChange("women")}>
              Woman
            </div>
          </div>
          <div className='m-0 h-5/6 p-0 flex flex-row items-center lg:h-5/6 lg:w-5/6 '>
            <div className='m-0 w-1/12 h-full flex flex-col items-center '>
              {outfitType.map((eachObject, index) => {
                let { type, height, toShow } = eachObject;
                return (
                  <div key={Math.random().toString()} className={`flex items-center justify-start w-full ${height} ${!toShow ? " invisible " : ""} my-1 lg:w-1/2`}>
                    {/* {console.log("userSelection[type]?.color is:", userSelection[type]?.color)} */}
                    <input className='m-0 bg-transparent rounded-full w-1/2 h-3 border-black ' type='color' name={type} id={type} value={userSelection[type]?.color} onChange={e => handleColourChange(e)} />
                  </div>
                );
              })}
            </div>
            <div className='m-0 w-full  h-full flex flex-col items-center justify-center border-gray-300'>
              <div className='m-0 bg-blue-30  w-full h-1/6 mt-1 flex items-center justify-center'>{""}.</div>
              <div className='m-0 bg-blue-30  w-full h-2/6 mt-1 flex items-center justify-center'>{show && <RoundNeckTshirt color={userSelection.torso.toString()} />}</div>
              <div className='m-0 bg-blue-30 bg-slate-100 pt-2 z-10 w-full h-3/6 mt-1 flex items-center justify-center'>{show && <Jeans />}</div>
              <div className='m-0 bg-blue-30  w-full h-1/6 mt-1 flex items-center justify-center'>{show && <Sneaker2 />}</div>
            </div>
          </div>
          <div className='m-0 h-1/6 mt-10 z-0 flex items-center overflow-y-auto  lg:hidden lg:w-2/6 lg:grid-cols-2 lg:h-5/6 lg:overflow-y-auto gap-4 px-2 '></div>
          {showDown && (
            <div className='m-0 h-auto pb-2 fixed w-full lg:relative z-20 bottom-0  flex items-center  overflow-y-auto  lg:grid lg:w-2/6 lg:grid-cols-2 lg:h-5/6 lg:overflow-y-auto gap-4 px-2 border-t-2 pt-2 shadow-lg'>
              {Object.keys(genderOutfits[userSelection.gender]).map(eachFashionPart => {
                if (eachFashionPart == "items") return;
                return (
                  <div key={Math.random().toString()} onClick={() => handleClothesSelectionModal(eachFashionPart)} className={`w-auto lg:py-8 lg:my-2 px-12 mx-1 h-3/4 rounded-lg items-center justify-center flex font-black hover:border-0 text-sm lg:w-full lg:m-0 lg:p-0 item lg:h-full whitespace-nowrap hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection[currentSelectTedFashionPart] == eachFashionPart ? " bg-blue-200 border-blue-700 text-blue-700 " : " rounded-xl  border-gray-300 "} flex-col`}>
                    {/* <div key={Math.random().toString()} onClick={() => handleClothesSelectionModal(eachFashionPart)} className='m-0  px-8  h-3/4 items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items rounded-xl border-1 border-gray-300'>
                  {eachFashionPart}
                  <img src={`${eachFashionPart}.png`} alt='' />
                </div> */}
                    <img className='m-0 w-16 h-auto icon ' src={`${eachFashionPart.toString().toLowerCase().split(" ").join("-")}.svg`} alt='' />
                    <div className=' text-gray-600 m-auto'>{eachFashionPart}</div>
                  </div>
                );
              })}
            </div>
          )}
          {showClothTypeSelection && (
            <div className='m-0 flex fixed z-30 bottom-0 left-0 right-0 items-end lg:items-center justify-end h-1/6 p-0 rounded-t-xl rounded-b-none lg:right-0 lg:top-0 lg:ml-auto  lg:bottom-0 lg:w-1/6 lg:h-full lg:rounded-r-xl rounded-xl border-t4 lg:border-l4 border-slate-300 bg-blue-50 shadow-lg shadow-black'>
              <button className='m-0 flex items-center justify-center absolute top-3 right-3 font-black text-black lg:left-3 lg:top-3 lg:justify-start' onClick={() => setShowClothTypeSelection(false)}>
                X
              </button>
              <div className='m-0 h-4/6 flex items-center overflow-x-auto lg:overflow-x-hidden lg:flex-col lg:w-full lg:px-2 lg:overflow-y-auto '>
                {genderOutfits[userSelection.gender][currentSelectTedFashionPart].map(eachFashionPartDetailed => {
                  if (eachFashionPartDetailed == "items") return;
                  return (
                    <div key={Math.random().toString()} onClick={() => handleDetailedClothesSelectionModal(currentSelectTedFashionPart, eachFashionPartDetailed)} className={`w-full lg:py-8 lg:my-2 px-12 mx-1 h-3/4 rounded-lg items-center justify-center flex font-black hover:border-0 text-sm lg:w-full lg:m-0 lg:p-0 item lg:h-full whitespace-nowrap hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection[currentSelectTedFashionPart] == eachFashionPartDetailed ? "  " : " rounded-xl  border-gray-300 "} flex-col`}>
                      <img className='m-0 w-16 h-5/6 icon ' src={`${eachFashionPartDetailed.toString().toLowerCase().split(" ").join("-")}.svg`} alt='' />
                      <div className='m-0 text-gray-600 m-auto flex flex-col items-center justify-center'>
                        <div className='m-0 flex items-center justify-center bg-orange-40'>{eachFashionPartDetailed}</div>
                        <div className='m-0 flex items-center justify-center bg-green-60 text-lg'>{userSelection[currentSelectTedFashionPart] == eachFashionPartDetailed ? "." : ""}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
