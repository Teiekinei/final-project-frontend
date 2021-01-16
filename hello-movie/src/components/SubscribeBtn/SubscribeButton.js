import styled, { keyframes } from "styled-components";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../../constants/style";
import { useRef, useEffect, useState } from "react";
import { useClickOutside } from "../../hooks.js";
import { getMovieGenres } from "../../WebAPI";

const sheen = keyframes`
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  100% {
    transform: skewY(-45deg) translateX(12.5em);
  }
`;

const SubscribeButton = styled(MySubscribeButton)`
  margin-left: 88%;
  width: auto;
  padding: 13px 25px 14px;
  background-color: #ededea;
  font-size: 18px;
  font-weight: bold;
  color: #5b80ac;
  position: relative;
  border-radius: 10px;
  border-width: 0;
  border-color: initial;
  transition: all 0.2s ease-in-out;
  overflow: hidden;
  cursor: pointer;
  z-index: 999;
  &:before {
    content: "";
    background-color: rgba(255, 255, 255, 0.5);
    height: 100%;
    width: 3em;
    display: block;
    position: absolute;
    top: 0;
    left: -4.5em;
    transform: skewX(-45deg) translateX(0);
    transition: none;
  }
  &:hover {
    animation: ${sheen};
    background-color: #a6d5db;
    color: #fff;
    border-bottom: 4px solid darken(#2194e0, 10%);
    &:before {
      transform: skewX(-45deg) translateX(13.5em);
      transition: all 0.5s ease-in-out;
    }
  }
  &:focus {
    outline: none;
  }
  ${MEDIA_QUERY_LG} {
    margin-left: 78%;
  }
  ${MEDIA_QUERY_MD} {
    margin-left: 74%;
  }
  ${MEDIA_QUERY_SM} {
    color: #545454;
    background-color: #a6d5db;
    position: absolute;
    margin-left: 0%;
    top: 70px;
    left: 0px;
    padding: 9px 11px;
    width: auto;
    height: auto;
    border-radius: 0;
    box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.3);
  }
`;

const HomeNewsletter = styled.div`
  padding: 80px 0;
  background: #5fa9c6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 700px;
  border-radius: 1.5rem;
  font-family: "微軟正黑體";
  & .single {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  & .single h2 {
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-weight: bold;
  }
  & .single .form-control {
    height: 50px;
    background: rgba(255, 255, 255, 0.6);
    border-color: transparent;
    border-radius: 20px 0 0 20px;
  }
  & .single .form-control:focus {
    box-shadow: none;
    border-color: #243c4f;
  }
  & .single .btn {
    min-height: 50px;
    border-radius: 0 20px 20px 0;
    background: #243c4f;
    color: #fff;
  }
  & input[type="checkbox"] {
    display: none;
  }
  & input[type="checkbox"] + label {
    color: #f2f2f2;
    font-size: 20px;
    padding: 1rem;
  }
  & input[type="checkbox"] + label span {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: -2px 10px 0 0;
    vertical-align: middle;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png)
      left top no-repeat;
    cursor: pointer;
  }
  & input[type="checkbox"]:checked + label span {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -19px
      top no-repeat;
  }
  & .checkbox-title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin-top: 1.2rem;
    margin-bottom: 0;
  }
  & .close-btn {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 60px;
    height: 60px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  & .close-btn div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
    transform: rotate(135deg);
  }
  & .close-btn div::before {
    content: "";
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 2px;
    background: inherit;
    top: 0;
    transform: rotate(90deg);
  }
  ${MEDIA_QUERY_LG} {
    top: 60%;
  }
  ${MEDIA_QUERY_MD} {
    width: 90%;
  }
  ${MEDIA_QUERY_SM} {
    height: 65%;
    top: 55%;
    padding: 50px 0;
    .single h2 {
      font-size: 1.5em;
      margin-bottom: 20px;
    }
    .close-btn {
      width: 50px;
      height: 50px;
    }
    .checkbox-title {
      font-size: 1em;
    }
    input[type="checkbox"] + label {
      font-size: 1em;
    }
  }
`;

function MySubscribeForm({
  isSubscribeFormOpen,
  setIsSubscribeFormOpen,
  genreList,
}) {
  function handleCloseForm() {
    setIsSubscribeFormOpen(false);
  }
  function handleOnChecked(e) {
    console.log(e.target.checked);
    console.log(e.target.name);
  }
  const genreListComponents = genreList.map((genre, i) => {
    return (
      <>
        <input
          onChange={handleOnChecked}
          type="checkbox"
          id={genre + i}
          name={genre}
        />
        <label htmlFor={genre + i}>
          <span></span>
          {genre}
        </label>
      </>
    );
  });
  const formRef = useRef();
  useClickOutside(formRef, isSubscribeFormOpen, setIsSubscribeFormOpen);

  return (
    <HomeNewsletter ref={formRef}>
      <div className="container">
        <div className="close-btn" onClick={handleCloseForm}>
          <div></div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="single">
              <h2>訂閱最新電影上映通知</h2>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="輸入你的電子郵件信箱"
                />
                <span className="input-group-btn">
                  <button className="btn btn-theme" type="submit">
                    訂閱
                  </button>
                </span>
              </div>
              <div className="checkbox-group">
                <p className="checkbox-title">勾選你想要訂閱的電影類型</p>
                {genreListComponents}
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeNewsletter>
  );
}

function MySubscribeButton({ className, children }) {
  const [isSubscribeFormOpen, setIsSubscribeFormOpen] = useState(false);
  const [genreList, setGenreList] = useState([]);
  useEffect(() => {
    getMovieGenres().then((res) => setGenreList(res));
  }, [genreList]);

  function handleToggleForm() {
    setIsSubscribeFormOpen(!isSubscribeFormOpen);
  }
  return (
    <>
      <button onClick={handleToggleForm} className={className}>
        {children}
      </button>
      {isSubscribeFormOpen ? (
        <MySubscribeForm
          isSubscribeFormOpen={isSubscribeFormOpen}
          setIsSubscribeFormOpen={setIsSubscribeFormOpen}
          genreList={genreList}
        />
      ) : null}
    </>
  );
}
export default SubscribeButton;
