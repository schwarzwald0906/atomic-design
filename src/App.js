import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/Molucules/SearchInput";
import { UserCard } from "./components/Organism/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";

import "./styles.css";

export default function App() {
  const user = {
    name: "じゃけえ",
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    alt: "プロフィール",
    mail: "aaa@sss.com",
    tel: "000-1111-2222",
    company: {
      name: "あああ会社"
    },
    web: "heeee.com"
  };

  return (
    <BrowserRouter>
      <HeaderOnly>
        <PrimaryButton>テスト</PrimaryButton>
        <SecondaryButton>検索</SecondaryButton>
        <br />
        <SearchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
