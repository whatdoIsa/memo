import React, { useEffect, useState } from "react";
import "./App.css";
import plus from "./plus.png";
import Modal from "./components/Modal";
import ReModal from "./components/ReModal";

const App = () => {
  //함수 컴포넌트는 constructor가 필요하지 않다.
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reModalOpen, setReModalOpen] = useState(false);
  const [memo, setMemos] = useState([]);
  const [memoID, setMemoID] = useState(0);
  const [clickmemo, setClickmemo] = useState({
    title: "",
    author: "",
    content: "",
    index: 0,
  });

  //서버랑 연결시켜서 데이터 불러오기
  useEffect(() => {
    fetch("/memo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      mode: "cors",
    })
      .then((res) => {
        return res.json();
      })
      .then((memo) => {
        setMemos(memo);
        //memoID증가시켜줘야해서 데이터 받아올때 현재 개수 셈
        setMemoID(memo.length);
        console.log("Network success - memo : ", memo);
      })
      .catch((error) => console.log("Network Error : ", error));
  }, []);

  //새 모달창 열기
  const openModal = () => {
    setIsModalOpen(true);
  };

  //새 모달창 닫기
  const closeModal = () => {
    setIsModalOpen(false);
  };

  //기존 모달창 열기
  const reopenModal = (index) => {
    setReModalOpen(true);
    setClickmemo({
      index: index,
      title: memo[index].title,
      author: memo[index].author,
      content: memo[index].content,
    });
  };

  //기존 모달창 닫기
  const recloseModal = () => {
    setReModalOpen(false);
    window.location.reload();
  };

  return (
    <div className="container">
      <div className="App">
        <h1>메모장</h1>
        <br />
        <br />
        <table>
          <tbody>
            <tr className="trList">
              {memo.map((memo, index) => (
                <td
                  className="cell"
                  key={index}
                  onClick={() => reopenModal(index)}
                >
                  <div className="inner">
                    <h2>{memo.title}</h2>
                    <h5>{memo.author}</h5>
                    <br />
                    <br />
                    <h4>{memo.content}</h4>
                    <br />
                  </div>
                </td>
              ))}
              <td className="cell">
                <div className="inner" onClick={openModal}>
                  <img src={plus} className="picture" alt="logo" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <main className="App">
          <Modal isOpen={isModalOpen} close={closeModal} memoID={memoID} />
          <ReModal
            reOpen={reModalOpen}
            reclose={recloseModal}
            data={{ ...clickmemo }} //딥카피
            //onUpdate={handleUpdate}
            //onRemove={handleRemove}
            memoID={memoID}
          />
        </main>
      </div>
    </div>
  );
};

export default App;