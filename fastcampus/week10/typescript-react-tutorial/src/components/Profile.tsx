// 리엑트에서 다른 것들도 함께 불러오기 위해서는 '* as React'로 불러온다.
import * as React from 'react';

// interface 어떤 타입을 불러올지를 미리 정하는녀석
// Props 라는 타입으로 불러올것.
interface Props {
  name: string;
  job: string;
}

// class Profile extends React.Component<Props> {
//   render() {
//     const { name, job } = this.props;
//     return (
//       <div>
//         <h1>프로필</h1>
//         <div>
//           <b>이름: </b>
//           {name}
//         </div>
//         <div>
//           <b>직업: </b>
//           {job}
//         </div>
//       </div>
//     );
//   }
// }

// 리엑트의 함수형 컴포넌트
// const Profile = ({name, job}: Props) => (
//   <div>
//     <h1>프로필</h1>
//     <div>
//       <b>이름: </b>
//       {name}
//     </div>
//     <div>
//       <b>직업: </b>
//       {job}
//     </div>
//   </div>
// );

// :React.SFC<Props> 는 React Stateless Functional Component의 줄임말로써 jsx객체가 반드시 리턴되어야 한다는것을 알림.
const Profile: React.SFC<Props> = ({name, job}: Props) => (
  <div>
    <h1>프로필</h1>
    <div>
      <b>이름: </b>
      {name}
    </div>
    <div>
      <b>직업: </b>
      {job}
    </div>
  </div>
);

export default Profile;
