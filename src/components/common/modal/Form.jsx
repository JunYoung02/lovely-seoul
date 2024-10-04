import styles from './Form.module.scss';
import Close from '../../../assets/icons/Close.png';

function Form() {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <img src={Close} alt="닫기" />
        <h3>로그인</h3>
        <p>
          간단한 정보를 입력하시면
          <br />
          좋은 정보를 추천해드릴게요!
        </p>
        <form>
          <input type="text" placeholder="이름을 입력해주세요." />
          <select name="age" id="age">
            <option value="10">10대</option>
            <option value="20">20대</option>
            <option value="30">30대</option>
            <option value="40">40대</option>
            <option value="50">50대</option>
            <option value="60">60대</option>
          </select>
          <button type="button">계속</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
