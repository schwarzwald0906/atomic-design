import styled from "styled-components";
import { SearchInput } from "../Molucules/SearchInput";
import { UserCard } from "../Organism/UserCard";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../provider/UserProvider";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけえ-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    alt: "プロフィール",
    mail: "aaa@sss.com",
    tel: "000-1111-2222",
    company: {
      name: "あああ会社"
    },
    web: "heeee.com"
  };
});

export const User = () => {
  const { state } = useLocation();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  console.log(state);
  return (
    <SContainer>
      <h2>ユーザー一覧です</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
