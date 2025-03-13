// export default function TabButton(props) {
//   return(
//     <li>
//       <button>{props.label}</button>
//     </li>
//   );
// }

// export default function TabButton({label}) {
//   return(
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

export default function TabButton({children, onSelect}) {

  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}