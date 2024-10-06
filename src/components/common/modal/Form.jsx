import { useState } from 'react';
import styles from './Form.module.scss';
import { useNavigate } from 'react-router-dom';
import Close from '../../../assets/icons/Close.png';

function Form({ close }) {
  const navigate = useNavigate();

  const [loginForm, setLoginForm] = useState({
    name: '',
    age: '',
  });

  // 입력 핸들러 함수
  const inputHandler = (id, value) => {
    setLoginForm((prev) => ({
      ...prev,
      [id]: value, // id에 해당하는 값을 업데이트
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(loginForm);
    localStorage.setItem('users', JSON.stringify(loginForm));
    navigate('./mypage');
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <img src={Close} alt="닫기" onClick={close} />
        <h3>로그인</h3>
        <p>
          간단한 정보를 입력하시면
          <br />
          좋은 정보를 추천해드릴게요!
        </p>
        <form>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={(e) => inputHandler('name', e.target.value)}
          />
          <select
            name="age"
            id="age"
            onChange={(e) => inputHandler('age', e.target.value)}
          >
            <option value="">나이를 선택해주세요</option>
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
          </select>
          <button type="button" onClick={submitHandler}>
            계속
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
