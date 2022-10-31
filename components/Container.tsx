import { useState } from "react";
import { RoundNeckTshirt } from "./Clothes";
import { setItemtoLocalStorage } from "./utils";

const Container = ({}) => {
  // States
  let [showClothTypeSelection, setShowClothTypeSelection] = useState(false);

  let [userSelection, setuserSelection] = useState({
    gender: "men",
    torso: "",
    pants: "",
    accessories: "",
    shoes: "",
  });

  let [currentSelectTedFashionPart, setcurrentSelectTedFashionPart] = useState("torso");

  let [genderOutfits, setgenderOutfits] = useState({
    men: {
      items: ["Torso", "Pants", "Shoes", "Accessories"],
      torso: ["Shirt", "Round Neck Tshirt", "V Neck Tshirt", "Fullsleeves Tshirt", "Hoodie"],
      pants: ["Jeans", "Cargo", "Chino", "Track Pant"],
      shoes: ["Sneakers", "Chealsea Boots", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
    },
    women: {
      items: ["Torso", "Pants", "Shoes", "Accessories"],
      torso: ["Tops", "Saree", "Dress", "Shirts", "Round Neck Tshirts", "V Neck Tshirts", "Fullsleeves Tshirts", "Hoodies"],
      pants: ["Jeans", "Cargo", "Chinos", "Track Pants"],
      shoes: ["Heels", "Sneakers", "Chealsea Boots", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
      accesories: ["Heels", "Sneakers", "Chealsea Boots", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
      accesorsies: ["Heels", "Sneakers", "Chealsea Boots", "Low Top Sneakers", "Mid Top Sneakers", "High Top Sneakers", "Sports Shoes"],
    },
  });

  let [outfitType, setoutfitsType] = useState([
    { type: "head", height: "h-1/6", toShow: false },
    { type: "torso", height: "h-2/6", toShow: true },
    { type: "pant", height: "h-3/6", toShow: true },
    { type: "shoe", height: "h-1/6", toShow: true },
  ]);

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
    let { name, value } = e.target;

    setoutfitColour(previousOutfit => ({ ...previousOutfit, [name]: value }));
    setItemtoLocalStorage("userSelection", { ...outfitColour, [name]: value });
    reloadClothes();
  };

  const alertSomething = object => alert(JSON.stringify(object, null, 4));

  const reloadClothes = () => {
    setshow(false);

    setTimeout(() => {
      setshow(true);
    }, 0);
  };

  return (
    <div className='w-full h-auto lg:h-full flex flex-col items-center justify-center m-0 bg-slate-100 relative'>
      <button onClick={() => alertSomething({ outfitColour, userSelection })} className='fixed'>
        Baray
      </button>
      <div className='w-full h-full lg:py-12 lg:items-center lg:justify-center lg:flex' style={{ width: "100vw", height: "100vh", margin: "0" }}>
        <div className='h-full lg:flex lg:flex-row flex flex-col w-full lg:w-11/12 lg:items-center lg:justify-center lg:px-6'>
          <div className='py-4 lg:hidden items-center justify-center flex font-black text-2xl uppercase'>Fashify</div>
          <div className='h-auto lg:w-1/6 w-full flex items-center justify-evenly lg:flex-col lg:h-2/6'>
            <div className={`flex items-center justify-center px-8 py-2 rounded-xl font-black text-md hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection.gender == "men" ? " bg-blue-200 border-blue-700 text-blue-700 " : " bg-gray-200 border-gray-700 text-gray-700 "}`} onClick={() => setuserSelection(previousSelections => ({ ...previousSelections, gender: "men" }))}>
              Men
            </div>
            <div className={`flex items-center justify-center px-8 py-2 rounded-xl font-black text-md hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection.gender == "women" ? " bg-blue-200 border-blue-700 text-blue-700 " : " bg-gray-200 border-gray-700 text-gray-700 "}`} onClick={() => setuserSelection(previousSelections => ({ ...previousSelections, gender: "women" }))}>
              Woman
            </div>
          </div>
          <div className='h-5/6 p-0 flex flex-row items-center lg:h-5/6 lg:w-5/6 '>
            <div className='w-1/12 h-full flex flex-col items-center '>
              {outfitType.map((eachObject, index) => {
                let { type, height, toShow } = eachObject;
                return (
                  <div key={Math.random().toString()} className={`flex items-center justify-start w-full ${height} ${!toShow ? " invisible " : ""} my-1 lg:w-1/2`}>
                    <input className='bg-transparent rounded-full w-1/2 h-3 ' type='color' name={type} id={type} value={outfitColour[type] || "#ffff"} onChange={handleColourChange} />
                  </div>
                );
              })}
            </div>
            <div className='w-full  h-full flex flex-col items-center justify-center border-gray-300'>
              <div className='bg-blue- w-full h-1/6 mt-1 flex items-center justify-center'>{/* <RoundNeckTshirt color="black"/> */}.</div>
              <div className='bg-blue- w-full h-2/6 mt-1 flex items-center justify-center'>{show && <RoundNeckTshirt color={userSelection.torso} />}</div>
              <div className='bg-blue- w-full h-3/6 mt-1 flex items-center justify-center'>{/* <RoundNeckTshirt color="black"/> */}</div>
              <div className='bg-blue- w-full h-1/6 mt-1 flex items-center justify-center'>{/* <RoundNeckTshirt color="black"/> */}</div>
            </div>
          </div>
          <div className='h-1/6 mt-10 z-0 flex items-center overflow-y-auto  lg:hidden lg:w-2/6 lg:grid-cols-2 lg:h-5/6 lg:overflow-y-auto gap-4 px-2 '></div>
          <div className='h-auto pb-2 fixed w-full lg:relative z-20 bottom-0  flex items-center  overflow-y-auto  lg:grid lg:w-2/6 lg:grid-cols-2 lg:h-5/6 lg:overflow-y-auto gap-4 px-2 '>
            {Object.keys(genderOutfits[userSelection.gender]).map(eachFashionPart => {
              if (eachFashionPart == "items") return;
              return (
                <div key={Math.random().toString()} onClick={() => handleClothesSelectionModal(eachFashionPart)} className=' px-8  h-3/4 items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items rounded-xl border-1 border-gray-300'>
                  {eachFashionPart}
                  <img src={`${eachFashionPart}.png`} alt='' />
                </div>
              );
            })}
          </div>

          {showClothTypeSelection && (
            <div className='flex fixed z-30 bottom-0 left-0 right-0 items-end lg:items-center justify-end h-1/6 p-0 rounded-t-xl lg:right-0 lg:top-0 lg:ml-auto  lg:bottom-0 lg:w-1/6 lg:h-full lg:rounded-r-xl rounded-xl border-t4 lg:border-l4 border-slate-300 bg-blue-50'>
              <button className='flex items-center justify-center absolute top-3 right-3 font-black text-black lg:left-3 lg:top-3 lg:justify-start' onClick={() => setShowClothTypeSelection(false)}>
                X
              </button>
              <div className='h-4/6 flex items-center overflow-x-auto lg:overflow-x-hidden lg:flex-col lg:w-full lg:px-2 lg:overflow-y-auto '>
                {genderOutfits[userSelection.gender][currentSelectTedFashionPart].map(eachFashionPartDetailed => {
                  if (eachFashionPartDetailed == "items") return;
                  return (
                    <div key={Math.random().toString()} onClick={() => handleDetailedClothesSelectionModal(currentSelectTedFashionPart, eachFashionPartDetailed)} className={`w-auto lg:py-8 lg:my-2 px-12 mx-1 h-3/4 rounded-lg items-center justify-center flex font-black hover:border-0 text-sm lg:w-full lg:m-0 lg:p-0 item lg:h-full whitespace-nowrap hover:bg-blue-200 hover:border-blue-700 hover:text-blue-700 duration-300 ${userSelection[currentSelectTedFashionPart] == eachFashionPartDetailed ? " bg-blue-200 border-blue-700 text-blue-700 " : " rounded-xl  border-gray-300 "} flex-col`}>
                      <img className='w-16 h-auto icon ' src={`${eachFashionPartDetailed.toString().toLowerCase().split(" ").join("-")}.png`} alt='' />
                      <div className='text-gray-600 m-auto'>{eachFashionPartDetailed}</div>
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
