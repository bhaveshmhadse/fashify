import { useState } from "react";

const Container = ({}) => {
  let [showhowClotheTypeSelection, setShowClotheTypeSelection] = useState(false);

  const handleClothesSelectionModal = () => setShowClotheTypeSelection(true);

  let [outfitType, setoutfitsType] = useState([
    { type: "head", height: "h-1/6" },
    { type: "torso", height: "h-2/6" },
    { type: "pant", height: "h-3/6" },
    { type: "shoe", height: "h-1/6" },
  ]);

  let [outfitColour, setoutfitColour] = useState({
    head: "#ffff",
    torso: "#ffff",
    pant: "#ffff",
    shoe: "#ffff",
  });

  return (
    <div className='w-full h-auto lg:h-full flex flex-col items-center justify-center m-0 bg-slate-100 relative'>
      <div className='w-full h-full bg-purple-800 p-6 lg:items-center lg:justify-center lg:flex' style={{ width: "100vw", height: "100vh", margin: "0" }}>
        <div className='h-full bg-orange-500 lg:flex lg:flex-row flex flex-col w-full lg:w-5/6 lg:items-center lg:justify-center lg:px-6'>
          <div className='h-1/6 lg:hidden bg-slate-400 items-center justify-center flex font-black text-2xl uppercase'>Fashify</div>
          <div className='h-1/6 lg:w-1/6 w-full flex bg-cyan-400 items-center justify-evenly lg:flex-col lg:h-2/6'>
            <div className='flex items-center justify-center bg-orange-500 px-8 py-2 rounded-lg font-black'>Men</div>
            <div className='flex items-center justify-center bg-orange-500 px-8 py-2 rounded-lg font-black'>Woman</div>
          </div>
          <div className='h-5/6 flex bg-green-400 flex-row items-center lg:h-5/6 lg:w-5/6'>
            <div className='w-1/12 bg-red-400 h-full flex flex-col items-center'>
              {outfitType.map(eachObject => {
                let {type, height} = eachObject;
                return (
                  <div key={Math.random().toString()} className={`flex items-center justify-start w-full ${height} bg-slate-400 my-1 `}>
                    <input className='bg-transparent rounded-full w-full ' type='color' name={type} id={type} value={outfitColour[type] || "#ffff"} />
                  </div>
                );
              })}
            </div>
            <div className='w-full h-full flex items-center justify-center bg-blue-400'>Man Image</div>
          </div>
          <div className='h-1/6 flex bg-yellow-400 items-center overflow-x-auto lg:grid lg:w-2/6 lg:grid-cols-2 lg:h-5/6 lg:overflow-y-auto gap-4 '>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Items
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Upper
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Jeans
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Shoes
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Shoes
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Shoes
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Shoes
            </div>
            <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full lg:h-full lg:m-0 lg:p-0 items'>
              Shoes
            </div>
          </div>

          {showhowClotheTypeSelection && (
            <div className='flex fixed bottom-0 left-0 right-0 bg-gray-700 items-center justify-center h-2/6 rounded-t-xl lg:right-0 lg:top-0 lg:ml-auto  lg:bottom-0 lg:w-1/6 lg:h-full '>
              <button className='flex items-center justify-center absolute top-5 right-5 font-black text-white lg:left-5 lg:top-5 lg:justify-start' onClick={() => setShowClotheTypeSelection(false)}>
                X
              </button>
              <div className='h-4/6 flex bg-gray-800 items-center overflow-x-auto lg:overflow-x-hidden lg:flex-col lg:w-full lg:px-2 lg:overflow-y-auto lg:h-4/6'>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Items
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Upper
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Jeans
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Shoes
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Shoes
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Shoes
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Shoes
                </div>
                <div onClick={handleClothesSelectionModal} className='w-full px-6 mx-1 bg-red-600  h-3/4 rounded-lg items-center justify-center flex font-black text-xl lg:w-full  lg:m-0 lg:p-0 item lg:h-full'>
                  Shoes
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Container;
