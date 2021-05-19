import React from 'react'
import FruitsTable from './FruitsTable'
import NewFruits from '../NewFruits/NewFruits'
import './Fruits.css'
const Fruits = (props) => {
    var daftarBuah = [
  { nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
  { nama: "Manggis", hargaTotal: 350000, beratTotal: 10000 },
  { nama: "Nangka", hargaTotal: 90000, beratTotal: 2000 },
  { nama: "Durian", hargaTotal: 400000, beratTotal: 5000 },
  { nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000 },
];

    const [fruits, setFruits] = React.useState(daftarBuah);
    const [isEditing, setIsEditing] = React.useState(false);
    const [editData, setEditData] = React.useState({
      index: "",
      nama: "",
      harga: "",
      berat: "",
    });
  
    const addFruitsHandler = (fruit, index) => {
      setFruits((prevState) => {
        const updatedFruits = [...prevState];
        if (index >= 0) {
          updatedFruits.splice(index, 1, fruit);
        } else {
          updatedFruits.shift(fruit);
        }
        return updatedFruits;
      });
    };
    const addDeleteHandler = (indexData) => {
      setFruits((prevState) => {
        const updateData = prevState.filter((data, index) => index !== indexData);
        return updateData;
      });
    };
    const addEditHandler = (index) => {
      setIsEditing(true);
      setEditData({
        index: index,
        nama: fruits[index].nama,
        harga: fruits[index].hargaTotal,
        berat: fruits[index].beratTotal,
      });
    };
    return (
      <div className='fruits'>
    <FruitsTable
        items={fruits}
        addDelete={addDeleteHandler}
        addEdit={addEditHandler}
      />
      <NewFruits
        addNewFruits={addFruitsHandler}
        statusEdit={isEditing}
        dataEdit={editData}
      />
      </div>
    );
  };
  export default Fruits;
  