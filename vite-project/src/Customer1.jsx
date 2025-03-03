import { MenuContext } from "./Context";
export default function Customer1() {
  return(
    <MenuContext.Consumer>
      {(price) => <div>1번 고객님은 {price.아메리카노}원을 지불합니다.</div>}
    </MenuContext.Consumer>
  );
}