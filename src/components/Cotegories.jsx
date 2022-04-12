import React, { useRef, useState } from "react";

// class Cotegories extends React.Component {
//   state = {
//     activItem: '',
//     test: 1,
//   };

//    onSelectItem =(index)=>{
//      this.setState({
//        activItem:index,
//      })
//    }
//   render() {
//     console.log(this.state);
//     const { onClick, items } = this.props;
//     return (
//       <div className="categories">
//         <ul>
//           <li>Все</li>
//           {items.map((name, index) => (
//             <li
//               className={this.state.activItem === index ? "active" : ""}
//               onClick={() =>this.onSelectItem(index)}
//               key={`${name}_${index}`}
//             > 
//               {name}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }

function Cotegories({ items, onClick }) {
  const state = React.useState(null)
  console.log(state);
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        {items.map((name, index) => (
          <li onClick={() => onClick(name)} key={`${name}_${index}`}>
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cotegories;
