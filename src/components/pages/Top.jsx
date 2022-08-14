import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();
  const onClickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onClickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>Topページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <br />
      <br />
    </SContainer>
  );
};
const SContainer = styled.div`
  text-align: center;
`;
