import { useState } from "react";
import AuthHeader from "./AuthHeader";
import LoginMenu from "./LoginMenu";
import Section from "../../ui/Section/Section";
import Input from "../../ui/FormComponents/Input";
import LinkButton from "../../ui/Button/LinkButton";
import styles from "./Auth.module.css";
import { LoginInitialValue, ChangeValueType } from "./@types/Auth";

const INITIAL_VALUE: LoginInitialValue = {
  email: "",
  password: "",
};

export default function Register() {
  const [formValue, setFormValue] = useState<LoginInitialValue>(INITIAL_VALUE);

  const handleChangeFormValue: ChangeValueType = (name, value) => {
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <Section>
      <AuthHeader />
      <div className={styles.container}>
        <form>
          <Input
            id="email"
            type="email"
            name="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <Input
            id="password"
            type="password"
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            className={styles.inputBox}
            changeValue={handleChangeFormValue}
          />
          <LinkButton
            type="submit"
            className={styles.loginBtn}
            isActive={false}
            btnName="로그인"
          />
        </form>
        <LoginMenu
          loginMsg="판다마켓이 처음이신가요?"
          btnMsg="회원가입"
          linkPath="/signup"
        />
      </div>
    </Section>
  );
}
