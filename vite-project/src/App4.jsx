import React, { memo } from 'react';

function HeaderText(props) {
  return (
    <h1>
      {props.text}
    </h1>
  );
}

export default memo(HeaderText);

/**
 * 이제 컴포넌트가 렌더링되고 '메모이제이션'된다. 다음 렌더링에서 리액트는 프롭값이 변동되지 않으면 메모된 결과를 렌더링합니다. 변동이 있으면 업데이트하고, 변동이 없다면 메모된 그대로 렌더링한다는 의미. 
 * React.memo() 함수에 렌더링 조건을 사용자 정의하는 데 이용할 수 있는 두 번째 argument인 arePropsEqual()도 있기는 한데, 추후 사용할 예정.
 * 
 * 함수 컴포넌트 방식을 사용할 때 얻을 수 있는 이점 중 하나는 동일한 입력값에 대해 반환값이 항상 동일하기 때문에 단위 테스트가 간단하는 점이 있습니다.
 * 
 * 조건부 렌더링
 */